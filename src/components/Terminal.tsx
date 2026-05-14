import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react'; // Keep TerminalIcon, X
import Peer, { DataConnection } from 'peerjs'; // Add Peer and DataConnection
import MatrixBackground from './MatrixBackground';
import { useAppConfig } from './AppConfigContext'; // Add useAppConfig

const Terminal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState<{ command: string; response: string | React.ReactNode }[]>([
        {
            command: 'sys.init()',
            response: 'Terminal initialized. Security clearance: GUEST. Type "help" for a list of commands.'
        }
    ]);
    const [input, setInput] = useState('');
    const [cwd, setCwd] = useState('~');
    const [showMatrix, setShowMatrix] = useState(false);
    const [ipData, setIpData] = useState<string | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const { p2pEnabled, soundEnabled } = useAppConfig();

    const [connectedPeer, setConnectedPeer] = useState<DataConnection | null>(null);
    const peerInstance = useRef<Peer | null>(null);

    // P2P Initialization and Connection Handling
    useEffect(() => {
        if (p2pEnabled && !peerInstance.current) {
            const peer = new Peer();
            peer.on('open', (id) => {
                setHistory(prev => [...prev, { command: '', response: `[SYS.P2P] Protocol initialized. Your Node ID: ${id}` }]);
            });
            peer.on('connection', (conn) => {
                setConnectedPeer(conn);
                setHistory(prev => [...prev, { command: '', response: `[SYS.P2P] Incoming connection established from node.` }]);
                conn.on('data', (data) => {
                    setHistory(prev => [...prev, { command: '', response: `[INCOMING] > ${data}` }]);
                });
                conn.on('close', () => {
                    setConnectedPeer(null);
                    setHistory(prev => [...prev, { command: '', response: `[SYS.P2P] Connection closed.` }]);
                });
                conn.on('error', (err) => {
                    setHistory(prev => [...prev, { command: '', response: `[SYS.P2P] Connection error: ${err.message}` }]);
                });
            });
            peer.on('error', (err) => {
                setHistory(prev => [...prev, { command: '', response: `[SYS.P2P] Peer error: ${err.message}` }]);
            });
            peerInstance.current = peer;
        } else if (!p2pEnabled && peerInstance.current) {
            peerInstance.current.destroy();
            peerInstance.current = null;
            setConnectedPeer(null);
            setHistory(prev => [...prev, { command: '', response: `[SYS.P2P] Protocol terminated.` }]);
        }
    }, [p2pEnabled]);

    useEffect(() => {
        fetch('https://get.geojs.io/v1/ip/geo.json')
            .then(res => res.json())
            .then(data => {
                if (!data.ip) throw new Error();
                setIpData(`${data.ip} (${data.city}, ${data.country})`);
            })
            .catch(() => setIpData('127.0.0.1 (LOCALHOST_OVERRIDE)'));
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen]);

    const playTypingSound = () => {
        if (!soundEnabled) return;
        try {
            if (!audioCtxRef.current) {
                const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
                audioCtxRef.current = new AudioContext();
            }
            const audioCtx = audioCtxRef.current;
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(100 + Math.random() * 50, audioCtx.currentTime);
            gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.05);
        } catch {
            // Ignore if audio context fails
        }
    };

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmdLine = input.trim();
        const args = cmdLine.split(' ').filter(Boolean);
        const cmd = args[0].toLowerCase();
        let res: string | React.ReactNode = '';

        switch (cmd) {
            case 'help':
                res = (
                    <>
                        Commands: whoami, clear, sudo, resume, contact, ls, cd, cat, ipconfig, matrix
                        <br />
                        P2P Commands: connect, msg
                    </>
                );
                break;
            case 'whoami':
                res = 'Kisal Nelaka. Full-Stack Architect & Security Engineer.';
                break;
            case 'ipconfig':
                res = `[ NETWORK INTERFACE ]\nIP Address: ${ipData || 'Fetching...'}\nSubnet Mask: 255.255.255.0\nGateway: 192.168.1.1`;
                break;
            case 'ls':
                if (cwd === '~') {
                    res = (
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-primary">
                            <span className="text-[#00F0FF]">drwxr-xr-x projects</span>
                            <span className="text-[#00F0FF]">drwxr-xr-x documents</span>
                            <span>-rw-r--r-- system.log</span>
                            <span>-rwxr-xr-x sys_boot.sh</span>
                        </div>
                    );
                } else if (cwd === '~/projects') {
                    res = (
                        <div className="flex flex-col gap-1 text-primary">
                            <span>-rw-r--r-- resu_me.md</span>
                            <span>-rw-r--r-- tenancy_os.md</span>
                            <span>-rw-r--r-- intraflow.md</span>
                            <span>-rw-r--r-- neo_protocol.md</span>
                        </div>
                    );
                } else {
                    res = '';
                }
                break;
            case 'cd':
                const target = args[1];
                if (!target || target === '~') {
                    setCwd('~');
                } else if (target === 'projects' && cwd === '~') {
                    setCwd('~/projects');
                } else if (target === 'documents' && cwd === '~') {
                    setCwd('~/documents');
                } else if (target === '..') {
                    setCwd('~');
                } else {
                    res = `cd: no such file or directory: ${target}`;
                }
                break;
            case 'cat':
                const file = args[1];
                if (!file) res = 'cat: missing filename';
                else if (file === 'tenancy_os.md' && cwd === '~/projects') {
                    res = 'TenancyOS: A deterministic enterprise MSP platform built to handle multitenancy at scale.';
                } else if (file === 'resu_me.md' && cwd === '~/projects') {
                    res = 'Resu_me: The Invisible Resume Editor. A minimalist, AI-powered tool for ATS-optimized resume generation.';
                } else if (file === 'system.log' && cwd === '~') {
                    res = '[WARN] Unauthorized access attempt detected from current IP.';
                } else {
                    res = `cat: ${file}: No such file or directory`;
                }
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            case 'sudo':
                res = <span className="text-[#FF3366] font-black animate-pulse">FATAL ERROR: ROOT PRIVILEGES DENIED. INCIDENT LOGGED.</span>;
                break;
            case 'matrix':
                setShowMatrix(true);
                res = 'Matrix protocol injected. OVERLAY ACTIVE. Press [Ctrl+C] to terminate.';
                break;
            case 'resume':
                res = (
                    <a href="https://knockknockneo.cloud/stuff/Kisal%20Nelaka%20-%20Resume.pdf" target="_blank" rel="noreferrer" className="text-[#00F0FF] hover:underline hover:text-white">
                        Downloading resume.pdf...
                    </a>
                );
                break;
            case 'contact':
                res = 'Email: kisalnelaka6@gmail.com | Phone: +974 7753 3967';
                break;
            case 'connect':
                if (!p2pEnabled) {
                    res = 'ERROR: P2P protocol offline. Enable WebRTC in SYS.CTRL_PANEL.';
                } else if (args.length < 2) {
                    res = 'Usage: connect <NODE_ID>';
                } else {
                    const targetNodeId = args[1];
                    if (peerInstance.current && targetNodeId) {
                        const conn = peerInstance.current.connect(targetNodeId);
                        if (conn) {
                            conn.on('open', () => {
                                setConnectedPeer(conn);
                                setHistory(prev => [...prev, { command: '', response: `[SYS.P2P] Secure channel established with node.` }]);
                            });
                            conn.on('data', (data) => {
                                setHistory(prev => [...prev, { command: '', response: `[INCOMING] > ${data}` }]);
                            });
                            conn.on('close', () => {
                                setConnectedPeer(null);
                                setHistory(prev => [...prev, { command: '', response: `[SYS.P2P] Connection closed.` }]);
                            });
                            conn.on('error', (err) => {
                                setHistory(prev => [...prev, { command: '', response: `[SYS.P2P] Connection failed or rejected: ${err.message}` }]);
                            });
                            res = `[SYS.P2P] Negotiating handshake with ${targetNodeId}...`;
                        } else {
                            res = `[SYS.P2P] Failed to initiate connection to ${targetNodeId}.`;
                        }
                    } else {
                        res = `[SYS.P2P] Peer instance not ready or invalid Node ID.`;
                    }
                }
                break;
            case 'msg':
                if (!connectedPeer) {
                    res = 'ERROR: No active connection. Use "connect <NODE_ID>".';
                } else {
                    const message = args.slice(1).join(' ');
                    if (message) {
                        connectedPeer.send(message);
                        res = `[OUTGOING] > ${message}`;
                    } else {
                        res = 'Usage: msg <message>';
                    }
                }
                break;
            default:
                res = `Command not found: ${cmd}`;
        }

        setHistory(prev => [...prev, { command: cmdLine, response: res }]);
        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        playTypingSound();
        if (e.key === 'c' && e.ctrlKey) {
            e.preventDefault();
            if (showMatrix) {
                setShowMatrix(false);
                setHistory(prev => [...prev, { command: '^C', response: 'Matrix overlay terminated.' }]);
            } else {
                setHistory(prev => [...prev, { command: '^C', response: '' }]);
            }
            setInput('');
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 bg-primary text-surface p-4 rounded-full shadow-minimal hover:-translate-y-0.5 hover:shadow-minimal-hover transition-all"
            >
                <TerminalIcon size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.15 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 min-h-[400px] max-h-[600px] bg-surface border border-borderLine rounded shadow-minimal-hover z-50 flex flex-col font-mono text-sm overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-background text-primary px-4 py-2 flex justify-between items-center border-b border-borderLine text-xs text-secondary tracking-wider">
                            <span>TERMINAL</span>
                            <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Output */}
                        <div className="flex-1 p-4 overflow-y-auto text-primary space-y-4">
                            {history.map((h, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-2">
                                        <span className="text-secondary">visitor@kisal:{cwd}$</span>
                                        <span className="text-primary">{h.command}</span>
                                    </div>
                                    <div className="text-secondary mt-1 whitespace-pre-wrap font-mono">{h.response}</div>
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleCommand} className="p-4 border-t border-borderLine flex items-center gap-2">
                            <span className="text-secondary">visitor@kisal:{cwd}$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onKeyDown={handleKeyDown}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent outline-none text-primary placeholder-secondary/50"
                                placeholder="..."
                                autoFocus
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Matrix Fullscreen Overlay Triggered by Terminal */}
            {showMatrix && (
                <div className="fixed inset-0 z-[99999] pointer-events-none crt-warp flex">
                    <MatrixBackground />
                    <div className="crt-overlay mix-blend-multiply"></div>
                </div>
            )}
        </>
    );
};

export default Terminal;
