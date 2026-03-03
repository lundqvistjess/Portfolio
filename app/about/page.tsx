import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { aboutBio } from '@/lib/content';
import { DESIGNER_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About | Jessica Lundqvist',
  description:
    'Learn more about Jessica Lundqvist — UX Designer at Netlight, background, skills, and approach to design.',
};

export default function AboutPage() {
  return (
    <Section spacing="lg">
      <Container>
        {/* Who am I Section */}
        <div className="space-y-12">
          <h1 className="h1">Who am I?</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-gray-600">
                {aboutBio.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-6 border-t border-gray-300">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Contact</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href={`mailto:${DESIGNER_EMAIL}`}
                        className="text-gray-600 hover:text-accent-green transition-colors"
                      >
                        {DESIGNER_EMAIL}
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+4673-0342136"
                        className="text-gray-600 hover:text-accent-green transition-colors"
                      >
                        +4673-0342136
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/jessica-lundqvist/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-accent-green transition-colors"
                      >
                        Connect with me!
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src="/images/profile.jpg"
                alt="Jessica Lundqvist"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
