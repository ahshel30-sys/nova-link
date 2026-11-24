# NOVALINK — Build what's next.

A cinematic, dark editorial portfolio website for a fictional next-generation technology company. NOVALINK presents AI systems, software engineering, infrastructure and automation through an edit-suite visual language.

## Design source

Built from **Design Two — Umbra** in [fable-5.2-projects / web-design-5](https://github.com/h4ni0/fable-5.2-projects/tree/main/web-design-5), a cinematic film-studio concept. Its motifs have been translated into NOVALINK's obsidian / electric-cobalt identity:

- timecode with a blinking REC indicator in the navigation
- aperture-and-eclipse hero lighting with a custom connected-intelligence network
- scrolling credits marquee
- film-strip capability frames with perforations and hover flare
- word-by-word scroll manifesto
- widescreen reel viewer with strobe marks, slate caption and auto-advancing selects
- non-linear edit timeline for the five-stage process
- clapperboard slate inquiry form
- oversized end-credits wordmark

No 3D scroll engine, stock photography, external video generation or paid services are used. All visuals are locally generated SVG/CSS.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide icons, next/font (Geist + Geist Mono). No database, auth or external API.

## Run

Dependencies are resolved from the parent folder, so the scripts call the CLIs through Node.

```bash
npm install
npm run dev -- -H 127.0.0.1
# http://127.0.0.1:3000
```

Production:

```bash
npm run lint
npm run build
npm run start -- -H 127.0.0.1 -p 3000
```

`--webpack` is used for ARM environments where Turbopack native bindings are unavailable.

## Sections and interactions

- **Hero** — full-screen cinematic light, custom network visual, headline, CTAs and metadata slate.
- **Sticky navigation** — active section indicators, smooth anchors, REC timecode and a focus-managed mobile menu.
- **Capabilities** — six film-strip frames with hover treatment and technical tags.
- **Manifesto** — "WE MAKE COMPLEXITY WORK." with scroll-revealed words.
- **Technology** — diagram plus grouped stack tokens (React, Next.js, TypeScript, Node.js, Python, Docker, PostgreSQL, Redis, ML/AI APIs).
- **Projects** — ORBIT, SYNAPSE and PULSE in an auto-advancing reel; selecting a title holds the frame; a specification dialog opens with keyboard and backdrop support.
- **Process** — editable timeline with five disciplines and an interactive playhead driven by the four act buttons.
- **About** — mission, vision, philosophy, people and clearly labelled demo metrics.
- **Contact** — clapperboard slate form with validation, accessible errors, loading, success and local persistence.
- **Footer** — newsletter demo, fictional credits, social links, privacy/terms dialogs and end-credits wordmark.

## Demo-only features

The company, people, clients, figures, contact details and projects are fictional. Forms save to `localStorage` (`novalink:inquiries`, `novalink:newsletter`) and never transmit data. For production, connect the handlers in `components/Contact.tsx` and `components/Footer.tsx` to a server action/API with email delivery and rate limiting, replace the demo domain in metadata routes, and use real brand assets.

## Deployment

Deploy with Vercel's Next.js preset and build command `npm run build`. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain after adding the project to Vercel; if omitted, Vercel production URLs are detected automatically and the local fallback is `https://novalink-demo.vercel.app`. See [vercel.com/new](https://vercel.com/new) to import the GitHub repository.

## Verification

`npm run lint` and `npm run build` pass. Browser smoke checks covered desktop and mobile rendering, key sections and absence of horizontal overflow.

## Credits

Visual concept adapted from Design Two (Umbra) by h4ni0. All imagery is generated locally with SVG/CSS; no third-party images or paid generation services are used.
