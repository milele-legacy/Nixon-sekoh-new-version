import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nixon Sekoh — Speaker · Leader · Change Maker",
  description:
    "Nixon Sekoh is a catalyst for positive change, Head of NGO & Embassies at Equity Bank Kenya, champion for men who have faced adversity, and a master weaver of strategic alliances.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
