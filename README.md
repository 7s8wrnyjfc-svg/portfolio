import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, FlaskConical, GraduationCap, Award, Users, ArrowUpRight, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "Backbone-modified peptides for bacterial accumulation",
    tag: "Peptide chemistry • Chemical biology",
    description:
      "Designing and evaluating peptide modifications that tune accumulation across E. coli, mycobacteria, and mammalian systems using CHAMP-style workflows.",
  },
  {
    title: "Arylomycin-inspired antibiotic development",
    tag: "Antibiotics • SAR • Gram-negative bacteria",
    description:
      "Exploring structure–activity relationships and permeability-linked design principles for arylomycin/LepB inhibitor analogs.",
  },
  {
    title: "Undergraduate course-based research mentorship",
    tag: "Teaching • Mentorship • Curriculum",
    description:
      "Mentoring undergraduate researchers in a new course-based research experience, supporting experimental design, lab technique, and scientific communication.",
  },
];

const highlights = [
  {
    icon: FlaskConical,
    title: "Research",
    text: "Peptide chemistry, chemical biology, bacterial accumulation, and antibiotic discovery.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    text: "Graduate mentor for undergraduate research and hands-on laboratory training.",
  },
  {
    icon: Award,
    title: "Recognition",
    text: "Selected for fellowship and science accelerator opportunities supporting translational research.",
  },
  {
    icon: Users,
    title: "Leadership",
    text: "Research chair and collaborator across student, departmental, and lab communities.",
  },
];

const skills = [
  "Peptide synthesis",
  "SAR analysis",
  "Chemical biology",
  "Bacterial assays",
  "CHAMP workflows",
  "MIC assays",
  "LC-MS analysis",
  "Scientific writing",
  "Mentorship",
  "Project leadership",
];

export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Ananya Naick
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#work" className="hover:text-slate-950">Work</a>
            <a href="#about" className="hover:text-slate-950">About</a>
            <a href="#skills" className="hover:text-slate-950">Skills</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              <MapPin className="h-4 w-4" /> Chemistry Ph.D. candidate • University of Virginia
            </p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Peptide chemist building tools to understand and improve molecular accumulation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I work at the intersection of peptide chemistry, chemical biology, and antibiotic discovery — designing molecules, testing biological behavior, and translating complex data into clear scientific stories.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl px-5 py-6 text-base">
                <a href="#work">View my work</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl px-5 py-6 text-base">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl"
          >
            <div className="rounded-[1.5rem] bg-slate-100 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Current focus</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Molecular design for better peptide behavior</h2>
              <p className="mt-4 leading-7 text-slate-600">
                My research asks how subtle chemical modifications — charge, hydrophobicity, backbone changes, and side-chain edits — influence accumulation and activity in biological systems.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-semibold">Systems</p>
                  <p className="mt-1 text-slate-600">E. coli, MRSA, MSSA, mammalian cells</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-semibold">Methods</p>
                  <p className="mt-1 text-slate-600">Synthesis, assays, LC-MS, data analysis</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="border-y border-slate-200 bg-white py-12">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-4">
            {highlights.map((item) => (
              <Card key={item.title} className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <item.icon className="h-6 w-6 text-slate-700" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Selected work</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Research, mentoring, and projects</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <p className="text-sm font-medium text-slate-500">{project.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  Discuss this work <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">About</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">Scientist, mentor, communicator.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                I am a chemistry Ph.D. candidate at the University of Virginia focused on peptide-based molecular design. My work combines synthetic chemistry with biological assays to understand why certain peptides accumulate, fail, or behave differently across cellular systems.
              </p>
              <p>
                Beyond the bench, I care deeply about mentoring students, building collaborative scientific communities, and communicating research in a way that is rigorous, accessible, and useful.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Skills</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">What I bring</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 pb-20">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl md:p-12">
            <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Contact</p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight">Let’s connect.</h2>
                <p className="mt-4 max-w-xl leading-7 text-slate-600">
                  I’m always happy to talk about peptide chemistry, chemical biology, mentorship, collaborations, and science communication.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button asChild variant="outline" className="justify-start rounded-2xl py-6">
                  <a href="mailto:your.email@virginia.edu"><Mail className="mr-2 h-4 w-4" /> your.email@virginia.edu</a>
                </Button>
                <Button asChild variant="outline" className="justify-start rounded-2xl py-6">
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn profile</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
