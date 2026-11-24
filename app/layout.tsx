import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "NOVALINK — Engineering the future.", template: "%s · NOVALINK" },
  description:
    "NOVALINK is a fictional next-generation technology studio for AI systems, software engineering, digital infrastructure and intelligent automation.",
  keywords: ["NOVALINK", "AI systems", "software engineering", "digital infrastructure", "automation"],
  openGraph: { type: "website", url: siteUrl, siteName: "NOVALINK", title: "NOVALINK — Build what's next.", description: "Engineering the future through intelligent systems, software and infrastructure." },
  twitter: { card: "summary_large_image", title: "NOVALINK — Build what's next." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#05070e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
