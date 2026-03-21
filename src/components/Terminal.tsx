import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';

const Terminal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState<{ command: string; response: string | React.ReactNode }[]>([
        {
            command: 'sys.init()',
            response: 'Terminal initialized. Security clearance: GUEST. Type "help" for a list of commands.'
        }
    ]);
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

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
        try {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            const audioCtx = new AudioContext();
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
        } catch (e) {
            // Ignore if audio context fails
        }
    };

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.trim().toLowerCase();
        let res: string | React.ReactNode = '';

        switch (cmd) {
            case 'help':
                res = 'Available commands: whoami, clear, sudo rm -rf /, resume, contact, ls, matrix';
                break;
            case 'whoami':
                res = 'Kisal Nelaka. Full-Stack Architect & Security Engineer.';
                break;
            case 'ls':
                res = (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-primary">
                        <span>drwxr-xr-x</span> <span>tenancy_os</span>
                        <span>drwxr-xr-x</span> <span>intraflow</span>
                        <span>drwxr-xr-x</span> <span>neo_protocol</span>
                        <span>-rw-r--r--</span> <span>readme.md</span>
                        <span>-rwxr-xr-x</span> <span>sys_boot.sh</span>
                    </div>
                );
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            case 'sudo rm -rf /':
                res = <span className="text-[#FF3366] font-black animate-pulse">FATAL ERROR: ROOT PRIVILEGES DENIED. INCIDENT LOGGED.</span>;
                break;
            case 'matrix':
                res = 'Matrix protocol exists globally. Use the hardware toggle [Terminal Icon] in the top right UI.';
                break;
            case 'resume':
                res = (
                    <a href="https://knockknockneo.cloud/stuff/Kisal%20Nelaka%20-%20Resume.pdf" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        Downloading resume.pdf...
                    </a>
                );
                break;
            case 'contact':
                res = 'Email: kisalnelaka6@gmail.com | Phone: +974 7753 3967';
                break;
            default:
                res = `Command not found: ${cmd}`;
        }

        setHistory([...history, { command: input, response: res }]);
        setInput('');
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 bg-brutal-black text-primary p-4 border-4 border-primary rounded-none shadow-[4px_4px_0px_#FF3366] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_#FF3366] transition-all"
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
                        className="fixed bottom-24 right-6 w-80 md:w-96 min-h-[400px] max-h-[600px] bg-brutal-black border-4 border-primary shadow-[8px_8px_0px_#FF3366] z-50 flex flex-col font-mono text-sm overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-primary text-black px-4 py-2 flex justify-between items-center border-b-4 border-black font-black uppercase">
                            <span>System Terminal</span>
                            <button onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Output */}
                        <div className="flex-1 p-4 overflow-y-auto text-primary space-y-4">
                            {history.map((h, i) => (
                                <div key={i}>
                                    <div className="flex items-center gap-2">
                                        <span className="text-secondary">guest@kisal:~$</span>
                                        <span>{h.command}</span>
                                    </div>
                                    <div className="text-gray-300 mt-1">{h.response}</div>
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleCommand} className="p-4 border-t-2 border-primary/30 flex items-center gap-2">
                            <span className="text-secondary">guest@kisal:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onKeyDown={playTypingSound}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 bg-transparent outline-none text-primary placeholder-primary/30"
                                placeholder="..."
                                autoFocus
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
