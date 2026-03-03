import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { DESIGNER_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Jessica Lundqvist',
  description: 'Get in touch with Jessica Lundqvist to discuss your next project or design opportunity.',
};

export default function ContactPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="h1">Get In Touch</h1>
            <p className="text-lg text-gray-600">
              I'm always open to discussing new projects, design opportunities, or collaboration ideas.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="h3">Send me a message</h2>
              <form className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green focus:ring-opacity-20 transition-colors"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green focus:ring-opacity-20 transition-colors"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green focus:ring-opacity-20 transition-colors"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green focus:ring-opacity-20 transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent-green text-white font-medium rounded-lg hover:bg-accent-green/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="h3">Contact information</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Email</h3>
                  <a
                    href={`mailto:${DESIGNER_EMAIL}`}
                    className="text-lg text-gray-600 hover:text-accent-green transition-colors"
                  >
                    {DESIGNER_EMAIL}
                  </a>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Phone</h3>
                  <a
                    href="tel:+4673-0342136"
                    className="text-lg text-gray-600 hover:text-accent-green transition-colors"
                  >
                    +4673-0342136
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/jessica-lundqvist/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-600 hover:text-accent-green transition-colors"
                  >
                    Connect with me on LinkedIn
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-gray-300 space-y-3">
                <p className="text-gray-600">
                  I typically respond within 24-48 hours. Looking forward to connecting with you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
