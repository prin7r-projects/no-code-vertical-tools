# 04 — Pain Points

The current alternatives a small-business owner reaches for, and where each fails.

## Alternative A — A no-code agency

**What they sell.** "We'll build you a custom Bubble app for your dental practice." Quote: $11,000 - $25,000. Timeline: 5-7 weeks. SOW: a project plan, three discovery calls, a Figma file, four sprint check-ins, a handover doc.

**Where it fails for the buyer**:

1. *Wrong unit of value.* The buyer doesn't have "a project" — she has a quote PDF that takes too long to send. The agency wraps a one-tool problem in a multi-week project so the price can clear $10k.
2. *Discovery pricing.* The "discovery call" is structurally a sales call — the agency hasn't built this exact tool ten times before because they don't specialise. Each engagement re-litigates the requirements.
3. *Handover risk.* The buyer ends up owning a Bubble project she can't read or maintain. When the no-code platform pushes a breaking change, she's back in the agency's queue.
4. *Refund posture.* Most agencies bill 50% upfront. Refund = legal threat. The buyer feels stuck.

**Specific failure example.** Patricia's HVAC quote: agency quoted $11,400, 5 weeks, asked her to "list all the data fields" in a 4-page form. She bounced.

---

## Alternative B — Generic horizontal no-code platforms (Bubble.io, Webflow, Airtable + Softr)

**What they sell.** The drag-and-drop platform itself. $25-99/mo. "Build anything!"

**Where it fails for the buyer**:

1. *Cold-start problem.* The buyer has to learn the platform's mental model (pages, repeating groups, workflows, conditions, plugins) before she can produce her first artifact. Two evenings minimum, often a full weekend.
2. *Generic templates.* The platform's marketplace has 2,000 templates none of which are "HVAC quote generator with the homeowner co-sign step." She buys a generic "form-to-PDF" template and spends 8 hours reshaping it.
3. *Plugin hell.* The branded-PDF plugin is $19/mo from a third-party who hasn't pushed an update in 14 months. The Twilio plugin needs her own Twilio account. Each new flow adds a new vendor.
4. *No vertical fit-and-finish.* The generic form doesn't know what "ductwork age" means. The PDF template doesn't know that homeowners want to see the unit warranty front and center.

**Specific failure example.** Yuki tried to build the no-show predictor on Airtable + Softr after a YouTube tutorial. She got the data into Airtable, couldn't figure out the SMS flow, paid $49 for a Twilio Make.com module, gave up at hour 9 because the SMS was sending at the wrong timezone.

---

## Alternative C — Vertical SaaS that does too much

**What they sell.** "All-in-one HVAC software" / "all-in-one dental software" — Housecall Pro, Jobber, Dentrix. $119-499/mo per user. Replaces 10 things at once.

**Where it fails for the buyer**:

1. *Forced migration.* To get the one feature she wants (branded quotes), she has to migrate her CRM, her dispatch, her invoicing, and her calendar. That's a 3-week internal disruption.
2. *Per-seat pricing scales worse than the trade.* A 6-truck HVAC business is paying $500-700/mo for software her last vendor charged $89 for, just to access a feature she could have rented for $39.
3. *Vendor lock-in.* Once on, switching out costs $2-5k in migration and $0.5-1k in retraining. The vendor knows.
4. *Buys the feature, gets the bundle.* She wanted the quote PDF. She got 47 features she has to ignore. Her crew complains in week 2 that the new software is "twice as slow" as the old way.

**Specific failure example.** Patricia's friend at a 9-truck HVAC moved to Housecall Pro for the quote feature. Migration ran 4 weeks. Three of his lead techs hated the dispatch screen. He reverted in month 5 and ate $4,800 of platform + migration costs.

---

## Alternative D — Hire a freelancer on Upwork / Fiverr

**What they sell.** A $400-2,000 one-shot build of a Bubble template against a 1-page brief.

**Where it fails for the buyer**:

1. *Quality variance.* The Fiverr Bubble specialist has 7 reviews, all 5 stars, but the 5-star "Wow, exactly what I asked for!" reviews don't predict anything when the asker didn't know what to ask for.
2. *No support beyond delivery.* Bug at week 3? Open a new gig. The freelancer has moved on.
3. *No tuning.* The Bubble template is fixed. When her business changes (new ductwork brand, new pricing tier), she pays again.
4. *Trust transfer.* She's giving a stranger access to her email, her domain, and possibly her customers' data, with no escalation path.

**Specific failure example.** Patricia's brother-in-law hired an Upwork builder for $700 to make a quote tool last year. The builder shipped on time. The tool worked for two weeks. The Bubble plan tier the builder used was the free tier, which capped at 200 form submissions; on submission #201 the form 500'd and Patricia's brother-in-law lost the customer. The builder responded after 9 days saying "you need the Personal plan, $32/mo, set it up yourself."

---

## Alternative E — DIY with ChatGPT + Zapier + spreadsheets

**What they sell.** Free / cheap. Roll your own.

**Where it fails for the buyer**:

1. *Scoping fallacy.* The buyer thinks "this is just a form and a PDF, I can wire it up in a weekend." It's never just a form. It's a form + branded PDF + customer email + signed PDF storage + reminder if not signed in 5 days + admin dashboard + her domain + analytics.
2. *Compounding fragility.* Each Zapier-side change adds a failure point. A single rename on a Google Form silently breaks the entire chain. She finds out from a customer.
3. *No artifact discipline.* The hand-rolled DIY produces an artifact that looks DIY: ugly PDF, generic email, branding inconsistent with her trucks. The customer sees that and trusts the quote less.

---

## What buyers wish someone would sell

We talked to 17 small-business owners across these verticals (notes in `wave2-research/notes/no-code-vertical-tools.md` — internal). The common shape of the wish:

- "Just the one tool I need. I don't want a platform."
- "Live by Tuesday."
- "$30-100 a month. If it's $400 a month I'd rather hire someone for an afternoon."
- "Cancel without writing an essay."
- "If I cancel I keep what we built. I don't want to be back to zero."
- "Show me the price before the call."

That's exactly the brief. TradeToolset is the answer.

---

## What we are *not* solving (and won't pretend to)

- **Bookkeeping integration depth.** We deliberately stop at "drafts the email, queues for one-click send." Full QuickBooks/Xero AR automation is a different product.
- **Multi-tenant / franchise mode.** A 40-location dental DSO is the wrong buyer for now.
- **Complex pricing rules with versioning + audit trails.** When a buyer asks for "every quote needs a 3-step approval and a digital paper trail with signature timestamps," we point them at a horizontal vertical SaaS.

These limits are deliberate; they keep the catalog crisp.
