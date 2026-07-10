import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "World of Flavors Food Park — Salem, Oregon",
    template: "%s · World of Flavors",
  },
  description: site.description,
  keywords: [
    "food cart park",
    "Salem Oregon",
    "shawarma",
    "poke",
    "Hawaiian food",
    "street food",
  ],
  openGraph: {
    title: "World of Flavors Food Park",
    description: site.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
