import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Handl Theme
        primary: {
          0: '#f0fdf4',
          50: '#dcfce7',
          100: '#bbf7d0',
          200: '#86efac',
          300: '#4ade80',
          400: '#22c55e',
          500: '#16a34a',
          600: '#15803d',
          700: '#166534',
          800: '#14532d',
          900: '#052e16',
          950: '#021810',
        },
        secondary: {
          0: '#f9fafb',
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#4b5563',
          600: '#374151',
          700: '#1f2937',
          800: '#111827',
          900: '#0f172a',
          950: '#020617',
        },
        // Warm cream color palette
        cream: {
          background: '#F7F0E6',
          'background-alt': '#F5EEDC',
          panel: '#FBF7EE',
          card: '#F4EEE1',
          highlight: '#F9F3E4',
        },
        pine: {
          DEFAULT: '#0B3A32',
          alt: '#0A3B32',
        },
        charcoal: {
          DEFAULT: '#2E2E2E',
        },
        accent: {
          teal: '#0B7D6A',
          coral: '#EA6A38',
        },
        // New color scheme - based on design image
        brand: {
          background: '#F8F7F3',
          primary: '#1A3633',
          'text-primary': '#1A3633',
          'text-secondary': '#8C9B99',
          'text-tertiary': '#9ca3af',
          'text-dark': '#1A3633',
          'card-bg': '#FFFFFF',
          'icon-bg-light': '#f0f9f6',
          'icon-bg': '#e5e7eb',
          border: '#e5e7eb',
          'border-subtle': '#f0f0f0',
          accent: '#D4AF37',
          'accent-gold': '#D4AF37',
          selected: '#1A3633',
          'selected-text': '#ffffff',
          'shadow-card': 'rgba(0, 0, 0, 0.06)',
          'shadow-button': 'rgba(26, 54, 51, 0.15)',
          'success-soft': '#2BAA7A',
          'error-soft': '#E06B6B',
          'amount-owed': '#15803d',
          'amount-owe': '#991b1b',
        },
      },
      fontFamily: {
        heading: ['"Nunito"', '"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
        inter: ['"Inter"', 'system-ui', 'sans-serif'],
        'inter-tight': ['"Inter"', 'system-ui', 'sans-serif'],
        nunito: ['"Nunito"', 'system-ui', 'sans-serif'],
        sans: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        extrablack: '950',
      },
      fontSize: {
        '2xs': '10px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
      },
      boxShadow: {
        'hard-1': '-2px 2px 8px 0px rgba(2, 6, 23, 0.20)',
        'hard-2': '0px 3px 10px 0px rgba(2, 6, 23, 0.20)',
        'hard-3': '2px 2px 8px 0px rgba(2, 6, 23, 0.20)',
        'hard-4': '0px -3px 10px 0px rgba(2, 6, 23, 0.20)',
        'hard-5': '0px 2px 10px 0px rgba(2, 6, 23, 0.10)',
        'soft-1': '0px 0px 10px rgba(2, 6, 23, 0.1)',
        'soft-2': '0px 0px 20px rgba(2, 6, 23, 0.2)',
        'soft-3': '0px 0px 30px rgba(2, 6, 23, 0.1)',
        'soft-4': '0px 0px 40px rgba(2, 6, 23, 0.1)',
        'green': '0px 4px 14px 0px rgba(22, 163, 74, 0.25)',
        'green-lg': '0px 10px 25px -3px rgba(22, 163, 74, 0.3)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        'card-gap': '16px',
        'screen-padding': '20px',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 