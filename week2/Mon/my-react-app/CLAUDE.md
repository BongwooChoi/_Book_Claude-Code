# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Create React App (CRA) project used as a demonstration app for the Claude Code 실용 가이드북 (Claude Code Practical Guidebook), a Korean-language book documenting practical Claude Code usage patterns. The app is currently the unmodified CRA template — its purpose is to serve as a simple, reproducible playground for book examples.

## Commands

- `npm start` — dev server at http://localhost:3000 with hot reloading
- `npm test` — Jest in interactive watch mode
- `npm test -- --watchAll=false` — run all tests once
- `npm test -- --testNamePattern="test name"` — run a specific test by name
- `npm test -- --watchAll=false src/App.test.js` — run a single test file
- `npm test -- --coverage` — coverage report
- `npm run build` — production build to `build/`

ESLint uses CRA's default config (`react-app`, `react-app/jest` via package.json); lint errors surface in the dev-server console. There is no separate lint script.

## Architecture

Standard CRA structure with no routing, state management, or custom tooling:

- `src/index.js` — entry point; renders `<App />` into `#root` in StrictMode
- `src/App.js` — the single application component
- `src/setupTests.js` — imports `@testing-library/jest-dom` matchers for all tests
- Tests use @testing-library/react (React 19, Testing Library 16)

Webpack config is hidden behind react-scripts 5.0.1. Do not run `npm run eject`.

## Book Project Context

This app lives at `week2/Mon/` inside a larger guidebook repository organized as `week1/`–`week4/`, each week containing daily tutorials and weekend reading materials.

## Development Guidelines

1. Maintain the simple CRA structure for educational clarity — no complex React patterns
2. Keep examples practical and reproducible
3. Comment code examples in Korean for the guidebook audience
