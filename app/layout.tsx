import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Privacy Policy – Discover Vijayapura",
  description: "Learn how Discover Vijayapura collects, uses, and protects your personal information. Last updated 7 November 2026.",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
