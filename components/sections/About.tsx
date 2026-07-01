'use client';

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  User,
  Rocket,
  RefreshCw,
  ListChecks,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAT_CARDS, ABOUT_SUMMARY, WHY_HIRE_ME } from "@/lib/data";

const WHY_ICONS: Record<string, LucideIcon> = {
  Rocket,
  RefreshCw,
  ListChecks,
  Cpu,
};

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { end: 0, suffix: value };
  return { end: Number(match[1]), suffix: match[2] };
}

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
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
          >
            {STAT_CARDS.map((stat) => {
              const { end, suffix } = parseStatValue(stat.value);
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="card-base card-hover p-8 text-center group"
                >
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200">
                    <CountUp
                      end={end}
                      suffix={suffix}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Why work with me */}
          <motion.div variants={itemVariants} className="mb-14">
            <h3 className="text-center text-lg font-bold text-slate-900 dark:text-white mb-8">
              Why I&apos;m a strong fit for your team
            </h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {WHY_HIRE_ME.map((item) => {
                const Icon = WHY_ICONS[item.icon] ?? Rocket;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="card-base card-hover p-6 flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 p-2.5 rounded-xl bg-blue-500/10">
                      <Icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
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
