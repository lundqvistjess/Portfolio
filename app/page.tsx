import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedCaseStudies from '@/components/sections/FeaturedCaseStudies';
import ProcessSection from '@/components/sections/ProcessSection';
import AboutPreview from '@/components/sections/AboutPreview';
import ContactCTA from '@/components/sections/ContactCTA';
import { caseStudies, skills, tools, processSteps, aboutBio } from '@/lib/content';
import { DESIGNER_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Jessica Lundqvist | UX Design & Leadership',
  description:
    'UX Designer at Netlight, creating intuitive digital experiences through research, strategy, and thoughtful design.',
};

const featured = caseStudies.filter((study) => study.featured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="UX Designer at Netlight"
        title="Designing products that solve real problems"
        description="I create intuitive, delightful digital experiences through research, strategy, and thoughtful design."
        ctaButton={{
          label: 'View My Work',
          href: '/work',
        }}
      />

      {/* Featured Case Studies */}
      <FeaturedCaseStudies
        caseStudies={featured}
        viewAllLink="/work"
      />

      {/* Process Section */}
      <ProcessSection steps={processSteps} />

      {/* About Preview */}
      <AboutPreview
        bio={aboutBio}
        skills={skills}
        tools={tools}
        imageUrl="/images/profile.jpg"
        link="/about"
      />

      {/* Contact CTA */}
      <ContactCTA
        title="Let's work together"
        description="I'm always interested in hearing about new projects and opportunities."
        ctaButton={{
          label: 'Get In Touch',
          href: `mailto:${DESIGNER_EMAIL}`,
        }}
      />
    </>
  );
}
