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

Every push to `main` runs lint and build, then deploys over SSH (`.github/workflows/deploy.yml`). On the server, `deploy/deploy.sh` clones the latest `main` into `/var/www/himidgraphix/releases/<timestamp>`, builds it, switches the `current` symlink, restarts the `himidgraphix-web` systemd service (Next.js on 127.0.0.1:8101) and health-checks it, rolling back automatically if the new release does not respond. nginx (`/etc/nginx/sites-available/himidgraphix.conf`) serves it behind Cloudflare with the origin certificate in `/etc/ssl/cloudflare/`.

**Repository secrets** (Settings → Secrets and variables → Actions):

| Secret | Value |
| --- | --- |
| `VPS_HOST` | Server IP |
| `VPS_USER` | `root` |
| `VPS_B64` | Private key of the `github-actions-himidgraphix` deploy key, base64-encoded on one line |
| `VPS_PORT` | Optional, defaults to `22` |

**One-time server setup:** place the Cloudflare origin certificate at `/etc/ssl/cloudflare/himidgraphix.pro.pem` and `.key`, then from a checkout of this repo run `bash deploy/setup-server.sh` as root.
