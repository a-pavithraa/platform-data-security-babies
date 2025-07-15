# Astro + React Project Best Practices

## Project Structure
- Use `/src/components/` for reusable React components
- Use `/src/pages/` for Astro pages with `.astro` extension
- Keep React components in `/src/components/react/` if mixing with Astro components
- Store shared utilities in `/src/utils/`
- Place types in `/src/types/` or use `.d.ts` files

## Component Guidelines
- Use `.astro` files for static content and layout components
- Use React components for interactive UI elements
- Prefer Astro components for better performance when interactivity isn't needed
- Use `client:` directives sparingly and choose the right hydration strategy:
  - `client:load` - hydrate immediately
  - `client:idle` - hydrate when browser is idle
  - `client:visible` - hydrate when component enters viewport
  - `client:media` - hydrate based on media query

## Performance Optimization
- Minimize JavaScript bundle size by using Astro components where possible
- Use `client:only` for components that should only render on client
- Implement proper image optimization with Astro's `<Image>` component
- Use static generation for pages that don't require server-side data
- Leverage Astro's partial hydration for better Core Web Vitals

## Development Workflow
- Run `npm run dev` for development server
- Use `npm run build` to build for production
- Run `npm run preview` to preview production build locally
- Use `npm run astro check` for TypeScript checking
- Implement proper ESLint and Prettier configuration

## TypeScript Best Practices
- Enable strict mode in `tsconfig.json`
- Use proper typing for component props
- Define interfaces for API responses and data structures
- Use Astro's built-in TypeScript support for `.astro` files

## Styling Recommendations
- Use scoped styles in `.astro` files with `<style>` tags
- Consider CSS modules or styled-components for React components
- Implement consistent design system with CSS custom properties
- Use PostCSS or Sass for advanced CSS features

## Testing Strategy
- Use Vitest for unit testing React components
- Implement E2E testing with Playwright or Cypress
- Test Astro components using `@astro/test` utilities
- Mock external dependencies and APIs properly

## Common Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linting
- `npm run type-check` - Check TypeScript types
- `npm test` - Run test suite