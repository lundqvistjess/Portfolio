'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { CaseStudyCardProps } from '@/lib/types';

const CaseStudyCard = React.forwardRef<HTMLAnchorElement, CaseStudyCardProps>(
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
    const category = tags[0];

    return (
      <Link
        ref={ref}
        href={href}
        className={`group block rounded-md border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] ${className ?? ''}`}
      >
        {/* Image */}
        <div className={`relative overflow-hidden bg-gray-100 ${featured ? 'h-72 sm:h-80' : 'h-56'}`}>
          <div className="w-full h-full transition-transform duration-300 group-hover:scale-105">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Category overlay */}
          {category && (
            <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium bg-white/85 backdrop-blur-sm rounded text-gray-800">
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className={`${featured ? 'p-5' : 'p-4'} space-y-2`}>
          <h3 className={`transition-colors duration-200 group-hover:text-accent-green ${featured ? 'h3' : 'h4'}`}>
            {title}
          </h3>
          <p className={`text-gray-600 ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
            {description}
          </p>
          <p className="text-accent-green text-sm font-medium pt-1">
            View Project →
          </p>
        </div>
      </Link>
    );
  }
);

CaseStudyCard.displayName = 'CaseStudyCard';

export default CaseStudyCard;
