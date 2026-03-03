/**
 * Content Data - Case Studies, Skills, and Other Content
 */

import type { CaseStudy, Skill } from './types';

export const caseStudies: CaseStudy[] = [
  {
    id: '01',
    slug: 'redesigning-user-onboarding',
    title: 'Redesigning User Onboarding',
    description: 'Reduced drop-off by 40% through streamlined UX and progressive disclosure.',
    featured: true,
    category: 'Product Design',
    year: 2024,
    role: 'Lead UX Designer',
    tools: ['Figma', 'Framer', 'Spline'],
    challenge:
      'The existing onboarding flow had a 65% drop-off rate during account creation. New users were overwhelmed by the number of required fields and unclear value proposition.',
    approach:
      'Conducted 12 user interviews and analyzed session recordings to understand friction points. Created user journey maps and identified key moments of abandonment. Tested 3 different onboarding patterns with users.',
    solution:
      'Implemented a simplified 3-step process with progressive disclosure. Reduced required fields from 15 to 7 initial fields. Added contextual help and inline validation. Designed micro-interactions to celebrate milestones.',
    results:
      'Reduced drop-off rate to 39%, increased completion time was reduced by 60%. Overall sign-ups increased by 45% within 3 months of launch.',
    learnings:
      'Users prioritize speed and clarity over feature completeness. Celebrating progress through micro-interactions significantly improves completion rates.',
    imageUrl: '/images/case-studies/onboarding-hero.jpg',
    galleryImages: [
      '/images/case-studies/onboarding-01.jpg',
      '/images/case-studies/onboarding-02.jpg',
    ],
    relatedStudies: ['02', '03'],
    keyMetrics: [
      { value: '40%', label: 'Drop-off reduction' },
      { value: '45%', label: 'More sign-ups in 3 months' },
      { value: '60%', label: 'Faster time to complete' },
    ],
  },
  {
    id: '02',
    slug: 'mobile-app-dashboard-redesign',
    title: 'Mobile App Dashboard Redesign',
    description: 'Created a data-rich dashboard that increased user engagement by 35%.',
    featured: true,
    category: 'Mobile Design',
    year: 2024,
    role: 'UX/UI Designer',
    tools: ['Figma', 'Adobe XD', 'Webflow'],
    challenge:
      'The existing dashboard was cluttered and difficult to navigate on mobile devices. Users struggled to find key metrics and took average 45 seconds to locate important information.',
    approach:
      'Conducted stakeholder interviews and user testing sessions. Built low-fidelity prototypes to test different information hierarchies. Implemented card-based layout system.',
    solution:
      'Redesigned dashboard with progressive disclosure and smart defaults. Implemented customizable cards so users can prioritize their metrics. Added quick actions and swipe gestures for common tasks.',
    results:
      'Average task completion time reduced to 12 seconds. User engagement increased by 35%. User satisfaction score improved from 6.2 to 8.1 out of 10.',
    learnings:
      'Mobile users have different needs than desktop users. Customization and progressive disclosure are key to managing complexity on smaller screens.',
    imageUrl: '/images/case-studies/dashboard-hero.jpg',
    galleryImages: [
      '/images/case-studies/dashboard-01.jpg',
      '/images/case-studies/dashboard-02.jpg',
    ],
    relatedStudies: ['01', '03'],
    keyMetrics: [
      { value: '35%', label: 'Increase in engagement' },
      { value: '12s', label: 'Avg. task completion time' },
      { value: '8.1', label: 'User satisfaction score' },
    ],
  },
  {
    id: '03',
    slug: 'design-system-implementation',
    title: 'Design System Implementation',
    description: 'Built a comprehensive design system that improved development velocity by 50%.',
    featured: true,
    category: 'Design System',
    year: 2023,
    role: 'Design Lead',
    tools: ['Figma', 'Storybook', 'React'],
    challenge:
      'Product teams were working with inconsistent components, duplicated designs, and no single source of truth. This led to longer development cycles and poor user experience consistency.',
    approach:
      'Audited existing components and patterns. Collaborated with engineering to understand technical constraints. Created design tokens and component library in Figma. Built Storybook documentation.',
    solution:
      'Designed 50+ reusable components with clear guidelines. Created comprehensive documentation with usage examples. Established design token system for colors, spacing, typography. Set up regular design system reviews.',
    results:
      'Development velocity improved by 50%. Reduced design handoff time by 60%. Ensured consistent experience across all products.',
    learnings:
      'A good design system requires ongoing maintenance and governance. Design and engineering collaboration is crucial for success.',
    imageUrl: '/images/case-studies/design-system-hero.jpg',
    galleryImages: [
      '/images/case-studies/design-system-01.jpg',
      '/images/case-studies/design-system-02.jpg',
    ],
    relatedStudies: ['01', '02'],
    keyMetrics: [
      { value: '50+', label: 'Reusable components' },
      { value: '50%', label: 'Faster development velocity' },
      { value: '60%', label: 'Less design handoff time' },
    ],
  },
  {
    id: '04',
    slug: 'e-commerce-checkout-flow',
    title: 'E-commerce Checkout Optimization',
    description: 'Simplified checkout process increasing conversion rate by 28%.',
    featured: false,
    category: 'E-commerce',
    year: 2023,
    role: 'Senior UX Designer',
    tools: ['Figma', 'Optimizely', 'Amplitude'],
    challenge:
      'Cart abandonment rate was 72%. Average checkout time was 8 minutes. Users were confused by shipping options and payment methods.',
    approach:
      'Analyzed user behavior data from Amplitude. Conducted user testing on current checkout flow. A/B tested different variations of checkout steps.',
    solution:
      'Reduced checkout from 5 steps to 3 steps. Made shipping options more transparent. Added payment method recommendations based on user location. Implemented express checkout option.',
    results:
      'Cart abandonment reduced to 52%. Conversion rate increased by 28%. Average checkout time reduced to 3 minutes.',
    learnings:
      'Users value speed and security in checkout flows. Clear communication about shipping and pricing reduces friction significantly.',
    imageUrl: '/images/case-studies/checkout-hero.jpg',
    galleryImages: [],
    relatedStudies: ['01'],
    keyMetrics: [
      { value: '28%', label: 'Conversion rate increase' },
      { value: '20%', label: 'Lower cart abandonment' },
      { value: '3 min', label: 'Avg. checkout time' },
    ],
  },
];

