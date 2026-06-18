# Site Instructions

## Purpose

A static, front-end-only Next.js personal website for Adam Carter.

## Pages

- Home: introduce the site and provide a quick overview.
- About Me: share personal background and show the portrait from `public/media/adam-bw.jpg`.
- Resume: summarize work history and schooling.

## Assets

- Logo: `public/media/logo-adam-carter.png`
- Portrait: `public/media/adam-bw.jpg`

## Content Source

- Update personal text, work history, and education in `content/site.ts`.
- Keep the navigation and shared links in the same file when possible.

## Build Style

- The site is configured for static export with Next.js.
- Use `npm run dev` for local development.
- Use `npm run build` to generate the static export.
- Use `npm test` to run the Vitest checks for the navbar and Home page.

## Update Notes

- If the personal summary changes, update the Home, About, and Resume copy together so the site stays consistent.
- If new media files are added, place them in `public/media/` and reference them with root-relative paths.
