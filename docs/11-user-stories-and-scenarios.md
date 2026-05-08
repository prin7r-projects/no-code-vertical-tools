# 11 · User stories and scenarios

> Toolshelf is a catalog of vertical-specific no-code tools. Each tool fixes one job in one trade.
> This doc maps the buying flow, the install flow, the builder revenue-share flow, and what we
> never build.

## 1. Personas summary

- **Patricia, 47, HVAC owner-operator in Charlotte NC.** Wants signed quotes within 24h. Bought
  Toolshelf because two agency demos quoted $11k for a "platform" she didn't need. Found it via a
  Facebook trade group. Pays in USDC because her bookkeeper accepts it. — see
  `05-audience-profile.md` §Patricia.
- **Daniyar, 34, freelance no-code builder in Almaty.** Wants $1–3k/mo passive from his dental-clinic
  template work. Submits tools to the catalog under the 70/30 rev-share. — see `05-audience-profile.md`
  §Daniyar.
- **Toolshelf curator (operator).** Reviews builder submissions, runs the install-checklist test
  on each tool (must install in <2h, must do exactly one job), publishes or rejects with notes.

## 2. Primary user stories (12)

1. **As Patricia**, I want to filter the catalog by trade (HVAC, dental, restaurant, salon, agency,
   ecom, SaaS-ops, roofing), so that I only see tools for my line of work.
2. **As Patricia**, I want each tool tile to show price ($39/mo flat), install time ("2h"), and
   the one job it does, so that I can decide in 30 seconds.
3. **As Patricia**, I want to pay in USDC without giving credit-card details, so that my bookkeeper
   has the receipt and the operator has my email.
4. **As Patricia**, I want a step-by-step install playbook with screenshots, so that I can install
   the tool myself in an afternoon.
5. **As Patricia**, I want a refund window of 14 days, no questions asked, so that buying a $39
   tool feels low-risk.
6. **As Daniyar**, I want a "submit a tool" form that asks for trade + one-job + install link +
   pricing assumption, so that I can ship a candidate without a sales call.
7. **As Daniyar**, I want a 70/30 revenue split paid in USDT every month, so that the rail matches
   how I already get paid for client work.
8. **As Daniyar**, I want to see how my tool is performing (installs/month, refunds, MRR), so that
   I can iterate on what's selling.
9. **As Toolshelf curator**, I want to see new submissions in a queue ordered by submission age,
   so that I can give every builder a yes/no within 7 days.
10. **As Toolshelf curator**, I want a checklist of the 8 install-quality criteria attached to each
    submission, so that approval is mechanical, not vibes-based.
11. **As Toolshelf curator**, I want a way to deprecate a tool (mark unlisted, keep paying current
    subscribers) when the underlying no-code platform changes API, so that customers don't get
    surprised.
12. **As Patricia**, I want to upgrade or cancel my subscription from a single page, so that I don't
    have to email support to stop paying $39.

## 3. Main scenarios (happy paths)

### Scenario A — Patricia buys TS-HVAC-002 (the quote-PDF tool)

1. **Trigger.** Facebook post in HVAC owner group: "Toolshelf TS-HVAC-002 cut my quote turnaround
   from 3 days to 4 hours."
2. **Steps.**
   1. Lands on `/`. Filters by HVAC. Sees 3 tools.
   2. Clicks TS-HVAC-002. Reads "the one job: take field walk-photos + voice memo, return a 1-page
      branded PDF the homeowner signs."
   3. Clicks "Install for $39/mo." Crypto checkout opens via NOWPayments.
   4. Pays 39 USDC on TRC-20.
   5. Receives email with install playbook (Bubble app duplicate link + 6 screenshots).
   6. Spends 90 minutes setting up: connects her Twilio number, uploads logo, customizes 3 fields.
   7. Sends a test job-walk SMS, receives a PDF in 4 minutes.
3. **Success criteria.** Tool installed within 2h of payment. First real PDF sent within 24h.
4. **Frontend.** `/` (filter), tool detail page, NOWPayments checkout, install playbook page.
5. **Backend.** `POST /api/checkout/nowpayments`, IPN handler, install-link minting, Postmark.

### Scenario B — Daniyar submits TS-DENT-005 (intake-form scrubber for dental clinics)