export const skills: Skill[] = [
  // Research
  { name: 'User Research', category: 'Research', level: 'expert' },
  { name: 'User Testing', category: 'Research', level: 'expert' },
  { name: 'Analytics', category: 'Research', level: 'advanced' },
  { name: 'Competitive Analysis', category: 'Research', level: 'advanced' },

  // Design
  { name: 'Interaction Design', category: 'Design', level: 'expert' },
  { name: 'Visual Design', category: 'Design', level: 'expert' },
  { name: 'Information Architecture', category: 'Design', level: 'advanced' },
  { name: 'Typography', category: 'Design', level: 'advanced' },

  // Strategy
  { name: 'Product Strategy', category: 'Strategy', level: 'advanced' },
  { name: 'Stakeholder Management', category: 'Strategy', level: 'advanced' },
  { name: 'Design Thinking', category: 'Strategy', level: 'expert' },
  { name: 'Design System', category: 'Strategy', level: 'expert' },
];

export const tools = [
  'Figma',
  'Framer',
  'Spline',
  'Adobe XD',
  'Adobe Creative Suite',
  'Webflow',
  'Protopie',
  'Amplitude',
  'Hotjar',
  'Optimizely',
  'React',
  'Storybook',
];

export const processSteps = [
  {
    number: 1,
    title: 'Research',
    description: 'Understanding user needs through interviews, testing, and data analysis to inform design decisions.',
    icon: 'search',
  },
  {
    number: 2,
    title: 'Strategy',
    description: 'Defining goals, constraints, and opportunities to create a clear direction for the design.',
    icon: 'target',
  },
  {
    number: 3,
    title: 'Design',
    description: 'Creating wireframes, prototypes, and visual designs to explore solutions and validate ideas.',
    icon: 'pencil',
  },
  {
    number: 4,
    title: 'Test & Iterate',
    description: 'Validating designs through user testing and refining based on feedback and metrics.',
    icon: 'check',
  },
];

export const aboutBio = `Jessica is a curious, driven UX Designer who loves turning complex problems into holistic, intuitive user experiences. She has worked across the public sector in Sweden, within government, finance, transport, media and education, covering the full product journey from discovery and user research to idea, design, and release.

She's passionate about improving everyday life by putting users at the centre, applying an iterative, user-centred design process with tools like Figma and Sketch. A true team player, Jessica thrives in cross-functional collaboration and enjoys solving tough challenges together.

Outside of design, she brings the same dedication to running, most recently crossing the finish line at the NYC Marathon 🏃`;
