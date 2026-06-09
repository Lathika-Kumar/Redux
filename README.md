# Redux Task

A React + Vite shopping application with a Redux-powered cart. This project demonstrates a small e-commerce UI including product listings, cart state management, navigation, and responsive styling.

## Features

- React 19 with Vite for fast development
- Redux Toolkit for cart state management
- React Router DOM for page navigation
- Bootstrap + custom CSS for layout and styling
- Product cards, featured product, newsletter, and cart page UI

## Project structure

- `src/main.jsx` — app entry point
- `src/App.jsx` — main application shell
- `src/app/store.js` — Redux store setup
- `src/features/cart/cartSlice.js` — cart state logic
- `src/pages/Home.jsx`, `src/pages/Cart.jsx`, `src/pages/Men.jsx` — page components
- `src/components/` — reusable UI components

## Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the project

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser at the URL shown in terminal.

## Notes

- The app uses Redux Toolkit and `react-redux` for state management.
- Routing is handled with `react-router-dom`.
- The project is configured with ESLint for code quality.

## License

This repository does not include a license file. Add one if you plan to share the app publicly.
