'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import {
  containerVariants,
  itemVariants,
} from '@/lib/motion';
import type { ContactCTAProps } from '@/lib/types';

const ContactCTA = React.forwardRef<HTMLElement, ContactCTAProps>(
  (
    {
      title,
      description,
      ctaButton,
      className,
    },
    ref
  ) => {
    return (
      <Section
        ref={ref}
        spacing="lg"
        className={className}
      >
        <Container>
          <motion.div
            className="space-y-8 text-center max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Title */}
            <motion.h2 variants={itemVariants} className="h2">
              {title}
            </motion.h2>

            {/* Description */}
            {description && (
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600"
              >
                {description}
              </motion.p>
            )}

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button
                variant="primary"
                size="lg"
                href={ctaButton.href}
              >
                {ctaButton.label} →
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    );
  }
);

ContactCTA.displayName = 'ContactCTA';

export default ContactCTA;
