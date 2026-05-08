# `apps/app` — TradeToolset operator dashboard (stubbed)

This folder is intentionally empty for Wave 2.

When the SaaS dashboard ships (Wave 3 or later), it will be a fork of [`wasp-lang/open-saas`](https://github.com/wasp-lang/open-saas) configured with:

- Email + Google auth (Wasp default)
- Postgres on the same Coolify host as the landing
- The TradeToolset palette, typography, and component policy from `/DESIGN.md`
- Order persistence wired into `/api/webhooks/nowpayments` (currently a logging stub on the landing)
- Per-tool install wizard (Bubble auth, Webflow auth, Airtable PAT, Zapier OAuth)
- Builder portal (publish a tool, payout history, KYC status from NOWPayments)

The landing's NOWPayments checkout already produces a real, IPN-verified invoice — the dashboard's job is to turn the verified order into an installed tool. Until that ships, the install step is handled manually over email by `orders@tradetoolset.com`.
