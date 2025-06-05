# Smart Home Project

Projekt inteligentnego domu z integracją Sanity CMS, Next.js, TypeScript, Tailwind CSS i Framer Motion.

## Funkcje

- 🏠 Responsywny design
- 🎨 Animacje Framer Motion
- 📱 Integracja z Sanity CMS
- 🌙 Ciemny motyw
- 📧 Formularz kontaktowy
- 🛍️ Strona produktów z modalami

## Animacje tła w HeroSection

Projekt zawiera trzy typy animacji tła dla sekcji hero:

### 1. Animacja ikonek smart home (aktualnie aktywna)

- WiFi, żarówka, tarcza bezpieczeństwa
- Termostat, zamek, kamera
- Głośnik, telefon, wtyczka
- Dom, sensor, TV
- Każda ikona ma unikalną animację (skalowanie, obrót, ruch)

### 2. Animacja świetlna (alternatywa)

- Promienie światła
- Świetlne punkty/gwiazdy
- Efekty blasku
- Poziome i pionowe promienie

### 3. Animacja kulek (alternatywa)

- Animowane kulki w różnych rozmiarach
- Efekty skalowania i przezroczystości

### Jak przełączać między animacjami:

W pliku `components/sections/HeroSection.tsx`:

```typescript
// Dla animacji ikonek smart home (aktualnie aktywne):
import SmartHomeIconsAnimation from '@/components/ui/SmartHomeIconsAnimation'
// import LightAnimation from '@/components/ui/LightAnimation'
// import CircleAnimation from '@/components/ui/CircleAnimation'

// W komponencie:
<SmartHomeIconsAnimation />

// Dla animacji świetlnej:
// import SmartHomeIconsAnimation from '@/components/ui/SmartHomeIconsAnimation'
import LightAnimation from '@/components/ui/LightAnimation'
// import CircleAnimation from '@/components/ui/CircleAnimation'

// W komponencie:
<LightAnimation />

// Dla animacji kulek:
// import SmartHomeIconsAnimation from '@/components/ui/SmartHomeIconsAnimation'
// import LightAnimation from '@/components/ui/LightAnimation'
import CircleAnimation from '@/components/ui/CircleAnimation'

// W komponencie:
<CircleAnimation />
```

## Instalacja

```bash
npm install
npm run dev
```

## Struktura projektu

```
├── app/                    # Next.js App Router
├── components/            # Komponenty React
│   ├── sections/         # Sekcje strony
│   └── ui/              # Komponenty UI
├── sanity/               # Konfiguracja Sanity
├── types/                # Typy TypeScript
└── public/              # Pliki statyczne
```

## Technologie

- **Next.js 15** - Framework React
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS v4** - Style CSS
- **Framer Motion** - Animacje
- **Sanity CMS** - System zarządzania treścią
- **Vercel** - Hosting

## Deployment

Projekt jest gotowy do wdrożenia na Vercel. Wystarczy połączyć repozytorium z Vercel i skonfigurować zmienne środowiskowe Sanity.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
