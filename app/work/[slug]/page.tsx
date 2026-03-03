import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Tag from '@/components/ui/Tag';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import { caseStudies } from '@/lib/content';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${study.title} | Jessica Lundqvist`,
    description: study.description,
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies.filter(
    (s) => study.relatedStudies.includes(s.id) && s.id !== study.id
  );

  return (
    <>
      {/* Hero Section with Image */}
      <Section spacing="sm" className="pb-0">
        <Container>
          <div className="space-y-6 sm:space-y-8">
            {/* Back navigation */}
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-accent-green transition-colors"
            >
              ← Work
            </Link>

            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Tag text={study.category} variant="accent" />
                <Tag text={study.year.toString()} variant="default" />
              </div>
              <h1 className="h1">{study.title}</h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {study.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Image */}
      <Section spacing="lg">
        <Container>
          <div className="relative h-96 sm:h-[28rem] lg:h-[38rem] rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={study.imageUrl}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </Section>

      {/* Overview */}
      <Section spacing="lg" dark>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-2">
                Role
              </h3>
              <p className="text-gray-600">{study.role}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-2">
                Timeline
              </h3>
              <p className="text-gray-600">{study.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-2">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {study.tools.map((tool) => (
                  <Tag key={tool} text={tool} variant="default" />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenge Section */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl space-y-4">
            <h2 className="h2">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {study.challenge}
            </p>
          </div>
        </Container>
      </Section>

      {/* Approach Section */}
      <Section spacing="lg" dark>
        <Container>
          <div className="max-w-3xl space-y-4">
            <h2 className="h2">My Approach</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {study.approach}
            </p>
          </div>
        </Container>
      </Section>

      {/* Solution Section */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="space-y-4">
              <h2 className="h2">The Solution</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {study.solution}
              </p>
            </div>

            {/* Gallery Images — single column, large format */}
            {study.galleryImages.length > 0 && (
              <div className="space-y-6 mt-8">
                {study.galleryImages.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative h-72 sm:h-96 lg:h-[28rem] rounded-lg overflow-hidden bg-gray-200"
                  >
                    <Image
                      src={image}
                      alt={`Gallery ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Results Section */}
      <Section spacing="lg" dark>
        <Container>
          <div className="max-w-3xl space-y-6">
            <h2 className="h2">Results &amp; Impact</h2>

            {/* Key Metrics */}
            {study.keyMetrics && study.keyMetrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {study.keyMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-md border border-gray-200 bg-white p-4 space-y-1"
                  >
                    <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-gray-500">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}

            <p className="text-gray-600 leading-relaxed text-lg">
              {study.results}
            </p>
          </div>
        </Container>
      </Section>

      {/* Learnings Section */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl space-y-4">
            <h2 className="h2">Key Learnings</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {study.learnings}
            </p>
          </div>
        </Container>
      </Section>

      {/* Related Projects */}
      {relatedStudies.length > 0 && (
        <Section spacing="lg" dark>
          <Container>
            <div className="space-y-8">
              <h2 className="h2">Related Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedStudies.map((relatedStudy) => (
                  <CaseStudyCard
                    key={relatedStudy.id}
                    title={relatedStudy.title}
                    description={relatedStudy.description}
                    imageUrl={relatedStudy.imageUrl}
                    tags={[relatedStudy.category]}
                    href={`/work/${relatedStudy.slug}`}
                  />
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
