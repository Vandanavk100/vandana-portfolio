'use client';

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCES } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-white dark:bg-slate-950"
    >
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading title="Experience" subtitle="Where I've worked">
              Building production-scale enterprise applications across two
              engineering roles.
            </SectionHeading>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {EXPERIENCES.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="timeline-item"
              >
                {/* Timeline dot */}
                <div
                  className={`timeline-dot ${
                    exp.current ? "bg-blue-500 shadow-blue-500/50 shadow-md" : "bg-slate-400 dark:bg-slate-600"
                  }`}
                />

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="card-base p-6 sm:p-8"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Briefcase className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        <span className="text-blue-500 dark:text-blue-400 font-semibold text-sm">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Metric chips */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.metrics.map((metric) => (
                      <span key={metric} className="metric-chip">
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
