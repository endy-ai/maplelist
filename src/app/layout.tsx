import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MapleList — Where Canada Builds",
  description:
    "The home for Canadian startups, talent, and investors. Discover opportunities, connect with founders, and grow the Canadian tech ecosystem.",
  keywords: ["startups", "Canada", "jobs", "investors", "talent", "tech"],
  openGraph: {
    title: "MapleList — Where Canada Builds",
    description:
      "The home for Canadian startups, talent, and investors.",
    url: "https://maplelist.ca",
    siteName: "MapleList",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
