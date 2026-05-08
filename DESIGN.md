# DESIGN.md — Toolshelf

> Canonical design + style guide for `no-code-vertical-tools.prin7r.com` (brand: **Toolshelf**).
> Owned by Chief of Design. Kept in sync with `apps/landing/` — any landing-page change updates this file in the same commit.

The visual identity is sourced from [`docs/01-brand-identity.md`](docs/01-brand-identity.md). This document is the implementation-facing translation of that identity into tokens, components, layout rules, and verification artifacts.

---

## 1. Product and audience

**Product.** Toolshelf is a catalog of vertical-specific no-code micro-apps. Each tool does *one* job for *one* trade — an HVAC quote generator, a dental no-show predictor, a restaurant table-turn optimizer, a salon rebook reminder, a roofing scope-of-work emailer, an auto-shop bay scheduler. Every tool is its own product with its own price; the platform houses the catalog, the install button, the shared billing, and a small builder portal for vertical operators who want to publish their own tool.

We are explicitly the *opposite* of the "build anything" no-code rainbow. Toolshelf says: pick a tool, install it, use it Tuesday. No prompt, no schema, no setup call. The shop has shelves, the shelves have tools, the tools have one job.

**Primary audience.** Solo operators and 2-12-person small businesses in the trade verticals — HVAC, dental, restaurants, salons, agencies, ecom merchants, roofers, body shops, gyms. They've watched two no-code agency demos, gotten a $14,000 quote and a six-week timeline, and bounced. They know what they want; they want a button labeled "install on my Bubble / Webflow / Airtable account, charge me $39 a month, and never call me."

**Secondary audience.** Vertical operators and freelance no-code builders who want to publish their tool to a marketplace where the buyer has already pre-decided to buy. They want a publishing kit (template, IPN, payouts) and a 70% revenue split.

**Anti-personas.** Generic SMB owners who can't name a single workflow that hurts. Enterprise IT shoppers expecting an RFP. Anyone who says "we'll figure out what we need on the call."

## 2. Visual positioning

The brand is **a tool shop, not a software studio**. Every tool on the shelf has:
- A name, a vertical, a one-line promise, a price, an install button
- A tiny screenshot mounted in a 6px-radius card
- A SKU-style identifier (`TS-HVAC-002`) so it feels catalogued, not curated by a designer

The visual is a **Linear Midnight Command Center** rendered as a tool catalog: pitch-black canvas (`#08090a`), graphite/deep-slate surface ramp, neon-lime (`#e4f222`) as the single accent. Linear's dark UI discipline is exactly the right frame for a multi-tool catalog; a buyer scans 8 SKUs the way they scan an issue queue. We adopt Linear's full token system (Inter Variable + Berkeley/JetBrains Mono, 6px radii, layered surfaces) and use **neon-lime** for primary CTAs, active filter chips, and the live status dot — the way Linear uses it for the primary action button.

This is a deliberate Wave 2 design refresh (2026-05-08) from the prior **Persimmon** (`#f76d3c`) direction; on-brand for Linear-aligned operator tools, and removes the "warm orange clamp" metaphor that conflicted with the precision-instrument catalog framing. See §15 for the full pivot record.

Don'ts:
- No "build anything!" purple gradient
- No no-code rainbow ribbon
- No generic SaaS sky-blue hero
- No 3D cube isometric illustrations
- No glowing effects, no glassmorphism, no 2020s gradient blur

Do's:
- Catalog over hero — the *shelf of 8 tools* leads, not a tagline
- Tool cards as the dominant visual element, all 6px radius, all neon-lime-CTA
- SKU monotype labels everywhere
- Filter chips that feel like the side panel of a precision instrument

## 3. ShadCN baseline and local component policy

Wave 2 batch landings still ship as hand-rolled Tailwind components for build-speed reasons (no ShadCN registry pull this batch). The token system below is **ShadCN-baseline-compatible** — every CSS variable maps to a ShadCN slot (`--background`, `--foreground`, `--primary`, `--card`, `--border`, `--ring`) so when `apps/app/` ships and pulls `pnpm dlx shadcn@latest add button card input badge`, the imported components will inherit the Toolshelf palette automatically.

**Exceptions to ShadCN baseline:**
- `ToolCard`, `ShelfFilter`, `SkuTag` — three project-owned components that do not exist in ShadCN. Source lives in `apps/landing/app/components/`, reviewed locally.
- No paid/pro libraries used.

## 4. Color tokens

The canonical palette is six colors plus three semantic tokens. Hex values are the source of truth; CSS variables are the implementation.

Linear-aligned palette (Wave 2 design refresh 2026-05-08). The names retain
the Toolshelf metaphor; the hex values now match Linear's reference tokens
1:1 (see `/Users/keer/projects/prin7r/design-references/linear.md`).

