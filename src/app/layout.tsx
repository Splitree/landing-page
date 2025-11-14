import type { Metadata } from "next";
import "./globals.css";

const appTitle = "Handl";
const appDescription = "Smart, automatic bill splitting with AI. Manage expenses effortlessly with friends.";

export const metadata: Metadata = {
  title: appTitle,
  description: appDescription,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1F1A' },
  ],
  appleWebApp: {
    statusBarStyle: 'default',
  },
  icons: {
    icon: { url: '/logo_icon.png', type: 'image/png' },
    shortcut: { url: '/logo_icon.png', type: 'image/png' },
    apple: { url: '/logo_icon.png' },
  },
  openGraph: {
    title: appTitle,
    description: appDescription,
    url: "https://usehandl.ca",
    type: "website",
    images: [
      {
        url: "https://usehandl.ca/handle_app_logo.png",
        width: 1200,
        height: 630,
        alt: "Handl Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appTitle,
    description: appDescription,
    images: ["https://usehandl.ca/handle_app_logo.png"],
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
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0A1F1A" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        </head>
        <body className="antialiased font-sans bg-brand-background text-brand-text-primary">
          {children}
        </body>
    </html>
  );
}
