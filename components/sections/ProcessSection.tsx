'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import {
  containerVariants,
  itemVariants,
} from '@/lib/motion';
import type { ProcessSectionProps } from '@/lib/types';

const ProcessSection = React.forwardRef<HTMLElement, ProcessSectionProps>(
  (
    {
      steps,
      className,
    },
    ref
  ) => {
    return (
      <Section ref={ref} spacing="lg" className={className}>
        <Container>
          <motion.div
            className="space-y-8 sm:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="h2">My Design Process</h2>
              <p className="text-gray-600 max-w-2xl">
                A structured approach to solving user problems through research, design, and iteration
              </p>
            </motion.div>

            {/* Steps Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="space-y-4"
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent-green text-white">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="h4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    );
  }
);

ProcessSection.displayName = 'ProcessSection';

export default ProcessSection;