| Name | Hex | Linear analog | Token | Role |
|---|---|---|---|---|
| Pitch Black | `#08090a` | Pitch Black | `--bg` | Page canvas |
| Graphite | `#0f1011` | Graphite | `--surface` | Card surface (one level above canvas) |
| Deep Slate | `#161718` | Deep Slate | `--surface-2` | Elevated surface (modals, hovered tool card, sticky filter rail, SVG preview bg) |
| Charcoal Grey | `#23252a` | Charcoal Grey | `--border` | All hairline borders, dividers, table rules |
| Porcelain | `#f7f8f8` | Porcelain | `--fg` | Primary text — slightly off-white, sharp contrast on pitch-black |
| Storm Cloud | `#8a8f98` | Storm Cloud | `--muted` | Secondary text, captions, table headers |
| Neon Lime | `#e4f222` | Neon Lime | `--accent` | Primary CTA fill, active state, live status dot, focus ring |
| Neon Lime Deep | `#c2cf1c` | (derived) | `--accent-deep` | CTA hover/pressed |
| Amber | `#f5d96a` | (warn) | `--warn` | Warnings, "draft tool" badge, pre-release |
| Emerald | `#27a644` | Emerald | `--ok` | Success state, "live" status dot, paid invoice toast |

Selection color: `background: var(--accent); color: var(--bg);` (Linear's
exact pattern — neon-lime on pitch-black is the brand signature stamp).

## 5. Typography

**Display + body.** Inter Variable (Google Fonts). Weights used: 400 / 510 / 590 / 680. Tight letter-spacing on display sizes (`-0.02em` at 72px down to `-0.005em` at 14px). All body copy is `font-feature-settings: 'cv01', 'ss03';`.

**Mono.** JetBrains Mono (Google Fonts) — the open substitute for the Berkeley Mono pattern. Weights 400/500. Used for:
- Tool SKUs (`TS-HVAC-002`, `TS-DENT-004`)
- Prices (`$39 / mo`)
- Filter labels (`vertical: hvac`, `category: ops`)
- Inline code in docs

**Type scale (compact, Linear-style):**

| Role | Size | Line | Tracking | Weight |
|---|---|---|---|---|
| caption | 11px | 1.4 | -0.005em | 510 |
| body | 14px | 1.5 | -0.005em | 400 |
| body-lg | 15px | 1.55 | -0.005em | 400 |
| heading | 20px | 1.3 | -0.01em | 590 |
| heading-lg | 32px | 1.18 | -0.018em | 590 |
| display | 56px | 1.04 | -0.022em | 680 |
| mono-sm | 11px | 1.3 | 0 | 500 |
| mono | 13px | 1.35 | 0 | 500 |

The hero display tops out at 56px on 1440 / 88px on >=1920 widths. We never go bigger; the catalog is the headline, not a single-word slogan.

## 6. Spacing, radius, shadows, and borders

**Base.** 4px unit.

**Spacing scale.** 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 96 / 128 px. Section gap defaults to 96px on desktop, 64px on tablet, 48px on mobile.

**Radius.** 6px on all primary surfaces (cards, buttons, inputs, modals). 4px on small badges and SKU tags. 2px on nested chips and filter pills. Pills only on the live-status dot and the "live" badge.

**Borders.** 1px solid `--border` everywhere. No 2px, no double borders. Hairline-only.

**Shadows.** Two shadows total:
- `--shadow-sm`: `0 1px 2px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,.02) inset` (default tool card)
- `--shadow-md`: `0 8px 24px rgba(0,0,0,.45), 0 0 0 1px rgba(255,255,255,.03) inset` (hover, active filter chip)

No glow, no blur, no offset shadow > 8px y-axis.

## 7. Layout system and responsive rules

**Grid.** 12-col with 24px gutter, max width `1280px`. Hero and catalog use the full width; pricing uses 8-of-12 centered; FAQ uses 6-of-12 centered.

**Breakpoints.** `<640` mobile, `640–1024` tablet, `>=1024` desktop. The catalog grid is 1-col / 2-col / 3-col / 4-col at <640 / 640 / 1024 / 1440.

**Header.** 56px tall, sticky, blurred surface (`backdrop-filter: blur(8px); background: rgba(12,13,14,.78)`). Logo (left), nav (`Catalog · Verticals · Build · Pricing`), CTA `Open the shelf` (right).

**Footer.** 4-col grid: brand + tagline · catalog (8 tools) · for builders (publish, payouts, IPN, status) · legal (terms, privacy, refund). 64px section padding above. Mono lock-up at the bottom: `TOOLSHELF · A CATALOG OF SHARP TOOLS · MMXXVI`.

