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
            className="fixed inset-0 z-[999999] bg-[#0A0000] flex flex-col items-center justify-center font-mono text-xs"
        >
            <button 
                onClick={onClose} 
                className="absolute top-6 right-6 text-white border-2 border-[#FF3366] px-4 py-2 hover:bg-[#FF3366] hover:text-black transition-colors font-bold z-10 shadow-[4px_4px_0px_#FF3366] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
                [ ABORT TRACEROUTE ]
            </button>
            <div className="absolute top-10 left-10 text-[#00F0FF] z-10 space-y-2 pointer-events-none border-l-4 border-[#FF3366] pl-4">
                <h2 className="text-2xl font-black mb-4 uppercase text-white">Global Node Mapping</h2>
                <p className="animate-pulse">&gt; Establishing secure channel...</p>
                <div className="flex gap-8 opacity-80 mt-6 bg-black/50 p-4 border border-[#00F0FF]/30">
                    <div>
                        <p className="text-[#FF3366] mb-1 font-bold">ORIGIN:</p>
                        <p className="font-bold text-white uppercase">{userLoc.city}</p>
                    </div>
                    <div>
                        <p className="text-[#00F0FF] mb-1 font-bold">TARGET:</p>
                        <p className="font-bold text-white uppercase">{targetLoc.city}</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full cursor-move opacity-90">
                <Globe
                    ref={globeRef}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    atmosphereColor="#00F0FF"
                    atmosphereAltitude={0.2}
                    arcsData={arcsData}
                    arcColor="color"
                    arcDashLength={0.4}
                    arcDashGap={0.2}
                    arcDashAnimateTime={2500}
                    arcsTransitionDuration={1000}
                    arcStroke={1.5}
                    backgroundColor="rgba(0,0,0,0)"
                />
            </div>
        </motion.div>
    );
};

export default TraceRouteGlobe;
