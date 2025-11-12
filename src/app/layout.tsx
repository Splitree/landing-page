import type { Metadata } from "next";
import { Inter, Nunito, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Handl - Split Expenses, Not Friendships",
  description: "Handl is the intelligent, real-time expense sharing app that makes splitting costs seamless, automatic, and stress-free.",
  icons: {
    icon: '/logo_icon.png',
    shortcut: '/logo_icon.png',
    apple: '/logo_icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${nunito.variable} ${interTight.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/logo_icon.png" />
      </head>
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
