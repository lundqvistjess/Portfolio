/**
 * Classname Utility
 * Merges conditional classnames using clsx
 */

import clsx, { type ClassValue } from 'clsx';

export function cn(...classes: ClassValue[]) {
  return clsx(classes);
}
