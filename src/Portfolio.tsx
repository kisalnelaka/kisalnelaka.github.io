import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';
import Terminal from './components/Terminal';
import BootSequence from './components/BootSequence';
import HtopMonitor from './components/HtopMonitor';
import DecryptText from './components/DecryptText';
import RadarCursor from './components/RadarCursor';
import GodModeConsole from './components/GodModeConsole';
import { useAppConfig } from './components/AppConfigContext';
import { GraduationCap, Mail, Phone, MapPin, Code2 } from 'lucide-react';


const Footer: React.FC<{ onPurge?: () => void }> = ({ onPurge }) => (
    <footer className="py-20 border-t-8 border-brutal-black bg-brutal-black text-white relative z-10">
        <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 lg:col-span-2">
                    <h2 className="text-4xl font-black mb-6 uppercase">KISAL <span className="bg-primary text-white px-2">NELAKA</span></h2>
                    <p className="font-mono text-sm max-w-sm leading-relaxed text-justify border-l-4 border-primary pl-4">
                        I design and deploy systems that stay online when everything else fails. My work is defined by deterministic logic and a refusal to accept "good enough" infrastructure: specializing in mission-critical architecture and security.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-black mb-6 text-xl uppercase bg-accent text-brutal-black inline-block px-2 border-2 border-brutal-black">Digital Presence</h4>
                    <div className="space-y-4 font-bold text-sm uppercase">
                        <a href="https://github.com/kisalnelaka" className="block hover:text-primary transition-colors">&gt; GitHub</a>
                        <a href="https://linkedin.com/in/kisalnelaka" className="block hover:text-primary transition-colors">&gt; LinkedIn</a>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-black mb-6 text-xl uppercase bg-primary inline-block px-2 border-2 border-white">Direct Contact</h4>
                    <div className="space-y-4 font-mono text-sm">
                        <a href="mailto:kisalnelaka6@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail size={16} /> kisalnelaka6@gmail.com
                        </a>
                        <div className="flex items-center gap-2">
                            <Phone size={16} /> +974 7753 3967
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t-4 border-white font-black text-sm uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} KISAL NELAKA • ALL RIGHTS RESERVED</p>
                <p className="bg-white text-brutal-black px-2 py-1">ENGINEERED FOR SCALE</p>
            </div>
            
            <div className="mt-20 border-t-8 border-red-600 pt-8 text-center bg-black p-8 flex justify-center">
                <button onClick={onPurge} className="text-red-600 text-3xl md:text-5xl font-black animate-pulse hover:text-white transition-colors uppercase tracking-widest border-4 border-red-600 hover:bg-red-600 p-4">
                    [ INITIATE SECURE PURGE ]
                </button>
            </div>
        </div>
    </footer>
);

const Education: React.FC = () => (
    <section className="section-padding container border-b-8 border-brutal-black bg-white">
        <h2 className="text-5xl font-black mb-16 text-center uppercase text-brutal-black">ACADEMIC <span className="bg-accent px-2 border-4 border-brutal-black text-black">BACKGROUND</span></h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
                {
                    school: 'Kingston University',
                    degree: 'BS in Cybersecurity and Digital Forensics',
                    location: 'London, UK',
                },
                {
                    school: 'SLIIT',
                    degree: 'HND in Information Technology',
                    location: 'Colombo, LK',
                }
            ].map((edu, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col p-10 brutal-card-light bg-white border-4 border-brutal-black hover:-translate-y-2 hover:-translate-x-2 transition-transform shadow-[8px_8px_0px_#FF3366]"
                >
                    <div className="w-16 h-16 bg-brutal-black border-4 border-primary flex items-center justify-center mb-8 shadow-[4px_4px_0px_#000]">
                        <GraduationCap className="text-white" size={32} />
                    </div>
                    <h3 className="text-3xl font-black mb-4 uppercase text-brutal-black leading-tight border-b-4 border-brutal-black pb-4"><DecryptText text={edu.school} /></h3>
                    <p className="text-brutal-black font-bold font-mono text-sm mb-4 bg-accent p-2 inline-block border-2 border-brutal-black"><DecryptText text={edu.degree} delay={300} /></p>
                    <p className="text-brutal-black font-bold text-xs mt-auto flex items-center gap-2 uppercase tracking-widest pt-4">
                        <MapPin size={16} /> {edu.location}
                    </p>
                </motion.div>
            ))}
        </div>
    </section>
);

