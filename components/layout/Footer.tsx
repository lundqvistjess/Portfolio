'use client';

import React from 'react';
import Link from 'next/link';
import { DESIGNER_EMAIL, socialLinks, footerLinks } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section dark spacing="lg" className="border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={footerLinks.work}
                  className="text-gray-600 hover:text-accent-green transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href={footerLinks.about}
                  className="text-gray-600 hover:text-accent-green transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={footerLinks.contact}
                  className="text-gray-600 hover:text-accent-green transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              Contact
            </h3>
            <a
              href={`mailto:${DESIGNER_EMAIL}`}
              className="text-gray-600 hover:text-accent-green transition-colors"
            >
              {DESIGNER_EMAIL}
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              Connect
            </h3>
            <ul className="flex gap-4">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent-green transition-colors"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {currentYear} Jessica Lundqvist
          </p>
          <p className="text-sm text-gray-500">
            Crafted with care using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
