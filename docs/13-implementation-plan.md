# 13 · Implementation plan

> **Hand-off ready.** Read `01`, `02`, `11`, `12` first. Phase 0 (Wave 2 landing + crypto checkout +
> submit form) is COMPLETE. Phases 1–6 are Wave 3 build work.
>
> **Repo:** https://github.com/prin7r-projects/no-code-vertical-tools
> **Live:** https://no-code-vertical-tools.prin7r.com (catalog live, app stubbed)
> **Deploy:** storage-contabo `/opt/prin7r-deploys/no-code-vertical-tools`
> **Secrets:** NOWPAYMENTS_API_KEY, NOWPAYMENTS_IPN_SECRET, POSTMARK_SERVER_TOKEN, TURNSTILE_SECRET,
> SLACK_WEBHOOK_URL, DATABASE_URL, B2_KEY_ID, B2_APP_KEY.
> **Tone constraint:** lowercase, blue-collar, dark canvas (#0C0D0E linear-ref), no decorative
> motion. See `01-brand-identity.md` §Visual.

## Phase 0 — Wave 2 catalog + checkout + submit (DONE)

- **Goal.** Public catalog + crypto checkout + builder submission form.
- **DoD.** ✅ HTTP 200, NOWPayments invoice round-trip, captcha-gated submit form, Postmark
  receipts, screenshots in `/docs/screenshots/`.

## Phase 1 — Wasp / Open-SaaS scaffold + roles

- **Goal.** Stand up `apps/app` with magic-link auth and three roles (buyer, builder, operator).
- **Tasks.**
  1. Fork `wasp-lang/open-saas`, lift `template/app` to `apps/app`. Strip Stripe, keep auth + email.
  2. Add `Role` enum + `users.role` field. Operator role granted via SQL.
  3. Compose: app on :3100; Traefik label.
  4. Smoke-test all three roles on a clean DB.
- **Deps.** Phase 0; Postmark live.
- **Effort.** 100 tool-uses, 5h.
- **DoD.**
  - Magic-link login completes in incognito.
  - Operator role gates `/operator/*` routes.
  - Each role sees its own `/dashboard`.
- **Hand-off.** Reuse Postmark templates from landing's NOWPayments receipt; the styling already
  matches dark canvas + monogrammed footer.

## Phase 2 — Subscription billing on NOWPayments + install-link minter

- **Goal.** Monthly USDC/USDT subscription via NOWPayments recurring (or rebill cron) + install
  link emailed on `payment_status=finished`.
- **Tasks.**
  1. NOWPayments doesn't have native recurring; implement a 30-day rebill cron that creates a new
     invoice and emails the buyer 7d before expiry with a "renew now" link.
  2. On IPN `finished`, increment `subscriptions.ends_at` by 30 days.
  3. On `subscriptions.status = active && payment_received`, mint install link by composing the
     tool's playbook URL + a short signed buyer-token (HMAC + 7d) so the playbook page knows who
     it's for.
  4. Email the install link via Postmark.
- **Deps.** Phase 1.
- **Effort.** 130 tool-uses, 6h.
- **DoD.**
  - Pay 1 USDC test invoice → install email lands within 60s.
  - Renewal cron tested (compress to seconds in test env): expiring sub at T-7d gets a renewal
    invoice email.
  - Cancellation halts future renewals.
- **Hand-off.** NOWPayments rebills are NOT subscriptions — we re-mint invoices. Track
  `subscriptions.next_renewal_at` and process at-most-once via SELECT FOR UPDATE.

## Phase 3 — Curator queue + 8-criterion review checklist

- **Goal.** Operator can approve / request changes / reject submissions with a structured checklist.
- **Tasks.**
  1. `/operator/queue` lists submissions, oldest first.
  2. Submission detail page renders the 8-criterion checklist:
     install_under_2h · one_job_only · refund_policy_set · screenshots_>=4 · pricing_match · trade_assigned · install_link_works · builder_profile_filled.
  3. `POST /operator/submissions/:id/approve` requires all 8 criteria green.
  4. `POST /operator/submissions/:id/changes_requested` sends the builder a Postmark email with the
     unmet criteria + notes.
  5. Promotion to live tool: creates `tools.sku`, sets `status=listed`, listed_at = now.
- **Deps.** Phase 1.
- **Effort.** 100 tool-uses, 5h.
- **DoD.**
  - Daniyar scenario B end-to-end: submit → curator review → revise → approve → tool live.
  - Approval blocked when any criterion is red.
  - Email round-trip on changes_requested.
- **Hand-off.** Use the `Submissions.checklist` JSONB column as the source of truth for the UI;
  derive list from a fixed schema in `lib/checklist.ts`.

## Phase 4 — Builder dashboard + monthly rev-share payout

- **Goal.** Builders see installs/MRR/refunds; monthly cron sends 70% via NOWPayments mass-payout.
- **Tasks.**
  1. `/builders/me` shows: tools, active subs, MRR, refunds, next payout amount.
  2. `worker/payout` cron `0 0 1 * *` runs the previous-month settlement.
  3. Calls NOWPayments mass-payout with `payout_currency` per builder.
  4. Sends each builder a payout email with the breakdown CSV.
  5. Audit log every payout.
- **Deps.** Phase 2 + Phase 3.
- **Effort.** 120 tool-uses, 6h.
- **DoD.**
  - Scenario F end-to-end: 3 builders, 50 subs, payout completes in <30s.
  - Reconciliation report sums to the accounting ledger (penny-precise).
- **Hand-off.** NOWPayments mass-payout requires KYC on the operator account; verify before going
  live. Payouts are USDT TRC-20 by default; let builders choose USDC/USDT.

## Phase 5 — Buyer self-serve + cancel + 14-day refund

- **Goal.** Buyers manage their subscriptions without emailing support.
- **Tasks.**
  1. `/me/subscriptions` lists all active + cancelled subs with cancel button.
  2. Cancel flips `status = cancelled`, keeps access until `ends_at`.
  3. Refund: within 14 days of `started_at`, button issues a NOWPayments mass-payout refund.
  4. Confirmation emails.
- **Deps.** Phase 2.
- **Effort.** 80 tool-uses, 4h.
- **DoD.**
  - Scenario D end-to-end: cancel → access until period end → no rebill.
  - Scenario E end-to-end: refund within 14d → USDC returned.

## Phase 6 — API-break monitoring + deprecation flow

- **Goal.** When a no-code platform breaks an API used by a Toolshelf tool, the system catches it
  fast and deprecates gracefully.
- **Tasks.**
  1. `worker/deprecate` runs daily synthetic install for each `status=listed` tool — uses the
     install link, posts a sample input, expects a known output.
  2. On 3 consecutive failures: status → `unlisted`, builder + curator pinged on Slack.
  3. UI banner on tool detail page: "this tool is undergoing maintenance; existing subscribers
     unaffected for 21 days."
  4. After fix, `status=listed` resumes.
- **Deps.** Phase 1.
- **Effort.** 100 tool-uses, 5h.
- **DoD.**
  - Scenario C end-to-end with a synthetic API break.
  - Slack notification fires within 24h.
  - Existing subscribers unaffected.

## Cross-cutting concerns

- **Accessibility:** WCAG AA on `/`, all checklist tickboxes keyboard-navigable. Phase 0 + 3.
- **i18n:** EN-only Wave 2/3; ES + DE in Wave 4 (deferred, mark as TODO).
- **Mobile:** catalog responsive from Phase 0; operator queue mobile-usable from Phase 3.
- **Telemetry:** structured logs Phase 1; metrics Phase 4; alerts Phase 6.

## Risk register

| Risk | Owner | Mitigation |
|---|---|---|
| NOWPayments mass-payout KYC delay | Ops | Start KYC week 0; manual USDT send as fallback for first month. |
| Builder submits a tool with hidden second job | Curator | 8-criterion checklist explicitly checks one_job_only. |
| Quality drift after 50+ tools | Curator | Quarterly catalog audit; deprecate any tool with >20% refund rate. |
| Bubble / Webflow API breaks at scale | Ops | API-break monitor (Phase 6) catches within 24h. |
| Email deliverability | Ops | Postmark + custom domain (toolshelf.prin7r.com); SPF/DKIM/DMARC enforced. |

## Resume instructions

1. `git clone https://github.com/prin7r-projects/no-code-vertical-tools && cd no-code-vertical-tools`
2. Read `01`, `02`, `11`, `12`.
3. Pick the next phase whose DoD is unmet. Implement, push per task, update DoD.
