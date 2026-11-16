# 🌐 AgroTech AI Frontend

The main browser application is a React 18 application built with Vite. Its entrypoint is `src/main.jsx`, which mounts `App.jsx` and the shared state provider. Browser routes and page composition are managed in `src/MainContent.jsx`.

## Main areas

| Directory | Responsibility |
|---|---|
| `src/pages/` | Main pages such as home, articles, contact, products, and disease recognition |
| `src/components/` | Shared UI, authentication, discussions, AI tools, crop tools, and forms |
| `src/components/models/` | Crop, fertilizer, soil, mushroom, price, and water-management interfaces |
| `src/AgroShopAI/` | Agricultural product shopping experience |
| `src/AgroRentAI/` | Agricultural equipment rental experience |
| `src/context/` | Shared application state and authentication context |
| `src/hooks/` | Reusable hooks |
| `src/styles/` | Feature-specific styles |
| `public/` | Static assets served without import |

## Requirements

- Node.js 18 or a compatible newer LTS release
- npm

## Setup

From this directory:

```bash
npm ci
cp .env.sample .env
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.sample .env` instead of `cp`.

Set `VITE_BACKEND_BASE_URL` to the backend URL. The frontend sample may contain only public, provider-restricted browser configuration. Vite exposes every `VITE_*` variable to client-side code. Never put private API keys or server credentials here.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build production assets |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Docker

The root `Docker-compose.yml` starts this frontend on port 5173 as part of the primary local stack. See the root [README](../README.md).

## Integration notes

- Confirm the configured backend URL before testing API-dependent pages.
- Restart Vite after changing environment values.
- Keep API request and response changes synchronized with the backend and [API guide](../docs/api.md).
- Do not log access tokens, account details, or private farm/location data.
- Test mobile layouts, keyboard navigation, loading states, empty states, and API failures.

## Known maintenance work

The repository contains many feature modules and third-party UI dependencies. Run the lint and production build before merging changes. Review dependency upgrades in isolation because the frontend includes mapping, charting, animation, UI, and AI libraries.
