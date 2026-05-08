/**
 * [TOOLSHELF_LANDING] Wave 2 landing page.
 *
 * Brand: Toolshelf — a catalog of vertical-specific no-code tools.
 * Hero leads with the shelf (8 tool cards), not a slogan. Filter by vertical.
 * Tool anatomy section. Three pricing tiers with NOWPayments crypto CTAs.
 * Builder rev-share section. FAQ. Footer. All real copy, no lorem-ipsum.
 *
 * DESIGN.md is the canonical reference; any change to this file should also
 * update DESIGN.md.
 */

import type { ReactElement } from "react";
import { CatalogFilter } from "./components/catalog-filter";
import { PricingCta } from "./components/pricing-cta";

type Tool = {
  sku: string;
  vertical:
    | "hvac"
    | "dental"
    | "restaurant"
    | "saas-ops"
    | "agency-ops"
    | "ecommerce";
  verticalLabel: string;
  name: string;
  promise: string;
  price: string;
  status: "live" | "draft";
  preview: () => ReactElement;
};

/* ------------------------------------------------------------------ */
/* Catalog data — 8 tools, real names, real promises, real prices.    */
/* ------------------------------------------------------------------ */

const TOOLS: Tool[] = [
  {
    sku: "TS-HVAC-002",
    vertical: "hvac",
    verticalLabel: "HVAC",
    name: "Quote generator",
    promise:
      "Customer scrolls a form on your site, picks unit + tonnage + ductwork, gets a branded PDF in 60 seconds. Cuts the truck-roll-to-quote gap from 4 days to one afternoon.",
    price: "$39 / mo",
    status: "live",
    preview: PreviewQuote
  },
  {
    sku: "TS-DENT-004",
    vertical: "dental",
    verticalLabel: "Dental",
    name: "No-show predictor",
    promise:
      "Reads the next 14 days of appointments, scores each on a no-show risk model trained on practice history, and texts the riskiest ones two reminders + a calendar link the night before.",
    price: "$39 / mo",
    status: "live",
    preview: PreviewNoShow
  },
  {
    sku: "TS-REST-007",
    vertical: "restaurant",
    verticalLabel: "Restaurant",
    name: "Table-turn optimizer",
    promise:
      "Pulls last 90 days of POS receipts, finds the four-tops that turn slow on Friday 7-9pm, suggests a reseat plan and a service nudge a manager can read on the floor.",
    price: "$39 / mo",
    status: "live",
    preview: PreviewTableTurn
  },
  {
    sku: "TS-SALN-001",
    vertical: "ecommerce",
    verticalLabel: "Salon / spa",
    name: "Rebook reminder",
    promise:
      "Six weeks after a color appointment, an SMS lands at the right hour with the same stylist's first three open slots, pre-confirmed in one tap. Nothing else.",
    price: "$39 / mo",
    status: "live",
    preview: PreviewRebook
  },
  {
    sku: "TS-AGEN-003",
    vertical: "agency-ops",
    verticalLabel: "Agency",
    name: "Invoice chaser",
    promise:
      "Reads your Xero / FreshBooks unpaid invoices over 14 days, drafts a polite escalation per client (matched to your prior tone), and queues it for one-click send Friday morning.",
    price: "$39 / mo",
    status: "live",
    preview: PreviewInvoice
  },
  {
    sku: "TS-SAOPS-005",
    vertical: "saas-ops",
    verticalLabel: "SaaS-ops",
    name: "Churn flag",
    promise:
      "Watches Stripe + Posthog + your support inbox for the four signals that precede a B2B SaaS cancel, posts a ranked Slack alert at 8am, and names the customer success owner to call.",
    price: "$39 / mo",
    status: "live",
    preview: PreviewChurn
  },
  {
    sku: "TS-ECOM-006",
    vertical: "ecommerce",
    verticalLabel: "E-commerce",
    name: "Cart-to-WhatsApp",
    promise:
      "Abandoned carts on Shopify get a WhatsApp message (not an email) within nine minutes from the brand's number, with the cart link, the SKUs, and a 5% expiring nudge.",
    price: "$39 / mo",
    status: "live",
    preview: PreviewCart
  },
  {
    sku: "TS-ROOF-008",
    vertical: "hvac",
    verticalLabel: "Roofing",
    name: "Scope-of-work emailer",
    promise:
      "After the on-site walk, you tag photos in your phone with shingle / decking / flashing; a scope email with the photos and a price block lands in the homeowner's inbox before you leave the driveway.",
    price: "$39 / mo",
    status: "draft",
    preview: PreviewScope
  }
];

/* ------------------------------------------------------------------ */
/* SVG preview components — tiny, branded screenshots.                */
/* ------------------------------------------------------------------ */

