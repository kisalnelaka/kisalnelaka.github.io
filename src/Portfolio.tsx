import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Search,
  CheckCircle2,
  RefreshCw,
  Terminal,
} from 'lucide-react';
import { useGitHubData, MergedProject } from './hooks/useGitHubData';
import { useMediumArticles } from './hooks/useMediumArticles';

// ─── Career Milestones ────────────────────────────────────────────────────────

const experiences = [
  {
    company: 'ASMORPHIC',
    role: 'Senior Full-Stack Developer & Systems Architect',
    period: '2025 – PRESENT',
    impact:
      'Architected high-availability DID management systems and high-throughput data processing pipelines for enterprise telecom infrastructure using Python, Laravel, and distributed messaging.',
  },
  {
    company: 'AMPLIFYD',
    role: 'Lead Full-Stack Developer',
    period: '2024 – 2025',
    impact:
      'Led adversarial security auditing and database optimization on high-traffic production platforms — maintained 99.99% uptime under extreme distributed load spikes.',
  },
  {
    company: 'CORE IT SOLUTIONS',
    role: 'Full-Stack Software Engineer',
    period: '2023 – 2024',
    impact:
      'Engineered resilient RESTful architectures, continuous deployment pipelines, and multi-tenant telemetry dashboards with real-time WebSocket analytics.',
  },
  {
    company: 'MEDFUTURE',
    role: 'Manager Website Development & Maintenance',
    period: '2022',
    impact:
      'Migrated legacy monolithic systems to modern modular architectures, accelerating response latencies by 42% and establishing strict zero-trust operational protocols.',
  },
];

// ─── Core Architecture & Tooling ──────────────────────────────────────────────

const disciplineCategories = [
  {
    title: 'Languages & Runtimes',
    items: [
      'Kotlin',
      'TypeScript',
      'Dart',
      'PHP 8.3',
      'Python',
      'C++',
      'Swift',
      'Assembly x86',
    ],
  },
  {
    title: 'Platforms & Frameworks',
    items: [
      'Android Jetpack',
      'Flutter',
      'React',
      'Next.js',
      'Laravel',
      'FastAPI',
      'Express',
      'Three.js',
    ],
  },
  {
    title: 'Systems & Infrastructure',
    items: [
      'Docker Compose',
      'PostgreSQL',
      'Redis',
      'Linux / DBus',
      'Supabase',
      'WebRTC',
      'Firebase',
      'CI/CD',
    ],
  },
  {
    title: 'Security & Forensics',
    items: [
      'Threat Modeling',
      'DPI Camouflage',
      'Cryptographic Auditing',
      'SIEM',
      'Heuristic ML',
      'Binaural DSP',
    ],
  },
];

// ─── Category Filter Definitions ─────────────────────────────────────────────

type CategoryFilter = 'ALL' | 'MOBILE' | 'WEB' | 'BACKEND' | 'INFRA';

const FILTER_MAPPING: Record<CategoryFilter, string[]> = {
  ALL: [],
  MOBILE: ['Mobile & Cross-Platform'],
  WEB: ['Web Applications & Frontend'],
  BACKEND: [
    'Backend & Distributed Systems',
    'Libraries & SDKs',
    'AI, ML & Data Science',
  ],
  INFRA: ['DevOps & Cloud Infrastructure', 'Software Engineering & Tools'],
};

// ─── Main Portfolio Component ─────────────────────────────────────────────────

