# Developerz Hub

Next.js App Router, React and TypeScript marketing website. Original design inspired by the supplied Qwery AI reference, using the supplied Developerz Hub logo and pink/plum palette.

## Local development

Requires Node.js 20.9 or newer (the included development tooling may require a newer supported Node release; Node 24 was used for verification).

```sh
npm ci
npm run dev
```

Use http://127.0.0.1:3000. Continue locally; do not publish unless the owner explicitly requests it. The older private hosted preview is not synchronized with this source.

## Checks and static export

```sh
npm run build
npm run typecheck
npm run seo:check
```

Build output is in out/. The build wrapper avoids a Windows filesystem concurrency issue. The SEO audit checks the generated HTML, internal links, sitemap and metadata.

## SEO and production configuration

Identity and metadata are in lib/seo.ts. Canonical host: https://developerzhub.com. Contact: info@developerzhub.com.

Copy .env.example to .env.local if configuration is needed. SITE_INDEXABLE defaults to false. Only set it to true for the reviewed production release. Run the production audit with `npm run seo:check -- --production`. Local/private builds should remain noindex. robots.txt allows crawling so crawlers can see the noindex directive. Optional GOOGLE_SITE_VERIFICATION and BING_SITE_VERIFICATION tokens are supported; no tokens are invented.

The project includes sitemap.xml, robots.txt, social metadata, a branded social image, factual JSON-LD, breadcrumbs, an About page, a guide hub, 51 service pages, 15 guides, contact and privacy information, and a custom 404.

The brief builder prepares a mailto draft and supports copy/download. It does not send mail or store enquiries in a database. An email client is required to send; direct email and copy are available for webmail users.

## Content and assets

- lib/service-content.ts: core service copy and FAQs.
- lib/expanded-services.ts: 43 additional stack-specific service pages, categories and related links.
- lib/hiring-guides.ts: hiring-guide collection.
- lib/gap-content.ts: five additional service pages and nine guides from the keyword-gap audit.
- lib/service-depth.ts: expanded database, Shopify, PHP, WordPress and web topics with contextual links.
- components/stack-directory.tsx: the grouped, crawlable service directory.
- components/site.tsx: service summaries, navigation and footer.
- app/guides/[guide]/page.tsx and components/guide-extras.tsx: guide content.
- app/globals.css, app/reference-style.css and app/seo-style.css: styles.
- app/fonts.css and public/fonts/: self-hosted fonts with licenses.
- public/*webp: original illustrative artwork and responsive sizes.
- public/social-preview.jpg: 1200 × 630 social image.
- ARTWORK.md: original image-generation prompts and asset provenance.

The artwork is conceptual, not a customer project or team photograph. No fabricated testimonials, client outcomes, rates or locations are included. The business privacy policy and real case studies still need owner-supplied details before launch. See the SEO implementation report next to the source archive for validation and launch steps.

## Long-form hiring-page drafts

The 51 existing hiring landing pages now use lib/hiring-copy.ts, with 408 specific capability dossiers in lib/hiring-dossiers.ts and scope alternatives in lib/hiring-alternatives.ts. All pages are local drafts with marked business-fact placeholders. No review ratings, client results, rates or staffing policies are fabricated.

Run `npm run build`, `npm run seo:check` and `npm run copy:check`. The last command validates the rendered 2,000–3,000-word range, 16-section structure, metadata lengths, primary-keyword placement, eight 30–40-word capability descriptions and 14 FAQs matching JSON-LD. It exports Markdown, JSON and placeholder checklists to ../hiring-page-copy/. Word counts include headings, placeholders, form labels and expandable FAQ text; shared navigation/footer and JSON-LD are excluded.

Services-page URLs and proof links remain marked placeholders because separate verified destinations were not supplied. Fill and revalidate all missing business facts before considering a public release. Do not deploy as part of local editing.
