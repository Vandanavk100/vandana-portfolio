import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  children,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 mb-4",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        <div className="h-px w-8 bg-blue-500" />
        <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">
          {title}
        </span>
        <div className="h-px w-8 bg-blue-500" />
      </div>
      {subtitle && (
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {subtitle}
        </h2>
      )}
      {children && (
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          {children}
        </p>
      )}
    </div>
  );
}
