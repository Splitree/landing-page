# Handl Landing Page

A modern landing experience for **Handl**—the expense sharing companion that helps teams, friends, and families split costs without the awkward math.

![Handl Landing Page](public/logo_icon.png)

## 🚀 Overview

This project rebrands the original Splitree marketing site into Handl’s beta launch page. It spotlights a new visual language inspired by the mobile app, complete with:

- A floating iPhone mockup showcasing the Handl home screen
- A four-step guided flow that mirrors how users split expenses inside the app
- A prominent beta sign-up funnel that links directly to the live waitlist form
- Warm cream and pine green accents that align with the in-app design

## ✨ What’s New

- **Handl Branding** – Updated typography, palette, and copy across the experience
- **Beta CTA Everywhere** – All primary CTAs send users to the beta registration form
- **Four-Step Storytelling** – The features section now mirrors real usage: link card, tap a transaction, snap a receipt, and write a prompt
- **Polished Mockups** – Consistent card heights, tailored micro-illustrations, and a realistic receipt + AI prompt preview
- **Modern Layout** – Hero badge, stat tiles, gradients, and floating cards that match the app aesthetic

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with the App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com) extended with Handl’s brand tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for scroll and hover interactions
- **Icons**: [Heroicons](https://heroicons.com) for crisp SVG iconography
- **Fonts**: Nunito + Inter/Inter Tight via `next/font`
- **TypeScript**: End-to-end typing for maintainability
- **Deployment**: Works with any modern platform (Vercel, Netlify, Render, etc.)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- A package manager: npm, yarn, pnpm, or bun

### Installation

```bash
git clone <repository-url>
cd handl-landing-page

# install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

# run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to preview the page.

## 📁 Project Structure

```
├── public/
│   ├── logo_icon.png          # Handl icon
│   └── home_screen.jpeg       # App mockup used in the hero
├── src/
│   └── app/
│       ├── globals.css        # Tailwind layers + custom utilities
│       ├── layout.tsx         # Root layout with font setup
│       └── page.tsx           # Landing page markup & animations
├── tailwind.config.ts         # Extended brand palette and tokens
├── next.config.ts             # Next.js configuration
└── package.json               # Scripts & dependencies
```

## 🎨 Design Highlights

- **Hero Section**
  - “Beta Now Available” badge
  - Floating iPhone mockup with layered orbs and animated cards
  - Primary CTA linking directly to the beta form
- **Steps Section**
  - Four consistent cards describing the Handl flow (link, tap, snap, prompt)
  - Visual mockups for each step with matched sizing
- **Beta Signup Section**
  - Gradient background, benefits grid, and a Google Forms CTA
  - Live stats showing tester momentum
- **Testimonials (Optional)**
  - Commented-out block ready for real user quotes when available

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Bundle production assets
npm run start    # Run production build locally
npm run lint     # Check for lint issues
```

## 🎯 Customization Tips

- **Brand Colors & Tokens** – Adjust the `colors`, `boxShadow`, and `spacing` extensions in `tailwind.config.ts`.
- **Copy & CTA Links** – Update headlines, supporting text, and the beta URL in `src/app/page.tsx`.
- **Animations** – Fine-tune Framer Motion easing, durations, and delays within the component.

## 🔗 API Redirects

The landing page is configured to redirect `/beta` requests to your backend API:

- **Route**: `/beta` and `/beta/*`
- **Target**: `https://backend-production-3a62.up.railway.app/beta`
- **Configuration**: See `netlify.toml` for redirect rules

### Environment Variables

To change the backend URL:

1. Go to your Netlify dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add/update `BACKEND_URL` with your backend URL
4. Redeploy your site

Current backend: [https://backend-production-3a62.up.railway.app](https://backend-production-3a62.up.railway.app)

## 📱 About Handl

Handl is the effortless way to keep groups financially in sync:

- Link a card once and auto-track shared expenses
- Tap any transaction and split without manual entry
- Snap receipts for cash purchases and let OCR do the work
- Type natural language prompts when you need a custom split
- Settle up without awkward back-and-forth

---

Built with ❤️ for the Handl beta launch using Next.js, Tailwind CSS, and Framer Motion. 💚
