/**
 * TypeScript Type Definitions
 */

// Case Study
export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  description: string;
  featured: boolean;
  category: string;
  year: number;
  role: string;
  tools: string[];
  challenge: string;
  approach: string;
  solution: string;
  results: string;
  learnings: string;
  imageUrl: string;
  galleryImages: string[];
  relatedStudies: string[];
};

// Navigation
export type NavItem = {
  label: string;
  href: string;
  target?: '_blank' | '_self';
};

// Skill
export type Skill = {
  name: string;
  category: string;
  level: 'expert' | 'advanced' | 'intermediate';
};

// Button Props
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

// Section Props
export type SectionSpacing = 'sm' | 'md' | 'lg';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  spacing?: SectionSpacing;
}

// Container Props
export type ContainerSize = 'sm' | 'md' | 'lg';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
}

// Card Props
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

// Tag Props
export type TagVariant = 'default' | 'accent' | 'neutral';

export interface TagProps {
  text: string;
  variant?: TagVariant;
  className?: string;
}

// Hero Section Props
export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaButton?: {
    label: string;
    href: string;
  };
  className?: string;
}

// Case Study Card Props
export interface CaseStudyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  href: string;
  featured?: boolean;
  className?: string;
}

// Featured Case Studies Props
export interface FeaturedCaseStudiesProps {
  caseStudies: CaseStudy[];
  viewAllLink: string;
  className?: string;
}

// Process Section Props
export type ProcessStep = {
  number: number;
  title: string;
  description: string;
  icon?: string;
};

export interface ProcessSectionProps {
  steps: ProcessStep[];
  className?: string;
}

// About Preview Props
export interface AboutPreviewProps {
  bio: string;
  skills: Skill[];
  tools: string[];
  imageUrl: string;
  link: string;
  className?: string;
}

// Contact CTA Props
export interface ContactCTAProps {
  title: string;
  description?: string;
  ctaButton: {
    label: string;
    href: string;
  };
  className?: string;
}

// Social Links
export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};
