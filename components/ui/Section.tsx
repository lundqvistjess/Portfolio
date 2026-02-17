import React from 'react';
import { cn } from '@/utils/cn';
import type { SectionProps } from '@/lib/types';

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, dark = false, spacing = 'md' }, ref) => {
    const spacingStyles = {
      sm: 'py-8 sm:py-12',
      md: 'py-12 sm:py-16',
      lg: 'py-16 sm:py-24',
    };

    const backgroundStyles = dark ? 'bg-gray-50' : 'bg-white';

    const classes = cn(
      'w-full',
      backgroundStyles,
      spacingStyles[spacing],
      className
    );

    return (
      <section ref={ref} className={classes}>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
