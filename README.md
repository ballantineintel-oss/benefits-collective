# Benefits Collective

**Smarter Benefits Decisions for Employers**

A content-driven strategy and resource platform for HR leaders, CFOs, and business owners navigating employee benefits, health insurance costs, and HR decisions.

Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. Optimized for Vercel deployment.

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploying to Vercel

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — no configuration needed
4. Deploy

Every push to `main` triggers a new build and deploy automatically.

---

## How to Add Content

### Adding a New Article

1. Create a new file in `/content/articles/` named `your-slug.md`
2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Article Title"
slug: "your-slug"
date: "2026-04-10"
author: "Benefits Collective"
category: "Renewal Strategy"
tags: ["renewal", "cost"]
excerpt: "One or two sentence description used in cards and meta tags."
seoTitle: "Your SEO Title | Benefits Collective"
metaDescription: "Meta description for Google search results."
featured: false
readingTime: "6 min read"
---

Your article content in markdown...
```

3. Write your article body in markdown below the frontmatter
4. The article will be live at `/articles/your-slug` on the next deploy

**To feature an article on the homepage**, set `featured: true` in the frontmatter.

**Available categories:**
- PEO Exit
- Renewal Strategy
- Funding Strategy
- Cost Reduction
- Compliance
- Benchmarking
- Broker Evaluation
- HR Strategy
- Open Enrollment
- Pharmacy Strategy

---

### Adding a New Guide

1. Create a new file in `/content/guides/` named `your-slug.md`
2. Add frontmatter:

```markdown
---
title: "The Employer Guide to X"
slug: "employer-guide-to-x"
date: "2026-04-10"
author: "Benefits Collective"
category: "PEO Exit"
excerpt: "A comprehensive guide for employers considering X."
seoTitle: "The Employer Guide to X | Benefits Collective"
metaDescription: "Everything employers need to know about X."
featured: true
---

Guide content in markdown...
```

3. The guide will be live at `/guides/your-slug`

---

### Adding a New Resource

1. Create a new file in `/content/resources/` named `your-slug.md`
2. Add frontmatter:

```markdown
---
title: "Resource Title"
slug: "resource-slug"
date: "2026-04-10"
category: "Renewal Strategy"
excerpt: "One sentence description of what this resource contains."
resourceType: "checklist"
downloadable: true
---

Resource content in markdown...
```

**resourceType options:** `checklist`, `comparison`, `one-pager`, `template`

3. The resource will be live at `/resources/your-slug`

---

### Adding a New Case Study

1. Create a new file in `/content/case-studies/` named `your-slug.md`
2. Add frontmatter:

```markdown
---
title: "How a 75-Employee Company Reduced Benefits Costs by 18%"
slug: "company-reduced-costs-18-percent"
date: "2026-04-10"
industry: "Technology"
companySize: "75 employees"
challenge: "14% renewal increase"
result: "18% cost reduction"
excerpt: "Short description of the case study for cards and meta."
featured: true
---

Case study content in markdown...
```

3. The case study will be live at `/case-studies/your-slug`

---

## Featuring Content on the Homepage

The homepage pulls content in this way:

| Section | How it works |
|---------|-------------|
| Featured Articles | Articles with `featured: true`, sorted by date, max 3 |
| Featured Guides | Guides with `featured: true`, sorted by date, max 3 |
| Free Resources | All resources, sorted by date, max 3 |
| Latest Articles | All articles sorted by date, max 6 |

To feature something: set `featured: true` in its frontmatter. To un-feature it: set `featured: false` or remove the field.

---

## Adding or Editing Strategy Pillar Pages

The four strategy pages are static Next.js pages (not markdown-driven):

- `app/strategy/peo-exit/page.tsx`
- `app/strategy/renewal-strategy/page.tsx`
- `app/strategy/funding-strategies/page.tsx`
- `app/strategy/cost-reduction/page.tsx`

Edit the content directly in these files. Each page automatically pulls in related articles from its matching category using `getArticlesByCategory()`.

---

## Folder Structure

```
benefits-collective/
├── content/
│   ├── articles/       ← Add .md files here for new articles
│   ├── guides/         ← Add .md files here for new guides
│   ├── resources/      ← Add .md files here for new resources
│   └── case-studies/   ← Add .md files here for new case studies
├── app/
│   ├── page.tsx                    ← Homepage
│   ├── articles/[slug]/page.tsx    ← Article detail template
│   ├── guides/[slug]/page.tsx      ← Guide detail template
│   ├── resources/[slug]/page.tsx   ← Resource detail template
│   ├── case-studies/[slug]/page.tsx
│   ├── strategy/
│   │   ├── peo-exit/
│   │   ├── renewal-strategy/
│   │   ├── funding-strategies/
│   │   └── cost-reduction/
│   ├── newsletter/
│   ├── consultation/
│   ├── about/
│   └── contact/
├── components/
│   ├── layout/         ← Header, Footer, NavDropdown, MobileMenu
│   ├── home/           ← Homepage section components
│   ├── content/        ← Article/Guide/Resource/CaseStudy cards
│   ├── forms/          ← NewsletterForm, ConsultationForm, ContactForm
│   └── ui/             ← Button, Badge, SectionHeading, CTABanner
├── lib/
│   ├── content.ts      ← All content parsing and query functions
│   ├── types.ts        ← TypeScript types for all content
│   └── utils.ts        ← Date formatting, helpers
└── public/
    └── images/
        └── Benefits_Collective_Logo.png
```

---

## Form Integrations (Pending)

All three forms (newsletter, consultation, contact) currently log submissions to the console and show a success message. Each file has a `TODO` comment with the placeholder for integration:

- **Newsletter:** `components/forms/NewsletterForm.tsx` — integrate with ConvertKit, Mailchimp, or a custom API
- **Consultation:** `components/forms/ConsultationForm.tsx` — integrate with HubSpot, Salesforce, or email notification
- **Contact:** `components/forms/ContactForm.tsx` — integrate with email notification service

---

## SEO

- Per-page `Metadata` objects are exported from each page file
- Dynamic pages (`/articles/[slug]`, etc.) use `generateMetadata()` to pull from frontmatter
- Sitemap auto-generated at `/sitemap.xml` from all content files
- `metadataBase` in `app/layout.tsx` — update `benefitscollective.com` to your actual domain

---

## Logo

Place the logo file at `public/images/Benefits_Collective_Logo.png`. The header uses `next/image` to render it with priority loading. The footer renders it with a white invert filter on the dark background.
