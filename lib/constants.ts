/**
 * App-wide Constants
 */

import type { NavItem, SocialLink } from './types';

// Site Metadata
export const SITE_NAME = 'UX Portfolio';
export const SITE_DESCRIPTION =
  'Professional UX Designer showcasing case studies, process, and expertise';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

// Designer Info
export const DESIGNER_NAME = 'Your Name';
export const DESIGNER_EMAIL = 'hello@example.com';
export const DESIGNER_TITLE = 'UX Designer';

// Navigation Items
export const navigationItems: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: 'mailto:hello@example.com' },
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: 'twitter',
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com',
    icon: 'dribbble',
  },
];

// Footer Links
export const footerLinks = {
  work: '/work',
  about: '/about',
  contact: `mailto:${DESIGNER_EMAIL}`,
};

// Breakpoints (matching tailwind.config.js)
export const BREAKPOINTS = {
  mobile: 320,
  tablet: 640,
  desktop: 1024,
};

// Animation Config
export const ANIMATION_DURATION = {
  quick: 150,
  standard: 300,
  entrance: 600,
  slow: 1000,
};

// SEO Keywords
export const SEO_KEYWORDS =
  'UX Design, Product Design, User Research, Interaction Design';
