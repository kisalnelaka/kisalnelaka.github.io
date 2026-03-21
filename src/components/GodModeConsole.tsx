import React from 'react';
import { motion } from 'framer-motion';

const GodModeConsole: React.FC<{ onExit: () => void }> = ({ onExit }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-[#0A0000] text-[#FF3366] font-mono p-8 md:p-16 overflow-y-auto"
        >
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center border-b-4 border-[#FF3366] pb-4 mb-8">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter animate-pulse">
                        SYS.ROOT // LEVEL 5
                    </h1>
                    <button 
                        onClick={onExit}
                        className="border-2 border-[#FF3366] px-4 py-2 hover:bg-[#FF3366] hover:text-black transition-colors font-bold uppercase"
                    >
                        Terminate Shell
                    </button>
                </div>

                <div className="space-y-8">
                    <div className="bg-[#1A0000] p-6 border-l-4 border-[#FF3366]">
                        <h2 className="text-2xl font-bold mb-2">ACCESS GRANTED: WELCOME KISAL_NELAKA.</h2>
                        <p className="opacity-80">
                            Warning: Direct manipulation of deterministic nodes detected. 
                            Unauthorized access protocols have been bypassed. You are viewing 
                            the architectural sub-layer of the portfolio matrix.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 border-b border-[#FF3366]/30 pb-2">Classified Objectives</h3>
                            <ul className="space-y-2 opacity-80 list-disc list-inside">
                                <li>Neo_Protocol: Zero-knowledge proofs for multitenant DBs</li>
                                <li>IntraFlow: Telecom node load-balancing optimization</li>
                                <li>Defiant_Systems: Rust-based kernel packet packet sniffer</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 border-b border-[#FF3366]/30 pb-2">Terminal Logs</h3>
                            <div className="font-mono text-xs opacity-60 space-y-1">
                                <p>&gt; Connection established from external IP.</p>
                                <p>&gt; Payload execution successful.</p>
                                <p>&gt; Security clearance overridden.</p>
                                <p>&gt; Bypassing mainframe logic gates...</p>
                                <p className="text-white">&gt; WAITING FOR COMMAND INPUT_</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="fixed inset-0 pointer-events-none border-8 border-[#FF3366] opacity-30 animate-pulse mix-blend-overlay"></div>
        </motion.div>
    );
};

export default GodModeConsole;
