# Copilot Instructions for Portfolio Website

## Quick Reference

**Package Manager:** Bun (`bun` command, not `npm`)

**Key Commands:**
- `bun run dev` - Start dev server at localhost:3000
- `bun run build` - Build for production (includes legacy HTML post-processing)
- `bun run astro check` - Type-check Astro files (use this instead of running full build)
- `bun run prettier -w .` - Format all files with Prettier
- `bun run prettier --check .` - Check formatting without modifying files

## Project Structure

### Core Architecture

This is an **Astro 6** static site generator portfolio website with:

- **Astro** for page routing (`src/pages/`) and layout composition
- **React 19** for interactive components (minimal usage - mostly static)
- **TypeScript** for type safety
- **Tailwind CSS 4** with **DaisyUI** component library
- **Content Collection** for blog posts (`src/data/posts/`) with frontmatter schema validation

### Directory Layout

- **`src/pages/`** - Astro pages (routes). Each `.astro` file becomes a page.
- **`src/layouts/`** - Reusable Astro layouts (page wrappers, common structure)
- **`src/components/`** - Reusable Astro and React components
  - **`pages/`** - Page-specific component groups (e.g., `home/`, `about/`)
  - **`layouts/`** - Layout components (Navbar, Footer, CarbonBadge, SocialTags)
- **`src/data/posts/`** - Blog post content (Markdown/MDX with required frontmatter)
- **`src/styles/`** - Global CSS and Tailwind configuration
- **`src/assets/`** - Static assets (images, fonts)
- **`public/`** - Files served as-is at root (legacy images, favicons)
- **`src/locales/`** - i18n translations (if used)

### Build Pipeline

1. Astro builds the site to `dist/`
2. **`legacy-postprocess.js`** runs post-build to:
   - Convert Astro-generated images from `_astro/` to PNG files in `/legacy/images/`
   - Update HTML files to use HTML 4.01 DOCTYPE instead of HTML5
   - Rewrite image paths in legacy post HTML files
   - This maintains backward compatibility with older formats

## Development Conventions

### Astro Components

- Use `.astro` extension for file-based routing and layout components
- Use `.tsx` or `.jsx` for React components (prefer TypeScript)
- Import React components into `.astro` files with `client:directive` for interactivity (e.g., `client:load`, `client:idle`)
- Astro components are rendered at build-time; use client directives sparingly

### Styling

- Use **Tailwind CSS** utility classes for all styling
- Use **DaisyUI** classes for pre-built components (buttons, modals, cards, navbar)
- Global styles in `src/styles/`
- `@tailwindcss/typography` is available for styled Markdown content
- Tailwind v4 uses Lightning CSS for minification (configured in `astro.config.js`)

### Content & Posts

- Blog posts go in `src/data/posts/` as Markdown or MDX files
- Required frontmatter fields (see `src/content.config.ts`):
  - `lang` - Language code (e.g., "en", "bn")
  - `title` - Post title
  - `description` - Meta description
  - `socialImage` - OG image path
  - `publishDate` - Date object
  - `keywords` - Comma-separated keywords for SEO

### Configuration & Domain

- Site domain is defined in `src/domain.ts` (currently "moheshwar.com")
- Astro config in `astro.config.js`:
  - Site URL, compression, inline stylesheets, integrations (sitemap, React, Tailwind breakpoint display)
  - Vite config for CSS minification and responsive images

## Code Quality & Formatting

### Prettier Configuration

Prettier is **enforced** on push to main branch (see `.github/workflows/prettier.yml`).

- **Plugins:**
  - `prettier-plugin-astro` - Format `.astro` files correctly
  - `prettier-plugin-tailwindcss` - Sort Tailwind classes by specificity
  - `prettier-plugin-sort-imports` - Organize imports (grouped, sorted)

- **Editor Integration:**
  - VS Code uses Prettier as default formatter (see `.vscode/settings.json`)
  - Format on save is enabled
  - Tab size: 2 spaces

