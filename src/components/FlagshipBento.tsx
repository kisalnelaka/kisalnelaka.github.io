import React from 'react';
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  Compass,
  Shield,
  Smartphone,
} from 'lucide-react';
import { BinauralDspDemo } from './interactive/BinauralDspDemo';
import { DpiCamouflageDemo } from './interactive/DpiCamouflageDemo';

export const FlagshipBento: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* ─── Bento Grid Row 1: The Two Flagship Live Simulators ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project 1: a-Ha Launcher (Sunset Amber / Coral) */}
        <div className="glass-card p-6 md:p-8 flex flex-col justify-between border-amber-200/80 bg-gradient-to-br from-white via-white to-amber-50/30">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white shadow-glow-amber">
                  <Smartphone size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
                      Mobile & Acoustic DSP
                    </span>
                    <span className="badge-colorful bg-amber-100 text-amber-800 text-[10px] font-mono">
                      GPL-3.0
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mt-0.5">
                    a-Ha Launcher
                  </h3>
                </div>
              </div>

              <a
                href="https://github.com/kisalnelaka/a-Ha"
                target="_blank"
                rel="noreferrer"
                title="View Source on GitHub"
                className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-amber-400 hover:text-amber-600 shadow-sm transition-all"
              >
                <Github size={18} />
              </a>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Dopamine-neutral Android launcher for AuDHD minds. Eliminates
              algorithm-driven distraction loops with a text-only interface,
              executive function scaffolding, notification air-gapping, and
              real-time acoustic brainwave entrainment.
            </p>

            {/* Embedded Live Web Audio DSP Simulator */}
            <div className="mb-6">
              <BinauralDspDemo />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {['Kotlin', 'Android Jetpack', 'Binaural DSP', 'SQLite'].map(
                (t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/60 font-medium text-[11px]"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
            <a
              href="https://github.com/kisalnelaka/a-Ha"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 group font-mono"
            >
              <span>Inspect Repository</span>
              <ArrowUpRight
                size={13}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Project 2: circles (Sky Cyan / Electric Indigo) */}
        <div className="glass-card p-6 md:p-8 flex flex-col justify-between border-cyan-200/80 bg-gradient-to-br from-white via-white to-cyan-50/30">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-glow-cyan">
                  <Shield size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600">
                      Adversarial Security & WebRTC
                    </span>
                    <span className="badge-colorful bg-cyan-100 text-cyan-800 text-[10px] font-mono">
                      High Anonymity
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mt-0.5">
                    circles
                  </h3>
                </div>
              </div>

              <a
                href="https://github.com/kisalnelaka/circles"
                target="_blank"
                rel="noreferrer"
                title="View Source on GitHub"
                className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-cyan-400 hover:text-cyan-600 shadow-sm transition-all"
              >
                <Github size={18} />
              </a>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Private, DPI-camouflaged group video and encrypted messaging
              platform. Obfuscates RTP packet sizes, mimics TLS 1.3 handshakes,
              and survives state-level firewalls and extreme packet loss
              conditions.
            </p>

            {/* Embedded Live DPI Simulator */}
            <div className="mb-6">
              <DpiCamouflageDemo />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {[
                'Flutter',
                'Dart',
                'WebRTC',
                'Supabase',
                'Python DPI Proxy',
              ].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-cyan-50 text-cyan-800 border border-cyan-200/60 font-medium text-[11px]"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/kisalnelaka/circles"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 group font-mono"
            >
              <span>Inspect Architecture</span>
              <ArrowUpRight
                size={13}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* ─── Bento Grid Row 2: Cosmic Compass & LibreSwift ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 3: Cosmic Compass (Purple & Pink) */}
        <div className="glass-card p-6 md:p-8 flex flex-col justify-between border-purple-200/80 bg-gradient-to-br from-white to-purple-50/20">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md">
                  <Compass size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600">
                    C++ Algorithms & Flutter
                  </span>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mt-0.5">
                    cosmic-compass
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://kisalnelaka.github.io/cosmic-compass/"
                  target="_blank"
                  rel="noreferrer"
                  title="Live Demo"
                  className="p-2 rounded-xl border border-purple-200 bg-white text-purple-600 hover:bg-purple-50 transition-all text-xs font-semibold flex items-center gap-1"
                >
                  <span>Live App</span>
                  <ExternalLink size={13} />
                </a>
                <a
                  href="https://github.com/kisalnelaka/cosmic-compass"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="p-2 rounded-xl border border-slate-200 bg-white hover:text-purple-600 shadow-sm transition-all"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Multi-cultural astrological field guide and Japanese Oha Asa daily
              horoscope companion. Built with Flutter leveraging native C++
              astronomical ephemeris algorithms compiled via CMake for
              microsecond orbital computations.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 font-mono text-xs">
            {['Flutter', 'Dart', 'Native C++', 'CMake', 'Astronomy Engine'].map(
              (t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-800 border border-purple-200/60 text-[11px]"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Project 4: LibreSwift / High-Throughput (Emerald & Teal) */}
        <div className="glass-card p-6 md:p-8 flex flex-col justify-between border-emerald-200/80 bg-gradient-to-br from-white to-emerald-50/20">
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                <Sparkles size={22} />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">
                  Cross-Platform Swift & Native Audio
                </span>
                <h3 className="font-heading text-xl font-bold text-slate-900 mt-0.5">
                  LibreSwift
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Modular open-source Swift toolkit for low-latency audio
              processing, high-concurrency event loops, and native
              cross-platform services with deterministic memory management and
              zero ARC leaks.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 font-mono text-xs">
            {[
              'Swift 6.0',
              'AudioEngine',
              'Cross-Platform Linux',
              'Zero-Copy DSP',
            ].map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[11px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
