# Portfolio – Replit Setup

## Overview
A personal portfolio web app built with React, Vite, TypeScript, and Tailwind CSS. Uses Radix UI components, Framer Motion for animations, and Wouter for routing.

## Running the App
The app runs via the "Start application" workflow, which executes `npm run dev`.
- Runs on port **5000**, bound to `0.0.0.0` for Replit compatibility.
- Access it via the Replit preview pane.

## Key Files
- `vite.config.ts` — Vite config; sets host/port for Replit
- `src/main.tsx` — App entry point
- `src/App.tsx` — Root component
- `src/pages/` — Page components
- `src/components/` — Shared UI components

## Migration Notes (from Vercel/GitHub Pages)
- The `base` URL was changed from `/Portfolio/` to `/` for Replit compatibility.
- Vite server configured with `host: "0.0.0.0"`, `port: 5000`, and `allowedHosts: true`.
- Package manager: **npm** (package-lock.json present).

## Dependencies
- React 18 + ReactDOM
- Vite 5
- TypeScript
- Tailwind CSS + Radix UI
- Framer Motion
- Wouter (routing)
- TanStack Query
