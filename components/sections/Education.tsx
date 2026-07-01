'use client';

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <section
      id="education"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <SectionHeading title="Education" subtitle="Academic background" />

          <div className="max-w-2xl mx-auto">
            {EDUCATION.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="card-base p-8 flex items-start gap-5
                           hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40
                           transition-all duration-300"
              >
                {/* Icon */}
                <div className="p-3 rounded-xl bg-blue-500/10 flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-blue-500" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-500 dark:text-blue-400 font-semibold text-sm mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                      Graduated {edu.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