function PreviewQuote() {
  return (
    <svg viewBox="0 0 240 100" width="100%" height="100%" role="img" aria-label="HVAC quote PDF preview" preserveAspectRatio="xMidYMid slice">
      <rect width="240" height="100" fill="#161718" />
      <rect x="12" y="12" width="100" height="6" fill="#f7f8f8" />
      <rect x="12" y="22" width="60" height="4" fill="#8a8f98" />
      <rect x="12" y="36" width="80" height="3" fill="#8a8f98" />
      <rect x="12" y="42" width="60" height="3" fill="#8a8f98" />
      <rect x="12" y="48" width="90" height="3" fill="#8a8f98" />
      <rect x="120" y="12" width="108" height="60" fill="#08090a" stroke="#23252a" />
      <text x="126" y="26" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8a8f98">SUBTOTAL</text>
      <text x="206" y="26" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#f7f8f8">$ 6,420</text>
      <text x="126" y="40" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8a8f98">DUCTWORK</text>
      <text x="206" y="40" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#f7f8f8">$ 1,180</text>
      <line x1="126" y1="46" x2="226" y2="46" stroke="#23252a" />
      <text x="126" y="60" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#e4f222">TOTAL</text>
      <text x="206" y="60" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#e4f222">$ 7,600</text>
      <rect x="12" y="78" width="60" height="14" fill="#e4f222" />
      <text x="42" y="88" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600" fill="#08090a">SEND PDF</text>
    </svg>
  );
}

function PreviewNoShow() {
  return (
    <svg viewBox="0 0 240 100" width="100%" height="100%" role="img" aria-label="No-show risk dashboard preview" preserveAspectRatio="xMidYMid slice">
      <rect width="240" height="100" fill="#161718" />
      <text x="12" y="20" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8a8f98">NEXT 7 DAYS · RISK SCORE</text>
      {[
        { y: 30, n: "M. Patel · 09:00", w: 78, c: "#e4f222" },
        { y: 44, n: "C. Ng · 10:30", w: 64, c: "#e4f222" },
        { y: 58, n: "T. Clarke · 13:15", w: 38, c: "#f5d96a" },
        { y: 72, n: "K. Singh · 15:00", w: 22, c: "#27a644" },
        { y: 86, n: "R. Müller · 16:45", w: 12, c: "#27a644" }
      ].map((row, i) => (
        <g key={i}>
          <text x="12" y={row.y + 8} fontFamily="Inter, sans-serif" fontSize="7" fill="#f7f8f8">{row.n}</text>
          <rect x="124" y={row.y} width="100" height="8" fill="#08090a" stroke="#23252a" />
          <rect x="124" y={row.y} width={row.w} height="8" fill={row.c} />
          <text x="226" y={row.y + 7} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#f7f8f8">{row.w}%</text>
        </g>
      ))}
    </svg>
  );
}

function PreviewTableTurn() {
  return (
    <svg viewBox="0 0 240 100" width="100%" height="100%" role="img" aria-label="Table-turn heatmap preview" preserveAspectRatio="xMidYMid slice">
      <rect width="240" height="100" fill="#161718" />
      <text x="12" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8a8f98">FRI · TURNS / HR</text>
      {Array.from({ length: 7 }).map((_, col) =>
        Array.from({ length: 4 }).map((_, row) => {
          const opacity = 0.12 + Math.random() * 0.85;
          const isHot = col >= 3 && col <= 5 && row >= 1 && row <= 2;
          return (
            <rect
              key={`${col}-${row}`}
              x={12 + col * 30}
              y={28 + row * 16}
              width="26"
              height="12"
              fill={isHot ? "#e4f222" : "#08090a"}
              stroke="#23252a"
              opacity={isHot ? 0.85 : opacity}
            />
          );
        })
      )}
      <text x="12" y="98" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#8a8f98">17:00 · 18:00 · 19:00 · 20:00 · 21:00 · 22:00 · 23:00</text>
    </svg>
  );
}

function PreviewRebook() {
  return (
    <svg viewBox="0 0 240 100" width="100%" height="100%" role="img" aria-label="Rebook SMS preview" preserveAspectRatio="xMidYMid slice">
      <rect width="240" height="100" fill="#161718" />
      <rect x="14" y="14" width="200" height="72" rx="8" fill="#08090a" stroke="#23252a" />
      <text x="22" y="30" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#8a8f98">+44 7700 · 6 weeks since color</text>
      <text x="22" y="46" fontFamily="Inter, sans-serif" fontSize="9" fill="#f7f8f8">Hi Maya — Sofia&apos;s open Tue 11:00,</text>
      <text x="22" y="58" fontFamily="Inter, sans-serif" fontSize="9" fill="#f7f8f8">Wed 16:00, or Sat 09:30.</text>
      <text x="22" y="70" fontFamily="Inter, sans-serif" fontSize="9" fill="#f7f8f8">Tap one to confirm.</text>
      <rect x="22" y="76" width="40" height="6" fill="#e4f222" />
      <rect x="68" y="76" width="40" height="6" fill="#23252a" />
      <rect x="114" y="76" width="40" height="6" fill="#23252a" />
    </svg>
  );
}

