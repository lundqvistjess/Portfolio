# Professional UX Designer Portfolio

A production-ready portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion. This project showcases a modern, minimal Scandinavian-inspired design aesthetic perfect for UX designers.

## Features

✨ **Design System**: Centralized design tokens with custom Tailwind configuration
🎨 **Modern Animations**: Smooth, accessible animations with Framer Motion
📱 **Responsive Design**: Mobile-first approach with Tailwind breakpoints
♿ **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
⚡ **Performance**: Optimized images, code splitting, and Next.js best practices
🎯 **Dynamic Routes**: Case studies with dynamic routing and static generation
📊 **SEO Optimized**: Metadata, Open Graph, and Twitter cards

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Package Manager**: npm
- **Deployment**: Ready for Vercel

## Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with Navigation & Footer
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── work/
│   │   ├── page.tsx             # Case studies index
│   │   └── [slug]/page.tsx      # Dynamic case study template
│   ├── about/
│   │   └── page.tsx             # About page
│   └── not-found.tsx            # 404 page
├── components/
│   ├── ui/                      # Atomic components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── Tag.tsx
│   ├── layout/                  # Layout components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── cards/                   # Composite cards
│   │   └── CaseStudyCard.tsx
│   ├── sections/                # Section components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedCaseStudies.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── AboutPreview.tsx
│   │   └── ContactCTA.tsx
│   └── providers/
│       └── MotionProvider.tsx
├── lib/
│   ├── design-system.ts         # Design tokens
│   ├── types.ts                 # TypeScript definitions
│   ├── constants.ts             # App constants
│   ├── motion.ts                # Animation variants
│   └── content.ts               # Case study data
├── utils/
│   ├── cn.ts                    # Classname utility
│   ├── animation.ts             # Animation helpers
│   └── formatters.ts            # Text/date formatting
├── hooks/
│   ├── useInView.ts             # Intersection observer
│   └── useMediaQuery.ts         # Media query hook
├── public/                      # Static assets
│   └── images/                  # Image assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Update Designer Info

Edit `lib/constants.ts`:

```typescript
export const DESIGNER_NAME = 'Your Name';
export const DESIGNER_EMAIL = 'your.email@example.com';
export const navigationItems = [
  // Your navigation items
];
```

### 2. Add Case Studies

Edit `lib/content.ts` and add to the `caseStudies` array:

```typescript
{
  id: '05',
  slug: 'your-project-slug',
  title: 'Project Title',
  description: 'Short description',
  featured: true,
  category: 'Product Design',
  year: 2024,
  // ... other fields
}
```

### 3. Update Skills & Tools

Edit `lib/content.ts` to modify the `skills` and `tools` arrays.

### 4. Customize Design System

Edit `tailwind.config.js` to change:
- Colors and accent color
- Typography scales
- Spacing system
- Shadows and elevation
- Breakpoints

### 5. Replace Placeholder Images

Replace SVG placeholders in `public/images/`:
- `profile.jpg` - Your portrait
- `case-studies/*.jpg` - Case study images

### 6. Update About Bio

Edit the `aboutBio` constant in `lib/content.ts`.

### 7. Customize Colors

The design system uses:
- **Accent Green**: `#6B8E23` (modify in Tailwind config)
- **Primary Text**: `#1A1A1A`
- **Background**: `#FFFFFF`

### 8. Social Links

Edit `lib/constants.ts` `socialLinks` array to add your social profiles.

## Component Documentation

### Atomic Components (UI)

#### Button
```tsx
<Button variant="primary" size="md" href="/work">
  View My Work
</Button>
```
- Variants: `primary`, `secondary`, `tertiary`
- Sizes: `sm`, `md`, `lg`

#### Card
```tsx
<Card hoverEffect={true}>
  Content here
</Card>
```

#### Container
```tsx
<Container size="md">
  Content
</Container>
```
- Sizes: `sm` (640px), `md` (1024px), `lg` (1280px)

