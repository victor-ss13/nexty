# Nexty Website — Mobile-First MVP

A polished, mobile-first website for **Nexty**, an innovative AI-powered lifestyle and social concierge connecting individuals with enriching daily activities, cultural walks, coffee meetups, and meaningful friendships.

Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**, strictly tailored according to the official Figma design tokens and mobile-first specifications.

---

## 🎯 Project Overview & Scope

This project implements a high-converting, mobile-first presentation website with three central interactions:

1. **Call Me Now**:
   - Clean, accessible modal/bottom-sheet capturing the visitor's phone number with real-time validation.
   - Triggers an internal serverless API route (`/api/call-me-now`) with optional webhook alerts (Discord, Slack, Telegram, or Zapier/Make) to immediately notify the team for follow-up.
2. **Book a Call**:
   - Seamless pop-up modal embedding the official Calendly scheduling widget.
   - Configurable meeting link via environment variables.
3. **Talk on WhatsApp**:
   - Direct WhatsApp Business deep-link (`https://wa.me/...`) with a pre-formatted introductory greeting.
   - Configurable business phone number.

---

## 🎨 Design System Implementation

Extracted directly from the Figma design sheets and assets:

### Color Palette
- **Primary Accent (Burnt Orange)**: `#BD5216` — Primary CTAs, active highlights
- **Primary Dark (Deep Brown)**: `#593213` — Headings, prominent text, dark containers
- **Background (Cream)**: `#FFF5EC` — Warm page background
- **Action Accent (Sage)**: `#828866` — "Call Me Now" button, tags, badges
- **Surfaces (Warm White)**: `#FFFBFA` — Cards, modals, elevated surfaces
- **Borders & Accents (Sand)**: `#E8D3BE` / Border: `#E3CDB5`

### Typography
- **Headings & Quotes**: **Rufina** (Google Fonts, 400 & 700)
- **Wordmark Logo**: **Gabriela** (Google Fonts)
- **Body & Buttons**: **Inter** / **SF Pro** (Google Fonts / System Sans)

### Responsive Metrics
- **Mobile Viewport**: Standard `393px` width with `22px` side margins and `350px` content width.
- **Desktop Viewport**: Scales up to `max-w-6xl` (`1152px`) with a dual-column Hero, horizontal feature grids, and full desktop navigation.
- **Border Radii**: `14px` (buttons), `20px` (cards), `24px` (large cards/photos), `9999px` (pills/chips).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router & Serverless API Routes)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: `next/font/google` (Zero layout shift, automatic font optimization)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ (compatible with Node 24)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/victor-ss13/nexty.git
cd nexty
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env.local` to configure your custom links and webhooks:

```bash
cp .env.example .env.local
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Your WhatsApp Business number (digits with country code) | `15551234567` |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly event or booking page URL | `https://calendly.com` |
| `NEXTY_NOTIFICATION_WEBHOOK` | Optional webhook URL (Discord/Slack/Telegram) for callback alerts | *Optional* |

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 📱 Mobile-First & Desktop Testing

- **Mobile Experience**: Open Chrome / Firefox DevTools (`F12`), toggle the Device Toolbar (`Ctrl + Shift + M`), and select **iPhone 14 / Pro** (393px width).
- **Desktop Experience**: Toggle back to regular responsive view or full screen to inspect the dual-column layout and horizontal feature cards.

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 🚢 Deployment (Vercel)

This application is ready for instant deployment on [Vercel](https://vercel.com):

1. Push your changes to your GitHub repository.
2. Go to Vercel and import your `nexty` repository.
3. Configure your environment variables if needed (`NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_CALENDLY_URL`).
4. Click **Deploy**. Vercel will build and serve your site globally with automatic SSL.

---

## 📄 License
This project is created for educational and portfolio demonstration purposes based on the Nexty Figma design.
