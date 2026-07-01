'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_INFO } from "@/lib/data";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must be under 60 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type FormStatus = "idle" | "submitting" | "success" | "error";

const contactDetails = [
  {
    id: "email",
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    icon: Mail,
    external: false,
  },
  {
    id: "phone",
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
    icon: Phone,
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "vandana-kumawat-486aa6231",
    href: CONTACT_INFO.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "vandana-kumawat",
    href: CONTACT_INFO.github,
    icon: Github,
    external: true,
  },
];

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

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormValues) => {
    setFormStatus("submitting");
    // Simulate an API call with setTimeout
    await new Promise<void>((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");
    reset();
    // Reset back to idle after a delay so the user can submit again
    setTimeout(() => setFormStatus("idle"), 6000);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 outline-none " +
    "bg-slate-50 dark:bg-slate-800/60 " +
    "border border-slate-200 dark:border-slate-700 " +
    "text-slate-900 dark:text-white " +
    "placeholder-slate-400 dark:placeholder-slate-500 " +
    "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  const isSubmitting = formStatus === "submitting";

  return (
    <section
      id="contact"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading title="Contact" subtitle="Get in touch">
              Have a project in mind or want to discuss an opportunity? I would
              love to hear from you.
            </SectionHeading>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Left — contact info */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Let&apos;s connect
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  I am open to full-time roles, freelance engagements, and
                  interesting collaboration opportunities. Feel free to reach
                  out through any of the channels below.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <motion.a
                      key={detail.id}
                      href={detail.href}
                      target={detail.external ? "_blank" : undefined}
                      rel={detail.external ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-4 rounded-xl
                                 card-base hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/5
                                 transition-all duration-200 group"
                    >
                      <div className="p-2.5 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-200 flex-shrink-0">
                        <Icon className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mb-0.5">
                          {detail.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {detail.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Right — contact form */}
            <motion.div variants={itemVariants}>
              <div className="card-base p-7 sm:p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Send a message
                </h3>

                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-10 text-center"
                  >
                    <div className="p-4 rounded-full bg-emerald-500/10">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        Message sent!
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Thank you for reaching out. I will get back to you
                        shortly.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        autoComplete="name"
                        disabled={isSubmitting}
                        className={inputBase}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        disabled={isSubmitting}
                        className={inputBase}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        disabled={isSubmitting}
                        className={`${inputBase} resize-none`}
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
