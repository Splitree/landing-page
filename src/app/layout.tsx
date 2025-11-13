import type { Metadata } from "next";
import "./globals.css";

const appTitle = "Handl";
const appDescription = "Smart, automatic bill splitting with AI. Manage expenses effortlessly with friends.";

export const metadata: Metadata = {
  title: appTitle,
  description: appDescription,
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
        </head>
        <body className="antialiased font-sans bg-brand-background text-brand-text-primary">
          {/* Hidden form for Netlify to detect at build time */}
          <form name="beta-signup" method="POST" data-netlify="true" hidden>
            <input type="hidden" name="form-name" value="beta-signup" />
            <input type="text" name="name" />
            <input type="email" name="email" />
          </form>
          {children}
        </body>
    </html>
  );
}
