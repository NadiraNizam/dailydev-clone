# daily.dev Screenshot Clone

A responsive React + Tailwind CSS recreation of the provided daily.dev screenshot. The page uses static sample content; the small topic and vote controls are only visual/demo interactions.

## Requirements
- Node.js 20.19+ (or a current supported Node release)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

## Push to GitHub
Create an empty repository on GitHub, then from this project folder run:

```bash
git init
git add .
git commit -m "Build responsive daily.dev screenshot clone"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own repository URL. Do not commit `node_modules`.
