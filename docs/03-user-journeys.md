# 03 — User Journeys

Three journeys, each with a discovery → first-value → recurring-use arc. The persona names (Patricia, Yuki, Daniyar) are reused from `docs/05-audience-profile.md`.

---

## Journey 1 — Patricia (HVAC owner) installs a quote generator

**Discovery (T-7d).** Patricia sees a screenshot in a Charlotte HVAC contractors Facebook group of someone's branded quote PDF, with a comment "TradeToolset, $39, took an afternoon." She clicks the link in the comment, lands on `no-code-vertical-tools.prin7r.com`.

**Landing (T-3min).** The hero shows a 4-up tool catalog. The HVAC card (TT-HVAC-002) is the first one. She reads the one-line promise, sees `$39 / mo`, sees a tiny preview of a branded PDF, clicks `install >` on the card.

**Pricing (T-2min).** She lands on the pricing section, picks Single tool, clicks `pay > Pay $39 · install one tool`. NOWPayments hosted page opens; she pays with her USDC wallet (her son set it up last year). The redirect lands her back on TradeToolset with `?status=paid`.

**First value (T-3h).** Within 30 minutes she gets an email from `orders@tradetoolset.com` with a calendar link to a 20-minute install call. She picks the next morning. On the call, an installer ports the Bubble template to her domain (`quote.bryantheating.com`), imports her last 60 days of jobs as a CSV for pricing, sets up her logo on the PDF, sends her a magic-link to the admin URL. She tests it on her own iPhone — fills the form, gets a PDF emailed in 47 seconds.

**Recurring use (week 1-12).** She links the form on her main site's nav. On day 12 she gets the first signed quote PDF from a homeowner — $7,600 install, signed at 9:42 PM the same day she walked the property. She forwards it to the Charlotte HVAC FB group with the screenshot of the PDF. (Loop closed.) On day 30 she gets the first monthly tuning note: "85 sent, 11 signed (12.9%); the form drops at the ductwork question — try cutting the ductwork age dropdown to 3 options."

**Friction points she might hit**:
- Wallet UX on first payment (mitigated by the card on-ramp option in NOWPayments).
- The 3-h wait between payment and install call (mitigated by promising "install Tuesday or Thursday morning").
- Her existing site builder (Squarespace) needs an embed snippet, not just a link (mitigated by giving both).

---

## Journey 2 — Yuki (dental practice manager, 2-dentist clinic in Vancouver) cuts no-shows by 22%

**Discovery (T-2w).** Yuki is on a quarterly call with her dental association and someone mentions "the TradeToolset no-show thing — predicts the cancels and texts them the night before." She googles `tradetoolset dental` from her phone in the car.

**Landing (T-90s).** She filters the catalog by `vertical: dental`. The catalog narrows to TT-DENT-004. She clicks into the tool card, sees the preview of a risk-score dashboard with patient names and scores. She reads the promise: "Reads the next 14 days of appointments, scores each on a no-show risk model trained on practice history, and texts the riskiest ones two reminders + a calendar link the night before." She clicks `install >`.

**Pricing (T-2min).** She picks Single tool, $39 / mo. Pays with her clinic's USDT wallet (the bookkeeper handles it; she just provides approval).

**First value (T-2 days).** Install call books. The installer asks for a CSV of her last 12 months of appointments + no-shows from her practice management system (Dentrix). The installer trains the no-show risk model on her practice's actual data. The Twilio account is wired (she already has one). She's live on Friday afternoon.

**Recurring use (month 1).** Saturday morning at 8:00 AM, three patients on Monday's roster get a text: "Reminder — Mon 10:30 with Dr. Lin. Tap to confirm." Two confirm. The third doesn't and gets a follow-up at 17:00 with a "need to reschedule? Tap to pick a new slot." That patient picks Wednesday 14:00. By month 1 she has 11 fewer no-shows compared with the previous month — about 22% reduction. She reports it to the dental association call.

**What she'd churn for**:
- If a tuning note suggested a change that broke the SMS flow.
- If Dentrix changed their export format and the import broke for >2 weeks.
- If the Twilio bill exceeded $40/mo (it doesn't — about $4/mo at her volume).

---

## Journey 3 — Daniyar (no-code builder, Almaty) publishes his second template

**Discovery (T-1m).** Daniyar saw an Indie Hackers thread where someone said "TradeToolset pays 70% rev-share in USDT to vertical builders." He bookmarks the link.

**Visit & apply (T-3 days).** A week later he sends an email to `builders@tradetoolset.com`:

> Vertical: dental clinics
> Workflow it replaces: monthly insurance claim resubmission for denied claims
> Stack I can build it on: Airtable + Make.com + a small Hono parser
> Fair monthly price: $69

He gets a reply in 38 hours from a TradeToolset operator: "Yes — assign SKU TT-DENT-009 (claim resubmitter). Brief attached. Build the Airtable template + the Make.com flow + the Hono parser. Brand reviewer signs off in one round. We list it Q3-week-3."

**Build (week 1-4).** Daniyar builds. A weekly Slack ping checks in. Brand review on day 26. One round of notes (rename a column, fix a button color). Approved on day 30.

**Publish (week 5).** TradeToolset adds the catalog row, the SKU, the price ($69/mo), the preview screenshot. Daniyar has nothing to do here.

**First payout (week 9).** First two installs land in week 7. On the 5th of the next month, Daniyar's USDT wallet receives `0.7 × $69 × 2 = $96.60` (minus the NOWPayments payout fee).

**Recurring use (month 4).** TT-DENT-009 has 14 active installs by month 4 = `0.7 × $69 × 14 = $676` / mo. He starts work on his third tool (a same-day-claim-status tool). His TradeToolset revenue passes his moonlight Bubble freelance income in month 6.

---

## Cross-cutting observations

- The buyer-side journey is dominated by **trust** and **install speed**, not pricing. $39 is barely friction; "install Tuesday morning" is the real value.
- The builder-side journey is dominated by **rev-share fairness** and **payout reliability**. KYC handled by NOWPayments removes the largest blocker (a Bubble freelancer in KZ doesn't want to expose a passport to a US Stripe account).
- The recurring-use loop closes when the tool produces a *visible artifact* (a signed PDF, a confirmed appointment, a sent invoice). Without that artifact, churn risk doubles by month 2.
