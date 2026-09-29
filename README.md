# OxyFlow Product Page

Marketing homepage for **OxyFlow** — a hospital oxygen monitoring system with a bedside device and Windows desktop app.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui

## Getting Started

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Desktop App Setup

1. Place your installer at `public/OxyFlow-Setup.exe`, **or**
2. Set an external URL in `lib/constants.ts`:

```ts
export const PRODUCT = {
  desktopDownloadUrl: "https://your-cdn.com/OxyFlow-Setup.exe",
};
```

## Images

| File | Usage |
|------|-------|
| `public/images/oxyflow-logo.png` | Header, hero, footer, favicon |
| `public/images/oxyflow-product.png` | Hero, product showcase, pricing |
| `public/images/oxyflow-overview.svg` | How It Works overview image |

## Configuration

All copy, pricing (₹2,500/device), and download links are in `lib/constants.ts`.
