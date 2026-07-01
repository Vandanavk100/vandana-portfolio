'use client';

import { motion } from "framer-motion";
import { Github, ExternalLink, FolderOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Projects() {
  return (
    <section
      id="projects"
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
            <SectionHeading title="Projects" subtitle="What I've built">
              Enterprise-grade projects demonstrating performance, architecture,
              and cross-team impact.
            </SectionHeading>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -6 }}
                className="group relative card-base overflow-hidden flex flex-col
                           transition-all duration-300
                           hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 pointer-events-none" />

                {/* Card top accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl" />

                <div className="p-6 flex flex-col flex-1 gap-4">
                  {/* Icon + title */}
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 flex-shrink-0 mt-0.5
                                    group-hover:bg-blue-500/20 transition-colors duration-200">
                      <FolderOpen className="w-5 h-5 text-blue-500" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium
                                 text-slate-500 dark:text-slate-400
                                 hover:text-blue-500 dark:hover:text-blue-400
                                 transition-colors duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      View Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium
                                   text-slate-500 dark:text-slate-400
                                   hover:text-blue-500 dark:hover:text-blue-400
                                   transition-colors duration-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
