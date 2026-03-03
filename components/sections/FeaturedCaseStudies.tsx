'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    const [first, ...rest] = caseStudies;
    const smaller = rest.slice(0, 2);

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
              <h2 className="h2">Selected Work</h2>
              <p className="text-gray-600 max-w-2xl">
                A selection of recent projects showcasing my design process and problem-solving approach
              </p>
            </motion.div>

            {/* Large featured card */}
            {first && (
              <motion.div variants={itemVariants}>
                <Link
                  href={`/work/${first.slug}`}
                  className="group block rounded-md border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-gray-100">
                      <div className="w-full h-full transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={first.imageUrl}
                          alt={first.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />
                      </div>
                      <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium bg-white/85 backdrop-blur-sm rounded text-gray-800">
                        {first.category}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="p-6 lg:p-10 flex flex-col justify-center space-y-4">
                      <p className="text-sm text-gray-500 uppercase tracking-wide">{first.year}</p>
                      <h3 className="h2 transition-colors duration-200 group-hover:text-accent-green">
                        {first.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
                        {first.description}
                      </p>
                      <p className="text-accent-green text-sm font-medium">
                        View Project →
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Two smaller cards */}
            {smaller.length > 0 && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {smaller.map((study) => (
                  <motion.div key={study.id} variants={itemVariants}>
                    <CaseStudyCard
                      title={study.title}
                      description={study.description}
                      imageUrl={study.imageUrl}
                      tags={[study.category, study.year.toString()]}
                      href={`/work/${study.slug}`}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}

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
