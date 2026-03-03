import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work | Jessica Lundqvist',
  description:
    'Selected UX design projects — exploring complex challenges, research-driven decisions, and meaningful outcomes.',
};

const clientCards = [
  {
    slug: 'scania-my-scania',
    label: 'Scania',
    bg: '#001f46',
    logos: [
      { src: '/images/logos/scania-icon.png', w: 56, h: 56 },
      { src: '/images/logos/scania-text.png', w: 180, h: 30 },
    ],
  },
  {
    slug: 'bonnier-news',
    label: 'Bonnier News',
    bg: '#ffffff',
    logos: [
      { src: '/images/logos/bonnier-news.png', w: 200, h: 50 },
    ],
  },
  {
    slug: 'tillvaxtverket-serviceanalys',
    label: 'Tillväxtverket',
    bg: '#00767e',
    logos: [
      { src: '/images/logos/tillvaxtverket.png', w: 160, h: 75 },
    ],
  },
  {
    slug: 'swedbank-corporate',
    label: 'Swedbank',
    bg: '#fff6ed',
    logos: [
      { src: '/images/logos/swedbank.png', w: 200, h: 44 },
    ],
  },
  {
    slug: 'tietoevry-edlevo',
    label: 'TietoEVRY',
    bg: '#8dc3e4',
    logos: [
      { src: '/images/logos/tietoevry.png', w: 130, h: 113 },
    ],
  },
  {
    slug: 'taxi-stockholm',
    label: 'Taxi Stockholm',
    bg: '#000000',
    logos: [
      { src: '/images/logos/taxi-stockholm.png', w: 200, h: 82 },
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero — matches Figma Work frame header */}
      <div className="flex items-start justify-between gap-8 px-8 pb-52 pt-44 sm:px-14 sm:pb-60 sm:pt-52 lg:px-20">
        {/* Text */}
        <div className="flex flex-col gap-4 flex-1">
          <p className="text-2xl text-black">
            Hi! I&apos;m <strong>Jessica</strong>
          </p>
          <p className="text-4xl leading-tight text-black sm:text-5xl lg:text-6xl">
            I design thoughtful, user-centred products by balancing empathy, strategy, and business goals.
          </p>
          <p className="text-lg italic text-gray-500">
            Senior Product Designer • Design leadership
          </p>
        </div>

        {/* Profile photo */}
        <div className="hidden shrink-0 sm:block">
          <Image
            src="/images/profile-circle.png"
            alt="Jessica Lundqvist"
            width={280}
            height={280}
            className="rounded-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Experiences heading */}
      <div className="px-8 pb-8 sm:px-14 lg:px-20">
        <h2 className="text-2xl font-bold text-black">Experiences</h2>
      </div>

      {/* Project grid — 2-column branded logo cards */}
      <div className="flex flex-wrap">
        {clientCards.map((client) => {
          const study = caseStudies.find((s) => s.slug === client.slug);
          return (
            <Link
              key={client.slug}
              href={`/work/${client.slug}`}
              className="group relative flex h-48 w-1/2 flex-col items-center justify-center gap-3 overflow-hidden sm:h-64 lg:h-80"
              style={{ backgroundColor: client.bg }}
              aria-label={client.label}
            >
              {client.logos.map((logo, i) => (
                <Image
                  key={i}
                  src={logo.src}
                  alt={i === 0 ? client.label : ''}
                  width={logo.w}
                  height={logo.h}
                  className="object-contain"
                />
              ))}
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg font-semibold text-white leading-snug">{client.label}</p>
                {study && (
                  <p className="mt-1 line-clamp-2 text-sm text-white/75">{study.description}</p>
                )}
                <p className="mt-3 text-sm font-medium text-white">View Project →</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
