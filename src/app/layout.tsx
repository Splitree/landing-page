import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Handl - Split Expenses",
  description: "Handl is the intelligent, real-time expense sharing app that makes splitting costs seamless, automatic, and stress-free.",
  icons: {
    icon: { url: '/logo_icon.png', type: 'image/png' },
    shortcut: { url: '/logo_icon.png', type: 'image/png' },
    apple: { url: '/logo_icon.png' },
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
        <link rel="icon" type="image/svg+xml" href="/logo_icon.svg" />
        </head>
        <body className="antialiased font-sans bg-brand-background text-brand-text-primary">{children}</body>
    </html>
  );
}
