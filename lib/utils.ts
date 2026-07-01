import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function extractMetrics(bullets: string[]): string[] {
  const metricRegex = /(\d+%|\d+\+|\d+ months?|\d+ years?)/gi;
  const metrics: string[] = [];

  bullets.forEach((bullet) => {
    const matches = bullet.match(metricRegex);
    if (matches) {
      matches.forEach((m) => {
        if (!metrics.includes(m)) metrics.push(m);
      });
    }
  });

  return metrics.slice(0, 4);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();
}
