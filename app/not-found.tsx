import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Section spacing="lg" className="flex items-center justify-center min-h-[60vh]">
      <Container>
        <div className="space-y-8 text-center max-w-2xl mx-auto">
          <div>
            <div className="text-6xl sm:text-8xl font-bold text-accent-green mb-4">
              404
            </div>
            <h1 className="h2 mb-2">Page Not Found</h1>
            <p className="text-gray-600 text-lg">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/">
              Back to Home
            </Button>
            <Button variant="secondary" size="lg" href="/work">
              View My Work
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
