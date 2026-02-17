import React from 'react';
import { cn } from '@/utils/cn';
import type { ContainerProps } from '@/lib/types';

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, size = 'md' }, ref) => {
    const sizeStyles = {
      sm: 'max-w-2xl',    // 640px
      md: 'max-w-4xl',    // 1024px
      lg: 'max-w-6xl',    // 1280px
    };

    const classes = cn(
      'w-full mx-auto px-4 sm:px-6 lg:px-8',
      sizeStyles[size],
      className
    );

    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
