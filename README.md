# Struct UI

> Production-ready, high-density data layouts (Dashboards, Settings, Auth) specifically for the TanStack ecosystem.

## Templates Catalogue

| Template | Description | Live Demo | Source Code | Key Features |
| :--- | :--- | :---: | :---: | :--- |
| **Portfolio 01** <br> *(Sentrix)* | Sleek, motion-driven portfolio with AI terminal. | [Demo](https://struct-ui-portfolio-01.vercel.app) | [Source](https://github.com/zenderock/struct-ui/tree/main/templates/portfolio-01) | GSAP, Lenis, AI Terminal |
| **Dashboard** <br> *(Starter)* | Production-ready SaaS dashboard boilerplate. | — | [Source](https://github.com/zenderock/struct-ui/tree/main/templates/starter) | TanStack Table, Virtual, Sidebar |
| **Landing 01** <br> *(Cre8XP)* | High-performance, dark-mode landing page with scroll reveals. | — | [Source](https://github.com/zenderock/struct-ui/tree/main/templates/landing-01) | Scroll Animations, Geist Font, Lucide Icons |


## Project Definition

**Struct UI** is an Open Source UI Kit / Boilerplate designed for developers building complex B2B SaaS applications. We prioritize type-safety, headless logic, and performance.

**Philosophy:** "TanStack First". We leverage the bleeding-edge TanStack ecosystem to provide a premium starting point for UI that gives you control over the logic.

**Target Audience:** Developers who need high-density interfaces and full control over their application logic.

## The Tech Stack (Strict)

We are fully committed to the TanStack ecosystem. Next.js is explicitly avoided in favor of TanStack Start.

- **Framework:** [TanStack Start](https://tanstack.com/start) (SSR, Server Functions)
- **Routing:** [TanStack Router](https://tanstack.com/router) (File-based routing, Type-safe search params, Loaders)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [Base UI](https://base-ui.com/) (Headless components)
- **State/Data Fetching:** [TanStack Query](https://tanstack.com/query) (Integrated via Router loaders)
- **Forms:** [TanStack Form](https://tanstack.com/form) (Headless validation and state)
- **Data Display:** [TanStack Table](https://tanstack.com/table) + [TanStack Virtual](https://tanstack.com/virtual)
- **Language:** TypeScript (Strict mode)
- **Validation:** [Zod](https://zod.dev/)

## Monorepo Structure

This project is a monorepo managed with `pnpm`.

```
/
├── templates/
│   └── starter/    # The main dashboard starter template
└── package.json
```

## Getting Started

To install dependencies:

```sh
pnpm install
```

To run the starter template:

```sh
cd templates/starter
pnpm dev
```

