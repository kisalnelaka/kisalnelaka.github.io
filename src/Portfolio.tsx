import React, { useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Circle } from 'lucide-react';
import { useGitHubData } from './hooks/useGitHubData';
import { useMediumArticles } from './hooks/useMediumArticles';

// ─── Static Data ─────────────────────────────────────────────────────────────

const experiences = [
  {
    company: 'ASMORPHIC',
    role: 'Senior Full-Stack Developer',
    period: '2025 – Present',
    impact: 'Architected high-availability DID management systems and data processing pipelines for enterprise telecom infrastructure using Python & Laravel.',
  },
  {
    company: 'AMPLIFYD',
    role: 'Full-Stack Developer',
    period: '2024',
    impact: 'Led security auditing and database optimization on high-traffic production codebases — sustained 99.9% uptime under peak load.',
  },
  {
    company: 'CORE IT SOLUTIONS',
    role: 'Full-Stack Developer',
    period: '2023 – 2024',
    impact: 'Built scalable RESTful ecosystems, CI/CD pipelines, and multi-tenant dashboard systems with real-time analytics for enterprise clients.',
  },
  {
    company: 'MEDFUTURE',
    role: 'Development Manager',
    period: '2022',
    impact: 'Migrated a large-scale CakePHP monolith to Laravel — delivered 40% performance improvement and modernized platform-wide security standards.',
  },
];

const projects = [
  {
    title: 'TenancyOS',
    stack: ['Next.js', 'Tailwind', 'PostgreSQL'],
    description: 'A comprehensive SaaS ecosystem for property management — bridging the operational gap between landlords and tenants at scale.',
    link: 'https://tenancyos.com',
  },
  {
    title: 'IntraFlow',
    stack: ['Laravel', 'Filament', 'Multi-tenant'],
    description: 'Multi-tenant SaaS platform for telecom MSPs — complex inventory sync, automated billing, and high-availability data integrity.',
    link: 'https://github.com/kisalnelaka/intraflow',
  },
  {
    title: 'PhishCatcher',
    stack: ['JavaScript', 'ML', 'Chrome Extension'],
    description: 'Real-time phishing detection using machine learning to analyze URL patterns — identifies threats before the user clicks.',
    link: 'https://github.com/kisalnelaka/phishcatcher',
  },
  {
    title: 'Resu_me',
    stack: ['AI', 'ATS-Optimization', 'React'],
    description: 'Minimalist AI-powered tool for ATS-optimized resume and cover letter generation. Built the tool I wished I had.',
    link: 'https://kisalnelaka.github.io/resu_me',
  },
  {
    title: 'SocialRabbit Bunny',
    stack: ['PHP', 'Laravel', 'Architecture'],
    description: 'High-performance Laravel boilerplate engine — enforces strict architectural patterns and security standards from day one.',
    link: 'https://github.com/socialrabbit/bunny',
  },
  {
    title: 'BatSignal',
    stack: ['C++', 'DBus', 'Linux'],
    description: 'Native Linux system tool using DBus for real-time Bluetooth device monitoring — zero-overhead integration with modern desktop environments.',
    link: 'https://github.com/kisalnelaka/BatSignal',
  },
];

// Publications are fetched dynamically from Medium — see useMediumArticles hook

const stack = [
  'PHP', 'Python', 'TypeScript', 'Laravel', 'React', 'Next.js',
  'Node.js', 'NestJS', 'PostgreSQL', 'MySQL', 'Docker', 'Linux',
  'C++', 'Flutter', 'Cybersecurity', 'CI/CD',
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="section-label mb-10">{children}</p>
);

