'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import type { CardProps } from '@/lib/types';

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hoverEffect = true }, ref) => {
    const baseStyles =
      'rounded-md border border-gray-200 bg-white p-4 transition-all duration-300';

    const classes = cn(baseStyles, className);

    if (hoverEffect) {
      return (
        <motion.div
          ref={ref}
          className={classes}
          whileHover={{
            y: -5,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.16)',
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
