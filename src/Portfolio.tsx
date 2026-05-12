import React, { useMemo } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code2, Server, Shield, Terminal as TerminalIcon, Database } from 'lucide-react';
import { useGitHubData } from './hooks/useGitHubData';
import Terminal from './components/Terminal';
import TraceRouteGlobe from './components/TraceRouteGlobe';
import { AnimatePresence, motion } from 'framer-motion';


const publications = [
    "Building InfraFlow: A Production-Grade Multi-Tenant MSP Platform with Laravel 11 and Filament v3",
    "Bunny: Revolutionizing Web Development with Laravel",
    "Bunny: The Laravel Scaffolding Package That Makes Web Development a Hop",
    "JavaScript for Clueless Newbies: Part 1 — Variables, Data Types, & Operators",
    "Part 3: Lure Creation — The Art of Deception in Phishing Attacks",
    "Part 2: The Reconnaissance Phase — Uncovering the Secrets of Phishing Preparation",
    "The Lifecycle of a Phishing Attack: How Cybercriminals Bait, Hook, and Exploit",
    "PhishCatcher: Real-Time Phishing Detection with Chrome Extensions and Machine Learning",
    "Building a Blockchain-Powered, Encrypted Chat Application with Python",
    "Demystifying Shellcode Generation: A Guide for Beginners"
];

