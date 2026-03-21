import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isLocalhost =
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
