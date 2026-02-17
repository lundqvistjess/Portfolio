'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import type { ButtonProps } from '@/lib/types';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      isLoading = false,
      disabled = false,
      children,
      className,
      onClick,
      type = 'button',
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
      primary:
        'bg-accent-green text-white hover:bg-accent-green-dark active:scale-95',
      secondary:
        'border border-gray-200 bg-transparent text-gray-900 hover:bg-gray-50 active:scale-95',
      tertiary:
        'bg-transparent text-gray-900 hover:text-accent-green active:scale-95',
    };

    const sizeStyles = {
      sm: 'px-3 py-2 text-sm rounded-md',
      md: 'px-4 py-2 text-base rounded-md',
      lg: 'px-6 py-3 text-lg rounded-lg',
    };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = isLoading ? (
      <>
        <span className="opacity-0">{children}</span>
        <motion.div
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
        </motion.div>
      </>
    ) : (
      children
    );

    if (href && !isLoading && !disabled) {
      return (
        <Link href={href} className="inline-block">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={classes}
            disabled={disabled}
            type={type}
            onClick={onClick}
          >
            {content}
          </motion.button>
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={!disabled ? { scale: 1.02 } : undefined}
        whileTap={!disabled ? { scale: 0.98 } : undefined}
        className={classes}
        disabled={disabled || isLoading}
        type={type}
        onClick={onClick}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
