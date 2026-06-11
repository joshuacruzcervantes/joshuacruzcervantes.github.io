/**
 * Next.js configuration
 * ----------------------
 * `output: "export"` makes Next.js produce a fully static site when you run
 * `npm run build`. The finished files land in the `out/` folder, which you can
 * upload to ANY static host (Netlify, GitHub Pages, your own server, etc.).
 * No Node server, no database, no backend required.
 *
 * Because there is no server, Next.js cannot optimize images on the fly, so we
 * set `images.unoptimized` to true. We use plain <img> tags in this project to
 * keep things simple for static hosting.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Adds a trailing slash to routes (e.g. /about/) which makes static hosting
  // on simple servers more reliable.
  trailingSlash: true,
};

export default nextConfig;
