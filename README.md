# rainballs.com

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [PlanetScale](https://planetscale.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Deployment**: [腾讯云函数](https://cloud.tencent.com/product/scf)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `data/*` - MDX data that is used for blogs and code snippets.
- `layouts/*` - The different page layouts each MDX category (blog, snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction) powering `/dashboard`, newsletter subscription, guestbook, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/dashboard` - Personal dashboard tracking metrics.
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a PlanetScale MySQL database.
- `public/*` - Static assets including fonts and images.
- `scripts/*` - Two useful scripts to generate an RSS feed and a sitemap.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

```bash
$ yarn
$ yarn dev
```

Create a `.env` file similar to `.env.example`.

## Cloning / Forking

Please review the license.txt and remove all of my personal information (resume, blog posts, images, etc.).
