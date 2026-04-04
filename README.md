# I Become More With You

A Next.js 16 app for the documentary film **I Become More With You / Jag blir mer med dig**. The project uses the App Router, Tailwind CSS v4, `next-intl` for localization, and a serverless contact form powered by EmailJS.

## Features

- Multilingual site with language route segment: `/en` and `/sv`
- Localized metadata via `generateMetadata`
- Self-hosted Google fonts using `next/font/google`
- Hero image optimized with Next.js `Image`
- Lazy-loaded Vimeo trailer embed
- Contact form sending data through `app/api/contact/route.ts`
- Tailwind CSS styling with global theming

## Project Structure

- `app/[lang]/layout.tsx` — Root layout and locale-aware metadata
- `app/[lang]/page.tsx` — Localized home page wrapper
- `app/[lang]/components/` — Reusable UI sections
- `app/api/contact/route.ts` — Contact form POST handler
- `messages/en.json` — English translations
- `messages/sv.json` — Swedish translations
- `public/` — Static assets, including images and poster art

## Local Development

Install dependencies with pnpm:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Open the site at:

- `http://localhost:3000/en`
- `http://localhost:3000/sv`

## Build and Production

Build the production app:

```bash
pnpm build
```

Run it locally after building:

```bash
pnpm start
```

## Translating Metadata

This app translates metadata using `generateMetadata` in `app/[lang]/layout.tsx`. Metadata is generated on the server, so it cannot use component hooks like `useTranslations`.

Component text, on the other hand, is translated inside React components using `useTranslations("About")`, `useTranslations("Hero")`, etc. Those translations are resolved by `NextIntlClientProvider` at runtime.

Example translation keys for metadata:

```json
"MetaData": {
  "title": "...",
  "description": "..."
}
```

## Notes

- Fonts are loaded via `next/font/google` and should be self-hosted by Next.js.
- The trailer embed is intentionally lazy-loaded to improve page performance.
- The contact form posts to your backend route and uses `@emailjs/nodejs`.

## Useful Scripts

- `pnpm dev` — start development server
- `pnpm build` — build production app
- `pnpm start` — run production server
- `pnpm lint` — run ESLint

## License

This repository is private, as configured in `package.json`.
