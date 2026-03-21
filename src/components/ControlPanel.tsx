import React, { useState } from 'react';
import { Settings2, X, Power, Mic, Globe2, Network, Bomb, Volume2, VolumeX } from 'lucide-react';
import { useAppConfig } from './AppConfigContext';

interface ControlPanelProps {
    onTriggerExploit: () => void;
    onTriggerMeltdown: () => void;
    onTriggerGlobe: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onTriggerExploit, onTriggerMeltdown, onTriggerGlobe }) => {
    const { vanillaMode, setVanillaMode, audioReact, setAudioReact, p2pEnabled, setP2pEnabled, soundEnabled, setSoundEnabled } = useAppConfig();
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <button 
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 z-[9999] bg-brutal-black text-white p-4 border-4 border-primary hover:bg-primary hover:text-black transition-colors shadow-[8px_8px_0px_#FF3366] flex items-center gap-2 font-bold uppercase"
            >
                <Settings2 size={24} />
                <span className="hidden md:inline font-mono">SYS.CTRL</span>
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 left-6 z-[9999] w-80 bg-brutal-black border-4 border-primary shadow-[12px_12px_0px_#FF3366] text-white p-6 font-mono text-sm max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6 pb-2 border-b-2 border-primary">
                <h3 className="font-black text-lg flex items-center gap-2 uppercase">
                    <Settings2 size={20} className="text-primary"/> SYS.CTRL_PANEL
                </h3>
                <button onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                    <X size={24} />
                </button>
            </div>

            <div className="space-y-4">
                {/* Toggles */}
                <div className="space-y-2 border-b border-gray-800 pb-4">
                    <h4 className="text-gray-400 font-bold mb-2 uppercase text-xs tracking-widest">Environment States</h4>
                    
                    <div className="grid grid-cols-2 gap-2">
                        <button 
                            onClick={() => setVanillaMode(!vanillaMode)}
                            className={`w-full flex flex-col items-center justify-center p-2 border-2 transition-colors font-bold uppercase gap-1 ${vanillaMode ? 'border-red-500 bg-red-950/30 text-red-400' : 'border-gray-700 hover:border-gray-500'}`}
                        >
                            <Power size={18}/>
                            <span className="text-[10px]">Safe Mode</span>
                            <span className="text-[10px]">{vanillaMode ? 'ON' : 'OFF'}</span>
                        </button>

                        <button 
                            onClick={() => setSoundEnabled(!soundEnabled)}
                            className={`w-full flex flex-col items-center justify-center p-2 border-2 transition-colors font-bold uppercase gap-1 ${soundEnabled ? 'border-[#00F0FF] bg-[#00F0FF]/10 text-[#00F0FF]' : 'border-gray-700 hover:border-gray-500 text-gray-400'}`}
                        >
                            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                            <span className="text-[10px]">Audio FX</span>
                            <span className="text-[10px]">{soundEnabled ? 'ON' : 'MUTED'}</span>
                        </button>
                    </div>

                    <button 
                        onClick={() => setAudioReact(!audioReact)}
                        className={`w-full flex items-center justify-between p-2 mt-2 border-2 transition-colors font-bold uppercase ${audioReact ? 'border-[#00F0FF] bg-[#00F0FF]/10 text-[#00F0FF]' : 'border-gray-700 hover:border-gray-500'}`}
                        disabled={vanillaMode}
                    >
                        <span className="flex items-center gap-2"><Mic size={16}/> Audio-Reactive CSS</span>
                        <span className="text-xs">{audioReact ? 'ON' : 'OFF'}</span>
                    </button>

                    <button 
                        onClick={() => setP2pEnabled(!p2pEnabled)}
                        className={`w-full flex items-center justify-between p-2 border-2 transition-colors font-bold uppercase ${p2pEnabled ? 'border-primary bg-primary/10 text-primary' : 'border-gray-700 hover:border-gray-500'}`}
                        disabled={vanillaMode}
                    >
                        <span className="flex items-center gap-2"><Network size={16}/> WebRTC P2P Nodes</span>
                        <span className="text-xs">{p2pEnabled ? 'ON' : 'OFF'}</span>
                    </button>
                </div>

                {/* Triggers */}
                <div className="space-y-2 pt-2">
                    <h4 className="text-gray-400 font-bold mb-2 uppercase text-xs tracking-widest">Catastrophic Triggers</h4>
                    
                    <button onClick={onTriggerGlobe} disabled={vanillaMode} className="w-full flex items-center gap-2 p-2 border-2 border-gray-700 hover:border-white hover:bg-white hover:text-black transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed uppercase">
                        <Globe2 size={16}/> TraceRoute Node
                    </button>

                    <button onClick={onTriggerExploit} disabled={vanillaMode} className="w-full flex items-center gap-2 p-2 border-2 border-gray-700 hover:border-red-500 hover:bg-red-500 hover:text-black transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed uppercase">
                        <Bomb size={16}/> Window Exploit
                    </button>

                    <button onClick={onTriggerMeltdown} disabled={vanillaMode} className="w-full flex items-center gap-2 p-2 border-2 border-gray-700 hover:border-[#FF3366] hover:bg-[#FF3366] hover:text-black transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed uppercase">
                        <Bomb size={16}/> Physics Meltdown
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;