function PreviewInvoice() {
  return (
    <svg viewBox="0 0 240 100" width="100%" height="100%" role="img" aria-label="Invoice chaser draft preview" preserveAspectRatio="xMidYMid slice">
      <rect width="240" height="100" fill="#161718" />
      <text x="12" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8a8f98">QUEUE · SEND FRIDAY 09:00</text>
      {[
        { c: "Aurora Co.", d: 17, a: "$ 4,800" },
        { c: "Chen & Bell", d: 22, a: "$ 1,250" },
        { c: "Northwind", d: 31, a: "$ 9,400" }
      ].map((row, i) => (
        <g key={i}>
          <rect x="12" y={28 + i * 22} width="216" height="18" fill="#08090a" stroke="#23252a" />
          <text x="20" y={40 + i * 22} fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#f7f8f8">{row.c}</text>
          <text x="118" y={40 + i * 22} fontFamily="JetBrains Mono, monospace" fontSize="8" fill={row.d > 30 ? "#e4f222" : "#8a8f98"}>{row.d}d</text>
          <text x="160" y={40 + i * 22} fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#f7f8f8">{row.a}</text>
          <rect x="200" y={32 + i * 22} width="22" height="10" fill="#e4f222" />
          <text x="211" y={40 + i * 22} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#08090a">SEND</text>
        </g>
      ))}
    </svg>
  );
}

function PreviewChurn() {
  return (
    <svg viewBox="0 0 240 100" width="100%" height="100%" role="img" aria-label="Churn flag Slack alert preview" preserveAspectRatio="xMidYMid slice">
      <rect width="240" height="100" fill="#161718" />
      <rect x="12" y="14" width="216" height="72" fill="#08090a" stroke="#23252a" />
      <circle cx="22" cy="28" r="4" fill="#e4f222" />
      <text x="32" y="31" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#e4f222">CHURN-FLAG · 8:00 AM</text>
      <text x="22" y="46" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#f7f8f8">3 accounts at risk this week</text>
      <text x="22" y="60" fontFamily="Inter, sans-serif" fontSize="8" fill="#8a8f98">Trinket Co. · 4 signals · owner: Lena</text>
      <text x="22" y="72" fontFamily="Inter, sans-serif" fontSize="8" fill="#8a8f98">Hexagon · 3 signals · owner: Theo</text>
      <text x="22" y="80" fontFamily="Inter, sans-serif" fontSize="8" fill="#8a8f98">Dovetail · 3 signals · owner: Lena</text>
    </svg>
  );
}

function PreviewCart() {
  return (
    <svg viewBox="0 0 240 100" width="100%" height="100%" role="img" aria-label="WhatsApp abandoned cart preview" preserveAspectRatio="xMidYMid slice">
      <rect width="240" height="100" fill="#161718" />
      <rect x="14" y="14" width="200" height="72" rx="8" fill="#08090a" stroke="#23252a" />
      <circle cx="26" cy="28" r="6" fill="#27a644" />
      <text x="38" y="32" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#27a644">WHATSAPP · 9 MIN AGO</text>
      <text x="22" y="48" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#f7f8f8">Hey Sam — 2 items still in your bag</text>
      <text x="22" y="60" fontFamily="Inter, sans-serif" fontSize="8" fill="#8a8f98">Forge Hoodie · M · $ 78</text>
      <text x="22" y="70" fontFamily="Inter, sans-serif" fontSize="8" fill="#8a8f98">Trail Cap · charcoal · $ 32</text>
      <rect x="22" y="74" width="80" height="8" fill="#e4f222" />
      <text x="62" y="80" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600" fill="#08090a">5% OFF · OPEN BAG</text>
    </svg>
  );
}

function PreviewScope() {
  return (
    <svg viewBox="0 0 240 100" width="100%" height="100%" role="img" aria-label="Roofing scope-of-work email preview" preserveAspectRatio="xMidYMid slice">
      <rect width="240" height="100" fill="#161718" />
      <text x="12" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8a8f98">DRAFT · 4 PHOTOS · 3 LINE ITEMS</text>
      <rect x="12" y="26" width="48" height="32" fill="#08090a" stroke="#23252a" />
      <rect x="64" y="26" width="48" height="32" fill="#08090a" stroke="#23252a" />
      <rect x="116" y="26" width="48" height="32" fill="#08090a" stroke="#23252a" />
      <rect x="168" y="26" width="48" height="32" fill="#08090a" stroke="#23252a" />
      <text x="12" y="72" fontFamily="Inter, sans-serif" fontSize="8" fill="#f7f8f8">Tear-off &amp; haul · $ 2,100</text>
      <text x="12" y="82" fontFamily="Inter, sans-serif" fontSize="8" fill="#f7f8f8">Decking · 240 sf · $ 1,440</text>
      <text x="12" y="92" fontFamily="Inter, sans-serif" fontSize="8" fill="#e4f222">TOTAL · $ 8,260 · valid 14d</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* The page.                                                           */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <CatalogSection />
      <ToolAnatomySection />
      <PricingSection />
      <BuilderSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: 56,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        background: "rgba(12,13,14,.78)",
        borderBottom: "1px solid var(--border)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%"
        }}
      >
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <LogoMark />
          <span className="t-mono" style={{ color: "var(--fg)" }}>
            TOOLSHELF
          </span>
        </a>
        <nav
          aria-label="Primary"
          style={{ display: "flex", alignItems: "center", gap: 24 }}
          className="hide-mobile-nav"
        >
          <a href="#catalog" className="t-body" style={{ color: "var(--muted)" }}>
            Catalog
          </a>
          <a href="#verticals" className="t-body" style={{ color: "var(--muted)" }}>
            Verticals
          </a>
          <a href="#anatomy" className="t-body" style={{ color: "var(--muted)" }}>
            Anatomy
          </a>
          <a href="#pricing" className="t-body" style={{ color: "var(--muted)" }}>
            Pricing
          </a>
          <a href="#builders" className="t-body" style={{ color: "var(--muted)" }}>
            Build
          </a>
        </nav>
        <a href="#catalog" className="btn" style={{ height: 36, padding: "0 14px" }}>
          <span className="t-mono">open &gt;</span>
          <span>The shelf</span>
        </a>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .hide-mobile-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" aria-label="Toolshelf logo">
      <rect width="32" height="32" rx="6" fill="#08090a" />
      <rect x="5" y="9" width="22" height="2" fill="#e4f222" />
      <rect x="5" y="20" width="22" height="2" fill="#e4f222" />
      <rect x="9" y="11" width="3" height="9" fill="#f7f8f8" />
      <rect x="15" y="11" width="3" height="9" fill="#f7f8f8" />
      <rect x="21" y="11" width="3" height="9" fill="#f7f8f8" />
    </svg>
  );
}

