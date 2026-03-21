import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, HardDrive, Wifi } from 'lucide-react';

const HtopMonitor: React.FC = () => {
    const [stats, setStats] = useState({
        cores: navigator.hardwareConcurrency || 4,
        memory: (navigator as any).deviceMemory || 8,
        connection: (navigator as any).connection?.effectiveType || '4g',
        ping: Math.floor(Math.random() * 20) + 10,
        cpuUsage: [] as number[],
        memUsage: 0
    });
    const [ipData, setIpData] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => setIpData(`${data.ip} (${data.country_code})`))
            .catch(() => setIpData('UNKNOWN_PROXY'));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => {
                const newCpu = Array(prev.cores).fill(0).map(() => Math.floor(Math.random() * 100));
                return {
                    ...prev,
                    ping: Math.floor(Math.random() * 20) + 10,
                    cpuUsage: newCpu,
                    // Oscillate memory usage slightly
                    memUsage: Math.min(100, Math.max(0, prev.memUsage + (Math.random() * 10 - 5)))
                };
            });
        }, 1000);

        // Init mem
        setStats(p => ({ ...p, memUsage: 45 + Math.random() * 20 }));

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div 
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="fixed bottom-32 left-6 z-40 bg-brutal-black border-4 border-[#00F0FF] p-4 text-[#00F0FF] font-mono text-xs w-72 shadow-[8px_8px_0px_#FF3366] cursor-move hidden xl:block"
        >
            <div className="flex items-center justify-between mb-4 border-b-2 border-[#00F0FF] pb-2 font-black">
                <div className="flex items-center gap-2">
                    <Activity size={16} />
                    <span>SYS.HTOP</span>
                </div>
                <span className="animate-pulse flex items-center gap-2"><div className="w-2 h-2 bg-[#FF3366] rounded-full"></div> LIVE</span>
            </div>
            
            <div className="space-y-3">
                {/* CPU CORES */}
                <div>
                    <div className="flex items-center gap-2 mb-1 text-white">
                        <Cpu size={14} /> <span>CPU [{stats.cores} Cores]</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {stats.cpuUsage.map((usage, i) => (
                            <div key={i} className="flex items-center gap-1">
                                <span className="w-4">{i}</span>
                                <div className="flex-1 h-2 bg-gray-800">
                                    <div 
                                        className="h-full bg-[#00F0FF] transition-all duration-300"
                                        style={{ width: `${usage}%`, backgroundColor: usage > 80 ? '#FF3366' : '#00F0FF' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MEMORY */}
                <div>
                    <div className="flex items-center gap-2 mb-1 text-white">
                        <HardDrive size={14} /> <span>MEM [{stats.memory}GB]</span>
                    </div>
                    <div className="w-full h-3 bg-gray-800 flex border border-gray-600">
                        <div className="h-full bg-[#FF3366] transition-all duration-500" style={{ width: `${stats.memUsage}%` }}></div>
                        <div className="h-full bg-yellow-500 transition-all duration-500" style={{ width: `${stats.memUsage * 0.2}%` }}></div>
                    </div>
                    <div className="flex justify-between mt-1 opacity-70">
                        <span>{Math.round((stats.memory * stats.memUsage) / 100)}GB</span>
                        <span>{stats.memory}GB</span>
                    </div>
                </div>

                {/* NETWORK */}
                <div className="pt-2 border-t border-[#00F0FF]/30">
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <Wifi size={14} className="text-white" />
                            <span className="uppercase">{stats.connection}</span>
                        </div>
                        <span>{stats.ping}ms</span>
                    </div>
                    {ipData && (
                        <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-bold tracking-wider">
                            <span>EXT. IP:</span>
                            <span className="text-[#00F0FF]">{ipData}</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default HtopMonitor;
