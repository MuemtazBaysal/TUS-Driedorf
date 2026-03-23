# TUS-Driedorf

Modern, responsive sports club website built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Requirements

- Node.js 20+ (recommended: latest LTS)
- npm 10+ (comes with Node.js)

## 1. Install dependencies

```bash
npm install
```

## 2. Start development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## 3. Production build (optional)

```bash
npm run build
npm run start
```

## Available scripts

- `npm run dev` -> start local dev server
- `npm run build` -> create production build
- `npm run start` -> run production server
- `npm run lint` -> run Next.js linting

## Project structure

- `app/` -> Next.js App Router pages and layouts
- `components/` -> reusable UI components
- `content/siteContent.ts` -> central content source (all text/data)
- `public/` -> static assets

## Notes

- All visible content is driven from `content/siteContent.ts`.
- If `node_modules` was deleted, run `npm install` again.