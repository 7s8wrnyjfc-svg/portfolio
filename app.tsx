'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Linkedin,
  FlaskConical,
  GraduationCap,
  Award,
  Users,
  ArrowUpRight,
  MapPin,
  Moon,
  Sun,
  X,
  Check,
  ExternalLink,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const projects = [
  {
    id: 1,
    title: 'Backbone-modified peptides for bacterial accumulation',
    tag: 'Peptide chemistry • Chemical biology',
    description:
      'Designing and evaluating peptide modifications that tune accumulation across E. coli, mycobacteria, and mammalian systems using CHAMP-style workflows.',
    details:
      'This project focuses on understanding how backbone modifications affect cellular penetration and accumulation. We synthesized 20+ peptide analogs with varying N-methylation patterns and tested them across multiple bacterial species and mammalian cell lines using fluorescent assays and LC-MS quantification.',
    metrics: ['20+ analogs synthesized', '3 bacterial species', 'Published findings'],
    image: '🧬',
  },
  {
    id: 2,
    title: 'Arylomycin-inspired antibiotic development',
    tag: 'Antibiotics • SAR • Gram-negative bacteria',
    description:
      'Exploring structure–activity relationships and permeability-linked design principles for arylomycin/LepB inhibitor analogs.',
    details:
      'Building on the natural product scaffold, we developed a synthetic strategy to rapidly generate arylomycin analogs. SAR studies revealed critical determinants of LepB inhibition and cellular permeability, leading to improved Gram-negative activity.',
    metrics: ['LepB IC50 < 100 nM', 'Gram-negative activity', 'Patent-pending'],
    image: '💊',
  },
  {
    id: 3,
    title: 'Undergraduate course-based research mentorship',
    tag: 'Teaching • Mentorship • Curriculum',
    description:
      'Mentoring undergraduate researchers in a new course-based research experience, supporting experimental design, lab technique, and scientific communication.',
    details:
      'Developed and co-taught a hands-on research course where undergraduates design and execute peptide synthesis and screening experiments. Mentored 12+ students, resulting in conference presentations and co-authored publications.',
    metrics: ['12+ students mentored', '4 conference talks', '2 co-authored papers'],
    image: '🎓',
  },
];

const highlights = [
  {
    icon: FlaskConical,
    title: 'Research',
    text: 'Peptide chemistry, chemical biology, bacterial accumulation, and antibiotic discovery.',
  },
  {
    icon: GraduationCap,
    title: 'Mentorship',
    text: 'Graduate mentor for undergraduate research and hands-on laboratory training.',
  },
  {
    icon: Award,
    title: 'Recognition',
    text: 'Selected for fellowship and science accelerator opportunities supporting translational research.',
  },
  {
    icon: Users,
    title: 'Leadership',
    text: 'Research chair and collaborator across student, departmental, and lab communities.',
  },
];

const skills = [
  'Peptide synthesis',
  'SAR analysis',
  'Chemical biology',
  'Bacterial assays',
  'CHAMP workflows',
  'MIC assays',
  'LC-MS analysis',
  'Scientific writing',
  'Mentorship',
  'Project leadership',
  'Data visualization',
  'Team collaboration',
];

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function ProjectModal({ project, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-900"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 text-4xl">{project.image}</div>

            <h2 className="text-3xl font-bold tracking-tight dark:text-white">
              {project.title}
            </h2>

            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              {project.tag}
            </p>

            <p className="mt-6 leading-7 text-slate-700 dark:text-slate-300">
              {project.details}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-700 dark:bg-slate-800"
                >
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {metric}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DarkModeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />
      )}
    </button>
  );
}

