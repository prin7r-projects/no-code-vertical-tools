# 07 — Sales Strategy

## Motion

**Primary motion: PLG with a manual install hand-off.**

The buyer self-serves through the catalog → pricing → NOWPayments hosted invoice. When they pay, the install step is a 20-minute scheduled call with a TradeToolset operator (or a verified builder), not a self-serve wizard — until Wave 3 when the install wizard ships.

This hybrid is deliberate: a $39/mo product can't carry a sales-team-led motion, but the install step has *just enough complexity* (porting a Bubble template to the buyer's domain, importing 60 days of CSV data, branding the PDF) that a 20-minute install call beats any wizard we could ship in Wave 2.

**Secondary motion (builder side): broker / publisher.**

We don't sell the builder seat — we recruit the builder. Application → review → build → list. The builder's incentive is the 70/30 rev-share, not a one-time fee.

## Pricing tiers

### Tier 1 — Single tool — $39 / mo

- Includes 1 TradeToolset tool of the buyer's choice.
- Branded delivery on the buyer's domain.
- Email install support (24h response, weekdays).
- Monthly one-page tuning note.
- Stablecoin or card-on-ramp checkout.
- 30-day full refund.

**Target buyer**: P1 (Patricia) — owner-operator who knows the one painful workflow.

**Margin**: At ~$5-9/mo all-in cost (no-code platform fee + Twilio + SMS + a slice of operator time + payment processing), this clears 75-85% gross margin. Volume is the lever.

### Tier 2 — Vertical bundle — $129 / mo

- Includes any 5 tools from a single vertical.
- 30-min onboarding call.
- 1 tuning hour per month.
- Vertical playbook PDF (40-60 pages).
- Slack channel with the cohort of vertical buyers.
- 30-day refund.

**Target buyer**: P1 buyers who installed the single-tool tier and renewed for >=2 months (cross-sell), or P1b (Yuki, practice manager) who already runs the workflow for the practice.

**Margin**: Lower than single-tool (40-55%) because the cohort Slack and the playbook take operator time, but the LTV multiple offsets — a bundle buyer churns at 50% the rate of a single-tool buyer.

### Tier 3 — Builder publish — $0 + 30% rev-share

- Free to list.
- 70% of every install fee, paid monthly.
- We do billing, support escalation, distribution.
- No exclusivity.

**Target buyer**: P2 (Daniyar) — vertical-specialist no-code builder.

**Unit econ**: a builder's tool that does $10k MRR is a $3k/mo expense to TradeToolset in rev-share — but it's pure margin distribution; our cost is fixed (catalog page + payment rail + support escalation triage).

---

## Funnel + conversion targets

| Stage | Wave 2 month 1 target | Wave 2 month 6 target |
|---|---|---|
| Catalog visitors / month | 1,200 | 8,000 |
| Visitor → tool-card click-through | 18% | 25% |
| Tool-card → pricing | 38% | 45% |
| Pricing → checkout start | 22% | 30% |
| Checkout start → paid invoice | 65% | 75% |
| **Single-tool installs / month** | **18** | **160** |
| Single-tool MRR | $702 | $6,240 |
| Bundle conversion (existing single-tool customers) | 5% / mo | 9% / mo |
| Bundle MRR | $0 (M1) | $1,548 |
| Builder applications / month | 4 | 12 |
| Builders shipping / month | 1 | 4 |

Wave 2 month-6 MRR target: ~$7,800 = $93,600 ARR. This is intentionally modest; the goal of Wave 2 is to validate the catalog motion, not to optimize for MRR.

---

## Objection handling

### "Why $39 — I can build this myself in Bubble for $32/mo"

> You can. The $39 buys you the install Tuesday morning, the branded PDF on your domain, the monthly tuning note, and the refund if it doesn't fit. Bubble + the plugins + the Twilio + your weekend is more than $39. If you want the no-code source files and you're done, cancel after 30 days and you keep them.

### "Why crypto first — I just have a card"

> NOWPayments routes a card-to-stablecoin on-ramp at the same checkout. Pick "card" on the invoice page. We default to USDT/USDC because it costs us less per transaction (no $39 + 30¢ Stripe drag), and we pass the saving on. The card path works.

### "What if TradeToolset shuts down?"

> You keep the no-code project files (Bubble, Webflow, Airtable, Zapier). Customer billing stops; you can move it to your own Stripe over a weekend. Your data is yours. We don't hold it hostage. (FAQ Q8 makes this contractual.)

### "I want a custom tool, not what's on the shelf"

> If your workflow is 80% one of the SKUs on the shelf, we can ship a tweaked variant in 7-10 days for the same $39/mo (we eat the customization cost in exchange for the spec being a ~5% pivot off an existing SKU). If your workflow is fully custom, we'll point you at a no-code agency we trust — that's not us.

### "How do you handle data privacy / GDPR / HIPAA?"

> Tool-by-tool. The dental no-show predictor is HIPAA-aware; data lives in the buyer's own Twilio + Airtable accounts under their BAA. We don't centrally store PHI. The HVAC quote generator stores quote PDFs in the buyer's own Google Drive. The install call covers the data path explicitly.

### "Who's your founder / what's your background?"

> TradeToolset is a Wave 2 build under the Prin7r portfolio (a portfolio of operator-built micro-products). The catalog is curated by trade specialists, not by generalists. We're not raising a round; we're cash-flow first.

---

## Discount and concession policy

- **No annual prepay discount.** $39 × 12 = $468; we do not offer "$420/year, save $48." The monthly cadence is structurally part of the trust posture (cancel any time).
- **No free month.** The 30-day refund window is the trial.
- **No "founder discount."** We do not give 50%-off to "early customers." It poisons the pricing later.
- **One concession we make**: vertical bundle for buyers who installed 2+ single tools — we'll auto-bundle them at $129 instead of $156.

---

## Pre-Wave-3 milestones gating sales-led motion

We will not hire a salesperson until:
- $25k MRR (~640 single-tool customers or equivalent bundle mix)
- Builder catalog reaches 16 SKUs across 6 verticals
- Install-call self-serve wizard ships (Wave 3)
- One vertical has >=20 paid installs (proof of repeatability)

Until then, all sales motion is operator-led with one part-time helper for install calls.