function Hero() {
  const heroTools = TOOLS.slice(0, 4);
  return (
    <section id="hero" className="section" style={{ paddingTop: 64 }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 48,
            alignItems: "start"
          }}
          className="hero-grid"
        >
          <div>
            <div
              className="t-mono-sm"
              style={{
                color: "var(--accent)",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap"
              }}
            >
              <span className="dot" aria-hidden="true" />
              <span>TOOLSHELF · 8 LIVE TOOLS · WAVE 2 · 2026.05.08</span>
            </div>
            <h1 className="t-display" style={{ marginBottom: 20 }}>
              No-code, but only the tools{" "}
              <span style={{ color: "var(--accent)" }}>that work for one trade.</span>
            </h1>
            <p
              className="t-body-lg"
              style={{ color: "var(--muted)", maxWidth: 560, marginBottom: 28 }}
            >
              The no-code rainbow says &quot;build anything.&quot; You&apos;re a roofer, a
              hygienist, a salon owner — you don&apos;t want anything, you want{" "}
              <em>that one workflow</em> off your desk by Friday. Toolshelf is a catalog
              of vertical-specific micro-apps. Each tool does one job for one trade.
              Pick from the shelf, install in an afternoon, $39 a month, USDT/USDC pay,
              cancel any time.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#catalog" className="btn">
                <span className="t-mono">open &gt;</span>
                <span>Browse the 8 tools</span>
              </a>
              <a href="#anatomy" className="btn btn-ghost">
                See what&apos;s inside one
              </a>
            </div>
            <div
              className="t-mono-sm"
              style={{
                color: "var(--muted)",
                marginTop: 32,
                paddingTop: 16,
                borderTop: "1px solid var(--border)",
                display: "flex",
                gap: 18,
                flexWrap: "wrap"
              }}
            >
              <span>SKU TS-HVAC-002</span>
              <span style={{ color: "var(--border)" }}>·</span>
              <span>SKU TS-DENT-004</span>
              <span style={{ color: "var(--border)" }}>·</span>
              <span>SKU TS-REST-007</span>
              <span style={{ color: "var(--border)" }}>·</span>
              <span>SKU TS-ECOM-006</span>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12
            }}
            className="hero-preview"
          >
            {heroTools.map((t) => (
              <ToolCard key={t.sku} tool={t} compact />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .hero-preview { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ToolCard({ tool, compact = false }: { tool: Tool; compact?: boolean }) {
  return (
    <article
      className="tool-card"
      data-vertical={tool.vertical}
      aria-label={`${tool.name} (${tool.verticalLabel})`}
      style={compact ? { padding: 12, gap: 8 } : {}}
    >
      <div className="head">
        <span className="sku">{tool.sku}</span>
        <span className="price">{tool.price}</span>
      </div>
      <div className="preview">
        <tool.preview />
      </div>
      <div>
        <div
          className="name"
          style={compact ? { fontSize: 15 } : {}}
        >
          {tool.name}
        </div>
        <div
          className="t-mono-sm"
          style={{ color: "var(--muted)", marginTop: 2 }}
        >
          vertical: {tool.vertical}
        </div>
      </div>
      <p className="promise" style={compact ? { fontSize: 12.5 } : {}}>
        {tool.promise}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          marginTop: "auto"
        }}
      >
        <span
          className="t-mono-sm"
          style={{
            color: tool.status === "live" ? "var(--ok)" : "var(--warn)",
            display: "flex",
            alignItems: "center",
            gap: 6
          }}
        >
          <span
            className={tool.status === "draft" ? "dot draft" : "dot"}
            aria-hidden="true"
          />
          {tool.status === "live" ? "live" : "draft · q3"}
        </span>
        <a
          href="#pricing"
          className="btn"
          style={{
            height: 32,
            padding: "0 12px",
            fontSize: 12.5
          }}
        >
          <span className="t-mono">install &gt;</span>
        </a>
      </div>
    </article>
  );
}

function CatalogSection() {
  return (
    <section id="catalog" className="section" style={{ paddingTop: 32 }}>
      <div className="divider" aria-hidden="true" />
      <div className="container" style={{ paddingTop: 56 }}>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
            marginBottom: 24
          }}
        >
          <div>
            <div
              className="t-mono-sm"
              style={{ color: "var(--muted)", marginBottom: 8 }}
            >
              CATALOG · 7 LIVE / 1 DRAFT
            </div>
            <h2 className="t-heading-lg" style={{ marginBottom: 12 }}>
              The shelf, on display.
            </h2>
            <p
              className="t-body"
              style={{ color: "var(--muted)", maxWidth: 620 }}
            >
              Eight tools to start. Each is a working no-code template (Bubble,
              Webflow, Airtable, or Zapier-flow), branded for your business and
              wired to your existing CRM, POS, or calendar. Filter by vertical
              below — selecting a chip hides the rest. Cards never disappear
              from the catalog; they just get out of the way.
            </p>
          </div>
        </div>
        <div id="verticals" style={{ marginBottom: 24 }}>
          <CatalogFilter />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16
          }}
        >
          {TOOLS.map((t) => (
            <ToolCard key={t.sku} tool={t} />
          ))}
        </div>
        <p
          className="t-mono-sm"
          style={{
            color: "var(--muted)",
            marginTop: 28
          }}
        >
          # twelve more tools queued for q3 (TS-LAW-009 through TS-CLNC-020)
        </p>
      </div>
    </section>
  );
}

