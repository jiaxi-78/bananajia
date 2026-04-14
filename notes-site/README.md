# Learning Studio

A small `Vite + React` study homepage for notes, homework, and DIY LLM progress.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production files are generated in `dist/`.

## Current structure

- `src/content.js`: note, homework, and roadmap content
- `src/App.jsx`: page layout
- `src/App.css`: component styling
- `src/index.css`: global theme and typography

## GitHub Pages

`vite.config.js` already sets `base: './'`, which keeps asset paths portable for a simple static deployment workflow.
