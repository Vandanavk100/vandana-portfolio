'use client';

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { PERSONAL, CONTACT_INFO, HERO_TECH_PILLS } from "@/lib/data";

const TYPING_STRINGS = [
  "Full Stack Developer",
  "React & Next.js Expert",
  "TypeScript Enthusiast",
  "Node.js Developer",
  "UI/UX Craftsperson",
];

function TypingSubtitle() {
  const [text] = useTypewriter({
    words: TYPING_STRINGS,
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 1800,
  });

  return (
    <span className="inline-block min-w-[1px]">
      {text}
      <Cursor cursorStyle="|" cursorColor="#60a5fa" />
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-400/5 dark:bg-cyan-400/10 blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/3 dark:bg-blue-500/5 blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Availability badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                           bg-emerald-500/10 text-emerald-600 dark:text-emerald-400
                           border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight text-center"
        >
          <span className="text-slate-900 dark:text-white">Hi, I&apos;m </span>
          <span
            className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-move"
          >
            {PERSONAL.name}
          </span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6 h-9"
        >
          <TypingSubtitle />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          3+ years building scalable enterprise web applications with{" "}
          <span className="text-blue-500 font-medium">React.js</span>,{" "}
          <span className="text-blue-500 font-medium">Next.js</span>,{" "}
          <span className="text-blue-500 font-medium">TypeScript</span>, and{" "}
          <span className="text-blue-500 font-medium">Node.js</span> — delivering
          measurable performance gains and clean component architectures.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="/Vandana_Kumawat_Resume.pdf"
            download
            className="btn-primary"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <button
            onClick={() => handleScroll("projects")}
            className="btn-secondary"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="btn-outline"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400
                       hover:text-blue-500 dark:hover:text-blue-400
                       hover:bg-blue-500/10 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400
                       hover:text-blue-500 dark:hover:text-blue-400
                       hover:bg-blue-500/10 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400
                       hover:text-blue-500 dark:hover:text-blue-400
                       hover:bg-blue-500/10 transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Tech pill badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {HERO_TECH_PILLS.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + idx * 0.07, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 rounded-full text-xs font-medium
                         bg-slate-100 dark:bg-slate-800/80
                         text-slate-600 dark:text-slate-400
                         border border-slate-200 dark:border-slate-700/80
                         cursor-default select-none"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        onClick={() => handleScroll("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                   text-slate-400 hover:text-blue-500 transition-colors duration-200"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
