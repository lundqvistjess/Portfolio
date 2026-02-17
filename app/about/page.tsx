import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import HeroSection from '@/components/sections/HeroSection';
import ContactCTA from '@/components/sections/ContactCTA';
import { skills, tools, aboutBio } from '@/lib/content';
import { DESIGNER_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About | Get to Know Me',
  description:
    'Learn more about my background, skills, and approach to design.',
};

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

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About Me"
        description="Learn more about my background, values, and approach to design."
      />

      {/* Bio Section */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-200 order-2 lg:order-1">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="prose prose-sm max-w-none space-y-4 text-gray-600">
                {aboutBio.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div>
                <Button
                  variant="primary"
                  size="md"
                  href={`mailto:${DESIGNER_EMAIL}`}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section spacing="lg" dark>
        <Container>
          <div className="space-y-12">
            <h2 className="h2">Skills &amp; Expertise</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {skillsByCategory.map((group) => (
                <div key={group.category} className="space-y-4">
                  <h3 className="h4 text-gray-900">{group.category}</h3>
                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-accent-green font-bold mt-1">
                          •
                        </span>
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Tools Section */}
      <Section spacing="lg">
        <Container>
          <div className="space-y-8">
            <h2 className="h2">Tools &amp; Software</h2>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <Tag key={tool} text={tool} variant="default" />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Design Philosophy Section */}
      <Section spacing="lg" dark>
        <Container>
          <div className="max-w-3xl space-y-6">
            <h2 className="h2">Design Philosophy</h2>

            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed text-lg">
                I believe great design is the intersection of research, strategy, and empathy. Every decision should be backed by data and a deep understanding of user needs.
              </p>

              <p className="leading-relaxed text-lg">
                My approach is collaborative and iterative. I work closely with stakeholders, engineers, and users throughout the design process to create solutions that are not only beautiful but also achievable and impactful.
              </p>

              <p className="leading-relaxed text-lg">
                I'm passionate about creating inclusive experiences that work for everyone. Accessibility isn't an afterthought—it's a fundamental part of good design.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <ContactCTA
        title="Let's collaborate"
        description="I'm always open to discussing new projects and design opportunities."
        ctaButton={{
          label: 'Start a Conversation',
          href: `mailto:${DESIGNER_EMAIL}`,
        }}
      />
    </>
  );
}
