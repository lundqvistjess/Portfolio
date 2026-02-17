/**
 * Animation Helper Functions
 */

export function getMotionPreference() {
  if (typeof window === 'undefined') return false;

  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  return query.matches;
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function staggerDelay(index: number, baseDelay = 50): number {
  return index * baseDelay;
}

export const easings = {
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
};
