# Rosaryo website (Cloudflare)

```
rosaryo-site/
├─ wrangler.jsonc        Cloudflare Workers config (static assets from ./public)
└─ public/
   ├─ index.html         homepage
   ├─ privacy.html       privacy policy  →  /privacy
   ├─ site.css           shared styles (same palette as the app)
   ├─ _headers           security headers (CSP, nosniff, referrer policy)
   └─ favicon.png, icon-192.png, icon-512.png, apple-touch-icon.png
```

## 1. Before you deploy
Replace `YOUR_EMAIL@example.com` with your real contact email (3 places in `index.html`, 1 in `privacy.html`).

## 2. Preview locally
Open the folder in a terminal and run:
```bash
npx wrangler dev
```
(Opening `index.html` by double-click will look unstyled because the pages use root-relative links like `/site.css`.)

## 3. Deploy to Cloudflare
```bash
npx wrangler login
npx wrangler deploy
```
You get a URL like `https://rosaryo.<your-subdomain>.workers.dev`.
Your privacy policy URL for Google Play is that address plus `/privacy`.

Dashboard alternative: Workers & Pages → Create → upload the `public` folder.
Custom domain (optional): if ealegro.com is on Cloudflare, add `rosaryo.ealegro.com` under the Worker's Domains & Routes.

## 4. Keep the policy true
The policy says the app sends no data anywhere. That is only accurate once the app's fonts are bundled
inside the app (not loaded from Google Fonts). Update this policy whenever the app's behaviour changes.
