'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems, DESIGNER_NAME } from '@/lib/constants';
import Container from '@/components/ui/Container';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <Container>
        <nav className="flex items-center justify-between py-4 sm:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="font-semibold text-lg text-gray-900 hover:text-accent-green transition-colors"
            aria-label="Home"
          >
            {DESIGNER_NAME}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex items-center gap-8">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-accent-green transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green rounded-sm"
                  target={item.target}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.div className="w-6 h-6 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-900 rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-gray-900 rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-900 rounded-full"
              />
            </motion.div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden border-t border-gray-200 bg-white"
            >
              <ul className="flex flex-col gap-4 py-4">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-600 hover:text-accent-green transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-green rounded-sm"
                      target={item.target}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Navigation;
