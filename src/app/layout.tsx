import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MapleList — Buy Canadian",
  description:
    "Discover and buy Canadian-made products. Find Canadian alternatives to foreign brands across food, clothing, tech, home goods, beauty, and more.",
  keywords: [
    "buy Canadian",
    "made in Canada",
    "Canadian products",
    "Canadian brands",
    "Canadian alternatives",
    "support local",
  ],
  openGraph: {
    title: "MapleList — Buy Canadian",
    description:
      "Discover and buy Canadian-made products. Find Canadian alternatives to foreign brands.",
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
