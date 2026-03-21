import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
    const [ipData, setIpData] = useState('FETCHING_IP...');

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                setIpData(`[${data.ip || 'UNKNOWN'} | ${data.city || 'LOCAL'}, ${data.country_code || 'HOST'}]`);
            })
            .catch(() => setIpData('[SECURE_PROXY_DETECTED]'));
    }, []);

    const content = `// SYSTEM_STATUS: SECURE // UPTIME: 99.999% // KISAL_NELAKA // FULL-STACK_ARCHITECT // INCOMING_CONNECTION: ${ipData} // ENCRYPTION: ACTIVE // `;
    const repeatCount = 5;

    return (
        <div className="bg-primary text-black font-black font-mono overflow-hidden whitespace-nowrap py-2 border-b-4 border-brutal-black relative z-[100]">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30
                }}
            >
                {Array(repeatCount).fill(content).map((item, index) => (
                    <span key={index} className="px-4">{item}</span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
