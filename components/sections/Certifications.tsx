'use client';

import { motion } from "framer-motion";
import { Award, Building2, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding bg-white dark:bg-slate-950"
    >
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants}>
            <SectionHeading
              title="Certifications"
              subtitle="Credentials & learning"
            >
              Industry-recognized certifications in cloud, frontend, and
              developer tooling.
            </SectionHeading>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                whileHover={{ x: 4, scale: 1.01 }}
                className="card-base p-5 flex items-start gap-4
                           border-l-4 border-l-blue-500
                           hover:shadow-lg hover:shadow-blue-500/10
                           transition-all duration-300"
              >
                {/* Icon */}
                <div className="p-2.5 rounded-lg bg-blue-500/10 flex-shrink-0 mt-0.5">
                  <Award className="w-5 h-5 text-blue-500" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-snug mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-3 h-3 flex-shrink-0" />
                      {cert.issuer}
                    </div>
                    {cert.year && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        {cert.year}
                      </div>
                    )}
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
