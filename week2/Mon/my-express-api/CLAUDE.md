# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

Express.js API example project for the Claude Code 실용 가이드북 (Practical Guidebook), Week 2 full-stack web service tutorial. The project demonstrates building a simple but complete Express API iteratively with Claude Code.

## Current State

The project is a bare skeleton: only `package.json` (default `npm init` output) exists. There are no dependencies installed, no source files, and no npm scripts yet (`npm test` is the placeholder that exits with an error). When asked to build features, set up the foundation first:

```bash
npm install express cors dotenv
npm install -D nodemon
```

Then add scripts to `package.json` (`"dev": "nodemon src/index.js"`, `"start": "node src/index.js"`) and update `"main"` to match the actual entry point (`src/index.js`).

## Target Architecture

Standard MVC-like layout for small/medium Express apps — create directories as features require them, not all upfront:

```
src/
├── routes/          # API route definitions
├── controllers/     # Request handlers and business logic
├── middleware/      # Custom middleware (auth, validation, error handling)
├── utils/           # Helper functions
└── index.js         # App entry point: middleware registration, route mounting, listen
```

Adding a new endpoint: route file in `src/routes/` → controller in `src/controllers/` → register the route in `src/index.js`.

## Project Conventions

- Error responses use a consistent format via centralized error-handling middleware: `{ error: { message, code, details } }`
- Configuration through environment variables with dotenv (`PORT`, etc.); never hardcode
- async/await for all asynchronous code
- JSON request/response as the default format

## Book Example Constraints

This code appears in a published guidebook, so:

- Code comments are written in Korean; identifiers and commit messages stay in English
- Keep examples minimal and educational — prefer clarity over production completeness, one concept per feature addition
- Each addition should build on previous steps (the book develops this API iteratively), so avoid large refactors that would invalidate earlier chapters
