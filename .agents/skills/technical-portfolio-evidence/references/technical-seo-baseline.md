# Technical SEO and discovery baseline

Research snapshot: 2026-09-20. Verify current search-engine guidance before implementation.

## Stable baseline

- Give each indexable page a concise, descriptive `<title>` aligned with the visible main heading and content.
- Provide a useful meta description. Search engines may choose a different snippet.
- Use one public canonical URL per page where duplicate or variant URLs may exist.
- Render meaningful semantic HTML and crawlable links. Do not make essential identity or project content depend solely on client-side JavaScript.
- Use stable, descriptive, indexable URLs for projects or case studies that deserve individual discovery.
- Add Open Graph metadata for accurate link previews; treat it as sharing metadata, not ranking proof.
- Generate a sitemap when it helps discovery or monitoring. Submission is a hint and does not guarantee crawling or indexing.
- Configure `robots.txt` deliberately. It controls crawler access; it is not a reliable mechanism for removing a URL from search results.
- Use Search Console after ownership is available to inspect indexing and submit important URLs or a sitemap. Requests do not guarantee inclusion or a deadline.

Primary guidance:

- Google title links: <https://developers.google.com/search/docs/appearance/title-link>
- Supported metadata: <https://developers.google.com/search/docs/crawling-indexing/special-tags>
- Canonicalization: <https://developers.google.com/search/docs/crawling-indexing/canonicalization>
- Sitemaps: <https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap>
- Recrawling and indexing requests: <https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl>
- JavaScript SEO: <https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics>

## Structured data

Consider `Person` and `WebSite` JSON-LD when it accurately represents visible public information. Keep names, URLs, roles, and profile links consistent with the page. Use `sameAs` only for canonical public profiles the person controls or has verified.

Structured data can help machines interpret content, but it does not guarantee a rich result, ranking, knowledge panel, identity merge, or AI citation. Never expose private contact data merely to complete a schema.

## International and bilingual content

Use distinct crawlable URLs for materially translated pages when both languages should be indexed. Keep factual parity, accurate language attributes, reciprocal navigation, canonicals, and `hreflang` where appropriate. Do not create thin machine-translated variants solely for keyword coverage.

## Agent and AI discovery

`llms.txt` remains a community proposal, currently described by its own specification as a proposal: <https://llmstxt.org/>. It has growing adoption for agent-readable documentation, but there is no demonstrated general ranking or citation benefit for a small professional website.

Treat it as optional after the human-facing site and standard discovery baseline are stable. If used, keep it concise, factual, public, and consistent with canonical pages. Do not add it as a substitute for semantic HTML, sitemap, structured data, or accessible content.

Google states that `Google-Extended` does not affect inclusion or ranking in Google Search. Do not present crawler controls as SEO boosts: <https://developers.google.com/search/updates>

## Verification record

At release, record which items were implemented, which were validated in rendered output, which require a public domain or Search Console, and which remain experimental.
