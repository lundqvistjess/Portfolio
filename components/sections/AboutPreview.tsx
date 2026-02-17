'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import { itemVariants } from '@/lib/motion';
import type { AboutPreviewProps } from '@/lib/types';

const AboutPreview = React.forwardRef<HTMLElement, AboutPreviewProps>(
  (
    {
      bio,
      skills,
      tools,
      imageUrl,
      link,
      className,
    },
    ref
  ) => {
    const skillsByCategory = skills.reduce(
      (acc, skill) => {
        const category = acc.find((c) => c.category === skill.category);
        if (category) {
          category.skills.push(skill);
        } else {
          acc.push({ category: skill.category, skills: [skill] });
        }
        return acc;
      },
      [] as Array<{ category: string; skills: typeof skills }>
    );

    return (
      <Section ref={ref} spacing="lg" dark className={className}>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Image */}
              <motion.div
                variants={itemVariants}
                className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-200"
              >
                <Image
                  src={imageUrl}
                  alt="About"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>

              {/* Content */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="h2">About Me</h2>

                {/* Bio */}
                <p className="text-gray-600 leading-relaxed">
                  {bio}
                </p>

                {/* Skills by Category */}
                <div className="space-y-6">
                  {skillsByCategory.map((group) => (
                    <div key={group.category}>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-3">
                        {group.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <Tag
                            key={skill.name}
                            text={skill.name}
                            variant="accent"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-3">
                    Tools & Software
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <Tag
                        key={tool}
                        text={tool}
                        variant="neutral"
                      />
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="primary"
                  size="md"
                  href={link}
                >
                  Read Full Bio →
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>
    );
  }
);

AboutPreview.displayName = 'AboutPreview';

export default AboutPreview;