1. **Trigger.** Daniyar's last clinic project closed; he packages the Bubble app as a template.
2. **Steps.**
   1. Visits `/builders`. Reads the rev-share terms (70/30, $39/mo flat list price, payouts monthly).
   2. Submits the form: trade = dental, one-job = "scrub PHI-flagged words from intake form before
      it hits the schedule app," install link = duplicate-this-Bubble-app URL, screenshots = 4 PNGs.
   3. Curator queue picks it up next day.
   4. Curator runs the 8-criterion checklist; finds 1 yellow ("install playbook missing screenshots
      for step 4"); requests change.
   5. Daniyar updates within 24h. Curator approves. Tool listed as TS-DENT-005.
   6. Two months later, Daniyar's dashboard shows 18 active subscribers, $491 to be paid.
3. **Success criteria.** Tool live within 7 days of acceptable submission; first payout in
   the next monthly cycle.
4. **Frontend.** `/builders`, submit form, builder dashboard (Wave 3), curator queue (Wave 3).
5. **Backend.** Submission DB, curator review API, payout job (NOWPayments mass-payout API).

### Scenario C — Curator deprecates TS-RESTO-001 after API break

1. **Trigger.** Toast (the restaurant POS) deprecates the API the tool was wired into.
2. **Steps.**
   1. Curator gets the deprecation email, files a ticket in the queue.
   2. Marks TS-RESTO-001 `unlisted` in the catalog.
   3. Existing subscribers see a banner: "this tool depends on Toast v3; the v4 migration ships
      in 21 days; your subscription continues but no new sign-ups."
   4. Builder is notified to ship a v4 update.
   5. After v4 lands, tool re-listed.
3. **Success criteria.** No mass-cancel; existing customers unaffected for 21 days.

### Scenario D — Patricia cancels after one month

1. **Trigger.** Patricia's slow season starts; she pauses the tool.
2. **Steps.** Clicks "manage subscription" on a footer link. Hits "cancel." Keeps access through
   end of paid period. No refund (past 14-day window).
3. **Success criteria.** Patricia leaves with a positive impression; recurring billing stops.

### Scenario E — Refund within 14 days

1. **Trigger.** Patricia bought TS-HVAC-002 but realized she needs TS-HVAC-001 (different one-job).
2. **Steps.** Within 14 days, requests refund via support email. Operator runs `refund` tool.
   USDC refund issued via NOWPayments. Patricia buys -001 instead.
3. **Success criteria.** Refund in <5 business days; net-promoter intact.

### Scenario F — Builder payout cycle

1. **Trigger.** Cron `0 0 1 * *` (1st of month).
2. **Steps.** System tallies each builder's MRR × 0.7 over the prior month. Calls NOWPayments
   mass-payout. Sends each builder a payout email with the breakdown.
3. **Success criteria.** All payouts in <24h; reconciliation report matches accounting ledger.

## 4. Edge case scenarios

### Edge A — A buyer pays the wrong currency (BTC instead of USDC)

NOWPayments still credits at FX rate. Webhook records the actually-paid currency; the order is
honored. A note in the email: "we received 0.0014 BTC = $39.12 — we credited you to $39 plan."

### Edge B — Builder submits a tool that does two jobs

Curator rejects with notes: "Your submission does X and Y. Please split into two listings or
strip Y." Tool listed only after split.

### Edge C — Underlying no-code platform raises its price

If Bubble raises its hosting cost beyond the $39/mo margin, builder + curator decide: raise list
price, or migrate to a cheaper substrate. Existing subscribers grandfathered for 90 days.

### Edge D — Patricia's install fails

After 30 minutes, the install playbook offers a "screenshare with a curator" link (paid: $99 one
time, refunded if it's a tool defect). 80% of failures are credential issues, not the tool.

### Edge E — Two builders submit the same tool concept

Curator sees the dedupe in the queue, asks both to differentiate or picks the one with better
install playbook. The other builder gets feedback within 7 days.

### Edge F — Catalog gets bombed with low-quality submissions

Submission form requires a builder profile with prior work links. Curator has the right to
auto-reject if profile is empty.

## 5. Anti-scenarios

1. **No "platform mode."** Toolshelf is not a low-code builder; we do not let customers compose
   their own tool. Every tool is a finished product.
2. **No DIY support.** "Configure your own integration" is out of scope. We name the integration
   in the tool's one-job statement; if it doesn't fit, the buyer should pick a different tool.
3. **No tier-laddering.** Every tool is $39/mo flat. We do not have a "pro" or "agency" tier.
4. **No bundles or multi-tool discounts.** The unit is one tool. Bundling re-introduces the
   "platform" problem.
5. **No referral program (Wave 2).** Wave 4 candidate; do not add an affiliate engine to the
   catalog now — it warps quality signal.
