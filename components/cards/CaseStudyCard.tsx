'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import type { CaseStudyCardProps } from '@/lib/types';

const CaseStudyCard = React.forwardRef<HTMLDivElement, CaseStudyCardProps>(
  (
    {
      title,
      description,
      imageUrl,
      tags,
      href,
      featured = false,
      className,
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={className}
        hoverEffect={!featured}
      >
        <div className={featured ? 'space-y-4' : 'space-y-3'}>
          {/* Image */}
          <div className={`relative overflow-hidden rounded-md ${featured ? 'h-64 sm:h-72' : 'h-48'} bg-gray-100`}>
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes={featured ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="space-y-2">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  text={tag}
                  variant="default"
                />
              ))}
            </div>

            {/* Title */}
            <h3 className={featured ? 'h3' : 'h4'}>
              {title}
            </h3>

            {/* Description */}
            <p className={`text-gray-600 ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            variant="secondary"
            size={featured ? 'md' : 'sm'}
            href={href}
            className="w-full"
          >
            View Case Study
          </Button>
        </div>
      </Card>
    );
  }
);

CaseStudyCard.displayName = 'CaseStudyCard';

export default CaseStudyCard;
