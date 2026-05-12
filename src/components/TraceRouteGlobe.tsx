import React, { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';

const TraceRouteGlobe: React.FC<{onClose: () => void}> = ({ onClose }) => {
    const globeRef = useRef<any>(null);
    const [arcsData, setArcsData] = useState<any[]>([]);
    const [userLoc, setUserLoc] = useState({ lat: 0, lng: 0, city: 'ROUTING...' });
    const targetLoc = { lat: 25.2854, lng: 51.5310, city: 'DOHA_QATAR' };

    useEffect(() => {
        fetch('https://get.geojs.io/v1/ip/geo.json')
            .then(res => res.json())
            .then(data => {
                if (data.error || !data.latitude || !data.longitude) throw new Error();
                setUserLoc({ lat: data.latitude, lng: data.longitude, city: data.city?.toUpperCase() || 'UNKNOWN_NODE' });
                setArcsData([{
                    startLat: data.latitude,
                    startLng: data.longitude,
                    endLat: targetLoc.lat,
                    endLng: targetLoc.lng,
                    color: ['#FF3366', '#00F0FF']
                }]);
            })
            .catch(() => {
                setUserLoc({ lat: 51.5074, lng: -0.1278, city: 'LONDON_UK (PROXY)' });
                setArcsData([{
                    startLat: 51.5074,
                    startLng: -0.1278,
                    endLat: targetLoc.lat,
                    endLng: targetLoc.lng,
                    color: ['#FF3366', '#00F0FF']
                }]);
            });
    }, []);

    useEffect(() => {
        if (globeRef.current) {
            (globeRef.current as any).controls().autoRotate = true;
            (globeRef.current as any).controls().autoRotateSpeed = 2;
        }
    }, [globeRef.current]);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-background flex flex-col items-center justify-center font-mono text-xs"
        >
            <button 
                onClick={onClose} 
                className="absolute top-6 right-6 text-primary border border-borderLine px-4 py-2 hover:bg-primary hover:text-surface transition-all font-bold z-10"
            >
                [ TERMINATE_TRACE ]
            </button>
            <div className="absolute top-10 left-10 text-primary z-10 space-y-2 pointer-events-none border-l-2 border-primary pl-4">
                <h2 className="text-xl font-bold mb-4 uppercase">Global Node Mapping</h2>
                <p className="animate-pulse text-secondary">&gt; Establishing secure channel...</p>
                <div className="flex gap-8 opacity-80 mt-6 bg-surface p-4 border border-borderLine shadow-minimal">
                    <div>
                        <p className="text-secondary mb-1 text-[10px]">ORIGIN:</p>
                        <p className="font-bold uppercase">{userLoc.city}</p>
                    </div>
                    <div>
                        <p className="text-secondary mb-1 text-[10px]">TARGET:</p>
                        <p className="font-bold uppercase">{targetLoc.city}</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full cursor-move opacity-40 grayscale">
                <Globe
                    ref={globeRef}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    atmosphereColor="#000000"
                    atmosphereAltitude={0.1}
                    arcsData={arcsData}
                    arcColor={() => '#18181B'}
                    arcDashLength={0.4}
                    arcDashGap={0.2}
                    arcDashAnimateTime={2500}
                    arcsTransitionDuration={1000}
                    arcStroke={1}
                    backgroundColor="rgba(0,0,0,0)"
                />
            </div>
        </motion.div>
    );
};

export default TraceRouteGlobe;
