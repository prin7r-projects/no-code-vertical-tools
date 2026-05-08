# Toolshelf — `no-code-vertical-tools`

> A catalog of vertical-specific no-code micro-apps. One tool per niche pain point. Pick from the shelf, install in an afternoon, pay in stablecoin, cancel any time.

- **Live landing**: https://no-code-vertical-tools.prin7r.com
- **Notion opportunity**: https://www.notion.so/3543ceec26198141b8e0de8bbe07001f
- **Wave**: 2 · **Stack**: SaaS · **Status**: landing live, app folder stubbed
- **Brand**: Toolshelf — workshop-black canvas, persimmon accent, Inter + JetBrains Mono pair
- **Design canon**: [`DESIGN.md`](DESIGN.md) (15 sections)

## Repo structure

```
.
├── DESIGN.md                  Canonical design + style guide (15 sections)
├── README.md                  This file
├── LICENSE                    MIT
├── .env.example               Variable names only — live keys live in /opt/prin7r-deploys/<slug>/.env
├── docker-compose.yml         Single landing service, Traefik labels, env_file: .env
├── Dockerfile.landing         Next.js 15 standalone multistage build
├── docs/
│   ├── 01-brand-identity.md
│   ├── 02-architecture.md     (mermaid system diagram)
│   ├── 03-user-journeys.md
│   ├── 04-pain-points.md
│   ├── 05-audience-profile.md
│   ├── 06-sales-channels.md
│   ├── 07-sales-strategy.md
│   ├── 08-marketing-strategy.md
│   ├── 09-go-to-market.md
│   ├── 10-pitch-deck.md       (paired with pitch-deck.html)
│   ├── pitch-deck.html        (single-file deck, opens in any browser)
│   └── screenshots/           (landing-desktop.png + landing-mobile.png)
├── apps/
│   ├── landing/               Next.js 15 + Tailwind (real catalog, real prices, NOWPayments crypto CTA)
│   └── app/                   Open-SaaS scaffold (stubbed — full SaaS app ships in a later wave)
└── .github/workflows/
    └── landing-build.yml      next build sanity-check on PR / push
```

## The 8 tools on the shelf

| SKU | Vertical | Tool | Status |
|---|---|---|---|
| `TS-HVAC-002` | HVAC | Quote generator (form → branded PDF in 60s) | live |
| `TS-DENT-004` | Dental | No-show predictor (risk score + SMS reminder) | live |
| `TS-REST-007` | Restaurant | Table-turn optimizer (POS → reseat plan) | live |
| `TS-SALN-001` | Salon / spa | Rebook reminder (6-week SMS, 1-tap confirm) | live |
| `TS-AGEN-003` | Agency | Invoice chaser (Xero/FreshBooks → drafted escalations) | live |
| `TS-SAOPS-005` | SaaS-ops | Churn flag (Stripe + Posthog + inbox → Slack alert) | live |
| `TS-ECOM-006` | E-commerce | Cart-to-WhatsApp (Shopify abandoned → 9-min nudge) | live |
| `TS-ROOF-008` | Roofing | Scope-of-work emailer (photos → priced email) | draft · q3 |

## Pricing

- **Single tool** — $39 / mo per tool installed
- **Vertical bundle** — $129 / mo for any 5 tools from one vertical
- **Builder** — $0 + 30% rev-share (publish your own tool to the catalog)

All paid tiers checkout via NOWPayments hosted invoice (USDT / USDC / BTC + card on-ramp). Builder tier is rev-share-only — apply by email.

## Dev quickstart

```bash
cd apps/landing
pnpm install
cp ../../.env.example ../../.env  # populate from /Users/keer/.nth-kir-keys.env (private)
pnpm dev                          # localhost:3000
```

To exercise the checkout endpoint locally:

```bash
curl -X POST http://localhost:3000/api/checkout/nowpayments \
  -H 'content-type: application/json' \
  -d '{"plan":"single"}'
```

Without `NOWPAYMENTS_API_KEY` it returns HTTP 503 with a visible "missing_env" error so the visitor sees the operator gap instead of a silent failure. Once `.env` is populated it returns a real `invoice_url` and `invoice_id`.

## Deploy

`storage-contabo:/opt/prin7r-deploys/no-code-vertical-tools/`

```bash
ssh storage-contabo
cd /opt/prin7r-deploys/no-code-vertical-tools
git pull
docker compose build
docker compose up -d
```

The `.env` on the host is gitignored and provisioned out-of-band from the Wave 2 keys consolidated at `/Users/keer/.nth-kir-keys.env`. The `chatbot-agency` deploy is the canonical NOWPayments key source — values are mirrored across Wave 2 builds.

## Screenshots

![desktop landing](docs/screenshots/landing-desktop.png)

![mobile landing](docs/screenshots/landing-mobile.png)

## License

MIT — see [`LICENSE`](LICENSE).
