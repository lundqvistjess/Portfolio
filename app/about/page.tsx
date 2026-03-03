import type { Metadata } from 'next';
import Image from 'next/image';
import { aboutBio } from '@/lib/content';
import { DESIGNER_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About | Jessica Lundqvist',
  description:
    'Learn more about Jessica Lundqvist — UX Designer at Netlight, background, skills, and approach to design.',
};

export default function AboutPage() {
  return (
    <div className="flex items-start justify-between gap-12 px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
      {/* Left column */}
      <div className="flex flex-1 flex-col gap-10">
        <h1 className="text-5xl font-bold text-black sm:text-6xl lg:text-7xl">Who am I?</h1>

        {/* Bio */}
        <div className="space-y-8 text-gray-600 text-base leading-relaxed">
          {aboutBio.split('\n\n').map((paragraph, idx) => {
            const boldPhrase = 'Outside of work,';
            if (paragraph.startsWith(boldPhrase)) {
              return (
                <p key={idx}>
                  <strong className="text-black">{boldPhrase}</strong>
                  {paragraph.slice(boldPhrase.length)}
                </p>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <p className="text-lg font-semibold text-black">Don&apos;t hesitate to reach out!</p>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${DESIGNER_EMAIL}`}
                className="flex items-center gap-3 text-gray-700 hover:text-accent-green transition-colors"
              >
                <Image src="/images/icons/email.png" alt="" width={20} height={20} />
                {DESIGNER_EMAIL}
              </a>
            </li>
            <li>
              <a
                href="tel:+46730342136"
                className="flex items-center gap-3 text-gray-700 hover:text-accent-green transition-colors"
              >
                <Image src="/images/icons/phone.png" alt="" width={20} height={20} />
                +4673-0342136
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jessica-lundqvist/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-accent-green transition-colors"
              >
                <Image src="/images/icons/linkedin.png" alt="" width={20} height={20} />
                Connect with me
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right column — portrait photo */}
      <div className="hidden shrink-0 sm:block">
        <Image
          src="/images/jessica-about.png"
          alt="Jessica Lundqvist"
          width={520}
          height={650}
          className="object-cover"
        />
      </div>
    </div>
  );
}
