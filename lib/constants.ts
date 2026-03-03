/**
 * App-wide Constants
 */

import type { NavItem, SocialLink } from './types';

// Site Metadata
export const SITE_NAME = 'Jessica Lundqvist';
export const SITE_DESCRIPTION =
  'UX Designer at Netlight, creating intuitive digital experiences through research, strategy, and thoughtful design.';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

// Designer Info
export const DESIGNER_NAME = 'JESSICA LUNDQVIST';
export const DESIGNER_EMAIL = 'jessica.lundqvist@netlight.com';
export const DESIGNER_TITLE = 'UX Designer';

// Navigation Items
export const navigationItems: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Social Links
export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jessica-lundqvist/',
    icon: 'linkedin',
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
  'UX Design, Product Design, User Research, Interaction Design, Jessica Lundqvist, Netlight, UX Designer Stockholm';
