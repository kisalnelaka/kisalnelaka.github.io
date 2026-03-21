import React, { createContext, useContext, useState } from 'react';

type AppConfig = {
    vanillaMode: boolean;
    setVanillaMode: (v: boolean) => void;
    audioReact: boolean;
    setAudioReact: (v: boolean) => void;
    p2pEnabled: boolean;
    setP2pEnabled: (v: boolean) => void;
    soundEnabled: boolean;
    setSoundEnabled: (v: boolean) => void;
};

export const AppConfigContext = createContext<AppConfig>({
    vanillaMode: false,
    setVanillaMode: () => {},
    audioReact: false,
    setAudioReact: () => {},
    p2pEnabled: false,
    setP2pEnabled: () => {},
    soundEnabled: true,
    setSoundEnabled: () => {},
});

export const AppConfigProvider = ({ children }: { children: React.ReactNode }) => {
    const [vanillaMode, setVanillaMode] = useState(false);
    const [audioReact, setAudioReact] = useState(false);
    const [p2pEnabled, setP2pEnabled] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);

    return (
        <AppConfigContext.Provider value={{ 
            vanillaMode, setVanillaMode, 
            audioReact, setAudioReact,
            p2pEnabled, setP2pEnabled,
            soundEnabled, setSoundEnabled
        }}>
            <div className={vanillaMode ? 'vanilla-mode' : ''}>
                {children}
            </div>
        </AppConfigContext.Provider>
    );
};

export const useAppConfig = () => useContext(AppConfigContext);