const Portfolio: React.FC = () => {
    const { user, repos, loading } = useGitHubData('kisalnelaka');
    const [showGlobe, setShowGlobe] = React.useState(false);
    const [titleIndex, setTitleIndex] = React.useState(0);
    const titles = ["Architecting resilient systems.", "Full-Stack Software Engineer.", "Systems Architect & Developer.", "Cybersecurity & Engineering."];

    React.useEffect(() => {
        const timer = setInterval(() => setTitleIndex(prev => (prev + 1) % titles.length), 3000);
        return () => clearInterval(timer);
    }, []);

    const recentRepos = repos
        .filter(repo => !['kisalnelaka', 'kisalnelaka.github.io'].includes(repo.name))
        .slice(0, 6); // Get top 6 repos

    const skillMatrix = useMemo(() => {
        if (!repos.length) return [];
        const langCounts: Record<string, number> = {};
        repos.forEach(repo => {
            if (repo.language) langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
        });
        return Object.entries(langCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8)
            .map(([name, count]) => ({
                name,
                level: Math.min(60 + (count * 10), 98) + '%'
            }));
    }, [repos]);

    const dynamicCapabilities = useMemo(() => {
        if (!repos.length) return [];
        const langCounts: Record<string, number> = {};
        const topicCounts: Record<string, number> = {};

        repos.forEach(repo => {
            if (repo.language) {
                langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
            }
            repo.topics?.forEach(topic => {
                topicCounts[topic] = (topicCounts[topic] || 0) + 1;
            });
        });

        const topLangs = Object.entries(langCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(e => e[0]);

        const topTopics = Object.entries(topicCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8)
            .map(e => e[0]);

        return [
            {
                title: 'Primary Languages',
                description: topLangs.join(', ') || 'TypeScript, Python, Go...',
                icon: <Code2 className="text-accent mb-4" size={32} />
            },
            {
                title: 'Core Technologies',
                description: topTopics.join(', ') || 'React, Node.js, Docker...',
                icon: <Server className="text-accent mb-4" size={32} />
            },
            {
                title: 'GitHub Stats',
                description: `Contributed to ${repos.length}+ repositories, specializing in high-performance architectures.`,
                icon: <Database className="text-accent mb-4" size={32} />
            },
            {
                title: 'Security & DevOps',
                description: 'Leveraging secure architecture principles and automated workflows across all deployments.',
                icon: <Shield className="text-accent mb-4" size={32} />
            }
        ];
    }, [repos]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center text-accent font-mono">
                <div className="flex flex-col items-center gap-4">
                    <TerminalIcon size={48} className="animate-pulse" />
                    <span className="animate-pulse">INITIALIZING SECURE CONNECTION...</span>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-background text-primary selection:bg-black selection:text-white font-sans leading-relaxed relative overflow-hidden">
            
            {/* Header */}
            <header className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10 animate-fade-in">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold tracking-tight text-primary">Kisal Nelaka</span>
                    <span className="text-sm text-secondary mt-1 font-medium tracking-wide">Full-Stack Software Engineer & Systems Architect</span>
                </div>
                <nav className="flex items-center gap-6 text-sm text-secondary font-medium">
                    <a href="https://github.com/kisalnelaka" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        <Github size={20} />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/kisalnelaka" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                        <Linkedin size={20} />
                        <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a href="mailto:kisalnelaka6@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                        <Mail size={20} />
                        <span className="hidden sm:inline">Contact</span>
                    </a>
                    <button 
                        onClick={() => setShowGlobe(true)}
                        className="text-xs border border-borderLine px-3 py-1.5 rounded hover:bg-primary hover:text-surface transition-all font-mono"
                    >
                        TRACE_CONN
                    </button>
                </nav>
            </header>

            <main className="container mx-auto px-6 relative z-10">
                
                {/* Hero Section */}
                <section className="pt-0 pb-24 md:pt-0 md:pb-48 max-w-5xl animate-slide-up">
                    <div className="mb-12 flex items-center gap-3">
                        <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-mono tracking-widest text-secondary uppercase">Node: Active / Security: Verified</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold text-primary mb-8 leading-[1.1] tracking-tighter">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={titleIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                {titles[titleIndex].split('.').map((part, i) => (
                                    <span key={i} className={i === 1 ? "text-secondary opacity-60" : ""}>
                                        {part}{i === 0 && titles[titleIndex].includes('.') ? '.' : ''}
                                        {i === 0 && <br />}
                                    </span>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </h1>
                    <div className="text-lg md:text-xl text-secondary space-y-6 max-w-3xl leading-relaxed">
                        <p className="text-primary font-medium">
                            {user?.bio || "I specialize in turning complex business challenges into precise, optimized, and scalable technical solutions."}
                        </p>
                        <p>
                            With over eight years of experience spanning enterprise infrastructure, machine learning integrations, and decentralized networks, I bring a rigorous, security-first mindset to software engineering. My background in Cybersecurity allows me to anticipate system bottlenecks and build robust, secure architectures from the ground up.
                        </p>
                        <div className="flex gap-4 mt-4 font-mono text-sm">
                            <span className="bg-surfaceHover px-3 py-1.5 rounded border border-borderLine">Public Repos: {user?.public_repos || 0}</span>
                            <span className="bg-surfaceHover px-3 py-1.5 rounded border border-borderLine">Followers: {user?.followers || 0}</span>
                        </div>
                        <p className="pt-6">
                            <a href="mailto:kisalnelaka6@gmail.com" className="btn-primary">
                                I am currently open to new engineering opportunities.
                            </a>
                        </p>
                    </div>
                </section>

                {/* Technical Capabilities */}
                <section className="py-32 max-w-6xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-2xl font-bold text-primary mb-12 flex items-center gap-4">
                        Technical Capabilities & Stack
                        <div className="h-px bg-borderLine flex-grow ml-4"></div>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {dynamicCapabilities.map((cap, idx) => (
                            <div key={idx} className="border border-borderLine p-8 hover:border-primary/30 transition-all duration-300">
                                <div className="mb-4">
                                    {cap.icon}
                                </div>
                                <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">{cap.title}</h3>
                                <p className="text-xs text-secondary leading-relaxed font-medium">
                                    {cap.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Capability Matrix (Skill Bars) */}
                <section className="py-20 max-w-4xl animate-slide-up" style={{ animationDelay: '0.25s' }}>
                    <h2 className="text-xs font-mono tracking-widest text-secondary uppercase mb-12 flex items-center gap-4">
                        Capability Matrix
                        <div className="h-px bg-borderLine flex-grow"></div>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                        {skillMatrix.map((skill, idx) => (
                            <div key={idx} className="group">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold uppercase tracking-wider">{skill.name}</span>
                                    <span className="text-[10px] font-mono text-secondary">{skill.level}</span>
                                </div>
                                <div className="h-1 w-full bg-borderLine overflow-hidden rounded-full">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: "circOut", delay: idx * 0.1 }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Engineering Showcase */}
                <section className="py-32 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <h2 className="text-2xl font-bold text-primary mb-12 flex items-center gap-4">
                        Engineering Showcase
                        <div className="h-px bg-borderLine flex-grow ml-4"></div>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {recentRepos.map((repo) => (
                            <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id} className="border border-borderLine p-8 flex flex-col h-full hover:border-primary transition-all duration-300 group">
                                <div className="mb-6 flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-bold text-primary group-hover:underline decoration-1 underline-offset-4">{repo.name}</h3>
                                        {repo.language && (
                                            <p className="text-[10px] font-mono text-secondary uppercase tracking-widest mt-1">{repo.language}</p>
                                        )}
                                    </div>
                                    <ExternalLink className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                                </div>
                                
                                <p className="text-xs text-secondary leading-relaxed mb-6 flex-grow">
                                    {repo.description || "Experimental technical project."}
                                </p>
                                
                                {repo.topics && repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {repo.topics.slice(0, 3).map(topic => (
                                            <span key={topic} className="text-[9px] font-mono text-secondary/60">#{topic}</span>
                                        ))}
                                    </div>
                                )}
                                
                                <div className="mt-8 pt-4 border-t border-borderLine/50 flex justify-between items-center text-secondary text-[10px] font-mono">
                                    <div className="flex gap-4">
                                        <span className="flex items-center gap-1">STAR_{repo.stargazers_count}</span>
                                        <span className="flex items-center gap-1">FORK_{repo.forks_count}</span>
                                    </div>
                                    <span>UPDATED_{new Date(repo.updated_at).toLocaleDateString().split('/').join('.')}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Technical Writing & Publications */}
                <section className="py-32 max-w-5xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <h2 className="text-2xl font-bold text-primary mb-12 flex items-center gap-4">
                        Technical Writing & Publications
                        <div className="h-px bg-borderLine flex-grow ml-4"></div>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-px bg-borderLine border border-borderLine">
                        {publications.map((pub, idx) => (
                            <a href="#" key={idx} className="bg-background p-6 flex items-start gap-4 hover:bg-surface transition-colors group">
                                <span className="text-[10px] font-mono text-secondary mt-1">0{idx + 1}</span>
                                <span className="text-secondary text-xs leading-relaxed group-hover:text-primary transition-colors flex-grow">
                                    {pub}
                                </span>
                                <ExternalLink className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                            </a>
                        ))}
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-borderLine mt-10 py-16 bg-surface">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <p className="text-xl font-bold text-primary mb-8">
                        I am always open to discussing complex technical challenges or new engineering roles. Let's connect.
                    </p>
                    <a href="mailto:kisalnelaka6@gmail.com" className="btn-primary text-lg px-8 py-4">
                        Initiate Contact
                    </a>
                    <div className="mt-16 flex items-center justify-center gap-8 text-sm text-secondary font-medium">
                        <a href="https://linkedin.com/in/kisalnelaka" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">LinkedIn</a>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                        <a href="https://github.com/kisalnelaka" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">GitHub</a>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                        <a href="https://medium.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">Medium</a>
                    </div>
                    <div className="mt-8 text-xs text-secondary/50">
                        &copy; {new Date().getFullYear()} {user?.name || 'Kisal Nelaka'}
                    </div>
                </div>
            </footer>

            <Terminal />

            <AnimatePresence>
                {showGlobe && <TraceRouteGlobe onClose={() => setShowGlobe(false)} />}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;
