'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import {
  containerVariants,
  itemVariants,
} from '@/lib/motion';
import type { FeaturedCaseStudiesProps } from '@/lib/types';

const FeaturedCaseStudies = React.forwardRef<HTMLElement, FeaturedCaseStudiesProps>(
  (
    {
      caseStudies,
      viewAllLink,
      className,
    },
    ref
  ) => {
    return (
      <Section
        ref={ref}
        spacing="lg"
        dark
        className={className}
      >
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
              <h2 className="h2">Featured Work</h2>
              <p className="text-gray-600 max-w-2xl">
                A selection of recent projects showcasing my design process and problem-solving approach
              </p>
            </motion.div>

            {/* Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {caseStudies.map((study) => (
                <motion.div key={study.id} variants={itemVariants}>
                  <CaseStudyCard
                    title={study.title}
                    description={study.description}
                    imageUrl={study.imageUrl}
                    tags={[study.category, study.year.toString()]}
                    href={`/work/${study.slug}`}
                    featured={study.featured}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* View All Button */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <Button
                variant="secondary"
                size="md"
                href={viewAllLink}
              >
                View All Projects
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    );
  }
);

FeaturedCaseStudies.displayName = 'FeaturedCaseStudies';

export default FeaturedCaseStudies;
