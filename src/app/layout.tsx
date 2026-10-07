import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { inter, display } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Pravin Sakhare - Cloud Operations Engineer",
  description:
    "Cloud operations professional focused on SaaS production operations, AWS, Kubernetes, incident management and monitoring.",
  metadataBase: new URL("https://gzzmonk.space"),
  openGraph: {
    title: "Pravin Sakhare - Cloud Operations Engineer",
    description:
      "Cloud operations professional focused on SaaS production operations, AWS, Kubernetes, incident management and monitoring.",
    url: "https://gzzmonk.space",
  },
  keywords: ["AWS", "Cloud Operations", "DevOps", "SRE", "Kubernetes", "Pravin Sakhare"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${display.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
