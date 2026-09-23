import React, { useState, useMemo } from 'react';
import {
  Search,
  ExternalLink,
  ArrowUpRight,
  Star,
  GitFork,
  RefreshCw,
  Filter,
} from 'lucide-react';
import { MergedProject } from '../hooks/useGitHubData';

interface RepositoryCatalogProps {
  projects: MergedProject[];
  loading: boolean;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Kotlin: '#A97BFF',
  TypeScript: '#3178C6',
  Dart: '#00B4AB',
  Python: '#3572A5',
  PHP: '#4F5D95',
  'C++': '#F34B7D',
  Swift: '#F05138',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  CSS: '#563D7C',
  Vue: '#41B883',
  Shell: '#89E051',
};

export const RepositoryCatalog: React.FC<RepositoryCatalogProps> = ({
  projects,
  loading,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['ALL', ...Array.from(set)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    let list = projects;
    if (selectedCategory !== 'ALL') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.stack.some((s) => s.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [projects, selectedCategory, search]);

  return (
    <div className="glass-card p-6 md:p-8">
      {/* Header & Live Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600">
              Live GitHub Telemetry ({projects.length} Repositories)
            </span>
          </div>
          <h3 className="font-heading text-2xl font-bold text-slate-900">
            Complete Engineering Directory
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Instant search across full-stack applications, security utilities,
            and algorithmic experiments
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          {loading && (
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-200">
              <RefreshCw size={13} className="animate-spin" />
              <span>Syncing with GitHub API...</span>
            </div>
          )}
        </div>
      </div>

      {/* Search Input & Category Pills */}
      <div className="space-y-4 mb-6">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by keyword, technology, or domain (e.g. Flutter, Laravel, C++, DSP, WebRTC)..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-indigo/30 focus:border-brand-indigo transition-all shadow-sm"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mr-1">
            <Filter size={12} />
            <span>Category:</span>
          </div>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-brand-indigo text-white shadow-sm shadow-indigo-300'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat === 'ALL' ? 'All Disciplines' : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((repo) => {
          const mainLang = repo.stack[0] || '';
          const langColor = LANGUAGE_COLORS[mainLang] || '#64748B';

          return (
            <div
              key={repo.name}
              className="bg-white/90 p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-card hover:border-brand-indigo/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: langColor }}
                    />
                    <h4 className="font-heading font-bold text-slate-900 text-base truncate">
                      {repo.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {repo.demo && (
                      <a
                        href={repo.demo}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Demo"
                        className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-brand-indigo hover:border-brand-indigo transition-all"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub Repository"
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-brand-indigo hover:border-brand-indigo transition-all"
                    >
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {repo.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {repo.stack.slice(0, 3).map((st) => (
                    <span
                      key={st}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono"
                    >
                      {st}
                    </span>
                  ))}
                  {repo.stack.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-mono">
                      +{repo.stack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star
                        size={11}
                        className="text-amber-500 fill-amber-500"
                      />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={11} />
                      {repo.forks}
                    </span>
                  </div>
                  <span>
                    {new Date(repo.updated).toLocaleDateString('en-GB', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-12 text-center text-slate-400 font-mono text-xs">
          No repositories found matching &ldquo;{search}&rdquo; in{' '}
          {selectedCategory}.
        </div>
      )}
    </div>
  );
};
