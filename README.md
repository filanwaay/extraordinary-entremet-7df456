# Filanwaa — Knowledge · Faith · Culture

A bilingual (English & Somali) knowledge platform covering three main domains: Information Technology, Islamic Religion, and Somali Literature.

## Live Site

Deployed on Netlify at `filanwaa.com`.

## Key Technologies

- **Framework**: TanStack Start (React + Vite)
- **Router**: TanStack Router (file-based routing)
- **Styling**: Tailwind CSS v4 + custom CSS variables (inline styles for component-level theming)
- **Fonts**: Cormorant Garamond (display), DM Sans (body), Fira Code (monotype)
- **Deployment**: Netlify

## Sections

| Section | Routes | Description |
|---------|--------|-------------|
| IT | `/it/python`, `/it/css`, `/it/java`, `/it/sql`, `/it/php` | Programming language tutorials |
| Religion | `/diinta/salaada`, `/diinta/soonka`, `/diinta/zakada`, `/diinta/xajka` | Islamic pillars explained |
| Literature | `/suugaanta/maahmaahyo`, `/suugaanta/xikmado`, `/suugaanta/shekooyin`, `/suugaanta/gabayo`, `/suugaanta/heeso` | Somali oral tradition |
| Pages | `/about`, `/contact` | Static informational pages |

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Bilingual Support

Toggle between English and Somali using the language switcher in the navigation bar. Language preference is saved to `localStorage`. All translations are in `src/contexts/LangContext.tsx`.
