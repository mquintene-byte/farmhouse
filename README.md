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

Media & animation
- react-player (embedded video player)
- framer-motion (optional animations)

Tooling
- vite, typescript, vitest, @testing-library/react

See the exact versions in `package.json`.

## Usage guidelines

- Keep route files under `src/routes`; the file-based setup automatically composes the route tree.
- Put shared, small UI primitives under `src/components/ui` and keep components focused and composable.
- Prefer the `cn` helper (from `src/lib/utils.ts`) for conditional Tailwind classes.
- For data fetching prefer route `loader` functions or TanStack Query—avoid fetching directly inside render where possible.
- Accessibility: add `alt` text for images, use semantic HTML, ensure interactive elements have keyboard focus styles and aria labels.

## Testing & linting

- Run unit tests with Vitest: `npm run test`.
- Add tests for new components under `src/components` and for route behavior under `src/routes`.

## Contributing

- Create feature branches off `main` and open small focused PRs.
- Run `npm run test` and ensure types pass before submitting PRs.
- Document new public components in this README or a dedicated `docs/` folder.

## Helpful files

- `src/main.tsx` — bootstrap + providers
- `src/routes/__root.tsx` — global layout
- `src/routes/index.tsx` — home/landing page
- `src/components/ui/dialog.tsx` — modal dialog wrapper used for video players
- `src/lib/utils.ts` — `cn` helper

## Agricultural Calculators

The project includes a set of small agricultural calculators useful for farm planning and reporting. Each calculator takes numerical inputs, validates them, and applies a simple formula to compute and display results.

### 1. Crop Yield Estimator (`calcYield()`)

- Inputs: Land size (m²), Yield rate (kg/m²)
- Formula: Estimated Yield (kg) = Land size × Yield rate
- Output: Estimated yield (kg) rounded to two decimal places

### 2. Food Waste Reduction (`calcWaste()`)

- Inputs: Produced food (kg), Waste (%)
- Formula: Usable Food (kg) = Produced food × (1 - Waste (%) / 100)
- Output: Usable food (kg) rounded to two decimal places

### 3. School Garden Nutrition (`calcLearners()`)

- Inputs: Total yield (kg), Serving per learner (kg)
- Formula: Learners Fed = floor(Total yield / Serving per learner)
- Output: Number of learners (whole number)

### 4. Water Use Efficiency (`calcWater()`)

- Inputs: Water used (L), Yield (kg)
- Formula: Efficiency (kg/L) = Yield / Water used
- Output: Efficiency rounded to four decimal places

### 5. Profit from Produce (`calcProfit()`)

- Inputs: Total yield (kg), Selling price (R/kg), Cost of production (R)
- Formula: Estimated Profit (R) = (Total yield × Selling price) − Cost of production
- Output: Estimated profit rounded to two decimal places

### 6. Nutrition Value (`calcNutrition()`)

- Inputs: Food type (Tomatoes, Spinach, Cabbage, Onions), Amount eaten (g)
- Internal per-100g data:
	- Tomatoes: 18 kcal, 13 mg Vitamin C
	- Spinach: 23 kcal, 28 mg Vitamin C
	- Cabbage: 25 kcal, 36 mg Vitamin C
	- Onions: 40 kcal, 7 mg Vitamin C
- Formula: Nutrient Value = (Amount eaten / 100) × nutrient-per-100g
- Output: Displays Calories (kcal) and Vitamin C (mg) rounded to one decimal place

Example UI implementations typically include small form sections for each calculator and display the computed result immediately after validation. If you'd like, I can add React components and unit tests for all six calculators in `src/components` and wire them into the landing page.

## Contact & license

Update contact information and license as appropriate for your project.

---

If you want, I can also:
- Add a short developer checklist at the top of this README (e.g., environment setup, common commands).
- Add scripts to `package.json` for `serve` (preview) or more explicit test/lint commands.
