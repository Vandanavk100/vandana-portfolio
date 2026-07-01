'use client';

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAT_CARDS, ABOUT_SUMMARY } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function About() {
  return (
    <section
      id="about"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading title="About Me" subtitle="Who I am">
              A passionate full stack developer focused on building elegant,
              performant, and accessible web experiences.
            </SectionHeading>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14"
          >
            {STAT_CARDS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="card-base card-hover p-8 text-center group"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* About content */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <div className="card-base p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-blue-500/10 mt-1">
                  <User className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Professional Summary
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    {ABOUT_SUMMARY}
                  </p>

                  {/* Highlight tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {[
                      "35% faster page loads",
                      "30% Lighthouse improvement",
                      "25% dev effort reduction",
                      "21+ pages delivered",
                      "80%+ test coverage",
                    ].map((highlight) => (
                      <span key={highlight} className="metric-chip">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
