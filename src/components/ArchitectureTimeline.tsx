import React from 'react';
import { Briefcase, CheckCircle2, TrendingUp, Zap } from 'lucide-react';

interface CareerRole {
  company: string;
  role: string;
  period: string;
  badge: string;
  badgeColor: string;
  kpi: string;
  impact: string;
  highlights: string[];
}

const ROLES: CareerRole[] = [
  {
    company: 'ASMORPHIC',
    role: 'Senior Full-Stack Developer & Systems Architect',
    period: '2025 – PRESENT',
    badge: 'Telecom & Distributed Infrastructure',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    kpi: 'High-Availability DID Routing',
    impact:
      'Architected resilient Direct Inward Dialing (DID) management systems and high-throughput data processing pipelines for enterprise telecom infrastructure using Python, Laravel, and distributed message broker topologies.',
    highlights: [
      'Sub-50ms DID lookup & translation under peak load',
      'Event-driven message routing via Redis / DBus integration',
      'Defensive multi-tenant data isolation and failover redundancy',
    ],
  },
  {
    company: 'AMPLIFYD',
    role: 'Lead Full-Stack Developer',
    period: '2024 – 2025',
    badge: 'Security Auditing & Scalability',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    kpi: '99.99% Uptime Verified',
    impact:
      'Led adversarial security auditing and database query optimization on high-traffic production platforms — maintained 99.99% operational uptime under extreme distributed load spikes.',
    highlights: [
      'Load spike endurance testing up to 45,000 requests/sec',
      'Penetration testing & OWASP Top 10 mitigation verification',
      'PostgreSQL query execution plan tuning & connection pooling',
    ],
  },
  {
    company: 'CORE IT SOLUTIONS',
    role: 'Full-Stack Software Engineer',
    period: '2023 – 2024',
    badge: 'Real-Time Telemetry & CI/CD',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    kpi: 'Continuous Automation',
    impact:
      'Engineered resilient RESTful architectures, continuous deployment pipelines, and multi-tenant telemetry dashboards with real-time WebSocket analytics and granular access control.',
    highlights: [
      'Full CI/CD automated pipeline with test coverage gates',
      'Real-time WebSocket streaming telemetry dashboards',
      'Strict tenant isolation with row-level security policies',
    ],
  },
  {
    company: 'MEDFUTURE GLOBAL',
    role: 'Manager Website Development & Maintenance',
    period: '2022',
    badge: 'Monolith Modernization',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    kpi: '-42% Latency Drop',
    impact:
      'Migrated legacy monolithic systems to modern modular architectures, accelerating response latencies by 42% and establishing strict zero-trust operational protocols across medical recruitment portals.',
    highlights: [
      '42% reduction in server response latency (TTFB)',
      'Zero-trust authentication and role-based access control',
      'Automated disaster recovery backups and snapshot routines',
    ],
  },
];

export const ArchitectureTimeline: React.FC = () => {
  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-8 rounded-lg bg-brand-rose/10 text-brand-rose flex items-center justify-center">
              <Briefcase size={18} />
            </span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-rose">
              Track Record & Leadership
            </span>
          </div>
          <h3 className="font-heading text-2xl font-bold text-slate-900">
            Systems Engineering Roles
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Key architectural deliveries, operational KPIs, and high-concurrency
            systems scaling
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-mono text-slate-700">
          <Zap size={14} className="text-amber-500 fill-amber-500" />
          <span>6+ Years Production Systems Experience</span>
        </div>
      </div>

      <div className="space-y-6">
        {ROLES.map((role) => (
          <div
            key={role.company}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card hover:border-brand-indigo/40 transition-all duration-200"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="font-heading font-black text-xl text-slate-900">
                    {role.company}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${role.badgeColor}`}
                  >
                    {role.badge}
                  </span>
                </div>
                <div className="text-sm font-semibold text-brand-indigo">
                  {role.role}
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2 flex-shrink-0">
                <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
                  {role.period}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  <TrendingUp size={12} />
                  {role.kpi}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {role.impact}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-100">
              {role.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs text-slate-700"
                >
                  <CheckCircle2
                    size={14}
                    className="text-emerald-500 flex-shrink-0 mt-0.5"
                  />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
