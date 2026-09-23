import React, { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Mail,
  Copy,
  Check,
  Download,
  BookOpen,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { useGitHubData } from './hooks/useGitHubData';
import { useMediumArticles } from './hooks/useMediumArticles';
import { FlagshipBento } from './components/FlagshipBento';
import { SystemsTopologyGraph } from './components/interactive/SystemsTopologyGraph';
import { RepositoryCatalog } from './components/RepositoryCatalog';
import { ArchitectureTimeline } from './components/ArchitectureTimeline';
import { SecurityDossier } from './components/SecurityDossier';

const Portfolio: React.FC = () => {
  const {
    user,
    allProjects,
    loading: githubLoading,
  } = useGitHubData('kisalnelaka');
  const { articles, loading: articlesLoading } = useMediumArticles(
    'kisalnelaka6',
    6,
  );
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kisalnelaka6@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-canvas text-slate-800 font-sans relative selection:bg-brand-indigo selection:text-white">
      {/* ─── Multi-chromatic Ambient Mesh Background Blobs ─── */}
      <div className="fixed inset-0 bg-mesh-luminous pointer-events-none z-0" />
      <div className="fixed inset-0 bg-dot-pattern opacity-40 pointer-events-none z-0" />

      {/* Floating Ambient Glowing Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-brand-indigo/15 via-brand-purple/10 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-[30%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-brand-pink/10 via-brand-coral/10 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-brand-cyan/10 via-brand-teal/10 to-transparent blur-[150px] pointer-events-none z-0" />

      {/* ─── Glassmorphic Top Navbar ─────────────────────────────────── */}
      <header className="glass-nav">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-pink text-white flex items-center justify-center font-heading font-black text-lg shadow-glow-indigo no-underline hover:scale-105 transition-transform"
            >
              KN
            </a>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-slate-900 text-sm block">
                Kisal Nelaka
              </span>
              <span className="text-[11px] font-mono text-slate-500 block">
                Systems Architect & Security Engineer
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-600 font-mono">
            <a
              href="#work"
              className="hover:text-brand-indigo transition-colors"
            >
              Work
            </a>
            <a
              href="#topology"
              className="hover:text-brand-indigo transition-colors hidden md:inline"
            >
              Topology
            </a>
            <a
              href="#directory"
              className="hover:text-brand-indigo transition-colors"
            >
              Catalog
            </a>
            <a
              href="#experience"
              className="hover:text-brand-indigo transition-colors"
            >
              History
            </a>
            <a
              href="#credentials"
              className="hover:text-brand-indigo transition-colors hidden sm:inline"
            >
              Credentials
            </a>
            <a
              href="#writing"
              className="hover:text-brand-indigo transition-colors hidden lg:inline"
            >
              Writing
            </a>
            <a
              href="mailto:kisalnelaka6@gmail.com"
              className="btn-vibrant py-2 px-4 text-xs font-mono uppercase tracking-wider"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      {/* ─── Main Content Canvas ─────────────────────────────────────── */}
      <main
        className="max-w-6xl mx-auto px-6 relative z-10 space-y-24 pt-12 pb-24"
        id="top"
      >
        {/* ─── Hero Section ─────────────────────────────────────────── */}
        <section className="pt-8 md:pt-16 pb-6">
          {/* Eyebrow Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm text-xs font-mono font-medium text-slate-700 mb-8 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-900 font-semibold">STATUS: ACTIVE</span>
            <span className="text-slate-400">·</span>
            <span className="flex items-center gap-1 text-slate-500">
              <MapPin size={12} className="text-brand-indigo" />
              6.9271° N, 79.8612° E // London / Colombo
            </span>
          </div>

          {/* Large Hero Title with Luminous Gradient Accent */}
          <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-slate-900 mb-6">
            Building systems with{' '}
            <span className="bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-rose bg-clip-text text-transparent">
              deterministic control
            </span>{' '}
            and zero trust.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10 font-normal">
            I am a{' '}
            <strong className="text-slate-900 font-semibold">
              Systems Architect & Security Engineer
            </strong>{' '}
            holding a{' '}
            <strong className="text-slate-900 font-semibold">
              BSc in Cybersecurity & Digital Forensics
            </strong>{' '}
            from Kingston University London. I architect high-availability
            distributed telecom backends, hardened cross-platform runtimes, and
            acoustic signal processing engines.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a href="#work" className="btn-vibrant">
              <Sparkles size={16} />
              <span>Explore Selected Work</span>
            </a>
            <a
              href="https://github.com/kisalnelaka"
              target="_blank"
              rel="noreferrer"
              className="btn-vibrant-outline"
            >
              <Github size={16} />
              <span>GitHub Archive</span>
              <ArrowUpRight size={14} className="text-slate-400" />
            </a>
            <a
              href="https://knockknockneo.cloud/stuff/Kisal%20Nelaka%20-%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-all font-mono"
            >
              <Download size={15} />
              <span>Resume (.PDF)</span>
            </a>
          </div>

          {/* KPI Statistics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-card">
            <div className="p-4">
              <span className="block font-heading font-black text-3xl md:text-4xl text-slate-900">
                {user ? `${user.public_repos}+` : '50+'}
              </span>
              <span className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mt-1">
                Public Repositories
              </span>
            </div>
            <div className="p-4 border-l border-slate-200/60">
              <span className="block font-heading font-black text-3xl md:text-4xl text-brand-indigo">
                06+
              </span>
              <span className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mt-1">
                Years Architecture
              </span>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l border-slate-200/60">
              <span className="block font-heading font-black text-3xl md:text-4xl text-brand-emerald">
                99.99%
              </span>
              <span className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mt-1">
                Production Uptime
              </span>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l border-slate-200/60">
              <span className="block font-heading font-black text-3xl md:text-4xl text-brand-rose">
                BSc Hons
              </span>
              <span className="block text-xs font-mono font-medium text-slate-500 uppercase tracking-wider mt-1">
                Cybersecurity (Kingston UK)
              </span>
            </div>
          </div>
        </section>

        {/* ─── Flagship Bento Showcase ──────────────────────────────── */}
        <section id="work" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="badge-colorful bg-amber-100 text-amber-800 font-mono text-xs mb-2">
                Flagship Engineering Works
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">
                Live Interactive Deliverables
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Interact directly with real algorithms in the browser — from Web
              Audio binaural synthesis to deep packet inspection simulation.
            </p>
          </div>

          <FlagshipBento />
        </section>

        {/* ─── Interactive Systems Topology Graph ───────────────────── */}
        <section id="topology" className="space-y-6">
          <SystemsTopologyGraph />
        </section>

        {/* ─── Complete Repository Catalog ──────────────────────────── */}
        <section id="directory" className="space-y-6">
          <RepositoryCatalog projects={allProjects} loading={githubLoading} />
        </section>

        {/* ─── Career Architecture Milestones ───────────────────────── */}
        <section id="experience" className="space-y-6">
          <ArchitectureTimeline />
        </section>

        {/* ─── Cybersecurity & Forensics Dossier ─────────────────────── */}
        <section id="credentials" className="space-y-6">
          <SecurityDossier />
        </section>

        {/* ─── Dispatches & Writing (Medium) ────────────────────────── */}
        <section id="writing" className="space-y-6">
          <div className="glass-card p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-8 h-8 rounded-lg bg-brand-indigo/10 text-brand-indigo flex items-center justify-center">
                    <BookOpen size={18} />
                  </span>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-indigo">
                    Publications & Deep Dives
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Engineering Dispatches
                </h3>
              </div>

              <a
                href="https://medium.com/@kisalnelaka6"
                target="_blank"
                rel="noreferrer"
                className="btn-vibrant-outline py-2 px-4 text-xs font-mono"
              >
                <span>Medium Channel</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articlesLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-slate-200 animate-pulse space-y-3"
                  >
                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                    <div className="h-3 bg-slate-100 rounded w-full" />
                    <div className="h-3 bg-slate-100 rounded w-1/2" />
                  </div>
                ))
              ) : articles.length > 0 ? (
                articles.map((art) => (
                  <a
                    key={art.link}
                    href={art.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card hover:border-brand-indigo/50 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group no-underline"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
                        <span>DISPATCH</span>
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-indigo transition-all"
                        />
                      </div>
                      <h4 className="font-heading font-bold text-slate-900 text-base group-hover:text-brand-indigo transition-colors line-clamp-2 mb-2">
                        {art.title}
                      </h4>
                    </div>
                    <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-400">
                      Read on Medium ↗
                    </div>
                  </a>
                ))
              ) : (
                <div className="col-span-full py-8 text-center text-slate-400 font-mono text-xs">
                  Access articles directly at{' '}
                  <a
                    href="https://medium.com/@kisalnelaka6"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-indigo underline"
                  >
                    medium.com/@kisalnelaka6
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ─── Luminous Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur-xl relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>
              Operational Availability: Open for Architecture Engagements
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight mb-4">
            Let's Engineer Superior Systems.
          </h2>

          <p className="text-slate-600 max-w-lg mx-auto text-sm md:text-base leading-relaxed mb-8">
            Available for principal systems design, high-concurrency cloud
            pipelines, and defensive security consulting.
          </p>

          {/* Quick Copy / Email CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a
              href="mailto:kisalnelaka6@gmail.com"
              className="btn-vibrant text-sm"
            >
              <Mail size={16} />
              <span>kisalnelaka6@gmail.com</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="btn-vibrant-outline text-sm"
              title="Copy Email to Clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check size={16} className="text-emerald-500" />
                  <span className="text-emerald-600 font-semibold">
                    Email Address Copied!
                  </span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Footer Bottom Links */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/kisalnelaka"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-indigo transition-colors"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href="https://linkedin.com/in/kisalnelaka"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-indigo transition-colors"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href="https://medium.com/@kisalnelaka6"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-indigo transition-colors"
              >
                Medium
              </a>
              <span>·</span>
              <a
                href="https://www.knockknockneo.cloud"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-indigo transition-colors"
              >
                Website
              </a>
            </div>

            <div>
              © {new Date().getFullYear()} Kisal Nelaka · Deterministic Systems
              & Cryptographic Rigor
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
