import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, Volume2, Sparkles, Radio } from 'lucide-react';

type BeatPreset = {
  name: string;
  diff: number;
  label: string;
  benefit: string;
  gradient: string;
};

const PRESETS: BeatPreset[] = [
  {
    name: '40Hz Gamma',
    diff: 40,
    label: 'Deep Focus & Executive Function',
    benefit: 'ADHD Scaffolding & Hyperfocus',
    gradient: 'from-amber-500 to-rose-500',
  },
  {
    name: '14Hz SMR',
    diff: 14,
    label: 'Sensori-Motor Rhythm',
    benefit: 'Sustained Calm Alertness',
    gradient: 'from-indigo-500 to-cyan-500',
  },
  {
    name: '8Hz Alpha',
    diff: 8,
    label: 'Flow State & Creative Flow',
    benefit: 'Anxiety Air-Gap & Reset',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export const BinauralDspDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePreset, setActivePreset] = useState<BeatPreset>(PRESETS[0]);
  const [volume, setVolume] = useState(0.15);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const leftOscRef = useRef<OscillatorNode | null>(null);
  const rightOscRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const startAudio = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.1);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Base Carrier Frequency = 220Hz (A3, warm, non-fatiguing)
      const carrier = 220;

      // Left Channel
      const merger = ctx.createChannelMerger(2);
      const oscL = ctx.createOscillator();
      oscL.type = 'sine';
      oscL.frequency.setValueAtTime(carrier, ctx.currentTime);
      oscL.connect(merger, 0, 0); // Connect to Left Ear
      leftOscRef.current = oscL;

      // Right Channel (Carrier + Beat Frequency)
      const oscR = ctx.createOscillator();
      oscR.type = 'sine';
      oscR.frequency.setValueAtTime(
        carrier + activePreset.diff,
        ctx.currentTime,
      );
      oscR.connect(merger, 0, 1); // Connect to Right Ear
      rightOscRef.current = oscR;

      merger.connect(masterGain);

      oscL.start();
      oscR.start();
      setIsPlaying(true);
    } catch (e) {
      console.error('AudioContext initialization failed', e);
    }
  };

  const stopAudio = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.linearRampToValueAtTime(
        0.001,
        ctx.currentTime + 0.1,
      );
      setTimeout(() => {
        try {
          leftOscRef.current?.stop();
          rightOscRef.current?.stop();
          leftOscRef.current?.disconnect();
          rightOscRef.current?.disconnect();
          ctx.close();
        } catch (e) {
          // Ignore close error
        }
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 120);
    } else {
      setIsPlaying(false);
    }
  };

  const switchPreset = (preset: BeatPreset) => {
    setActivePreset(preset);
    if (audioCtxRef.current && rightOscRef.current) {
      rightOscRef.current.frequency.setValueAtTime(
        220 + preset.diff,
        audioCtxRef.current.currentTime,
      );
    }
  };

  // Real-time Waveform Canvas Render
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let phase = 0;

    const renderWave = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Gradient wave stroke
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, '#f59e0b'); // Amber
      gradient.addColorStop(0.3, '#ec4899'); // Pink
      gradient.addColorStop(0.6, '#8b5cf6'); // Purple
      gradient.addColorStop(1, '#06b6d4'); // Cyan

      ctx.beginPath();
      ctx.lineWidth = isPlaying ? 3 : 2;
      ctx.strokeStyle = isPlaying ? gradient : '#cbd5e1';

      const amplitude = isPlaying ? height * 0.35 : height * 0.15;
      const carrierFreq = 0.04;
      const beatFreq = (activePreset.diff / 40) * 0.015;

      for (let x = 0; x < width; x++) {
        // Binaural superposition interference equation: cos(wc * t) * cos(wb * t)
        const envelope = Math.cos(x * beatFreq + phase * 0.3);
        const carrier = Math.sin(x * carrierFreq + phase);
        const y = height / 2 + carrier * envelope * amplitude;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      if (isPlaying) {
        phase += 0.12;
      } else {
        phase += 0.02;
      }

      animFrameRef.current = requestAnimationFrame(renderWave);
    };

    renderWave();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, activePreset]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-6 border border-amber-200/80 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white shadow-glow-amber">
            <Radio size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-heading font-bold text-slate-900 text-base">
                Live Binaural DSP Engine
              </h4>
              <span className="badge-colorful bg-amber-100 text-amber-800 text-[10px] font-mono">
                From a-Ha Launcher
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Native Web Audio dual-oscillator real-time carrier superposition
            </p>
          </div>
        </div>

        {/* Play / Stop Button */}
        <button
          onClick={isPlaying ? stopAudio : startAudio}
          className={`px-5 py-2.5 rounded-xl font-medium text-xs flex items-center gap-2 transition-all duration-200 shadow-sm ${
            isPlaying
              ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-glow-rose'
              : 'bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-glow-amber'
          }`}
        >
          {isPlaying ? (
            <>
              <Square size={14} className="fill-current" />
              <span>Halt DSP Synthesis</span>
            </>
          ) : (
            <>
              <Play size={14} className="fill-current" />
              <span>Synthesize Binaural Beat</span>
            </>
          )}
        </button>
      </div>

      {/* Preset Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
        {PRESETS.map((preset) => {
          const isSelected = activePreset.name === preset.name;
          return (
            <button
              key={preset.name}
              onClick={() => switchPreset(preset)}
              className={`p-3 rounded-xl text-left border transition-all duration-200 ${
                isSelected
                  ? 'bg-white border-amber-400 shadow-card ring-2 ring-amber-400/20'
                  : 'bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono font-bold text-xs text-slate-900">
                  {preset.name}
                </span>
                {isSelected && (
                  <Sparkles
                    size={13}
                    className="text-amber-500 animate-pulse"
                  />
                )}
              </div>
              <div className="text-[11px] font-medium text-slate-700">
                {preset.label}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {preset.benefit}
              </div>
            </button>
          );
        })}
      </div>

      {/* Live Oscilloscope Waveform */}
      <div className="bg-slate-900/95 rounded-xl p-3.5 relative overflow-hidden border border-slate-800">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
          <span className="flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'
              }`}
            />
            {isPlaying
              ? 'DSP ACTIVE: STEREO SUPERPOSITION'
              : 'OSCILLOSCOPE STANDBY'}
          </span>
          <span className="text-amber-400 font-semibold">
            Carrier: 220Hz ± {activePreset.diff}Hz
          </span>
        </div>

        <canvas
          ref={canvasRef}
          width={600}
          height={75}
          className="w-full h-16 rounded block"
        />

        <div className="text-[10px] font-mono text-slate-400 text-center mt-1">
          {isPlaying
            ? '🎧 Stereo headphones recommended for maximum acoustic entrainment effect'
            : 'Click Synthesize to listen to the exact DSP algorithm used in the a-Ha launcher'}
        </div>
      </div>

      {/* Volume slider */}
      {isPlaying && (
        <div className="flex items-center gap-3 mt-3 pt-2 px-1 border-t border-amber-100">
          <Volume2 size={15} className="text-slate-500" />
          <input
            type="range"
            min="0.01"
            max="0.4"
            step="0.01"
            value={volume}
            onChange={(e) => {
              const v = parseFloat(e.target.value);
              setVolume(v);
              if (gainNodeRef.current && audioCtxRef.current) {
                gainNodeRef.current.gain.setValueAtTime(
                  v,
                  audioCtxRef.current.currentTime,
                );
              }
            }}
            className="w-32 accent-amber-500 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
          />
          <span className="text-[11px] font-mono text-slate-500">
            Gain: {Math.round(volume * 250)}%
          </span>
        </div>
      )}
    </div>
  );
};
