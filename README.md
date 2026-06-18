# DVOP400 Final Project

Personal website for Adam Carter built with Next.js as a static, front-end-only site.

## Pages

- Home: introduction to the website.
- About Me: personal background and portrait.
- Resume: work history and schooling.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build the static site:

   ```bash
   npm run build
   ```

4. Preview the exported site from the `out` folder with any static server, for example:

   ```bash
   npx serve out
   ```

5. Run the automated tests:

   ```bash
   npm test
   ```

## Docker

Build and run the static site in a container:

1. Build the Docker image locally:

   ```bash
   docker build -t dvop400-finalproject:latest .
   ```

2. Run the container:

   ```bash
   docker run -p 3000:80 dvop400-finalproject:latest
   ```

3. Or use Docker Compose for quick local testing:

   ```bash
   docker-compose up
   ```

   The site will be available at `http://localhost:3000`.

## Project Notes

- Shared personal content lives in `content/site.ts`.
- The logo and portrait are stored in `public/media/`.
- The site is configured for static export through `next.config.mjs`.
- Tests run with Vitest through `npm test` and are suitable for GitHub Actions.
- Docker image uses a multi-stage build with `node:20-alpine` for building and `nginx:alpine` for serving, keeping the final image lightweight and secure.

## Media

- Logo: `public/media/logo-adam-carter.png`
- Portrait: `public/media/adam-bw.jpg`
