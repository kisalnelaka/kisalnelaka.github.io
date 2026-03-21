import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi } from 'lucide-react';

const HtopMonitor: React.FC = () => {
    const [ipData, setIpData] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => setIpData(`${data.ip} (${data.country_code})`))
            .catch(() => setIpData('UNKNOWN_PROXY'));
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-32 left-6 z-40 bg-brutal-black border-4 border-[#00F0FF] p-4 text-[#00F0FF] font-mono text-xs w-64 shadow-[8px_8px_0px_#FF3366] hidden xl:block pointer-events-none"
        >
            <div className="flex items-center justify-between mb-2 border-b-2 border-[#00F0FF] pb-2 font-black">
                <div className="flex items-center gap-2">
                    <Wifi size={16} />
                    <span>SYS.NET_MONITOR</span>
                </div>
                <span className="animate-pulse flex items-center gap-2"><div className="w-2 h-2 bg-[#FF3366] rounded-full"></div> SECURE</span>
            </div>
            
            <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-white">
                    <span>STATUS:</span>
                    <span className="uppercase font-bold">ONLINE</span>
                </div>
                <div className="flex justify-between items-center text-white">
                    <span>ENCRYPTION:</span>
                    <span className="uppercase font-bold">AES-256</span>
                </div>
                {ipData && (
                    <div className="flex justify-between items-center pt-2 mt-2 font-bold tracking-wider border-t border-[#00F0FF]/30">
                        <span className="text-gray-400">EXT_IP:</span>
                        <span className="text-[#00F0FF]">{ipData}</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default HtopMonitor;