const Divider: React.FC = () => (
  <div className="h-px w-full bg-borderLine my-20" />
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Portfolio: React.FC = () => {
  const { user, repos } = useGitHubData('kisalnelaka');
  const { articles, loading: articlesLoading } = useMediumArticles('kisalnelaka6', 6);
  const headerRef = useRef<HTMLElement>(null);

  // Sticky nav blur on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 10) {
        headerRef.current.classList.add('nav-blur', 'border-b', 'border-borderLine');
      } else {
        headerRef.current.classList.remove('nav-blur', 'border-b', 'border-borderLine');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Top repos by stars, excluding profile/portfolio repos
  const featuredRepos = useMemo(() => {
    return repos
      .filter(r => !['kisalnelaka', 'kisalnelaka.github.io'].includes(r.name))
      .slice(0, 6);
  }, [repos]);

  // Latest repos by update date (for the "Latest" subsection)
  const latestRepos = useMemo(() => {
    return [...repos]
      .filter(r => !['kisalnelaka', 'kisalnelaka.github.io'].includes(r.name))
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 3);
  }, [repos]);

  return (
    <div className="min-h-screen bg-background text-primary">
      {/* ─── Header ─────────────────────────────────────────────────────── */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          {/* Monogram */}
          <a href="#top" className="text-sm font-bold tracking-tight text-primary">KN</a>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            <a
              href="https://github.com/kisalnelaka"
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com/in/kisalnelaka"
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="mailto:kisalnelaka6@gmail.com"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </nav>
        </div>
      </header>

      {/* ─── Main ───────────────────────────────────────────────────────── */}
      <main className="container mx-auto px-6 pt-36 pb-24" id="top">

        {/* ─── Hero ─────────────────────────────────────────────────────── */}
        <motion.section
          className="max-w-4xl"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          {/* Availability badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-8">
            <Circle size={7} className="fill-success text-success animate-pulse-slow" />
            <span className="text-xs font-mono text-secondary tracking-wide">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-bold leading-none tracking-tight mb-6 text-primary"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)', letterSpacing: '-0.04em' }}
          >
            Kisal<br />Nelaka.
          </motion.h1>

          {/* Role + Location */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-8 text-secondary text-sm">
            <span className="font-medium text-primary">Full-Stack Engineer · Systems Architect</span>
            <span className="text-tertiary">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> Sri Lanka — Remote
            </span>
            <span className="text-tertiary">·</span>
            <span className="font-mono text-xs">6+ yrs</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-secondary text-base leading-relaxed max-w-2xl mb-10"
          >
            I build scalable, secure backend systems and full-stack products — from multi-tenant SaaS platforms
            to real-time security tools. Background in Cybersecurity (Kingston University, UK) means I architect
            with threats in mind from the start, not after the breach.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <a href="mailto:kisalnelaka6@gmail.com" className="btn-primary">
              Get in touch <ArrowUpRight size={14} />
            </a>
            <a
              href="https://linkedin.com/in/kisalnelaka"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              LinkedIn
            </a>
          </motion.div>

          {/* GitHub stats */}
          {user && (
            <motion.div variants={fadeUp} className="mt-12 flex gap-6 text-xs font-mono text-secondary">
              <span>{user.public_repos} public repos</span>
              <span className="text-tertiary">·</span>
              <span>{user.followers} followers</span>
            </motion.div>
          )}
        </motion.section>

        <Divider />

        {/* ─── Experience ───────────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <SectionLabel>Experience</SectionLabel>

          <div className="space-y-0 max-w-3xl">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex gap-8 py-6 border-b border-borderLine group"
              >
                {/* Period */}
                <div className="w-24 flex-shrink-0 pt-0.5">
                  <span className="text-xs font-mono text-secondary">{exp.period}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <h3 className="text-sm font-semibold text-primary">{exp.company}</h3>
                    <span className="text-xs text-secondary flex-shrink-0">{exp.role}</span>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">{exp.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* ─── Projects ─────────────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <SectionLabel>Selected Work</SectionLabel>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                className="card p-6 flex flex-col gap-4 group cursor-pointer no-underline"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    className="text-secondary group-hover:text-primary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0 mt-0.5"
                  />
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs text-secondary leading-relaxed flex-1">
                  {project.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* GitHub: top by stars */}
          {featuredRepos.length > 0 && (
            <>
              <motion.p variants={fadeUp} className="section-label mt-14 mb-6">Top on GitHub</motion.p>
              <motion.div variants={fadeUp} className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {featuredRepos.map(repo => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="card p-5 flex flex-col gap-3 group cursor-pointer no-underline"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                        {repo.name}
                      </h3>
                      <ArrowUpRight size={13} className="text-secondary group-hover:text-primary transition-all flex-shrink-0" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {repo.language && <span className="tag">{repo.language}</span>}
                      {repo.topics?.slice(0, 2).map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <p className="text-xs text-secondary leading-relaxed flex-1">
                      {repo.description || 'Open source project.'}
                    </p>
                    <div className="flex gap-4 text-[10px] font-mono text-secondary mt-auto pt-2 border-t border-borderLine">
                      <span>★ {repo.stargazers_count}</span>
                      <span>{repo.forks_count} forks</span>
                      <span className="ml-auto">{new Date(repo.updated_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
                    </div>
                  </a>
                ))}
              </motion.div>
            </>
          )}

          {/* GitHub: recently updated */}
          {latestRepos.length > 0 && (
            <>
              <motion.p variants={fadeUp} className="section-label mt-14 mb-6">Recently Updated</motion.p>
              <motion.div variants={fadeUp} className="divide-y divide-borderLine">
                {latestRepos.map(repo => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-6 py-4 group no-underline"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="text-xs font-mono text-secondary flex-shrink-0 w-24">
                        {new Date(repo.updated_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </span>
                      <span className="text-sm text-secondary group-hover:text-primary transition-colors truncate">
                        {repo.name}
                      </span>
                      {repo.language && <span className="tag flex-shrink-0 hidden sm:inline">{repo.language}</span>}
                    </div>
                    <ArrowUpRight size={13} className="text-secondary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </motion.div>
            </>
          )}
        </motion.section>

        <Divider />

        {/* ─── Stack ────────────────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <SectionLabel>Stack</SectionLabel>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 max-w-3xl">
            {stack.map(item => (
              <span key={item} className="tag py-1 px-3 text-xs">{item}</span>
            ))}
          </motion.div>
        </motion.section>

        <Divider />

        {/* ─── Writing ──────────────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <SectionLabel>Writing</SectionLabel>

          <div className="max-w-3xl divide-y divide-borderLine">
            {articlesLoading ? (
              // Skeleton rows while loading
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 py-4">
                  <span className="w-5 h-3 bg-surfaceHover rounded animate-pulse" />
                  <span className="flex-1 h-3 bg-surfaceHover rounded animate-pulse" />
                </div>
              ))
            ) : articles.length > 0 ? (
              articles.map((article, i) => (
                <motion.a
                  key={article.link}
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  variants={fadeUp}
                  className="flex items-center justify-between gap-6 py-4 group no-underline"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="text-[10px] font-mono text-secondary w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-secondary group-hover:text-primary transition-colors truncate">
                      {article.title}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="text-secondary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              ))
            ) : (
              // Fallback if Medium API unreachable
              <p className="text-sm text-secondary py-4">
                Articles available on{' '}
                <a href="https://medium.com/@kisalnelaka6" target="_blank" rel="noreferrer" className="text-primary hover:text-accent transition-colors">
                  Medium ↗
                </a>
              </p>
            )}
          </div>
        </motion.section>

        <Divider />

        {/* ─── Education ────────────────────────────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-3xl"
        >
          <SectionLabel>Education</SectionLabel>

          <div className="space-y-6">
            <motion.div variants={fadeUp} className="flex gap-8">
              <span className="text-xs font-mono text-secondary w-24 flex-shrink-0 pt-0.5">2023–2024</span>
              <div>
                <p className="text-sm font-semibold text-primary">BSc Cybersecurity & Digital Forensics</p>
                <p className="text-xs text-secondary mt-0.5">Kingston University, United Kingdom</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="flex gap-8">
              <span className="text-xs font-mono text-secondary w-24 flex-shrink-0 pt-0.5">2016–2020</span>
              <div>
                <p className="text-sm font-semibold text-primary">HND in Information Technology</p>
                <p className="text-xs text-secondary mt-0.5">SLIIT, Sri Lanka</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* ─── Footer / CTA ───────────────────────────────────────────────── */}
      <footer className="border-t border-borderLine">
        <div className="container mx-auto px-6 py-20 text-center max-w-2xl">
          <p className="text-xs font-mono text-secondary tracking-widest uppercase mb-6">
            Open to work
          </p>
          <h2
            className="font-bold text-primary mb-8 leading-none tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
          >
            Let's build something.
          </h2>
          <a href="mailto:kisalnelaka6@gmail.com" className="btn-primary text-sm px-8 py-3">
            kisalnelaka6@gmail.com <ArrowUpRight size={14} />
          </a>

          {/* Social links */}
          <div className="mt-12 flex items-center justify-center gap-8 text-xs text-secondary font-medium">
            <a
              href="https://github.com/kisalnelaka"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <span className="text-tertiary">·</span>
            <a
              href="https://linkedin.com/in/kisalnelaka"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-tertiary">·</span>
            <a
              href="https://medium.com/@kisalnelaka6"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              Medium
            </a>
          </div>

          <p className="mt-12 text-[11px] text-secondary/40 font-mono">
            © {new Date().getFullYear()} Kisal Nelaka
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