const Portfolio: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const { vanillaMode, setVanillaMode } = useAppConfig();
    const [isRawMode, setIsRawMode] = useState(false);
    const [showBoot, setShowBoot] = useState(true);
    const [godMode, setGodMode] = useState(false);
    
    const [purging, setPurging] = useState(false);
    const [countdown, setCountdown] = useState<number | null>(null);

    const initiatePurge = () => {
        if (purging) return;
        setPurging(true);
        let left = 10;
        setCountdown(left);

        try {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            const audioCtx = new AudioContext();
            const osc = audioCtx.createOscillator();
            osc.type = 'sawtooth';
            osc.frequency.setValueCurveAtTime([400, 800, 400, 800, 400, 800, 400, 800, 400, 800, 400], audioCtx.currentTime, 10);
            osc.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 10);
        } catch (err) {}

        const interval = setInterval(() => {
            left--;
            setCountdown(left);
            if (left <= 0) {
                clearInterval(interval);
                setCountdown(0);
            }
        }, 1000);
    };

    useEffect(() => {
        const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let kIndex = 0;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === konami[kIndex]) {
                kIndex++;
                if (kIndex === konami.length) {
                    setGodMode(true);
                    kIndex = 0;
                    try {
                        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
                        const audioCtx = new AudioContext();
                        const osc = audioCtx.createOscillator();
                        osc.type = 'sawtooth';
                        osc.frequency.setValueAtTime(200, audioCtx.currentTime);
                        osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.5);
                        osc.connect(audioCtx.destination);
                        osc.start();
                        osc.stop(audioCtx.currentTime + 0.5);
                    } catch (err) {}
                }
            } else {
                kIndex = 0;
            }
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    if (countdown === 0) {
        return (
            <div className="fixed inset-0 bg-black text-red-600 flex items-center justify-center font-mono font-black z-[999999]">
                <p className="animate-pulse text-xl md:text-3xl">&gt; CONNECTION TERMINATED. DATA PURGED.</p>
            </div>
        );
    }

    if (godMode && !vanillaMode) {
        return <GodModeConsole onExit={() => setGodMode(false)} />;
    }

    if (showBoot && !vanillaMode) {
        return <BootSequence onComplete={() => setShowBoot(false)} />;
    }

    if (isRawMode) {
        return (
            <motion.div 
                initial={{ opacity: 0, scaleY: 0.01 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="min-h-screen bg-brutal-black text-green-500 font-mono p-8 text-sm"
            >
                <button 
                    onClick={() => setIsRawMode(false)}
                    className="mb-8 border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors"
                >
                    [ DEFUSE RAW MODE ]
                </button>
                <h1 className="text-2xl font-bold mb-4">/* RAW_DATA_DUMP.JSON */</h1>
                <pre className="whitespace-pre-wrap opacity-80 text-xs md:text-sm leading-relaxed overflow-x-auto">
                    {JSON.stringify({
                        "_metadata": {
                            "system_status": "SECURE",
                            "kernel_panic": false,
                            "uptime": "99.999%",
                            "encryption": "AES-256-GCM"
                        },
                        "identity": {
                            "name": "Kisal Nelaka",
                            "title": "Full-Stack Architect & Security Engineer",
                            "location": "Doha, Qatar"
                        },
                        "contact": {
                            "email": "kisalnelaka6@gmail.com",
                            "phone": "+974 7753 3967",
                            "github": "https://github.com/kisalnelaka",
                            "linkedin": "https://linkedin.com/in/kisalnelaka"
                        },
                        "metrics": {
                            "years_experience": 8,
                            "total_deployments": 35,
                            "architecture_patterns": "Deterministic"
                        },
                        "core_skills": {
                            "languages": ["TypeScript", "PHP", "JavaScript", "SQL", "Bash"],
                            "frameworks": ["React", "Next.js", "Node.js", "Laravel", "TailwindCSS"],
                            "infrastructure": ["Linux", "AWS", "Docker", "Nginx", "Security Auditing"]
                        },
                        "experience": [
                            {
                                "role": "Senior Cloud Security Consultant",
                                "company": "Cyberdyne Systems",
                                "period": "2023 - Present"
                            },
                            {
                                "role": "Full-Stack Developer",
                                "company": "KnockKnock Cloud",
                                "period": "2021 - 2023"
                            }
                        ],
                        "deployments": [
                            {
                                "name": "TenancyOS",
                                "type": "Enterprise SaaS",
                                "url": "https://tenancyos.com"
                            },
                            {
                                "name": "IntraFlow",
                                "type": "Telecom MSP Integration",
                                "url": "https://github.com/kisalnelaka/intraflow"
                            }
                        ],
                        "education": [
                            {
                                "degree": "BS in Cybersecurity and Digital Forensics",
                                "institution": "Kingston University, London"
                            },
                            {
                                "degree": "HND in Information Technology",
                                "institution": "SLIIT, Colombo"
                            }
                        ]
                    }, null, 2)}
                </pre>
            </motion.div>
        );
    }

    return (
        <div className={`min-h-screen text-text-main selection:bg-accent selection:text-black relative ${godMode ? 'bg-[#FF0000]' : 'bg-bg-dark'} ${purging ? 'animate-pulse invert grayscale contrast-200' : ''}`}>
            
            {/* Safe Mode Toggle */}
            <button
                onClick={() => setVanillaMode(!vanillaMode)}
                className="fixed top-6 right-6 lg:right-40 z-[9999] bg-white text-black font-black uppercase tracking-widest px-4 py-2 border-4 border-brutal-black hover:bg-brutal-black hover:text-white transition-colors"
            >
                {vanillaMode ? '[ ENGAGE EFFECTS ]' : '[ SAFE MODE ]'}
            </button>

            {countdown !== null && countdown > 0 && (
                <div className="fixed inset-0 z-[999998] pointer-events-none flex items-center justify-center mix-blend-difference">
                    <h1 className="text-[20rem] font-black text-white opacity-50">{countdown}</h1>
                </div>
            )}

            {!vanillaMode && <CustomCursor />}
            {!vanillaMode && <RadarCursor />}
            {!vanillaMode && <HtopMonitor />}
            <Marquee />
            {!vanillaMode && <Terminal />}
            
            {/* Raw Mode Toggle */}
            <button
                onClick={() => setIsRawMode(true)}
                className="fixed top-20 right-6 z-50 bg-brutal-black text-white p-2 border-2 border-white hover:bg-white hover:text-black transition-colors tooltip tooltip-left font-mono text-xs uppercase"
                data-tip="Toggle Raw Mode"
            >
                <Code2 size={20} />
            </button>

            <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-primary z-[100] origin-left"
                style={{ scaleX }}
            />
            <main className="relative z-10 w-full overflow-hidden border-8 border-brutal-black mx-auto max-w-[1920px] bg-white text-black shadow-2xl">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Education />
                <Footer onPurge={initiatePurge} />
            </main>
        </div>
    );
};

export default Portfolio;
