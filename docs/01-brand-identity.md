# 01 — Brand Identity

> TradeToolset — a catalog of vertical-specific no-code tools.

## Brand pyramid

- **Essence (1 word)**: *Catalogued.*
- **Personality (3 traits)**: precise, blue-collar, unsentimental.
- **Values (3)**: one job per tool / the buyer is right (already) / the trade owns the workflow.
- **Attributes (5)**: catalogued, vertical, installable, refundable, low-noise.

## Positioning statement

For solo operators and small-business owners in the trades (HVAC, dental, restaurant, salon, agency, ecom, SaaS-ops) who already know what one workflow they want fixed, **TradeToolset** is a *catalog of vertical-specific no-code tools* that lets them install the right one in an afternoon for $39 a month, paid in stablecoin, unlike no-code agencies that quote $14,000 / six weeks for a "platform" the customer doesn't need, because every tool on the shelf is sized to one trade and one job, not "build anything."

## Audience persona — primary (P1)

**Patricia, 47 — owner-operator, 6-person HVAC company in Charlotte NC.**

- Goal this quarter: cut the time from on-site walk to a signed quote to under 24 hours, ideally same-day.
- Frustrations: sat through two no-code agency demos in March, both quoted $11,000 and 5-7 weeks; she "doesn't have a project, she has a quote PDF problem."
- Channels she lives in: Facebook trade groups, Reddit `/r/hvacadvice`, an emailed newsletter from her industry association, two podcasts on the truck.
- Buys software when: a peer in her FB group says "this finally fixed it" with a screenshot.
- Refunds when: it took >2 hours to install or it tried to teach her something instead of solving the one thing.

## Audience persona — secondary (P2)

**Daniyar, 34 — freelance no-code builder in Almaty, KZ. Five years on Bubble + Airtable, one trade specialism (dental clinics).**

- Goal: turn his last 18 months of dental-clinic project files into a productized template that earns $1-3k/mo passive.
- Frustrations: doesn't want to run a marketing function, doesn't want a Stripe account in his name, has a USDT wallet and a passport.
- Buys distribution when: rev-share is generous (>=70%), no exclusivity, KYC handled by the platform, one currency he trusts.

## Voice & tone

**Do**:
- Short sentences. Trade-specific nouns (`tonnage`, `ductwork`, `n_seat`, `cohort`).
- Talk in shelves, SKUs, install times, refund policies.
- Use mono labels for prices, SKUs, and "draft / live" status.

**Don't**:
- Don't say "platform," "ecosystem," "AI-native," "build anything."
- Don't use rainbow gradients or "🚀" launch language.
- Don't write hero copy that requires three reads.

**Sample sentence**: *TradeToolset TT-HVAC-002 is a quote generator for HVAC contractors. It turns a 4-day truck-roll-to-quote gap into one afternoon. $39 a month, USDT pay, refund inside 30 days, you keep the Bubble files if you cancel.*

## Visual system

- **Palette** (5 + 2 semantic, all hex): see `DESIGN.md §4`. Wave 2 design refresh
  (2026-05-08) re-aligned the palette to Linear's reference tokens 1:1 (the
  TradeToolset metaphor names are kept; the hex values now match Linear). See
  `DESIGN.md §15` for the full pivot record.
  - `--bg #08090a` pitch-black (page canvas, Linear's pitch-black)
  - `--surface #0f1011` graphite (card surface)
  - `--surface-2 #161718` deep-slate (elevated surface)
  - `--border #23252a` charcoal-grey (hairlines)
  - `--accent #e4f222` neon-lime (CTAs, focus, live dot accent — Linear's signature)
  - `--fg #f7f8f8` porcelain (text)
  - `--muted #8a8f98` storm-cloud (secondary text)
  - `--ok #27a644` emerald (status: live)
  - `--warn #f5d96a` sodium (status: draft)
- **Typography**:
  - Display + body — Inter Variable (Google Fonts), weights 400/510/590/680.
  - Mono — JetBrains Mono (Google Fonts), weights 400/500. Used for SKUs, prices, filter labels.
- **Logo concept** (verbal + SVG): a shelf with three tools mounted on it. Two horizontal neon-lime rails (the shelf rails); three vertical porcelain rectangles (the tools). Square 32×32. The shelf is wider than the tools so the rails extend past them. Inline SVG (no external asset):

  ```svg
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
    <rect width="32" height="32" rx="6" fill="#08090a"/>
    <rect x="5" y="9" width="22" height="2" fill="#e4f222"/>
    <rect x="5" y="20" width="22" height="2" fill="#e4f222"/>
    <rect x="9" y="11" width="3" height="9" fill="#f7f8f8"/>
    <rect x="15" y="11" width="3" height="9" fill="#f7f8f8"/>
    <rect x="21" y="11" width="3" height="9" fill="#f7f8f8"/>
  </svg>
  ```
- **Spacing** — 4px base, scale `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 96 / 128`.
- **Radius** — 6px primary surfaces, 4px badges, 2px chips, 9999px only on status dots.
- **Motion** — 120ms ease-out on transform / color. 1px translate-up on hover. No scale, no glow, no scroll-driven parallax. Reduced-motion respected.

## Forbidden moves

- Cloning Linear wholesale: same dark canvas + neon-lime accent (per Wave 2 Linear-aligned refresh), but different hero (catalog-first, not slogan-first), different mono (JetBrains, not Berkeley), different IA (tool-catalog, not issue-tracker).
- "No-code rainbow": no purple-pink gradients, no glassmorphism, no 3D isometric cube illustrations.
- Generic SaaS sky-blue.
- The Stripe sky-blue gradient.
- "Magic" copy. We sell catalogued, not magic.

## Brand-line lock-ups

- Header: `TRADETOOLSET` in JetBrains Mono 13px, all caps.
- Footer: `TRADETOOLSET · A CATALOG OF SHARP TOOLS · MMXXVI` in JetBrains Mono 11px, 0.06em tracking.
- Pitch headline: *No-code, but only the tools that work for one trade.*
