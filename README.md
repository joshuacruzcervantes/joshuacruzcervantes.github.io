# Joshua Cervantes — Portfolio

A fast, static personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It sells both your IT teaching ability and your technical expertise, and features a signature interactive terminal (desktop only).

---

## 1. Quick start

You need [Node.js](https://nodejs.org) 18.18+ installed. Then, from this folder:

```bash
npm install        # install dependencies (run once)
npm run dev        # start the local dev server
```

Open **http://localhost:3000** in your browser. Edit any file and the page reloads automatically.

### Build the static site (to host anywhere)

```bash
npm run build
```

This produces a fully static site in the **`out/`** folder. There is **no server, database, or backend** — just upload the contents of `out/` to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, or your own web server).

To preview the production build locally, you can serve the folder with any static server, e.g.:

```bash
npx serve out
```

---

## 2. Where to edit your content

**99% of your edits happen in one file:**

### → [`lib/content.ts`](lib/content.ts)

Open it and change the text. It's heavily commented and organized by section:
hero, terminal, about, teaching, skills, projects, certifications, contact.
Change a value, save, and the site updates. You never have to touch the React
components to update wording, skills, certs, projects, or links.

---

## 3. Where to put your assets

Everything in the **`public/`** folder is served at the root of your site
(e.g. `public/cv.pdf` → `https://yoursite.com/cv.pdf`).

| What | Drop it here | Notes |
|------|--------------|-------|
| **Your CV** | `public/cv.pdf` | Replace the placeholder. The "View CV" / "Download CV" buttons link to `/cv.pdf`. |
| **Your photo** | `public/profile.jpg` | A placeholder `profile.svg` ships in `public/`. After adding `profile.jpg`, open `lib/content.ts`, find `about.photo`, and change `"/profile.svg"` to `"/profile.jpg"`. A portrait (4:5) image looks best. |
| **Project images** | `public/projects/` | Replace `placeholder-1.svg`, `-2`, `-3` with your own screenshots (e.g. `lab.png`). Then update each project's `image` path in `lib/content.ts`. |

> Tip: any image format works (`.jpg`, `.png`, `.webp`, `.svg`). Just make sure the
> path in `content.ts` matches the file name you saved.

### Linking a YouTube teaching demo
In `content.ts`, under `teaching.youtube`, paste a video ID into `demoVideoId`
(the part after `v=` in a YouTube URL) to embed a video. Leave it as `""` to
just show a button linking to your channel.

---

## 4. File structure

```
sirvanteswebsite/
├── app/
│   ├── layout.tsx        # Root layout: fonts, SEO metadata, no-flash theme script
│   ├── page.tsx          # The home page — stacks all the sections in order
│   └── globals.css       # Tailwind + a few base styles
├── components/           # One file per UI piece (all commented)
│   ├── Navbar.tsx        # Sticky top nav + mobile menu
│   ├── Hero.tsx          # Headline + CTAs + animated background
│   ├── Terminal.tsx      # The interactive terminal (DESKTOP ONLY)
│   ├── About.tsx
│   ├── Teaching.tsx      # Sells the teaching pivot + YouTube call-out
│   ├── Skills.tsx        # Metrics strip + grouped skill tags
│   ├── Projects.tsx      # Card grid
│   ├── Certifications.tsx
│   ├── Contact.tsx       # mailto + social links (no backend)
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx   # Light/dark switch
│   ├── SectionHeading.tsx# Shared section title block
│   └── Reveal.tsx        # Scroll-into-view animation wrapper
├── lib/
│   ├── content.ts        # ← ALL YOUR TEXT LIVES HERE
│   └── useIsDesktop.ts   # Hook that hides the terminal on phones/tablets
├── public/               # Your assets (cv.pdf, profile, project images)
├── tailwind.config.ts    # Brand color + fonts (change the accent here)
└── next.config.mjs       # Static-export config
```

---

## 5. Common tweaks

- **Change the accent color:** `tailwind.config.ts` → `theme.extend.colors.brand`.
  Replace the hex values (500 is the main one) and the whole site re-skins.
- **Reorder sections:** move the lines around in `app/page.tsx`.
- **Edit the terminal's files/output:** `lib/content.ts` → the `terminal` block.
  `ls` lists `terminal.files`/`directories`; `cat <name>` prints a file's `body`.
- **Change the site title / SEO description:** `lib/content.ts` → `site`.

---

## 6. The interactive terminal

On the homepage, below the hero, there's a real typeable terminal. Click it and
type `help`. Supported commands: `help`, `ls`, `cat <file>`, `whoami`, `skills`,
`certs`, `clear` (plus Up/Down arrows for command history).

It is **desktop only** — on phones and tablets the entire section is removed
(not just hidden), so the mobile layout flows cleanly from the hero straight to
the About section with no empty gap. The detection (`lib/useIsDesktop.ts`) checks
both viewport width and pointer type after the page mounts, so there's no flash.

---

Built with care. Maintain it by editing `lib/content.ts`. 🎓