### Type Checking

- Run `bun run astro check` before committing (checks TypeScript + Astro syntax)
- Astro uses strict TypeScript config (extends `astro/tsconfigs/strict`)
- JSX is set to `react-jsx` with React import source

### Linting & Quality Checks

- **CodeQL** - Security scanning (runs on push, see `.github/workflows/codeql.yml`)
- **Markdown Linting** - Configured in `.markdownlint.json` (some rules disabled for flexibility)

## Testing & Diagnostics

- **No unit tests configured** - This is a static portfolio site with minimal interactivity
- **Use `bun run astro check`** for pre-build validation instead of running full builds
- GitHub Actions run diagnostics on every push/PR
- View workflow status in README badges

## MCP Servers

The project is configured with MCP servers for IDE assistance:

- **Astro docs** (http://mcp.docs.astro.build/mcp) - Access official Astro framework documentation
- **daisyUI** (sse://gitmcp.io/saadeghi/daisyui) - Component library reference

## Common Tasks

### Add a New Page

1. Create `.astro` file in `src/pages/` (filename becomes route)
2. Wrap content with appropriate layout from `src/layouts/`
3. Use components from `src/components/`
4. Styling with Tailwind + DaisyUI classes

### Add a Blog Post

1. Create `.md` or `.mdx` file in `src/data/posts/`
2. Add required frontmatter (lang, title, description, socialImage, publishDate, keywords)
3. Write content in Markdown
4. Image paths relative to post file or from `/public/`

### Add a React Component

1. Create `.tsx` file in `src/components/` (not in `pages/`)
2. Use TypeScript types for props
3. Import and use in `.astro` files with `client:directive` if interactive

### Run Diagnostics Locally

Before pushing, run type-checking (faster than full build):

```bash
bun run astro check
```

Then verify formatting:

```bash
bun run prettier --check .
```

## Deployment & Performance

- Site is optimized with HTML compression, inlined critical CSS, and responsive image loading
- Responsive images enabled with experimental Astro feature
- Sitemap automatically generated (`@astrojs/sitemap`)
- Legacy post-processing handles backward compatibility for archived content
- Static site generation (no server required)

## Search Engine Optimization (SEO) & Rich Results

The site implements **schema.org JSON-LD** structured data for Google Rich Results:

- **Person Schema** - On all pages via `Main.astro` layout, marking Moheshwar as a Person with contact info, job title, and social profiles
- **WebSite Schema** - On all pages, providing site name, description, and creator info
- **BlogPosting Schema** - Automatically on each blog post with headline, author, publication date, and image
- **CollectionPage Schema** - On the home page for projects, describing the collection of software applications
- **BreadcrumbList Schema** - On the posts index page for navigation hierarchy

**Schema Components:**
- `src/components/schemas/SchemaOrg.astro` - Renders JSON-LD scripts
- `src/lib/schemas.ts` - Schema creation functions for all types
- Automatically injected into page `<head>` via layouts and page components

**Adding Schemas to New Pages:**
1. Import `SchemaOrg` component and desired schema function
2. Call the function with relevant data
3. Add `<SchemaOrg schema={createXxxSchema(...)} />` in the component

## Troubleshooting

**Image not showing after build?**  
Check if it's being converted by `legacy-postprocess.js`. Images in legacy posts may need paths updated to `/legacy/images/filename.png`.

**Prettier formatting conflicts?**  
Ensure you're using Bun version 1.0+ and all Prettier plugins are installed. Run `bun install` to sync dependencies.

**TypeScript errors?**  
Run `bun run astro check` to see detailed diagnostics. Check that imports use correct relative paths and that component props are typed.

**Schema validation issues?**  
Test schemas with [Google's Rich Results Test](https://search.google.com/test/rich-results) or [Schema.org validator](https://validator.schema.org/)
