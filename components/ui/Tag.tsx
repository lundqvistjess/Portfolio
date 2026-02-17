import React from 'react';
import { cn } from '@/utils/cn';
import type { TagProps } from '@/lib/types';

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ text, variant = 'default', className }, ref) => {
    const variantStyles = {
      default: 'bg-gray-100 text-gray-900',
      accent: 'bg-accent-green/10 text-accent-green',
      neutral: 'bg-gray-200 text-gray-600',
    };

    const classes = cn(
      'inline-flex items-center px-3 py-1 rounded-full text-caption whitespace-nowrap',
      variantStyles[variant],
      className
    );

    return (
      <div ref={ref} className={classes}>
        {text}
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
