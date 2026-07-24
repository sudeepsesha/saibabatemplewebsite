# Sri Shirdi Sai Baba Temple — Website

Production-ready project foundation for the temple website.
**Status: Task 1 — Project scaffold only. No page content or sections yet.**

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router v6
- Framer Motion (installed, ready for use in future tasks)
- Google Fonts: Playfair Display (headings) + Inter (body)

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Theme

| Token       | Value     | Tailwind class examples          |
|-------------|-----------|-----------------------------------|
| Primary     | `#C48A1D` | `bg-primary`, `text-primary`      |
| Secondary   | `#8B1E1E` | `bg-secondary`, `text-secondary`  |
| Background  | `#FFF9F2` | `bg-background`                   |
| Text        | `#2C2C2C` | `text-text`                       |
| Heading font| Playfair Display | `font-heading`             |
| Body font   | Inter     | `font-body`                       |

Theme tokens are also exported as plain JS from `src/styles/theme.js` for use
outside Tailwind class names (e.g. inline styles, chart libraries).

## Folder Structure

```
src/
├── assets/               static images, icons, etc.
├── components/
│   ├── common/            shared, generic UI (buttons, cards, etc.)
│   ├── layout/             Navbar, Footer (placeholders for now)
│   ├── home/               Home page section components
│   ├── about/               About page section components
│   ├── festivals/            Festivals page section components
│   ├── donations/             Donations page section components
│   ├── gallery/                Gallery page section components
│   └── contact/                 Contact page section components
├── pages/                 route-level page components (currently empty)
├── layouts/               MainLayout (Navbar + Outlet + Footer)
├── hooks/                  custom React hooks
├── utils/                    helper functions
├── services/                   API / Supabase service layer (future)
├── contexts/                    React context providers
└── styles/
    ├── index.css               Tailwind directives + global base styles
    └── theme.js                JS theme tokens (colors, fonts, breakpoints)
```

## Routing

Configured in `src/App.jsx` via React Router, all routes nested under `MainLayout`:

| Path         | Page       |
|--------------|------------|
| `/`          | Home       |
| `/about`     | About      |
| `/festivals` | Festivals  |
| `/donations` | Donations  |
| `/gallery`   | Gallery    |
| `/contact`   | Contact    |

All page components currently render `null` — content and sections will be
built in subsequent tasks.

## Notes

- CMS (Supabase) integration is **not** implemented yet — `services/` is
  reserved for that in a later task.
- No page sections, copy, or images have been created yet, per project rules.
- Reduced-motion is respected globally via `prefers-reduced-motion` in
  `src/styles/index.css`, and Framer Motion is installed and ready for use
  once section components are built.
