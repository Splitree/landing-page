import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/logo_icon.png" />
      </head>
      <body className="antialiased font-sans bg-brand-background text-brand-text-primary">{children}</body>
    </html>
  );
}