function ToolAnatomySection() {
  const parts = [
    {
      step: "01",
      name: "Input form",
      detail:
        "Embeddable on your existing site (Squarespace, WordPress, Wix). Fields are vertical-specific — for HVAC: tonnage, sqft, ductwork age, install access, brand preference."
    },
    {
      step: "02",
      name: "Pricing rules",
      detail:
        "Your real numbers, not a generic estimate. Imported from your last 90 days of jobs (CSV) or set manually with a 12-row table you maintain."
    },
    {
      step: "03",
      name: "Branded PDF / SMS / email",
      detail:
        "Logo, line items, terms, signature line. Sends through your domain, not Toolshelf's. The customer sees only your brand."
    },
    {
      step: "04",
      name: "Pay link",
      detail:
        "Stripe (existing account) or USDT/USDC via NOWPayments. Toolshelf doesn't take a cut on customer-side payments — that money goes straight to you."
    },
    {
      step: "05",
      name: "Notifier",
      detail:
        "SMS or WhatsApp on accept; Slack ping to your owner-on-call; calendar event on your Google or Microsoft account."
    },
    {
      step: "06",
      name: "Tuning notes",
      detail:
        "Once a month, a one-page note: which inputs converted, which didn't, what to adjust in the rules. Read it on the toilet, ignore the rest of the dashboard."
    }
  ];

  return (
    <section id="anatomy" className="section">
      <div className="divider" aria-hidden="true" />
      <div className="container" style={{ paddingTop: 56 }}>
        <div
          className="t-mono-sm"
          style={{ color: "var(--muted)", marginBottom: 8 }}
        >
          TOOL ANATOMY · TS-HVAC-002 · WORKED EXAMPLE
        </div>
        <h2 className="t-heading-lg" style={{ marginBottom: 12 }}>
          What&apos;s actually inside a Toolshelf tool.
        </h2>
        <p
          className="t-body"
          style={{
            color: "var(--muted)",
            maxWidth: 720,
            marginBottom: 40
          }}
        >
          Same six pieces in every tool on the shelf. Only the names of the
          parts change between verticals. Below is the HVAC quote generator
          unfolded; the dental, restaurant, and roofing tools follow the same
          shape with vertical-specific fields and rules.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 12,
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: 16,
            background: "var(--surface)"
          }}
        >
          {parts.map((p) => (
            <div
              key={p.step}
              style={{
                padding: 16,
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 6,
                display: "flex",
                flexDirection: "column",
                gap: 8
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8
                }}
              >
                <span className="sku">{p.step}</span>
                <span className="t-mono-sm" style={{ color: "var(--accent)" }}>
                  &gt;
                </span>
              </div>
              <div className="t-heading" style={{ fontSize: 17 }}>
                {p.name}
              </div>
              <p
                className="t-body"
                style={{ color: "var(--muted)", fontSize: 13.5 }}
              >
                {p.detail}
              </p>
            </div>
          ))}
        </div>
        <p
          className="t-body"
          style={{
            color: "var(--muted)",
            marginTop: 24,
            maxWidth: 720
          }}
        >
          We don&apos;t hide the no-code stack. Most tools run on Bubble, Webflow,
          Airtable, and a small Zapier flow; the more specialised ones use a
          tiny Hono service hosted on our infra. You get the project files. If
          you want to take it off Toolshelf and run it yourself, the source is
          yours — keep it, fork it, give it to your nephew.
        </p>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="section">
      <div className="divider" aria-hidden="true" />
      <div className="container" style={{ paddingTop: 56 }}>
        <div
          className="t-mono-sm"
          style={{ color: "var(--muted)", marginBottom: 8 }}
        >
          PRICING · USDT · USDC · BTC · CARD ON-RAMP
        </div>
        <h2 className="t-heading-lg" style={{ marginBottom: 12 }}>
          Three tiers. Crypto first.
        </h2>
        <p
          className="t-body"
          style={{ color: "var(--muted)", maxWidth: 640, marginBottom: 40 }}
        >
          Pay in stablecoin (USDT or USDC), Bitcoin, or with a card via the
          NOWPayments on-ramp. No card-required free trial — the first month
          is the trial, and you can cancel before the second invoice posts.
          Refund policy in §FAQ.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 16
          }}
        >
          <PriceCard
            sku="TS-PLAN-S"
            tier="Single tool"
            price="$ 39"
            cadence="/ mo · per tool"
            blurb="Pick one tool from the shelf. Install kit, monthly tuning notes, support over email. Cancel any time."
            included={[
              "1 Toolshelf tool of your choice",
              "Branded delivery on your domain",
              "Email install support (24h, weekdays)",
              "Monthly one-page tuning note",
              "Pay in USDT / USDC / BTC / card",
              "30-day refund if it doesn&apos;t fit"
            ]}
            cta={<PricingCta plan="single" label="Pay $39 · install one tool" />}
          />
          <PriceCard
            sku="TS-PLAN-B"
            tier="Vertical bundle"
            price="$ 129"
            cadence="/ mo · 5 tools, one vertical"
            blurb="Five tools from a single trade — all the HVAC ones, all the dental ones. Onboarding call, cohort tuning hour."
            included={[
              "Any 5 tools from one vertical",
              "30-min onboarding call (real human)",
              "1 tuning hour per month",
              "Vertical playbook PDF (40-60 pages)",
              "Slack channel with the cohort",
              "Pay in USDT / USDC / BTC / card",
              "30-day refund on the bundle"
            ]}
            recommended
            cta={<PricingCta plan="bundle" label="Pay $129 · install 5 tools" />}
          />
          <PriceCard
            sku="TS-PLAN-X"
            tier="Builder · publish"
            price="$ 0"
            cadence="+ 30% rev-share"
            blurb="Publish your own vertical tool. We do billing, distribution, support escalation. You keep 70%, paid monthly to your USDT wallet."
            included={[
              "Free to list, no listing fee",
              "70% rev-share, paid monthly",
              "USDT payout to your wallet",
              "We handle the customer support escalation",
              "Marketing slot in our weekly digest",
              "Apply via builders@toolshelf.cash",
              "We respond within 3 business days"
            ]}
            cta={<PricingCta plan="builder" label="Apply to publish a tool" />}
          />
        </div>
        <p
          className="t-mono-sm"
          style={{
            color: "var(--muted)",
            marginTop: 24,
            textAlign: "center"
          }}
        >
          # billing rail · NOWPayments hosted invoice · IPN-verified ·
          HMAC-SHA512
        </p>
      </div>
    </section>
  );
}

