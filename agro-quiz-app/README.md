# AgroTech AI Quiz

The AgroTech AI Quiz is a standalone Next.js application that provides an interactive agricultural quiz experience. It is maintained inside the AgroTech AI monorepo but can be developed and deployed independently from the primary Vite frontend.

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Radix UI and Lucide icons
- Google Generative AI integration

## Requirements

- Node.js 18 or newer
- npm

## Install and run

From this directory:

```powershell
npm ci
npm run dev
```

Open the URL printed by Next.js, normally <http://localhost:3000>.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve a production build |
| `npm run lint` | Run the configured Next.js lint command |

## Project structure

- `src/app/` contains the Next.js app router pages and layout.
- `src/components/` contains reusable UI components.
- `src/lib/` contains shared helpers and AI integration code.
- `src/categories.ts` contains quiz category data.

## Configuration and safety

Keep provider credentials outside source control. Do not commit API keys, personal data, or quiz content that contains private information. AI-generated explanations are educational guidance and should not be treated as agronomic advice.

## Validation

Before opening a pull request:

```powershell
npm run lint
npm run build
```

See the repository-level [`CONTRIBUTING.md`](../CONTRIBUTING.md) for contribution and security requirements.