## 8. Component catalog

Hand-rolled, ShadCN-token-compatible:

- **Button.primary** — Neon-lime fill, Pitch-black text, 590 weight, 14px, 6px radius, 11px y / 16px x padding. Hover: Neon-lime Deep + 1px lift via `transform: translateY(-1px)`.
- **Button.ghost** — transparent bg, Porcelain text, 1px border, 6px radius. Hover: bg `--surface-2`.
- **ToolCard** — surface bg, 1px border, 6px radius, 16px padding, 12px gap. Header row: SKU mono-sm + price mono on right. Body: tool name (heading), one-line vertical promise (body), tiny screenshot (12:5 aspect), `Install` button (block, primary).
- **ShelfFilter** — chip group, `category: ops`, `vertical: hvac`, etc. Default: `--surface` bg, 1px border. Active: Neon-lime outline + Neon-lime text, no fill.
- **SkuTag** — JetBrains Mono 11px, uppercase, 4px x / 2px y padding, 4px radius, `--surface-2` bg, `--muted` text. Always paired with the tool name.
- **PriceCell** — JetBrains Mono 15px, Porcelain, with `/ mo` in mono-sm Storm-cloud.
- **ToolAnatomy** — labelled diagram component (one tool unfolded into its parts).
- **Pricing card** — three tiers: `Single tool`, `Bundle`, `Builder`. Each is a vertical card with header SKU, price, included list (12 items max), `Install` CTA.
- **CryptoCheckoutButton** — Neon-lime button, mono prefix `pay >`, hits `/api/checkout/nowpayments`, redirects to NOWPayments-hosted invoice.
- **FAQ accordion** — chevron mono, divider hairlines, 8 questions max.

## 9. Landing page structure

The landing is intentionally one long page. The shelf and the tools must appear in the first 1.5 viewports.

1. **Header** (sticky, 56px). Logo · `Catalog · Verticals · Build · Pricing` · CTA `Open the shelf`.
2. **Hero — the shelf-first hero.** Display title (max two lines): *No-code, but only the tools that work for one trade.* Sub-line (body-lg, Solder): one paragraph explaining catalog-not-platform. Mono caption with three tool SKUs scrolling in: `TS-HVAC-002 · TS-DENT-004 · TS-REST-007`. Right side: a 4-up tool card preview (HVAC quote generator, dental no-show predictor, restaurant table-turn, salon rebook reminder).
3. **Catalog peek** — the *6+ tool catalog* in a 3-or-4-col grid. Real names, real SKUs, real promises, real prices. This is the headline section. Each card has the `Install` neon-lime CTA.
4. **By vertical filter** — chip rail: `HVAC · Dental · Restaurant · SaaS-ops · Agency-ops · E-commerce`. Selecting one filters the catalog above. Implementation: pure CSS class toggle, no SPA. Default state: all filters active.
5. **Tool anatomy** — *what's inside one tool* (worked example: HVAC quote generator). Diagram (mermaid-style, hand-drawn) showing the 6 pieces: input form / pricing rules / branded PDF / Stripe-or-crypto pay link / SMS notifier / dashboard. Each piece labelled with mono. Below: "this is the same anatomy for every tool on the shelf — only the names of the parts change."
6. **Pricing — three tiers with crypto CTA.**
   - **Single tool** — $39 / mo per tool installed. NOWPayments crypto CTA (USDT/USDC/BTC). Cancel any time.
   - **Bundle** — $129 / mo for any 5 tools from one vertical. Recommended.
   - **Builder** — $0 + 30% rev-share. Publish your own tool to the shelf. Payout in USDT to your wallet. KYC handled by NOWPayments.
   Each card has its own `pay >` neon-lime CTA. The Single and Bundle CTAs invoke the NOWPayments hosted invoice flow.
7. **Builder section — submit a tool.** Heading: *We pay 70% to vertical operators who publish.* Body: three steps (1) describe the workflow (2) we ship the no-code template (3) you keep 70% on every install. CTA: `pay >` (or `apply >`) — opens an email with a pre-fill: `subject: I want to publish a TS-XXXX tool`.
8. **FAQ** — 8 questions covering: refund policy, install delay, vertical fit, custom tools, payouts, KYC, source-code ownership, churn.
9. **Footer** — 4-col grid as in §7.

## 10. Imagery and generated asset rules

Toolshelf is intentionally low-imagery. The art is the catalog itself. Allowed asset types:
- Tiny screenshots inside ToolCards — these can be SVG mockups (no external assets required).
- Tool anatomy diagram — inline SVG, hand-drawn-feel paths, no PNG.
- A small workshop-wall divider SVG between sections (1px hairline with a 6px neon-lime dot every 32px).

