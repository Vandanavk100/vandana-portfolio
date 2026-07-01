import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { CONTACT_INFO, PERSONAL } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub",
      href: CONTACT_INFO.github,
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: CONTACT_INFO.linkedin,
      icon: Linkedin,
    },
    {
      label: "Email",
      href: `mailto:${CONTACT_INFO.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      href: `tel:${CONTACT_INFO.phone}`,
      icon: Phone,
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-bold text-slate-900 dark:text-white">
              {PERSONAL.name}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {PERSONAL.title}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400
                             hover:text-blue-500 dark:hover:text-blue-400
                             hover:bg-blue-500/10
                             transition-all duration-200"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-500">
            &copy; {currentYear} {PERSONAL.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