const Portfolio: React.FC = () => {
  const {
    user,
    allProjects,
    selectedProjects,
    loading: githubLoading,
  } = useGitHubData('kisalnelaka');
  const { articles, loading: articlesLoading } = useMediumArticles(
    'kisalnelaka6',
    6,
  );

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFullCatalog, setShowFullCatalog] = useState(false);

  // Filtered projects for the interactive Selected Work section
  const filteredSelected = useMemo(() => {
    let list = selectedProjects;
    if (activeCategory !== 'ALL') {
      const allowed = FILTER_MAPPING[activeCategory];
      list = list.filter((p) => allowed.includes(p.category));
    }
    return list.slice(0, 8); // Top 8 in curated showcase
  }, [selectedProjects, activeCategory]);

  // Full catalog search filter
  const searchableCatalog = useMemo(() => {
    if (!searchQuery.trim()) return allProjects;
    const q = searchQuery.toLowerCase();
    return allProjects.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q)),
    );
  }, [allProjects, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-black selection:text-white relative">
      {/* Background Micro Textures */}
      <div className="fixed inset-0 bg-scanlines opacity-[0.012] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-editorial-grid opacity-[0.01] pointer-events-none z-0" />

      {/* ─── Top Editorial Masthead ─────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-background/95 border-b border-foreground backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="#top"
              className="font-serif text-xl font-bold tracking-tighter uppercase text-foreground no-underline"
            >
              KN.
            </a>
            <span className="hidden sm:inline-block font-mono text-[11px] text-mutedForeground tracking-widest uppercase border-l border-borderLight pl-4">
              Systems Architect & Security Engineer
            </span>
          </div>

          <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
            <a
              href="#work"
              className="text-foreground hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
            >
              Work
            </a>
            <a
              href="#experience"
              className="text-foreground hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
            >
              History
            </a>
            <a
              href="#writing"
              className="text-foreground hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
            >
              Writing
            </a>
            <a
              href="mailto:kisalnelaka6@gmail.com"
              className="hidden sm:inline-block px-3 py-1 border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-colors duration-100"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ─── Main Content Canvas ─────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 md:px-8 relative z-10" id="top">
        {/* ─── Hero Section ─────────────────────────────────────────────── */}
        <section className="pt-20 md:pt-32 pb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 font-mono text-xs text-mutedForeground tracking-widest uppercase">
              <span className="inline-block w-2 h-2 bg-foreground" />
              <span>Issue No. 2026 // Active Engineering Index</span>
            </div>
            <div className="font-mono text-xs text-mutedForeground tracking-widest hidden sm:block">
              Coordinates: 6.9271° N, 79.8612° E
            </div>
          </div>

          {/* Oversized Display Typography */}
          <h1
            className="font-serif font-black tracking-tighter leading-none text-foreground uppercase select-none mb-8"
            style={{ fontSize: 'clamp(4.2rem, 11vw, 9.8rem)' }}
          >
            Kisal
            <br />
            Nelaka
          </h1>

          {/* Visual Punctuation: Heavy rule with bordered square */}
          <div className="relative w-full h-[4px] bg-foreground my-10 flex items-center">
            <div className="absolute left-1/4 -top-[6px] w-4 h-4 bg-background border-2 border-foreground" />
            <div className="absolute right-12 -top-[6px] w-4 h-4 bg-foreground border border-background" />
          </div>

          {/* Editorial Philosophy & Drop Cap */}
          <div className="grid md:grid-cols-12 gap-8 items-start pt-4">
            <div className="md:col-span-8">
              <p className="boxed-drop-cap text-lg md:text-xl text-foreground font-body leading-relaxed mb-6">
                Engineering software is fundamentally an exercise in discipline,
                structural isolation, and deterministic control. Specializing in
                high-performance backends, hardened cross-platform runtimes, and
                distributed telemetry, I design systems with threat vectors
                considered from the initial commit.
              </p>
              <p className="text-base text-mutedForeground leading-relaxed mb-8">
                Holding a BSc in Cybersecurity & Digital Forensics from Kingston
                University (UK), every architectural decision prioritizes
                low-overhead execution, memory safety, and impenetrable
                defensive boundaries.
              </p>

              {/* Action Triggers */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#work" className="btn-primary">
                  Explore Selected Work <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://github.com/kisalnelaka"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <Github size={15} /> GitHub Archive
                </a>
                <a
                  href="https://linkedin.com/in/kisalnelaka"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <Linkedin size={15} /> LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Quick Metadata Column */}
            <div className="md:col-span-4 border-l-2 border-foreground pl-6 space-y-4 font-mono text-xs">
              <div>
                <span className="text-mutedForeground block uppercase tracking-wider text-[10px]">
                  Title
                </span>
                <span className="text-foreground font-semibold">
                  Senior Systems Architect
                </span>
              </div>
              <div className="border-t border-borderLight pt-3">
                <span className="text-mutedForeground block uppercase tracking-wider text-[10px]">
                  Primary Stacks
                </span>
                <span className="text-foreground">
                  Kotlin · Flutter · Laravel · Python · C++
                </span>
              </div>
              <div className="border-t border-borderLight pt-3">
                <span className="text-mutedForeground block uppercase tracking-wider text-[10px]">
                  Verification
                </span>
                <span className="text-foreground flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-foreground" />{' '}
                  Security & Forensics Verified
                </span>
              </div>
              <div className="border-t border-borderLight pt-3">
                <span className="text-mutedForeground block uppercase tracking-wider text-[10px]">
                  Direct Channel
                </span>
                <a
                  href="mailto:kisalnelaka6@gmail.com"
                  className="inline-flex items-center gap-1.5 text-foreground underline underline-offset-2 hover:bg-foreground hover:text-background transition-colors duration-100"
                >
                  <Mail size={13} />
                  <span>kisalnelaka6@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Heavy Section Rule ───────────────────────────────────────── */}
        <hr className="heavy-rule" />

        {/* ─── Inverted Stats Section ───────────────────────────────────── */}
        <section className="bg-foreground text-background p-8 md:p-14 relative my-16">
          <div className="absolute inset-0 bg-stats-texture opacity-5 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-b md:border-b-0 md:border-r border-background/20 pb-6 md:pb-0 md:pr-6">
              <span className="block font-serif text-4xl md:text-5xl font-bold tracking-tight">
                {user ? `${user.public_repos}+` : '50+'}
              </span>
              <span className="block font-mono text-[11px] uppercase tracking-widest text-background/70 mt-2">
                Public Repositories
              </span>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-background/20 pb-6 md:pb-0 md:pr-6">
              <span className="block font-serif text-4xl md:text-5xl font-bold tracking-tight">
                06+
              </span>
              <span className="block font-mono text-[11px] uppercase tracking-widest text-background/70 mt-2">
                Years Architecture
              </span>
            </div>
            <div className="border-r border-background/20 pr-6">
              <span className="block font-serif text-4xl md:text-5xl font-bold tracking-tight">
                07
              </span>
              <span className="block font-mono text-[11px] uppercase tracking-widest text-background/70 mt-2">
                Core Domains
              </span>
            </div>
            <div>
              <span className="block font-serif text-4xl md:text-5xl font-bold tracking-tight">
                100%
              </span>
              <span className="block font-mono text-[11px] uppercase tracking-widest text-background/70 mt-2">
                Privacy-First / Deterministic
              </span>
            </div>
          </div>
        </section>

        {/* ─── Heavy Section Rule ───────────────────────────────────────── */}
        <hr className="heavy-rule" />

        {/* ─── Automated Selected Work Section ──────────────────────────── */}
        <section className="py-20" id="work">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="section-label mb-3">
                <span className="w-6 h-[2px] bg-foreground inline-block" />
                Portfolio & Engineering Deliverables
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight">
                Selected Work
              </h2>
            </div>

            {/* Live GitHub Sync Status Indicator */}
            <div className="flex items-center gap-3 font-mono text-xs text-mutedForeground border border-foreground/30 px-3 py-1.5 self-start md:self-auto">
              <RefreshCw
                size={12}
                className={
                  githubLoading
                    ? 'animate-spin text-foreground'
                    : 'text-foreground'
                }
              />
              <span>
                {githubLoading
                  ? 'Syncing GitHub API...'
                  : 'Live Synced with GitHub API'}
              </span>
            </div>
          </div>

          {/* Monochromatic Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b-2 border-foreground pb-4 mb-10 font-mono text-xs">
            {(
              ['ALL', 'MOBILE', 'WEB', 'BACKEND', 'INFRA'] as CategoryFilter[]
            ).map((cat) => {
              const labels: Record<CategoryFilter, string> = {
                ALL: 'All Disciplines',
                MOBILE: 'Mobile & DSP',
                WEB: 'Web & 3D',
                BACKEND: 'Distributed Systems',
                INFRA: 'Tools & Security',
              };
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 uppercase tracking-wider text-xs transition-colors duration-100 border ${
                    isSelected
                      ? 'bg-foreground text-background border-foreground font-semibold'
                      : 'bg-background text-foreground border-foreground/30 hover:border-foreground'
                  }`}
                >
                  {labels[cat]}
                </button>
              );
            })}
          </div>

          {/* Selected Work Grid with Instant Inversions */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSelected.map((project: MergedProject, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: idx * 0.04 }}
                className="group border-2 border-foreground bg-background p-8 flex flex-col justify-between transition-colors duration-100 hover:bg-foreground hover:text-background relative"
              >
                {/* Card Top Metadata */}
                <div>
                  <div className="flex items-start justify-between gap-4 border-b border-foreground/20 pb-4 mb-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-mutedForeground group-hover:text-background/70 block">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-2xl font-bold tracking-tight mt-1">
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          title="Live Demonstration"
                          className="p-1.5 border border-foreground group-hover:border-background text-foreground group-hover:text-background hover:bg-background hover:text-foreground transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        title="Repository Source"
                        className="p-1.5 border border-foreground group-hover:border-background text-foreground group-hover:text-background hover:bg-background hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm leading-relaxed text-foreground/90 group-hover:text-background/90 mb-6">
                    {project.desc}
                  </p>
                </div>

                {/* Card Bottom: Stack Tags & Live Repo Metrics */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] tracking-wider px-2 py-0.5 border border-foreground/30 group-hover:border-background/40 group-hover:text-background"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between font-mono text-[11px] text-mutedForeground group-hover:text-background/70 border-t border-foreground/20 pt-4">
                    <div className="flex items-center gap-4">
                      <span>★ {project.stars}</span>
                      <span>⑂ {project.forks}</span>
                      {project.license && <span>[{project.license}]</span>}
                    </div>
                    <span>
                      {new Date(project.updated).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Repository Catalog Drawer / Accordion */}
          <div className="mt-14 border-2 border-foreground p-6 md:p-8 bg-muted">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-xl font-bold tracking-tight uppercase">
                  Complete Engineering Index ({allProjects.length} Repositories)
                </h4>
                <p className="font-mono text-xs text-mutedForeground mt-1">
                  Access every historical repository, low-level experiment, and
                  open-source project.
                </p>
              </div>
              <button
                onClick={() => setShowFullCatalog(!showFullCatalog)}
                className="btn-outline self-start sm:self-auto py-2.5 px-6 text-xs"
              >
                {showFullCatalog
                  ? 'Collapse Archive ▲'
                  : 'Open Complete Archive (50+) ▼'}
              </button>
            </div>

            {/* Expandable Search and Table */}
            {showFullCatalog && (
              <div className="mt-8 pt-6 border-t-2 border-foreground">
                <div className="relative mb-6">
                  <Search
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-mutedForeground"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by keyword, language, or domain (e.g. Flutter, DSP, C++, Laravel)..."
                    className="w-full pl-12 pr-4 py-3 bg-background border-2 border-foreground font-mono text-xs text-foreground placeholder:text-mutedForeground focus:border-b-4 focus:outline-none"
                  />
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs border-collapse">
                    <thead>
                      <tr className="border-b-2 border-foreground text-[10px] uppercase text-mutedForeground">
                        <th className="py-2.5 px-3">Project</th>
                        <th className="py-2.5 px-3">Category</th>
                        <th className="py-2.5 px-3">Stack</th>
                        <th className="py-2.5 px-3">Updated</th>
                        <th className="py-2.5 px-3 text-right">Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-borderLight">
                      {searchableCatalog.map((repo) => (
                        <tr
                          key={repo.name}
                          className="hover:bg-foreground hover:text-background transition-colors duration-100 group"
                        >
                          <td className="py-3 px-3 font-semibold">
                            <span className="font-serif text-sm">
                              {repo.name}
                            </span>
                            {repo.license && (
                              <span className="ml-2 text-[10px] opacity-70">
                                [{repo.license}]
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-3 text-[11px] opacity-80">
                            {repo.category}
                          </td>
                          <td className="py-3 px-3 text-[11px]">
                            {repo.stack.slice(0, 3).join(', ')}
                            {repo.stack.length > 3
                              ? ` +${repo.stack.length - 3}`
                              : ''}
                          </td>
                          <td className="py-3 px-3 opacity-70">
                            {new Date(repo.updated).toISOString().slice(0, 10)}
                          </td>
                          <td className="py-3 px-3 text-right">
                            <div className="flex items-center justify-end gap-3">
                              {repo.demo && (
                                <a
                                  href={repo.demo}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="underline group-hover:text-background font-mono text-[11px]"
                                >
                                  Demo ↗
                                </a>
                              )}
                              <a
                                href={repo.url}
                                target="_blank"
                                rel="noreferrer"
                                className="underline group-hover:text-background font-mono text-[11px]"
                              >
                                Git ↗
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ─── Heavy Section Rule ───────────────────────────────────────── */}
        <hr className="heavy-rule" />

        {/* ─── Experience Section ───────────────────────────────────────── */}
        <section className="py-20" id="experience">
          <div className="section-label mb-3">
            <span className="w-6 h-[2px] bg-foreground inline-block" />
            Track Record & Architecture History
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight mb-12">
            Engineering Roles
          </h2>

          <div className="divide-y-2 divide-foreground">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className="py-8 grid md:grid-cols-12 gap-6 group hover:bg-muted transition-colors duration-100 px-4"
              >
                <div className="md:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-mutedForeground">
                    {exp.period}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl font-bold tracking-tight text-foreground">
                    {exp.company}
                  </h3>
                  <span className="font-mono text-xs text-mutedForeground block mt-1">
                    {exp.role}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <p className="font-body text-sm leading-relaxed text-foreground/90">
                    {exp.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── Heavy Section Rule ───────────────────────────────────────── */}
        <hr className="heavy-rule" />

        {/* ─── Disciplines & Stack Section ──────────────────────────────── */}
        <section className="py-20" id="stack">
          <div className="section-label mb-3">
            <span className="w-6 h-[2px] bg-foreground inline-block" />
            Capabilities Matrix
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight mb-12">
            Technical Rigor
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplineCategories.map((discipline) => (
              <div
                key={discipline.title}
                className="border-2 border-foreground p-6 bg-background hover:bg-foreground hover:text-background transition-colors duration-100 group"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-mutedForeground group-hover:text-background/70 border-b border-foreground/20 pb-3 mb-4">
                  {discipline.title}
                </h3>
                <ul className="space-y-2 font-mono text-xs">
                  {discipline.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 bg-foreground group-hover:bg-background" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Heavy Section Rule ───────────────────────────────────────── */}
        <hr className="heavy-rule" />

        {/* ─── Publications & Writing Section ───────────────────────────── */}
        <section className="py-20" id="writing">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="section-label mb-3">
                <span className="w-6 h-[2px] bg-foreground inline-block" />
                Editorial & Deep Dives
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight">
                Dispatches & Articles
              </h2>
            </div>
            <a
              href="https://medium.com/@kisalnelaka6"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost self-start md:self-auto"
            >
              Medium Publication ↗
            </a>
          </div>

          <div className="divide-y-2 divide-foreground border-t-2 border-b-2 border-foreground">
            {articlesLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="py-6 flex items-center justify-between">
                  <div className="w-48 h-5 bg-borderLight animate-pulse" />
                  <div className="w-20 h-4 bg-borderLight animate-pulse" />
                </div>
              ))
            ) : articles.length > 0 ? (
              articles.map((art, idx) => (
                <a
                  key={art.link}
                  href={art.link}
                  target="_blank"
                  rel="noreferrer"
                  className="py-6 flex items-baseline justify-between gap-6 group hover:bg-foreground hover:text-background transition-colors duration-100 px-4 no-underline"
                >
                  <div className="flex items-baseline gap-6 min-w-0">
                    <span className="font-mono text-xs text-mutedForeground group-hover:text-background/70 w-8 flex-shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl font-bold tracking-tight truncate group-hover:underline underline-offset-4">
                      {art.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="flex-shrink-0 text-mutedForeground group-hover:text-background"
                  />
                </a>
              ))
            ) : (
              <div className="py-8 font-mono text-xs text-mutedForeground text-center">
                Check publications directly on{' '}
                <a
                  href="https://medium.com/@kisalnelaka6"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-foreground"
                >
                  medium.com/@kisalnelaka6
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ─── Heavy Section Rule ───────────────────────────────────────── */}
        <hr className="heavy-rule" />

        {/* ─── Education Section ────────────────────────────────────────── */}
        <section className="py-20" id="education">
          <div className="section-label mb-3">
            <span className="w-6 h-[2px] bg-foreground inline-block" />
            Credentials
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight mb-12">
            Formal Education
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-foreground p-8 bg-background">
              <span className="font-mono text-xs text-mutedForeground tracking-widest block uppercase mb-2">
                2023 – 2024
              </span>
              <h3 className="font-serif text-2xl font-bold tracking-tight">
                BSc in Cybersecurity & Digital Forensics
              </h3>
              <p className="font-mono text-xs text-mutedForeground mt-2">
                Kingston University · London, United Kingdom
              </p>
              <div className="border-t border-borderLight mt-4 pt-4 font-body text-xs text-mutedForeground leading-relaxed">
                Focused on defensive threat intelligence, memory corruption
                defenses, cryptographic protocols, and reverse engineering.
              </div>
            </div>

            <div className="border-2 border-foreground p-8 bg-background">
              <span className="font-mono text-xs text-mutedForeground tracking-widest block uppercase mb-2">
                2016 – 2020
              </span>
              <h3 className="font-serif text-2xl font-bold tracking-tight">
                Higher National Diploma in Information Technology
              </h3>
              <p className="font-mono text-xs text-mutedForeground mt-2">
                SLIIT · Sri Lanka
              </p>
              <div className="border-t border-borderLight mt-4 pt-4 font-body text-xs text-mutedForeground leading-relaxed">
                Data structures, computer architecture, distributed databases,
                network administration, and algorithm analysis.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Full-Bleed Inverted Final Section & Masthead Footer ───────── */}
      <footer className="bg-foreground text-background border-t-8 border-foreground mt-20 relative">
        <div className="absolute inset-0 bg-cta-radial opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-background/70 border border-background/40 px-4 py-1.5 mb-8">
            <Terminal size={13} />
            <span>Operational Availability: Open for Architecture Roles</span>
          </div>

          <h2
            className="font-serif font-black tracking-tighter uppercase leading-none text-background mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            Let's Engineer
            <br />
            Superior Systems.
          </h2>

          <p className="font-body text-base md:text-lg text-background/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Available for principal engineering engagements, high-concurrency
            systems development, and defensive security consulting.
          </p>

          <a
            href="mailto:kisalnelaka6@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-background text-foreground font-mono text-xs uppercase tracking-widest font-semibold border-2 border-background hover:bg-transparent hover:text-background transition-colors duration-100"
          >
            kisalnelaka6@gmail.com <ArrowUpRight size={16} />
          </a>

          {/* Direct Coordinates */}
          <div className="mt-16 pt-10 border-t border-background/20 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-background/70">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/kisalnelaka"
                target="_blank"
                rel="noreferrer"
                className="hover:text-background hover:underline"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href="https://linkedin.com/in/kisalnelaka"
                target="_blank"
                rel="noreferrer"
                className="hover:text-background hover:underline"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href="https://medium.com/@kisalnelaka6"
                target="_blank"
                rel="noreferrer"
                className="hover:text-background hover:underline"
              >
                Medium
              </a>
            </div>

            <div>
              <span>
                © {new Date().getFullYear()} Kisal Nelaka. Zero Tracking.
                Deterministic Execution.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
