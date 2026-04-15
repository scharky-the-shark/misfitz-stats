You must promote this page with a link to the game registration: https://www.antiherostudios.com/?creatorCode=SCHARKY

future structure:
misfitz-stats/
│
├─ README.md
├─ LICENSE
├─ package.json
├─ tsconfig.json
├─ next.config.js
├─ .env.example
├─ .gitignore
│
├─ public/                 # static data (nginx cached)
│   ├─ images/
│   │   ├─ characters/
│   │   ├─ icons/
│   │   └─ ui/
│   │
│   ├─ fonts/
│   └─ favicon.ico
│
├─ src/
│
│   ├─ pages/              # Routes (Next.js)
│   │   ├─ index.tsx
│   │   ├─ characters.tsx
│   │   ├─ stats/
│   │   │   └─ [playertag].tsx
│   │   │
│   │   ├─ api/
│   │   │   ├─ characters.ts
│   │   │   └─ player.ts
│   │   │
│   │   └─ submit-profile.tsx
│   │
│   ├─ components/         # small UI components
│   │   ├─ Navbar.tsx
│   │   ├─ Footer.tsx
│   │   ├─ Button.tsx
│   │   ├─ Card.tsx
│   │   ├─ Modal.tsx
│   │   └─ LanguageSwitcher.tsx
│   │
│   ├─ sections/           # main
│   │   ├─ HeroSection.tsx
│   │   ├─ CharacterGrid.tsx
│   │   ├─ PlayerStats.tsx
│   │   └─ Leaderboard.tsx
│   │
│   ├─ layouts/            # layout
│   │   ├─ MainLayout.tsx
│   │   └─ StatsLayout.tsx
│   │
│   ├─ data/               # static JSON data
│   │   ├─ characters.json
│   │   ├─ abilities.json
│   │   └─ maps.json
│   │
│   ├─ i18n/               # language
│   │   ├─ config.ts
│   │   │
│   │   ├─ en/
│   │   │   ├─ common.json
│   │   │   ├─ characters.json
│   │   │   └─ stats.json
│   │   │
│   │   ├─ de/
│   │   │   ├─ common.json
│   │   │   ├─ characters.json
│   │   │   └─ stats.json
│   │   │
│   │   └─ fr/
│   │       ├─ common.json
│   │       └─ characters.json
│   │
│   ├─ hooks/              # React Hooks
│   │   ├─ usePlayerStats.ts
│   │   ├─ useCharacters.ts
│   │   └─ useLanguage.ts
│   │
│   ├─ lib/                # API & Utilities
│   │   ├─ api.ts
│   │   ├─ fetcher.ts
│   │   ├─ constants.ts
│   │   └─ helpers.ts
│   │
│   ├─ styles/
│   │   ├─ globals.css
│   │   └─ variables.css
│   │
│   └─ types/              # TypeScript Types
│       ├─ character.ts
│       ├─ player.ts
│       └─ api.ts
│
├─ scripts/                # Build / Data Scripts
│   ├─ buildCharacters.ts
│   └─ syncStats.ts
│
└─ nginx/
    └─ antihero.conf
