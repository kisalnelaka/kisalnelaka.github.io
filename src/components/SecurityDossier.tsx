import React from 'react';
import {
  Shield,
  GraduationCap,
  Award,
  Lock,
  Binary,
  Key,
  Eye,
} from 'lucide-react';

const DISCIPLINES = [
  {
    title: 'Cryptographic Protocol Analysis',
    desc: 'Auditing key exchange, ChaCha20/Poly1305, TLS 1.3 handshakes, and preventing side-channel leakage.',
    icon: Key,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
  {
    title: 'Memory Corruption Defenses',
    desc: 'Mitigating buffer overflows, ROP gadget chains, use-after-free, and enforcing strict stack canary defenses.',
    icon: Binary,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
  },
  {
    title: 'Adversarial Threat Modeling',
    desc: 'STRIDE modeling, attack tree synthesis, DDoS stress testing, and zero-trust boundary validation.',
    icon: Shield,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Digital Forensics & Reverse Engineering',
    desc: 'Static/dynamic binary analysis, network artifact extraction, packet dissection, and telemetry preservation.',
    icon: Eye,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
];

export const SecurityDossier: React.FC = () => {
  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-8 rounded-lg bg-brand-emerald/10 text-brand-emerald flex items-center justify-center">
              <Shield size={18} />
            </span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-emerald">
              Academic & Security Credentials
            </span>
          </div>
          <h3 className="font-heading text-2xl font-bold text-slate-900">
            Forensics & Defense Dossier
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Formal degrees, cryptographic rigor, and adversarial threat
            mitigation capabilities
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200 text-xs font-mono text-emerald-700">
          <Lock size={13} />
          <span>Security Clearance Verified</span>
        </div>
      </div>

      {/* Degrees Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-indigo-50/30 border border-indigo-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <GraduationCap size={20} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase text-indigo-600">
                2023 – 2024 · London, UK
              </span>
              <h4 className="font-heading font-bold text-slate-900 text-lg">
                BSc in Cybersecurity & Digital Forensics
              </h4>
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-700 mb-2">
            Kingston University London (United Kingdom)
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Specialized curriculum in network penetration testing, digital
            evidence recovery, incident response forensics, cryptographic
            protocols, and secure system design.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-purple-50/30 border border-purple-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md">
              <Award size={20} />
            </div>
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase text-purple-600">
                2016 – 2020 · Sri Lanka
              </span>
              <h4 className="font-heading font-bold text-slate-900 text-lg">
                Higher National Diploma in Information Technology
              </h4>
            </div>
          </div>
          <p className="text-xs font-semibold text-slate-700 mb-2">
            SLIIT (Sri Lanka Institute of Information Technology)
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Deep foundational grounding in data structures, computer
            architecture, network administration, operating systems, and
            distributed database engineering.
          </p>
        </div>
      </div>

      {/* Security Disciplines Grid */}
      <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-4">
        Specialized Security Vectors
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DISCIPLINES.map((d) => {
          const Icon = d.icon;
          return (
            <div
              key={d.title}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 border ${d.color}`}
                >
                  <Icon size={18} />
                </div>
                <h5 className="font-heading font-bold text-slate-900 text-sm mb-1.5">
                  {d.title}
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