function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleCopy}
      className="group relative flex w-full items-center justify-start gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-6 text-left text-base transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600"
    >
      <Mail className="h-4 w-4 flex-shrink-0 transition-transform group-hover:scale-110" />
      <span className="flex-1 truncate dark:text-slate-300">{label}</span>
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Check className="h-4 w-4 text-green-500" />
          </motion.div>
        ) : (
          <motion.div
            key="mail"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="text-slate-400"
          >
            <Mail className="h-4 w-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function ActiveLink({ href, children, activeSection, setActiveSection }) {
  const isActive = activeSection === href.slice(1);

  return (
    <a
      href={href}
      onClick={() => setActiveSection(href.slice(1))}
      className={`relative transition-colors ${
        isActive
          ? 'text-slate-950 dark:text-white'
          : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-950 dark:bg-white"
        />
      )}
    </a>
  );
}

export default function PortfolioWebsite() {
  const [isDark, setIsDark] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  const [workRef, workVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <motion.a
              href="#home"
              className="text-lg font-semibold tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ananya Naick
            </motion.a>

            <div className="hidden items-center gap-8 text-sm md:flex">
              <ActiveLink
                href="#work"
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                Work
              </ActiveLink>
              <ActiveLink
                href="#about"
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                About
              </ActiveLink>
              <ActiveLink
                href="#skills"
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                Skills
              </ActiveLink>
              <ActiveLink
                href="#contact"
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                Contact
              </ActiveLink>
            </div>

            <DarkModeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </nav>
        </header>

        <main id="home">
          {/* Hero Section with Parallax */}
          <section className="mx-auto grid max-w-6xl gap-10 overflow-hidden px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              style={{ y: scrollY * 0.5 }}
            >
              <motion.p
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="h-4 w-4" /> Chemistry Ph.D. candidate • University of
                Virginia
              </motion.p>

              <h1 className="max-w-4xl text-5xl font-bold tracking-tight dark:text-white md:text-7xl">
                Peptide chemist building tools to understand and improve molecular
                accumulation.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                I work at the intersection of peptide chemistry, chemical biology, and antibiotic
                discovery — designing molecules, testing biological behavior, and translating
                complex data into clear scientific stories.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="rounded-2xl px-5 py-6 text-base">
                    <a href="#work">View my work</a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl px-5 py-6 text-base dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-900"
                  >
                    <a href="#contact">Get in touch</a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="rounded-[1.5rem] bg-slate-100 p-6 dark:bg-slate-800">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Current focus
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight dark:text-white">
                  Molecular design for better peptide behavior
                </h2>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  My research asks how subtle chemical modifications — charge, hydrophobicity,
                  backbone changes, and side-chain edits — influence accumulation and activity in
                  biological systems.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                    <p className="font-semibold dark:text-white">Systems</p>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      E. coli, MRSA, MSSA, mammalian cells
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                    <p className="font-semibold dark:text-white">Methods</p>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      Synthesis, assays, LC-MS, data analysis
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Highlights Section */}
          <section className="border-y border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900/50">
            <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="rounded-3xl border-slate-200 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
                    <CardContent className="p-6">
                      <item.icon className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                      <h3 className="mt-4 text-lg font-semibold dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Work Section */}
          <section
            ref={workRef}
            id="work"
            className="mx-auto max-w-6xl px-5 py-20"
          >
            <motion.div
              initial="hidden"
              animate={workVisible ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Selected work
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight dark:text-white md:text-5xl">
                Research, mentoring, and projects
              </h2>
            </motion.div>

            <motion.div
              className="mt-10 grid gap-5 md:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate={workVisible ? 'visible' : 'hidden'}
            >
              {projects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="mb-3 text-3xl">{project.image}</div>

                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {project.tag}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <motion.div
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
                    whileHover={{ gap: 8 }}
                  >
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </section>

          {/* About Section */}
          <section
            ref={aboutRef}
            id="about"
            className="bg-slate-950 py-20 text-white dark:bg-slate-900"
          >
            <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
              <motion.div
                initial="hidden"
                animate={aboutVisible ? 'visible' : 'hidden'}
                variants={fadeUp}
              >
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                  About
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight">
                  Scientist, mentor, communicator.
                </h2>
              </motion.div>

              <motion.div
                className="space-y-6 text-lg leading-8 text-slate-300"
                initial="hidden"
                animate={aboutVisible ? 'visible' : 'hidden'}
                variants={staggerContainer}
              >
                <motion.p variants={fadeUp}>
                  I am a chemistry Ph.D. candidate at the University of Virginia focused on
                  peptide-based molecular design. My work combines synthetic chemistry with
                  biological assays to understand why certain peptides accumulate, fail, or behave
                  differently across cellular systems.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Beyond the bench, I care deeply about mentoring students, building collaborative
                  scientific communities, and communicating research in a way that is rigorous,
                  accessible, and useful.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section ref={skillsRef} id="skills" className="mx-auto max-w-6xl px-5 py-20">
            <motion.div
              initial="hidden"
              animate={skillsVisible ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Skills
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight dark:text-white">
                What I bring
              </h2>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              variants={staggerContainer}
              initial="hidden"
              animate={skillsVisible ? 'visible' : 'hidden'}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mx-auto max-w-6xl px-5 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] bg-white p-8 shadow-xl dark:bg-slate-900 md:p-12"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Contact
                  </p>
                  <h2 className="mt-3 text-4xl font-bold tracking-tight dark:text-white">
                    Let's connect.
                  </h2>
                  <p className="mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
                    I'm always happy to talk about peptide chemistry, chemical biology, mentorship,
                    collaborations, and science communication.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <CopyButton
                    text="your.email@virginia.edu"
                    label="your.email@virginia.edu"
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start rounded-2xl py-6 dark:border-slate-700 dark:hover:bg-slate-800"
                    >
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="dark:text-slate-300"
                      >
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn profile
                        <ExternalLink className="ml-auto h-4 w-4" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}
