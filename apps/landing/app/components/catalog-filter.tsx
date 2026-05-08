"use client";

/**
 * [TRADETOOLSET_CATALOG_FILTER] Client component to filter ToolCards by vertical.
 *
 * The page renders all ToolCards with a data-vertical attribute. This component
 * controls visibility via a class on a wrapping <div>. No SPA — pure CSS
 * class toggle. Default: all filters active.
 */

import { useState } from "react";

const VERTICALS = [
  { id: "all", label: "all" },
  { id: "hvac", label: "hvac" },
  { id: "dental", label: "dental" },
  { id: "restaurant", label: "restaurant" },
  { id: "saas-ops", label: "saas-ops" },
  { id: "agency-ops", label: "agency-ops" },
  { id: "ecommerce", label: "e-commerce" }
] as const;

type V = (typeof VERTICALS)[number]["id"];

export function CatalogFilter() {
  const [active, setActive] = useState<V>("all");

  function pick(v: V) {
    setActive(v);
    // Toggle visibility on every tool card on the page
    if (typeof document === "undefined") return;
    const cards = document.querySelectorAll<HTMLElement>("[data-vertical]");
    cards.forEach((el) => {
      const vert = el.getAttribute("data-vertical") || "";
      el.style.display = v === "all" || vert === v ? "" : "none";
    });
  }

  return (
    <div
      role="tablist"
      aria-label="Filter catalog by vertical"
      style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
    >
      {VERTICALS.map((v) => (
        <button
          key={v.id}
          type="button"
          role="tab"
          aria-selected={active === v.id}
          data-active={active === v.id}
          className="chip"
          onClick={() => pick(v.id)}
        >
          {active === v.id && <span className="dot" aria-hidden="true" />}
          <span>vertical: {v.label}</span>
        </button>
      ))}
    </div>
  );
}
