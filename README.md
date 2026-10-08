# Himidi Graphics

Portfolio site for Himidi Graphics, a graphic design studio in Tanzania. Built with Next.js 16 (App Router), fully static.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages are prerendered)
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the live domain before deploying (defaults to `https://himidgraphix.pro`). It is used for canonical URLs, Open Graph tags, the sitemap and JSON-LD.

## Editing content

| What | Where |
| --- | --- |
| Name, phone, WhatsApp, email, Instagram | `lib/site.ts` |
| Projects (case studies), alt text, featured work | `lib/projects.ts` |
| Services and process steps | `lib/services.ts` |
| Page copy | `app/**/page.tsx` |

**Adding a project:** put the images in `public/images/`, import them at the top of `lib/projects.ts`, and add an entry to `projects`. The `/work` grid, filters, the `/work/<slug>` page and the sitemap all update automatically. Write a real `alt` description for every image.

## Standards this site is built to

- **Accessibility (WCAG 2.2 AA):** skip link, landmarks, one `h1` per page, visible 3px focus rings, 44–48px touch targets, keyboard-operable menu and lightbox (native `<dialog>`), labelled form fields with inline error messages, colour contrast checked in both themes, `prefers-reduced-motion` respected.
- **Performance (Core Web Vitals):** no animation library; scroll reveals use CSS scroll-driven animations, so content is never hidden if JS is slow. Images go through `next/image` (AVIF/WebP, responsive `sizes`), and the hero poster is prioritised for LCP.
- **SEO:** per-page titles, descriptions and canonicals, Open Graph/Twitter images, `sitemap.xml`, `robots.txt`, web manifest, JSON-LD (`ProfessionalService`, `CreativeWork`).
- **Security:** CSP, HSTS, `X-Frame-Options`, `nosniff`, Referrer and Permissions policies (see `next.config.ts`).

The contact form needs no backend: it composes the brief into a WhatsApp message (or an email) for the visitor to send.

## Deployment (VPS + GitHub Actions)

Every push to `main` runs lint and build, then deploys over SSH (`.github/workflows/deploy.yml`). On the server, `deploy/deploy.sh` clones the latest `main` into a new release folder, builds it, switches the `current` symlink, reloads PM2 and health-checks the site, rolling back automatically if the new release does not respond.

**Repository secrets** (Settings → Secrets and variables → Actions):

| Secret | Value |
| --- | --- |
| `VPS_HOST` | Server IP or hostname |
| `VPS_USER` | SSH user that owns `/var/www/himidgraphix` |
| `VPS_B64` | That user's private SSH key, base64-encoded on one line (`base64 -w0 ~/.ssh/id_ed25519`) |
| `VPS_PORT` | Optional, defaults to `22` |

**One-time server setup:** point the `himidgraphix.pro` and `www.himidgraphix.pro` A records at the VPS, then on the server run `deploy/setup-server.sh`. It installs Node 22, PM2, nginx and a Let's Encrypt certificate, and does the first deploy.
