# 09 — Go-to-Market: 90-Day Plan

## North star (90 days)

- **8 SKUs live in catalog** (achieved in Wave 2 build)
- **40 single-tool paid installs** by day 90
- **$1,560 single-tool MRR** by day 90
- **3 published builder tools** by day 90
- **2 vertical playbooks** distributed
- **<6% gross monthly churn** in single-tool tier

These numbers are deliberate floors; if we hit double, we accelerate Wave 3 by a quarter.

## Weekly milestones

### Week 1 (May 8 - May 14)
- ☑ Wave 2 landing live at `https://no-code-vertical-tools.prin7r.com`
- ☑ Catalog page populated with 8 SKUs (7 live, 1 draft)
- ☑ NOWPayments hosted invoice path produces a real unpaid invoice end-to-end
- ☑ DESIGN.md committed with all 15 sections; desktop + mobile screenshots committed
- Notion opportunity moved to **Stage: Qualified**, opportunity type confirmed
- 6 FB-group moderators identified (HVAC, dental, restaurant, salon, agency, ecom); moderator outreach sent

### Week 2 (May 15 - May 21)
- 4 of 6 moderators say yes to a free install in exchange for honest screenshot
- 4 install calls completed; first artifacts (PDFs / SMSes / Slack alerts) produced
- First Indie Hackers launch post: TS-HVAC-002 ships
- First Reddit answer-author thread in `/r/HVAC` reaches 12+ upvotes
- First reply on a `builders@toolshelf.cash` application; reviewer assigns a brief

### Week 3 (May 22 - May 28)
- 2 moderator screenshots posted in their FB groups; 4 buyer-side leads come from those screenshots
- 1 buyer pays via NOWPayments (single-tool tier, $39); install call scheduled
- TS-DENT-004 launch post on Indie Hackers + AGD newsletter sponsored slot ($1,800) sent
- First builder applicant ships their template draft; review starts

### Week 4 (May 29 - Jun 4)
- First buyer-side install completes; the buyer reports their first signed quote PDF
- 3 single-tool paid installs cumulative
- Vertical playbook v0.1 for HVAC drafts (operator + 1 hire share the writing)
- Cumulative MRR: $117

### Week 5-8 (Jun 5 - Jul 2)
- 12 single-tool installs cumulative; MRR $468
- 1 builder tool published (TS-DENT-009 — claim resubmitter)
- HVAC playbook v1.0 published; 200 downloads in week 1, 12 of those convert to single-tool installs
- 2 sponsored newsletter slots run (Modern Restaurant Management, ACCA HVAC News)
- First refund processed (1 of 12 — fits the <10% target floor)

### Week 9-12 (Jul 3 - Jul 30)
- 28 single-tool installs cumulative; MRR $1,092
- 2 builder tools published cumulative
- Bundle tier first conversion (a HVAC owner-operator who installed 2 single tools upgrades to bundle)
- Dental playbook v0.5 drafts
- One unpaid public invoice incident (a buyer's wallet glitched); the IPN flow handled it correctly

### Week 13 (Jul 31 - Aug 6)
- 40 single-tool installs target; MRR $1,560 target
- 3 builder tools published target
- 2 playbooks published target
- Q1 refund-rate transparency post published (~6%)
- Wave 3 scope locked: in-app install wizard + builder portal

## Launch sequence — week-1 detail (Wave 2 build day)

This is the literal sequence of actions on the day the landing ships.

1. **t=0** (build day) — `git push origin main`; `gh repo` is public.
2. **t+5min** — `ssh storage-contabo`, `git clone` into `/opt/prin7r-deploys/no-code-vertical-tools`, copy the NOWPayments live keys from `/opt/prin7r-deploys/chatbot-agency/.env`, populate the local `.env`, `docker compose build && docker compose up -d`.
3. **t+10min** — `curl -sI https://no-code-vertical-tools.prin7r.com` returns HTTP/2 200 with a valid Let's Encrypt cert.
4. **t+15min** — Hit `/api/checkout/nowpayments` end-to-end (sandbox or live); confirm an unpaid invoice is generated (record the invoice id in the wave2 report).
5. **t+30min** — Capture desktop + mobile screenshots from the deployed URL via `node /tmp/prin7r-screenshots/capture.mjs https://no-code-vertical-tools.prin7r.com`. Commit + push the screenshots to `docs/screenshots/`.
6. **t+1h** — Update the Notion opportunity: Source URL → repo URL, Status Notes appended, Stage → Qualified, Opportunity Type confirmed Subscription Product (or Marketplace/Arbitrage — see strategy notes).
7. **t+1h 15min** — Write `wave2-reports/no-code-vertical-tools.md` with the full v2 report sections + the live invoice id from step 4.
8. **t+1h 30min** — Post a soft-launch ping in the Charlotte HVAC FB group's moderator DM ("Toolshelf is live at ts-hvac-002, want a free install?"); same for dental, restaurant, salon, agency, ecom moderators.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| NOWPayments key hits a regional restriction we didn't expect | Plisio backup configured but not surfaced on landing; switch CTA to Plisio in 30 minutes if needed |
| Catalog ranks for "no-code platform" instead of "vertical no-code tools" — wrong audience visits | Tool-specific routes (Wave 3) + per-vertical playbook PDFs override the meta-positioning |
| First 4 installs are all from the same FB group and we look like an HVAC company | Force 1-of-each-vertical in week 1 (use the dental moderator slot first if HVAC fills up) |
| A builder ships a low-quality template that hurts the catalog | Brand reviewer signs off in 1 round; if not approved, the template doesn't list — no fallback |
| Buyers churn at >12% in month 1 | Diagnose: install-call quality, tool fit, tuning-note utility. Pause new installs, fix the one tool with the highest churn, resume |

## Wave 3 readiness gating

Before kicking off Wave 3 (apps/app build), we need:
- 30+ paid installs (single-tool)
- 4+ published builder tools
- <8% gross monthly churn
- 1 vertical with >=10 installs (proof of vertical fit)
- 0 critical security incidents on the IPN handler (Wave 2 handler is stub-only; Wave 3 needs DB writes)
