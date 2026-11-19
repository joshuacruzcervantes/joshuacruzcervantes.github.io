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
 *
 * SECURITY HEADERS (added 2026-11):
 * The live domain on Hostinger runs this app as a Next.js server, so the
 * headers below are sent there. GitHub Pages ignores them (it cannot set
 * headers), which is why app/layout.tsx also sets the CSP and referrer policy
 * as <meta> tags. Next prints a warning at build time that "headers" do not
 * apply to a pure static export; that warning is expected and harmless.
 */

// Content Security Policy: only load code from this site; allow YouTube's
// privacy-friendly embed for blog videos. Inline scripts/styles are needed by
// a static Next.js export (no per-request nonce is possible).
export const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'self' https://www.youtube-nocookie.com",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
  // Force HTTPS for a year, including subdomains.
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Stop other sites from showing this site inside a frame (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers from guessing file types.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Share only the domain (not full URLs) when visitors click outbound links.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Turn off device features the site never uses.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Adds a trailing slash to routes (e.g. /about/) which makes static hosting
  // on simple servers more reliable.
  trailingSlash: true,
  // Do not advertise "X-Powered-By: Next.js".
  poweredByHeader: false,
  // Inline critical CSS into the HTML so it does not block first paint.
  experimental: { inlineCss: true },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
