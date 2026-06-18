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

The site is available as both Linux and Windows container images, built and pushed to Docker Hub automatically by GitHub Actions.

### Linux Images (Recommended)

Works on Docker Desktop (Windows, macOS) and Linux servers:

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

### Windows Images

For native Windows containers (Windows Server 2022+):

1. Build the Windows image locally (requires Docker on Windows):

   ```bash
   docker build -f Dockerfile.windows -t dvop400-finalproject:windows .
   ```

2. Run the Windows container:

   ```bash
   docker run -p 8080:80 dvop400-finalproject:windows
   ```

3. Or pull from Docker Hub:

   ```bash
   docker run -p 8080:80 yourusername/dvop400-finalproject:windows-latest
   ```

   The site will be available at `http://localhost:8080`.

### CI/CD

GitHub Actions automatically builds and pushes both image variants:

- **Linux images** (default): `latest`, `<commit-sha>-linux` — for all platforms via Docker Desktop or Linux
- **Windows images**: `windows-latest`, `<commit-sha>-windows` — for native Windows containers

Both variants are configured with proper routing, caching, and security headers.

## Project Notes

- Shared personal content lives in `content/site.ts`.
- The logo and portrait are stored in `public/media/`.
- The site is configured for static export through `next.config.mjs`.
- Tests run with Vitest through `npm test` and are suitable for GitHub Actions.
- Docker images available in both Linux (nginx/alpine) and Windows (IIS/nanoserver) variants, automatically built for amd64, arm64, and arm/v7 architectures on Linux.

## Media

- Logo: `public/media/logo-adam-carter.png`
- Portrait: `public/media/adam-bw.jpg`
