import React, { createContext, useContext, useState } from 'react';

type AppConfig = {
    vanillaMode: boolean;
    setVanillaMode: (v: boolean) => void;
};

export const AppConfigContext = createContext<AppConfig>({
    vanillaMode: false,
    setVanillaMode: () => {}
});

export const AppConfigProvider = ({ children }: { children: React.ReactNode }) => {
    const [vanillaMode, setVanillaMode] = useState(false);
    return (
        <AppConfigContext.Provider value={{ vanillaMode, setVanillaMode }}>
            <div className={vanillaMode ? 'vanilla-mode' : ''}>
                {children}
            </div>
        </AppConfigContext.Provider>
    );
};

export const useAppConfig = () => useContext(AppConfigContext);
