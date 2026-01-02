import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pravin Sakhare - Cloud & DevOps Engineer",
  description: "AWS Certified Cloud Practitioner and DevOps Engineer specializing in cloud infrastructure, automation, and system administration. Portfolio showcasing AWS projects and technical expertise.",
  keywords: ["AWS", "Cloud Engineer", "DevOps", "Cloud Infrastructure", "Pravin Sakhare"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
