import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import HeroSection from '@/components/sections/HeroSection';
import { caseStudies } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work | Case Studies',
  description:
    'Explore my portfolio of UX design case studies and projects.',
};

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="My Work"
        description="A collection of projects where I've tackled complex design challenges and created meaningful user experiences."
      />

      {/* Case Studies Grid */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
