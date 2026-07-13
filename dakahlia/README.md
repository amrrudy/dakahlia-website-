# Dakahlia Group — Website

A production-ready bilingual (Arabic RTL / English LTR) marketing site for Dakahlia Group, an integrated Egyptian food and agriculture conglomerate.

Built with Vite + React 18 + TypeScript + Tailwind CSS. Eight pages, full language switcher, editorial design language.

## Stack

- **Vite 5** — fast dev server, modern build
- **React 18 + TypeScript**
- **react-router-dom 6** — client-side routing
- **Tailwind CSS 3** — utility-first styling, custom Dakahlia brand palette
- **lucide-react** — icon set
- **No i18n library** — simple React Context handles locale + RTL/LTR direction

## Brand

- Deep green `#04793e` (primary)
- Light green `#62bc54` (secondary)
- Yellow `#e2e01b` (accent)
- Off-cream `#faf8ee` (background)
- Logo PNGs in `/public/logos/`

## Typography

- **Fraunces** — editorial display serif (English)
- **Plus Jakarta Sans** — body sans (English)
- **Reem Kufi** — display (Arabic)
- **Cairo** — body (Arabic)

All four loaded from Google Fonts. Direction and font swap happen automatically when the user toggles language.

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, companies grid, pillars, careers teaser, vision, story, news |
| `/about` | About — intro, journey timeline, vision/mission, values, leadership |
| `/companies` | Our Companies — five detailed company cards |
| `/value-chain` | Value Chain — approach, farm-to-consumer, 6 stages, stats |
| `/sustainability` | Sustainability — environmental, commitment, community, Al Anani Foundation |
| `/news` | News — empty state |
| `/careers` | Careers — culture, positions, application form |
| `/contact` | Contact — info block, inquiry form |

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

## Build for production

```bash
npm run build
npm run preview   # to serve the production build locally
```

Output goes to `/dist`. Deploy that folder to Netlify, Vercel, Cloudflare Pages, S3+CloudFront, or any static host.

## Language switching

Click `EN / عربي` in the header. The choice persists in `localStorage`. First visit auto-detects from `navigator.language` (Arabic browsers default to Arabic). The whole document direction (`dir="rtl"` or `"ltr"`) and font stack swap automatically.

## What to replace before going live

The site is structurally complete but uses placeholder content/imagery in a few spots:

- **Hero and section images** — Unsplash placeholders, replace with real Dakahlia photography (farms, processing facilities, Wadi El Natroun, team portraits, etc.)
- **Employee portraits** on the careers teaser — generic stock, swap for real team members
- **News page** — currently shows the "no articles" empty state from the prototype. Plug into a CMS or hard-code articles into `src/lib/content.ts`
- **Form submission** — the Careers application form and Contact inquiry form are presentational only. Wire to your form backend (Formspree, your own API, etc.) in the `onClick` handler

## File structure

```
dakahlia/
├── public/
│   └── logos/
│       ├── dakahlia-horizontal.png
│       └── dakahlia-vertical.png
├── src/
│   ├── components/
│   │   ├── sections/        # Home page section components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Logo.tsx
│   │   ├── LangSwitcher.tsx
│   │   ├── PageHero.tsx
│   │   └── ScrollToTop.tsx
│   ├── lib/
│   │   ├── i18n.tsx         # Locale context provider
│   │   └── content.ts       # All AR + EN content (single source of truth)
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Companies.tsx
│   │   ├── ValueChain.tsx
│   │   ├── Sustainability.tsx
│   │   ├── News.tsx
│   │   ├── Careers.tsx
│   │   └── Contact.tsx
│   ├── App.tsx              # Routes
│   ├── main.tsx             # Entry
│   └── index.css            # Tailwind + custom layer
├── index.html               # Google Fonts links
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Editing content

All copy lives in **`src/lib/content.ts`** as a typed bilingual dictionary. Update text there and both languages update across the site. The TypeScript `Dict` interface enforces that every key exists in both `en` and `ar`.
