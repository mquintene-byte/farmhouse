# Farmhouse HP

A minimal, file-based React app scaffolded with TanStack Router, TailwindCSS and shadcn UI primitives. This README contains quick setup steps, libraries used, guidelines, and pointers to common files.

## Quick start

Install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

Build for production:

```powershell
npm run build
npm run serve
```

Run tests:

```powershell
npm run test
```

Notes:
- This project uses Vite as a dev server and bundler. The `dev` script runs Vite.

## Project structure (high level)

- `src/main.tsx` — app bootstrap and router provider
- `src/routeTree.gen.ts` — generated route tree used by TanStack Router
- `src/routes` — file-based routes (page components live here)
- `src/components/ui` — shadcn-style UI primitives (Button, Card, Avatar, Dialog, etc.)
- `src/lib/utils.ts` — small helpers (eg. `cn` for classnames)
- `public/` — static assets (icons, manifest)
- `vite.config.ts` — Vite configuration

## Libraries used

Core
- react, react-dom

Routing & data
- @tanstack/react-router
- @tanstack/react-query (optional, recommended for async data)

UI & styling
- tailwindcss
- shadcn UI components (Radix wrappers)
- @radix-ui/* (primitives used by shadcn)
- lucide-react (icons)

# Farmhouse HP

A minimal React app (Vite + TypeScript) using TanStack Router and shadcn-style UI primitives.

This README documents the recent changes to the app (authentication, top banner, gated calculators, toasts) and shows where to find and run the project.

## Quick start

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Create a `.env` file (or set env vars) with your Clerk publishable key:

```powershell
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
```

The app will throw an error at startup if `VITE_CLERK_PUBLISHABLE_KEY` is missing — this is intentional while development is connected to Clerk.

Build for production:

```powershell
npm run build
npm run serve
```

Run tests:

```powershell
npm run test
```

## What changed (high level)

- Authentication: Clerk has been integrated. The app root is wrapped with `ClerkProvider` in `src/main.tsx`.
- Top sign-in banner: a full-width sticky banner at the very top of the page is shown to signed-out users. It contains the primary Sign in CTA (so header no longer repeats a Sign in button).
- Header: shows `UserButton` + Sign out when signed in. Sign in buttons were removed from the header because the top banner is the canonical CTA.
- Calculators: access is gated behind auth using `SignedIn` / `SignedOut`. Signed-out users see a prominent warning and a locked card with a Sign in CTA.
- Welcome toast: on sign-in we show a welcome toast using `react-hot-toast`.
- QR / Contact: the contact card now displays a `qr.png` image from `public/qr.png` and the heading was changed to `qr code`.
- Services icons: service items now map to specific Lucide icons instead of using the same icon for all.

## Files of interest

- `src/main.tsx` — app bootstrap and providers (Clerk and Toaster)
- `src/routes/index.tsx` — landing page; contains header, top banner, calculators gating, welcome toast logic
- `src/components/calculators/Calculators.tsx` — calculators UI
- `src/components/calculators/utils.ts` and `utils.test.ts` — calculator logic and tests
- `public/qr.png` — QR image used on the contact card

## Calculators (short summary)

The project includes several small calculators for farm planning. These are located under `src/components/calculators` and include functions such as `calcYield`, `calcWaste`, `calcLearners`, `calcWater`, `calcProfit`, and `calcNutrition` (see `utils.ts`). The UI component (`Calculators.tsx`) is rendered only for signed-in users.

## Authentication notes

- Add `VITE_CLERK_PUBLISHABLE_KEY` to your environment before running the dev server. The key is read in `src/main.tsx`.
- Sign-in flows are modal-driven via Clerk's `SignInButton` used in the top banner. The header shows `UserButton` and `SignOutButton` for signed-in users.
- `useUser()` is used on the landing page to show a welcome toast when the user signs in.

## Toasts

- `react-hot-toast` is used for toasts. A `<Toaster />` is mounted in `src/main.tsx` and `toast.success(...)` is called when the user signs in.

If you don't have `react-hot-toast` installed run:

```powershell
npm install react-hot-toast
```

## Development checklist

- Ensure `VITE_CLERK_PUBLISHABLE_KEY` is present before starting.
- Install `react-hot-toast` if not already installed.
- Run typecheck/build locally:

```powershell
npx tsc --noEmit
npm run build
```

## Project structure (high level)

- `src/main.tsx` — app bootstrap and router provider
- `src/routeTree.gen.ts` — generated route tree used by TanStack Router
- `src/routes` — file-based routes (page components live here): `index.tsx` is the home/landing page
- `src/components/ui` — UI primitives (Button, Card, Avatar, Dialog, etc.)
- `src/components/calculators` — calculators UI and logic
- `src/lib/utils.ts` — small helpers (eg. `cn` for classnames)

## Libraries used

- react, react-dom
- @tanstack/react-router
- @clerk/clerk-react
- tailwindcss
- lucide-react
- react-player
- framer-motion (optional)
- vite, typescript, vitest

See exact versions in `package.json`.

## Contributing

- Create feature branches off `main` and open small focused PRs.
- Run `npm run test` and `npx tsc --noEmit` before submitting PRs.

---