Generated imagery (GPT Image 2 / `prin7r-generate-image`) — **deferred for Wave 2 build**. If we later use it, prompt template: `"a precise tool catalog page at a workshop, dark gunmetal table, neon-lime labels, tools shot from above, label tag with SKU TS-XXXX, hyperreal photography, no background blur, no people"`. Aspect 12:5, hero use only. **As of this build:** no generated assets are shipped — we use SVG only — and `apps/landing/public/generated/` is intentionally empty.

## 11. Motion and interaction rules

- Default transition: `transform 120ms ease-out, background-color 120ms ease-out, border-color 120ms ease-out`.
- Hover: 1px translate-up on tool cards and primary buttons. No scale.
- Active filter chip: outline appears at 80ms, no fade.
- No scroll-driven parallax. No marquee on the hero. The mono SKU strip in the hero is a static row, not a scroll.
- Reduced motion: all transitions are `prefers-reduced-motion: reduce` → set to 0ms.

## 12. Accessibility and quality gates

- Contrast: Porcelain on Pitch-black = 17.6:1 (AAA). Storm-cloud on Pitch-black = 7.0:1 (AAA body / AA fine print). Neon-lime on Pitch-black = 14.8:1 (AAA — Linear's signature high-contrast accent). Neon-lime is dark-text inverse only on its own fill (Pitch-black on Neon-lime = 14.8:1, AAA).
- Tab order: header → hero CTA → catalog cards (left-to-right, top-to-bottom install buttons) → vertical filter chips → pricing CTAs → builder CTA → FAQ chevrons → footer.
- Focus ring: 2px solid Neon-lime, offset 2px, on `:focus-visible` only. Never on `:hover`.
- All images have meaningful `alt` (or empty alt for purely decorative SVG dividers).
- All CTAs are real `<button>` or `<a>`. No clickable `<div>`.
- Reduced motion respected (see §11).

## 13. Screenshots and verification artifacts

Required artifacts (committed to `docs/screenshots/`):
- `landing-desktop.png` — 1440×900, full-page, deployed URL `https://no-code-vertical-tools.prin7r.com`.
- `landing-mobile.png` — 390×844, full-page, deployed URL.

These are also embedded in `README.md` and linked here.

![desktop landing](docs/screenshots/landing-desktop.png)

![mobile landing](docs/screenshots/landing-mobile.png)

## 14. External references and library sources

- [Linear style reference](../../design-references/linear.md) — palette discipline, layered dark surfaces, 6px radii, Inter+Mono pair, single accent. **Aligned post-2026-05-08 refresh** to neon-lime accent (Linear's signature) and the full pitch-black/graphite/deep-slate/charcoal-grey surface ramp. The hero remains catalog-first (not slogan-first) — the Toolshelf brand.
- [Refero Styles](https://styles.refero.design/) — searchable design-token gallery; consulted for catalog-grid patterns.
- Workshop / hardware-store inventory aesthetic — Snap-on, Wera, Knipex catalog page conventions (SKU + price + photo + install).
- Linear (visual reference, not clone), Vercel (header pattern), Stripe (pricing card density).

## 15. Changelog

- **2026-05-08 design refresh — Linear pitch-black + neon-lime pivot.** Wave 2 design refresh per `wave2-design-references.json` mapping (`primary: linear`). Replaced full Toolshelf palette with Linear-spec tokens: bg `#0c0d0e → #08090a` (pitch-black), surface `#16181b → #0f1011` (graphite), surface-2 `#1d2024 → #161718` (deep-slate), border `#2a2e34 → #23252a` (charcoal-grey), fg `#f3efe7 → #f7f8f8` (porcelain), muted `#9aa0a8 → #8a8f98` (storm-cloud), accent `#f76d3c → #e4f222` (neon-lime), accent-deep `#cf5527 → #c2cf1c`, ok `#7be0a6 → #27a644` (emerald). Updated globals.css CSS vars + comments, tailwind.config.ts (CSS-var-driven so cascade is automatic), all 8 tool-card SVG previews in page.tsx (hardcoded hex values bulk-remapped), and `app/icon.svg`. Focus ring updated from rgba persimmon to rgba neon-lime. Brand voice / catalog-first hero / six verticals / NOWPayments wiring all preserved. Reference: `/Users/keer/projects/prin7r/design-references/linear.md`.
- **2026-05-08** — Initial DESIGN.md. Brand: Toolshelf. Persimmon accent on workshop-black canvas. Catalog-first hero with 8-tool shelf. Inter + JetBrains Mono. Six tool verticals (HVAC / dental / restaurant / SaaS-ops / agency-ops / e-commerce). Three pricing tiers with NOWPayments crypto CTA. SaaS app folder stubbed. Wave 2 v2-bar landing.
