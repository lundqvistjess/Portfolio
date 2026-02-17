'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import {
  containerVariants,
  itemVariants,
} from '@/lib/motion';
import type { HeroSectionProps } from '@/lib/types';

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      title,
      subtitle,
      description,
      ctaButton,
      className,
    },
    ref
  ) => {
    return (
      <Section ref={ref} spacing="lg" className={className}>
        <Container size="lg">
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Subtitle */}
            {subtitle && (
              <motion.div variants={itemVariants}>
                <p className="text-accent-green font-medium text-sm sm:text-base uppercase tracking-wide">
                  {subtitle}
                </p>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="h1 text-gray-900"
            >
              {title}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-2xl"
              >
                {description}
              </motion.p>
            )}

            {/* CTA Button */}
            {ctaButton && (
              <motion.div variants={itemVariants}>
                <Button
                  variant="primary"
                  size="lg"
                  href={ctaButton.href}
                >
                  {ctaButton.label} →
                </Button>
              </motion.div>
            )}
          </motion.div>
        </Container>
      </Section>
    );
  }
);

HeroSection.displayName = 'HeroSection';

export default HeroSection;
