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

## 4. Cache policy

- HTML pages, JavaScript, CSS, and files in `public/assets/` are set to `no-store, no-cache, must-revalidate`.
- This prevents browsers and Cloudflare edge caches from retaining deployed copies.

Cloudflare deploys serve the new static asset files automatically. Browsers cannot be remotely cleared; the no-store policy prevents them from retaining copies, while must-revalidate ensures cached intermediaries check for the newest response.

## 5. Keep the policy true
The policy says the app sends no data anywhere. That is only accurate once the app's fonts are bundled
inside the app (not loaded from Google Fonts). Update this policy whenever the app's behaviour changes.

## 6. Production assets

- Sass source: `src/sass/site.scss`
- JavaScript entry: `src/js/app.js`
- Build minified deployment assets:
```bash
npm install
npm run build
```
- Build and deploy:
```bash
npm run deploy
```

`npm run build` produces `public/site.css` and `public/app.min.js`. Deployments should use `npm run deploy` rather than calling Wrangler directly.

## 7. Date-based release branches

Create a branch for each deployment date:

```bash
git switch -c release/$(Get-Date -Format yyyyMMdd)
git push -u origin release/$(Get-Date -Format yyyyMMdd)
npm run deploy
```

PowerShell example for today: `release/20261121`. Use a new date-based branch whenever tomorrow's changes are deployed. Deploy only from the active release branch.
