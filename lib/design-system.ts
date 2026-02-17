/**
 * Centralized Design System
 * Extends Tailwind config with additional design tokens
 */

export const colors = {
  white: '#FFFFFF',
  background: '#F8F8F8',
  backgroundAlt: '#F0F0F0',
  border: '#E8E8E8',
  text: {
    primary: '#1A1A1A',
    secondary: '#333333',
    tertiary: '#4D4D4D',
  },
  accent: {
    primary: '#6B8E23',
    light: '#8AB84F',
    dark: '#5A7A1F',
  },
  shadow: {
    subtle: 'rgba(0, 0, 0, 0.08)',
    medium: 'rgba(0, 0, 0, 0.12)',
    elevated: 'rgba(0, 0, 0, 0.16)',
  },
};

export const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem',  // 64px
};

export const typography = {
  h1: {
    desktop: { fontSize: '3rem', lineHeight: '3.5rem', fontWeight: 600 },
    mobile: { fontSize: '2rem', lineHeight: '2.5rem', fontWeight: 600 },
  },
  h2: {
    desktop: { fontSize: '2.25rem', lineHeight: '2.75rem', fontWeight: 600 },
    mobile: { fontSize: '1.5rem', lineHeight: '2rem', fontWeight: 600 },
  },
  h3: {
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 600,
  },
  h4: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    fontWeight: 600,
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.75rem',
    fontWeight: 400,
  },
  caption: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
  },
};

export const shadows = {
  subtle: '0 2px 8px rgba(0, 0, 0, 0.08)',
  medium: '0 4px 16px rgba(0, 0, 0, 0.12)',
  elevated: '0 8px 24px rgba(0, 0, 0, 0.16)',
};

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
};

export const breakpoints = {
  mobile: 320,
  tablet: 640,
  desktop: 1024,
};
