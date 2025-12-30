import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// In production (GitHub Pages), use /portfolio. In dev, use empty string.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/portfolio' : '');

export function getImagePath(path: string): string {
  return `${basePath}${path}`;
}