function PriceCard({
  sku,
  tier,
  price,
  cadence,
  blurb,
  included,
  recommended = false,
  cta
}: {
  sku: string;
  tier: string;
  price: string;
  cadence: string;
  blurb: string;
  included: string[];
  recommended?: boolean;
  cta: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: recommended
          ? "1px solid var(--accent)"
          : "1px solid var(--border)",
        borderRadius: 6,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        position: "relative",
        boxShadow: recommended ? "var(--shadow-md)" : "var(--shadow-sm)"
      }}
    >
      {recommended && (
        <span
          className="t-mono-sm"
          style={{
            position: "absolute",
            top: -10,
            left: 16,
            background: "var(--accent)",
            color: "var(--bg)",
            padding: "3px 8px",
            borderRadius: 4,
            letterSpacing: "0.04em"
          }}
        >
          RECOMMENDED
        </span>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <span className="sku">{sku}</span>
        <span
          className="t-mono-sm"
          style={{ color: "var(--muted)" }}
          aria-hidden="true"
        >
          //
        </span>
      </div>
      <div>
        <div className="t-heading" style={{ marginBottom: 4 }}>
          {tier}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 8,
            marginTop: 8
          }}
        >
          <span
            className="t-mono"
            style={{ fontSize: 28, color: "var(--fg)" }}
          >
            {price}
          </span>
          <span
            className="t-mono-sm"
            style={{ color: "var(--muted)" }}
          >
            {cadence}
          </span>
        </div>
      </div>
      <p
        className="t-body"
        style={{ color: "var(--muted)", fontSize: 13.5 }}
      >
        {blurb}
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8
        }}
      >
        {included.map((line, i) => (
          <li
            key={i}
            className="t-body"
            style={{
              color: "var(--fg)",
              fontSize: 13,
              display: "flex",
              gap: 8,
              alignItems: "start"
            }}
          >
            <span
              className="t-mono-sm"
              style={{ color: "var(--accent)", marginTop: 1 }}
              aria-hidden="true"
            >
              +
            </span>
            <span dangerouslySetInnerHTML={{ __html: line }} />
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "auto" }}>{cta}</div>
    </div>
  );
}

