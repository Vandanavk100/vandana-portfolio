import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { PERSONAL, CONTACT_INFO } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSONAL.name} — ${PERSONAL.title}`,
  description:
    "Full Stack Developer with 3+ years of experience in React.js, Next.js, TypeScript, Node.js, and PostgreSQL. Building scalable enterprise web applications.",
  keywords: [
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redux Toolkit",
    "Vandana Kumawat",
    "Software Engineer",
    "Frontend Developer",
    "Web Developer",
    "Udaipur",
    "India",
  ],
  authors: [{ name: PERSONAL.name, url: CONTACT_INFO.linkedin }],
  creator: PERSONAL.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${PERSONAL.name} — ${PERSONAL.title}`,
    description:
      "Full Stack Developer with 3+ years of experience building scalable enterprise web applications with React, Next.js, TypeScript, and Node.js.",
    siteName: `${PERSONAL.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PERSONAL.name} — ${PERSONAL.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} — ${PERSONAL.title}`,
    description:
      "Full Stack Developer with 3+ years of experience building scalable enterprise web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL.name,
  jobTitle: PERSONAL.title,
  description: PERSONAL.shortBio,
  email: CONTACT_INFO.email,
  telephone: CONTACT_INFO.phone,
  url: CONTACT_INFO.linkedin,
  sameAs: [CONTACT_INFO.linkedin, CONTACT_INFO.github],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "Redux Toolkit",
    "Tailwind CSS",
    "REST APIs",
    "Docker",
    "AWS",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Mohanlal Sukhadia University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  worksFor: {
    "@type": "Organization",
    name: "Advaiya Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
