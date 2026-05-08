"use client";

/**
 * [TRADETOOLSET_CHECKOUT_CTA] Client component for tier checkout.
 *
 * On click, POSTs to /api/checkout/nowpayments with { plan }, then redirects
 * to the returned NOWPayments hosted invoice URL. Same UX pattern as the
 * other Wave 2 builds (chatbot-agency, market-research-on-demand).
 *
 * Behaviour on missing env (HTTP 503): show inline "Email us" fallback so the
 * page never silently fails — the operator gap is visible to the visitor.
 */

import { useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "error"; message: string; missingEnv?: boolean }
  | { kind: "ok"; invoiceUrl: string };

export function PricingCta({
  plan,
  label,
  variant = "primary"
}: {
  plan: "single" | "bundle" | "builder";
  label?: string;
  variant?: "primary" | "ghost";
}) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const isLoading = status.kind === "loading";
  const className = [
    "btn",
    "btn-block",
    variant === "ghost" ? "btn-ghost" : ""
  ]
    .filter(Boolean)
    .join(" ");

  async function handleClick() {
    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/checkout/nowpayments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ plan })
      });
      const data = (await res.json().catch(() => ({}))) as {
        invoice_url?: string;
        error?: string;
        message?: string;
        missing?: string;
      };

      if (!res.ok) {
        if (res.status === 503) {
          setStatus({
            kind: "error",
            missingEnv: true,
            message:
              data.message ||
              "Crypto checkout is being wired right now. Email orders@tradetoolset.com and we'll send the invoice manually."
          });
          return;
        }
        setStatus({
          kind: "error",
          message:
            data.message ||
            `Checkout returned HTTP ${res.status}. Try again or email orders@tradetoolset.com.`
        });
        return;
      }

      if (data.invoice_url) {
        setStatus({ kind: "ok", invoiceUrl: data.invoice_url });
        window.location.href = data.invoice_url;
        return;
      }

      setStatus({
        kind: "error",
        message: "No invoice URL returned. Please email orders@tradetoolset.com."
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Network error";
      setStatus({
        kind: "error",
        message: `Could not reach checkout: ${msg}. Email orders@tradetoolset.com.`
      });
    }
  }

  if (plan === "builder") {
    // Builder tier doesn't take payment — it opens an apply email.
    return (
      <a
        className={className}
        href="mailto:builders@tradetoolset.com?subject=I%20want%20to%20publish%20a%20TT-%20tool&body=Vertical%3A%20%0AWorkflow%20it%20replaces%3A%20%0AStack%20I%20can%20build%20it%20on%3A%20%28Bubble%2FWebflow%2FAirtable%2FZapier%2FOther%29%0AFair%20monthly%20price%3A%20%240.00"
      >
        <span className="t-mono">apply &gt;</span>
        <span>{label ?? "Apply to publish"}</span>
      </a>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <button
        type="button"
        className={className}
        onClick={handleClick}
        disabled={isLoading}
        aria-label={`Pay for ${plan} plan with crypto via NOWPayments`}
      >
        <span className="t-mono">pay &gt;</span>
        <span>
          {isLoading
            ? "opening invoice…"
            : label ?? "Pay with USDT / USDC / BTC"}
        </span>
      </button>
      {status.kind === "error" && (
        <p
          className="t-mono-sm"
          style={{
            color: status.missingEnv ? "var(--warn)" : "var(--accent)",
            margin: 0,
            lineHeight: 1.4
          }}
        >
          {status.message}
        </p>
      )}
    </div>
  );
}
