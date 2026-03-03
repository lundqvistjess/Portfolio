import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import HeroSection from '@/components/sections/HeroSection';
import { caseStudies } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work | Jessica Lundqvist',
  description:
    'Selected UX design projects — exploring complex challenges, research-driven decisions, and meaningful outcomes.',
};

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Selected Projects"
        subtitle="My Work"
        description="Research-driven design work across product, mobile, and systems — each project driven by real user needs and measurable outcomes."
      />

      {/* Case Studies Grid */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                title={study.title}
                description={study.description}
                imageUrl={study.imageUrl}
                tags={[study.category, study.year.toString()]}
                href={`/work/${study.slug}`}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
