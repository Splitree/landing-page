# Splitree Landing Page

A modern, animated landing page for Splitree - the intelligent expense splitting app that automates group cost management.

🚀 **[View Live Site](https://splitree-landing.netlify.app/)**

![Splitree Landing Page](public/logo_icon.png)

## 🚀 Overview

Splitree is designed to make splitting costs seamless, automatic, and emotionally effortless. This landing page showcases the app's features with beautiful animations and interactive elements, built with modern web technologies.

## ✨ Features

- **Modern Design**: Clean, professional interface with subtle animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Engaging hover effects and micro-interactions
- **Animated Components**: Smooth animations powered by Framer Motion
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **Accessible**: Designed with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth animations
- **Icons**: [Heroicons](https://heroicons.com) for beautiful SVG icons
- **TypeScript**: Full TypeScript support for type safety
- **Font**: Optimized font loading with `next/font`
- **Deployment**: [Netlify](https://netlify.com) with automatic deployments

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd splitree-landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## 📁 Project Structure

```
├── public/
│   ├── logo_icon.png          # Splitree logo
│   └── images/                # Static images
├── src/
│   └── app/
│       ├── globals.css        # Global styles and Tailwind imports
│       ├── layout.tsx         # Root layout component
│       └── page.tsx           # Main landing page component
├── tailwind.config.ts         # Tailwind CSS configuration
├── next.config.ts             # Next.js configuration
├── netlify.toml               # Netlify deployment configuration
└── package.json               # Project dependencies and scripts
```

## 🎨 Key Components

### Hero Section
- Animated hero text with gradient effects
- Interactive "Coming Soon" badge
- Animated app preview mockup
- Floating notification elements

### How It Works Section
- Interactive step selector
- Animated step indicators
- Dynamic content preview
- Smooth transitions between steps

### Features Section
- Grid layout of app features
- Hover animations on feature cards
- Icon animations and effects

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Customization

### Colors
The app uses a green-focused color palette defined in `tailwind.config.ts`. You can customize the colors by modifying the `colors` section.

### Animations
Animations are handled by Framer Motion. You can customize animation timing, easing, and effects in the component files.

### Content
Update the landing page content by editing the arrays and text in `src/app/page.tsx`.

## 🚀 Deployment

This project is deployed on [Netlify](https://netlify.com) and is live at:
**[https://splitree-landing.netlify.app/](https://splitree-landing.netlify.app/)**

## 📱 About Splitree

Splitree is an intelligent, real-time travel and group expense app that:

- **Automates expense tracking** with card sync and receipt scanning
- **Smart splitting** using AI to determine fair cost distribution
- **Eliminates awkwardness** with automatic calculations and suggestions
- **Optimizes settlements** to minimize the number of transactions needed
- **Provides real-time updates** so everyone stays in sync

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