function BuilderSection() {
  const steps = [
    {
      n: "01",
      head: "Describe the workflow you&apos;d sell.",
      body:
        "Tell us: what trade, what one painful workflow, what the buyer would pay monthly. We&apos;ll tell you in 72 hours whether it fits the shelf and what SKU you get."
    },
    {
      n: "02",
      head: "Build the no-code template.",
      body:
        "We give you a brief, a mock screenshot, and the data contract. You build the Bubble / Webflow / Airtable template. Our brand reviewer signs off in one round of notes."
    },
    {
      n: "03",
      head: "Get paid · 70% of every install.",
      body:
        "We handle the catalog page, the SEO, the customer support escalation, and the billing. You get 70% of every install, paid monthly to your USDT wallet."
    }
  ];
  return (
    <section id="builders" className="section">
      <div className="divider" aria-hidden="true" />
      <div className="container" style={{ paddingTop: 56 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 48,
            alignItems: "start"
          }}
          className="builder-grid"
        >
          <div>
            <div
              className="t-mono-sm"
              style={{ color: "var(--accent)", marginBottom: 8 }}
            >
              FOR BUILDERS · TS-PLAN-X · 70 / 30
            </div>
            <h2 className="t-heading-lg" style={{ marginBottom: 12 }}>
              We pay 70% to vertical operators who publish.
            </h2>
            <p
              className="t-body"
              style={{ color: "var(--muted)", marginBottom: 16 }}
            >
              Toolshelf doesn&apos;t want to be a 200-tool platform run by twelve
              salaried generalists. The shelf is curated by the trades. If
              you&apos;re a no-code builder who knows one vertical cold —
              you ran the salon, you used to plumb, you do bookkeeping for ten
              law firms — your tool fits here better than anything we could
              ship internally.
            </p>
            <p
              className="t-body"
              style={{ color: "var(--muted)", marginBottom: 24 }}
            >
              We pay 70% of every install for the lifetime of the customer.
              Monthly USDT payout. KYC handled by NOWPayments. No exclusivity
              clause; you can also sell the same template direct elsewhere.
            </p>
            <a
              className="btn"
              href="mailto:builders@toolshelf.cash?subject=I%20want%20to%20publish%20a%20TS-%20tool&body=Vertical%3A%20%0AWorkflow%20it%20replaces%3A%20%0AStack%20I%20can%20build%20it%20on%3A%20%28Bubble%2FWebflow%2FAirtable%2FZapier%2FOther%29%0AFair%20monthly%20price%3A%20%24"
            >
              <span className="t-mono">apply &gt;</span>
              <span>Apply to publish</span>
            </a>
          </div>
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12
            }}
          >
            {steps.map((s) => (
              <li
                key={s.n}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 6,
                  padding: 20,
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 20,
                  alignItems: "start"
                }}
              >
                <span
                  className="t-mono"
                  style={{
                    fontSize: 32,
                    color: "var(--accent)",
                    lineHeight: 1
                  }}
                >
                  {s.n}
                </span>
                <div>
                  <div
                    className="t-heading"
                    style={{ fontSize: 18, marginBottom: 4 }}
                    dangerouslySetInnerHTML={{ __html: s.head }}
                  />
                  <p
                    className="t-body"
                    style={{ color: "var(--muted)", fontSize: 13.5 }}
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
        <style>{`
          @media (max-width: 1024px) {
            .builder-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs: { q: string; a: string }[] = [
    {
      q: "What if my vertical isn&apos;t on the shelf yet?",
      a: "Email founders@toolshelf.cash with the workflow and we&apos;ll tell you in 72 hours whether we can ship a tool for it in 6 weeks. We add about 4 new SKUs a quarter."
    },
    {
      q: "How fast is install?",
      a: "Most tools install in an afternoon (2-4 hours of your time, usually with a small CSV import and a Zapier auth). Bundles take a half-day with the onboarding call."
    },
    {
      q: "Can I get a refund?",
      a: "Yes. 30 days, full refund, no questions on the single-tool tier. Bundle: full refund within 30 days minus $30 onboarding-call cost. Builder tier: not applicable (you don&apos;t pay)."
    },
    {
      q: "Do I own the no-code template?",
      a: "Yes. The Bubble / Webflow / Airtable project files are yours. If you cancel, you keep them and keep the brand assets we made for you. The catalog listing and the marketing slot are what go away."
    },
    {
      q: "Why crypto first? I just want to pay with a card.",
      a: "You can. NOWPayments routes a card-to-stablecoin on-ramp at the same checkout — pick &apos;card&apos; on the invoice page. We default to USDT/USDC because it costs us less and we pass the saving on (no $39 + 30% Stripe drag)."
    },
    {
      q: "What about KYC for the builder rev-share payout?",
      a: "NOWPayments handles it. You give them a USDT wallet and a passport scan once; we never touch your KYC documents. Payouts run monthly on the 5th."
    },
    {
      q: "Is this a no-code platform or a no-code agency?",
      a: "Neither. It&apos;s a catalog. The platform is a thin shelf — billing, install, monthly tuning. The agencies built the templates. The trades buy them. Toolshelf is the shop in the middle."
    },
    {
      q: "What happens to my tool if Toolshelf disappears?",
      a: "You still have the no-code project files (Bubble, Webflow, Airtable, Zapier). Your customer billing stops; you can move it to your own Stripe in a weekend. Your data is yours; we don&apos;t hold it hostage."
    }
  ];
  return (
    <section id="faq" className="section">
      <div className="divider" aria-hidden="true" />
      <div className="container" style={{ paddingTop: 56 }}>
        <div
          className="t-mono-sm"
          style={{ color: "var(--muted)", marginBottom: 8 }}
        >
          FAQ · 8 QUESTIONS THAT ACTUALLY GET ASKED
        </div>
        <h2 className="t-heading-lg" style={{ marginBottom: 32 }}>
          The straight answers.
        </h2>
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 6,
            background: "var(--surface)",
            overflow: "hidden"
          }}
        >
          {faqs.map((f, i) => (
            <details
              key={i}
              style={{
                borderTop: i === 0 ? "none" : "1px solid var(--border)",
                padding: "16px 20px"
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  fontSize: 15.5,
                  fontWeight: 510,
                  color: "var(--fg)",
                  letterSpacing: "-0.005em"
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: f.q }} />
                <span
                  className="t-mono"
                  aria-hidden="true"
                  style={{ color: "var(--accent)", fontSize: 15 }}
                >
                  +
                </span>
              </summary>
              <p
                className="t-body"
                style={{
                  color: "var(--muted)",
                  marginTop: 12,
                  maxWidth: 680
                }}
                dangerouslySetInnerHTML={{ __html: f.a }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        marginTop: 64,
        borderTop: "1px solid var(--border)",
        background: "var(--surface)"
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: 64,
          paddingBottom: 48,
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 32
        }}
      >
        <div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}
          >
            <LogoMark />
            <span className="t-mono" style={{ color: "var(--fg)" }}>
              TOOLSHELF
            </span>
          </div>
          <p
            className="t-body"
            style={{
              color: "var(--muted)",
              maxWidth: 320,
              fontSize: 13
            }}
          >
            A catalog of vertical-specific no-code tools. One tool per niche
            pain point. Pick from the shelf, install in an afternoon, pay in
            stablecoin, cancel any time.
          </p>
        </div>
        <FooterCol
          head="CATALOG"
          links={[
            ["TS-HVAC-002 · Quote generator", "#catalog"],
            ["TS-DENT-004 · No-show predictor", "#catalog"],
            ["TS-REST-007 · Table-turn", "#catalog"],
            ["TS-SALN-001 · Rebook reminder", "#catalog"],
            ["TS-AGEN-003 · Invoice chaser", "#catalog"],
            ["TS-SAOPS-005 · Churn flag", "#catalog"],
            ["TS-ECOM-006 · Cart-to-WhatsApp", "#catalog"],
            ["TS-ROOF-008 · Scope emailer (q3)", "#catalog"]
          ]}
        />
        <FooterCol
          head="FOR BUILDERS"
          links={[
            ["Publish a tool", "#builders"],
            ["Payouts in USDT", "#builders"],
            ["IPN webhook spec", "/api/webhooks/nowpayments"],
            ["KYC handled by NOWPayments", "#faq"],
            ["builders@toolshelf.cash", "mailto:builders@toolshelf.cash"]
          ]}
        />
        <FooterCol
          head="LEGAL · CONTACT"
          links={[
            ["Refund policy · 30 days", "#faq"],
            ["Source-code ownership", "#faq"],
            ["orders@toolshelf.cash", "mailto:orders@toolshelf.cash"],
            ["founders@toolshelf.cash", "mailto:founders@toolshelf.cash"],
            ["Status · all systems live", "#hero"]
          ]}
        />
      </div>
      <div
        className="container"
        style={{
          padding: "20px 24px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12
        }}
      >
        <span
          className="t-mono-sm"
          style={{
            color: "var(--muted)",
            letterSpacing: "0.06em"
          }}
        >
          TOOLSHELF · A CATALOG OF SHARP TOOLS · MMXXVI
        </span>
        <span
          className="t-mono-sm"
          style={{ color: "var(--muted)" }}
        >
          Wave 2 · prin7r-projects/no-code-vertical-tools · v0.1.0
        </span>
      </div>
      <style>{`
        @media (max-width: 920px) {
          footer .container { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          footer .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({
  head,
  links
}: {
  head: string;
  links: [string, string][];
}) {
  return (
    <div>
      <div
        className="t-mono-sm"
        style={{
          color: "var(--muted)",
          marginBottom: 12,
          letterSpacing: "0.06em"
        }}
      >
        {head}
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8
        }}
      >
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="t-body"
              style={{ color: "var(--fg)", fontSize: 13.5 }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
