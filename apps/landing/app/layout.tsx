import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Toolshelf — a catalog of vertical-specific no-code tools. One job each.",
  description:
    "Toolshelf is a catalog of no-code micro-apps built for one job in one trade. HVAC quote generator. Dental no-show predictor. Restaurant table-turn optimizer. Install in an afternoon, $39/mo per tool, USDT/USDC checkout, cancel anytime.",
  metadataBase: new URL("https://no-code-vertical-tools.prin7r.com"),
  openGraph: {
    title: "Toolshelf — no-code, but only the tools that work for one trade",
    description:
      "A catalog of vertical-specific no-code micro-apps. Pick a tool, install it, use it Tuesday. USDT/USDC pay.",
    url: "https://no-code-vertical-tools.prin7r.com",
    siteName: "Toolshelf",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
