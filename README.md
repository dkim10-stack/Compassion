# Compassion Review — Website

A simple, responsive website built with [Astro](https://astro.build). Three pages: **Home**, **Articles**, and **Donate**.

## Getting started

Requires [Node.js](https://nodejs.org) 18.20+ (20 or 22 recommended).

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build → dist/
```

The `dist/` folder is plain HTML/CSS and can be hosted anywhere (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Project structure

```
├── astro.config.mjs            Astro configuration
├── package.json
├── tsconfig.json
├── public/
│   └── logo.png                Logo (also used as the browser-tab icon)
└── src/
    ├── config/site.ts          ✏️ Name, motto, logo, email, nav links
    ├── data/
    │   ├── daily-quote.json    ✏️ Today's quote
    │   └── donation-steps.json ✏️ "How to Donate" steps
    ├── content/articles/       ✏️ One Markdown file per article
    ├── content.config.ts       Article fields (title, date, author, summary)
    ├── layouts/BaseLayout.astro  Shared <head>, header, footer
    ├── components/
    │   ├── Header.astro        Top navigation (with mobile menu)
    │   ├── Footer.astro
    │   ├── Hero.astro          Logo, name, motto
    │   ├── DailyQuote.astro
    │   └── ArticleCard.astro
    ├── pages/
    │   ├── index.astro         Home (also: "Who we are" text)
    │   ├── articles/index.astro    Article list
    │   ├── articles/[slug].astro   Full article page
    │   └── donate.astro        Donate (also: "Why donate" text)
    ├── styles/global.css       Colors, fonts, layout
    └── utils/formatDate.ts
```

## Common edits

**Change the Daily Message of Hope** — edit `src/data/daily-quote.json`:

```json
{
  "text": "Your quote here.",
  "author": "Who said it"
}
```

**Add an article** — create `src/content/articles/my-new-post.md`. It appears at `/articles/my-new-post`, newest first.

```md
---
title: My New Post
date: 2026-10-03
author: Your Name
summary: One sentence shown in the article list.
---

Write the article here using Markdown.
```

**Edit the donation steps** — edit `src/data/donation-steps.json`. Each step has a `title` and `description`; add or remove entries as needed.

**Add your logo** — put the image in `public/` (e.g. `public/logo.png`) and set `logo: '/logo.png'` in `src/config/site.ts`.

**Change name / motto** — `src/config/site.ts`.

**Change colors or fonts** — the variables at the top of `src/styles/global.css`.
