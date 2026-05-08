# 06 — Sales Channels

The buyer is not on LinkedIn. The buyer is in a Facebook group with 1,400 members, a Reddit subreddit with 30k subscribers, and a quarterly dental-association call. The channel mix reflects that.

## Channel mix (Wave 2 first 90 days)

| Channel | Role | % of effort | Why it fits |
|---|---|---:|---|
| Vertical Facebook groups | Owned earned | 25% | The buyer's primary peer-validation surface |
| Subreddit `/r/HVAC`, `/r/Entrepreneur`, `/r/restaurateur`, `/r/dentistry`, `/r/Shopify`, `/r/agency` | Owned earned | 20% | Long tail; one good thread = 90 days of organic |
| Trade-association newsletters and quarterly calls | Paid sponsorship | 15% | Concentrated reach into a single vertical |
| Vertical newsletters (ACCA HVAC News, Modern Restaurant Management, AGD News, etc.) | Sponsored slot | 10% | Direct buyer attention |
| Builder-side: Indie Hackers, X (formerly Twitter) no-code corner | Owned earned | 10% | Recruits Daniyar-shaped builders |
| Builder-side: Bubble + Webflow showcase pages | Owned earned | 5% | Distribution into the no-code freelancer pool |
| Direct outbound (P1 list curated from FB group + LinkedIn) | Sales-led | 10% | Slow but converts at 4-7% |
| SEO / catalog page + tool-specific landing routes | Long-term | 5% | TS-HVAC-002 ranks for "HVAC quote generator" by month 4 |

Total ad spend Wave 2: cap $1,500/mo, almost entirely sponsored newsletter slots and trade-association sponsorships. No Meta/Google paid until we have buyer-side conversion data.

---

## Channel notes

### Vertical Facebook groups

- 11 groups identified (Charlotte HVAC Contractors, NC HVAC Owners, BC Dental Practice Managers, Independent Restaurant Owners FB, etc.). Each has a moderator who's a peer-trader (not a vendor).
- **Tactic**: we don't post ads. We sponsor the *moderator* with a free install of one tool in exchange for a screenshot post when it works. Honest disclosure (Toolshelf gave me this for free).
- **Cost**: the install + 1 month of tuning. Roughly $80 per moderator-relationship.
- **Expected conversion**: 1.2-2.0% of group readers visit toolshelf within 14 days; of those, 3-5% install.

### Subreddits

- We *don't* shill. We answer questions where the answer is genuinely "Toolshelf TS-HVAC-002 does this for $39." When it isn't, we say so.
- **Tactic**: a pinned answer-author account that responds to "anyone got a quote PDF that doesn't suck?" type threads. We disclose affiliation. The mods of `/r/HVAC` already allow this style of post.
- **Cost**: 4 hours/week of an operator's time.
- **Expected conversion**: long-tail; first 6 months feel slow, then a single archived thread carries 200-400 visits/month.

### Trade-association newsletters and quarterly calls

- ACCA HVAC News (~14k newsletter subscribers, ~$1,200 sponsored slot), AGD Impact (dental, 15k subs, ~$1,800 slot), AHLA salon-spa (~$600 slot), local restaurant associations ($150-400/slot).
- **Tactic**: text-only sponsor blurb (160-220 chars), ends with "Catalog at toolshelf.cash". No banner.
- **Cost**: $1,000-1,800 per slot. Cap $1,500/mo.
- **Expected conversion**: 0.6-1.4% click → 4-6% install on the click.

### Vertical newsletters (independent operators)

- Modern Restaurant Management ($395/slot, 11k subs), HVAC Insider ($425/slot, 9k subs), the dental-practice-managers Substack ($150/slot, 4k subs).
- Same sponsor-blurb format as association newsletters.

### Indie Hackers + X no-code corner (builder-side)

- We post a clean, no-frills launch story per tool we ship. We disclose the rev-share.
- We DM Daniyar-shaped builders directly when they post a "I just shipped a Bubble template for [vertical]" success story. We invite them to apply to publish.
- **Tactic**: 2 launch posts/month + 4-8 builder DMs/week.
- **Cost**: 1 hour/week.
- **Expected conversion**: 1-2 builder applications per launch post; of those, 1 in 3 ships a tool.

### Bubble + Webflow showcase pages

- Each Toolshelf tool has its own showcase entry on the relevant no-code platform's gallery. The showcase points back to the catalog. This is mostly an SEO play.

### Direct outbound (P1)

- We curate a 200-name list per vertical of P1-shaped buyers (HVAC owners 2-12 trucks, dental practice managers in BC/AB, etc.) from FB-group member lists + LinkedIn.
- The first email is short: SKU, one-line promise, screenshot, $39. No call ask. Reply rate target: 5-9%.
- We don't sequence past 2 emails. If the second email doesn't elicit a reply, we drop and re-add in Q+2.
- **Cost**: 1 operator FTE-day per vertical per quarter.
- **Expected conversion**: 4-7% of replies become a single-tool install within 30 days.

### Catalog SEO

- The catalog page itself has 8 tool-specific h2-anchored sections. Each tool has a `/tools/<sku>` route (Wave 3) that ranks for the tool's noun ("HVAC quote generator", "dental no-show predictor").
- We don't pursue paid SEM in Wave 2.

---

## Channels we explicitly avoid

- **LinkedIn outbound at scale.** Patricia is on LinkedIn maybe twice a year. The cost of warming her up there exceeds the install-LTV.
- **Content marketing blog at the catalog level.** A "what is no-code" blog is the wrong shape for a catalog. Each tool can have a `/tools/<sku>/playbook` deep-link in Wave 3.
- **Affiliate programs at <70% rev-share.** Outside our model — we use the rev-share as the *builder* program, not as a generic affiliate.
- **Paid YouTube placements.** Too expensive for the install-LTV; revisit when LTV >$1k.
- **Generic startup directories (G2, Capterra).** Wrong audience — they're shopping for vertical-SaaS, not micro-tools.

---

## Lead handoff

- **Buyer-side**: visitor → catalog → install button → NOWPayments hosted invoice → paid → email to `orders@toolshelf.cash` (Wave 2 manual install) → install call within 24 hours.
- **Builder-side**: applicant → email to `builders@toolshelf.cash` → 3-business-day response → brief + brand asset bundle → 30-day build-and-review cycle → catalog listing → first install → 5th-of-month payout.

Both sides are deliberately email-based until Wave 3 ships the in-app portals.
