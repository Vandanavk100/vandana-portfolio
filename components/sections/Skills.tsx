'use client';

import { motion } from "framer-motion";
import { Monitor, Palette, Database, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/lib/data";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Monitor,
  Palette,
  Database,
  Wrench,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants}>
            <SectionHeading title="Skills" subtitle="Technical expertise">
              A broad skill set spanning frontend, styling, backend, and
              cloud tooling.
            </SectionHeading>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category) => {
              const Icon = ICON_MAP[category.icon] ?? Monitor;
              return (
                <motion.div
                  key={category.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="card-base p-6 flex flex-col gap-5 group cursor-default
                             hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40
                             transition-all duration-300"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill pills */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 },
                      },
                    }}
                    className="flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={pillVariants}
                        className="skill-pill text-xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
