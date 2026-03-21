import React, { useState, useEffect } from 'react';

const BootSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [lines, setLines] = useState<string[]>([]);
    
    const sequence = [
        "BIOS Date 04/12/94 14:02:11 Ver 08.00.15",
        "CPU: Intel(R) Core(TM) i9-13900K @ 3.00GHz",
        "Speed: 3.00 GHz",
        "Press DEL to enter SETUP",
        "Memory Test: 65536K OK",
        "",
        "Initializing USB Controllers.. Done.",
        "Mounting File Systems......... [OK]",
        "Loading Kernel Modules........ [OK]",
        "Starting Security Daemon...... [OK]",
        "",
        "> establishing connection to KISAL_NELAKA...",
        "> bypassing mainframe restrictions...",
        "> ACCESS GRANTED."
    ];

    useEffect(() => {
        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < sequence.length) {
                setLines(prev => [...prev, sequence[currentLine]]);
                currentLine++;
            } else {
                clearInterval(interval);
                setTimeout(onComplete, 800);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] bg-brutal-black text-secondary font-mono p-6 text-sm md:text-lg overflow-hidden flex flex-col items-start justify-start cursor-none pointer-events-auto">
            {lines.map((line, i) => (
                <div key={i} className="mb-1">{line}</div>
            ))}
            <div className="w-3 h-5 bg-secondary animate-pulse mt-1"></div>
        </div>
    );
};

export default BootSequence;