#### Section
```tsx
<Section spacing="lg" dark>
  Content
</Section>
```
- Spacing: `sm`, `md`, `lg`
- Dark background option

#### Tag
```tsx
<Tag text="Design" variant="accent" />
```
- Variants: `default`, `accent`, `neutral`

### Section Components

#### HeroSection
```tsx
<HeroSection
  title="Your Title"
  subtitle="Optional subtitle"
  description="Description text"
  ctaButton={{ label: 'CTA', href: '/' }}
/>
```

#### FeaturedCaseStudies
```tsx
<FeaturedCaseStudies
  caseStudies={caseStudies}
  viewAllLink="/work"
/>
```

#### ProcessSection
```tsx
<ProcessSection steps={processSteps} />
```

#### AboutPreview
```tsx
<AboutPreview
  bio="Bio text"
  skills={skills}
  tools={tools}
  imageUrl="/image.jpg"
  link="/about"
/>
```

#### ContactCTA
```tsx
<ContactCTA
  title="Let's work together"
  ctaButton={{ label: 'Get In Touch', href: 'mailto:...' }}
/>
```

## Hooks

### useInView
Trigger animations when element enters viewport:

```tsx
const [ref, isInView] = useInView({ threshold: 0.2, once: true });

return (
  <motion.div ref={ref} animate={isInView ? 'visible' : 'hidden'}>
    Animated content
  </motion.div>
);
```

### useMediaQuery
Responsive hooks:

```tsx
const isMobile = useIsMobile();
const isDesktop = useIsDesktop();
const prefersReducedMotion = usePrefersReducedMotion();
```

## Design System

### Colors
- **White**: `#FFFFFF`
- **Light Grey**: `#F8F8F8`, `#F0F0F0`, `#E8E8E8`
- **Charcoal**: `#1A1A1A` (primary text)
- **Accent Green**: `#6B8E23`

### Spacing (8px Grid)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

### Typography
- **H1**: 48px/56px (desktop), 32px/40px (mobile)
- **H2**: 36px/44px (desktop), 24px/32px (mobile)
- **H3**: 24px/32px
- **Body**: 16px/28px
- **Caption**: 14px/20px

### Shadows
- Subtle: `0 2px 8px rgba(0,0,0,0.08)`
- Medium: `0 4px 16px rgba(0,0,0,0.12)`
- Elevated: `0 8px 24px rgba(0,0,0,0.16)`

### Breakpoints
- Mobile: 320px-639px (default)
- Tablet: 640px-1023px (sm:)
- Desktop: 1024px+ (lg:)

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy with one click

```bash
vercel
```

### Other Hosting Options

The project can be deployed to any platform supporting Node.js:
- Netlify
- AWS Amplify
- Heroku
- DigitalOcean
- Self-hosted servers

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Lazy loading for below-the-fold content
- ✅ Code splitting per route
- ✅ CSS purging in production
- ✅ Minification and compression enabled
- ✅ Static generation for case studies

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## Accessibility Features

- ♿ WCAG AA compliant color contrast
- ♿ Keyboard navigation support
- ♿ ARIA labels and semantic HTML
- ♿ Focus visible states on all interactive elements
- ♿ Respects prefers-reduced-motion
- ♿ Skip to content link

## Future Enhancements

- [ ] Dark mode with CSS custom properties
- [ ] Blog section with MDX support
- [ ] Contact form with email integration
- [ ] CMS integration (Sanity, Contentful)
- [ ] Newsletter signup
- [ ] Analytics integration
- [ ] Search functionality
- [ ] Testimonials section
- [ ] Comments system

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=UX Portfolio
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## License

This project is open source. Feel free to use it as a template for your own portfolio.

## Support

For questions or issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Consult [Framer Motion guide](https://www.framer.com/motion/)

## Credits

Built with:
- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

Happy designing! 🎨
