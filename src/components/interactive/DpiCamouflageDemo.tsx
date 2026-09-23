import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  Cpu,
  Activity,
  RefreshCw,
} from 'lucide-react';

interface SimulatedPacket {
  id: number;
  size: number;
  entropy: number;
  protocol: string;
  verdict: 'PASSED' | 'FLAGGED';
  timestamp: string;
}

export const DpiCamouflageDemo: React.FC = () => {
  const [camouflageEnabled, setCamouflageEnabled] = useState(true);
  const [packets, setPackets] = useState<SimulatedPacket[]>([]);
  const [stats, setStats] = useState({
    sent: 0,
    passed: 0,
    blocked: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr =
        now.toTimeString().split(' ')[0] +
        '.' +
        String(now.getMilliseconds()).padStart(3, '0').slice(0, 2);

      let size: number;
      let entropy: number;
      let protocol: string;
      let verdict: 'PASSED' | 'FLAGGED';

      if (camouflageEnabled) {
        // Obfuscated Packet: Variable length, high entropy, masquerades as HTTPS TLS 1.3
        size = Math.floor(1200 + Math.random() * 320);
        entropy = parseFloat((7.85 + Math.random() * 0.14).toFixed(2)); // High Shannon Entropy
        protocol = 'TLS 1.3 / Application Data';
        verdict = 'PASSED';
      } else {
        // Standard WebRTC SRTP Packet: Predictable header signatures, medium entropy, recognizable RTP packet sizes
        size = Math.floor(960 + Math.random() * 80);
        entropy = parseFloat((6.15 + Math.random() * 0.3).toFixed(2));
        protocol = 'DTLS-SRTP (WebRTC)';
        verdict = Math.random() > 0.35 ? 'FLAGGED' : 'PASSED'; // DPI firewall drops/flags unmasked WebRTC
      }

      const newPacket: SimulatedPacket = {
        id: Date.now() + Math.random(),
        size,
        entropy,
        protocol,
        verdict,
        timestamp: timeStr,
      };

      setPackets((prev) => [newPacket, ...prev.slice(0, 5)]);
      setStats((prev) => ({
        sent: prev.sent + 1,
        passed: prev.passed + (verdict === 'PASSED' ? 1 : 0),
        blocked: prev.blocked + (verdict === 'FLAGGED' ? 1 : 0),
      }));
    }, 1100);

    return () => clearInterval(interval);
  }, [camouflageEnabled]);

  const resetStats = () => {
    setStats({ sent: 0, passed: 0, blocked: 0 });
    setPackets([]);
  };

  return (
    <div className="bg-gradient-to-br from-white to-cyan-50/50 rounded-2xl p-6 border border-cyan-200/80 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-glow-cyan">
            <Cpu size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-heading font-bold text-slate-900 text-base">
                DPI Camouflage & Firewall Bypass
              </h4>
              <span className="badge-colorful bg-cyan-100 text-cyan-800 text-[10px] font-mono">
                From circles Engine
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Real-time deep packet inspection emulation & Shannon entropy
              padding
            </p>
          </div>
        </div>

        {/* Camouflage Toggle Switch */}
        <div className="flex items-center gap-2 bg-white/90 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setCamouflageEnabled(true)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              camouflageEnabled
                ? 'bg-emerald-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck size={14} />
            Camouflage ON
          </button>
          <button
            onClick={() => setCamouflageEnabled(false)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              !camouflageEnabled
                ? 'bg-rose-500 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldAlert size={14} />
            Raw WebRTC
          </button>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white/80 p-3 rounded-xl border border-slate-200/80">
          <span className="text-[10px] font-mono uppercase text-slate-400 block">
            Packets Dispatched
          </span>
          <span className="text-xl font-bold font-mono text-slate-900">
            {stats.sent}
          </span>
        </div>
        <div className="bg-white/80 p-3 rounded-xl border border-slate-200/80">
          <span className="text-[10px] font-mono uppercase text-emerald-600 block">
            Firewall Passed
          </span>
          <span className="text-xl font-bold font-mono text-emerald-600">
            {stats.passed}
          </span>
        </div>
        <div className="bg-white/80 p-3 rounded-xl border border-slate-200/80">
          <span className="text-[10px] font-mono uppercase text-rose-500 block">
            DPI Intercepted
          </span>
          <span className="text-xl font-bold font-mono text-rose-600">
            {stats.blocked}
          </span>
        </div>
      </div>

      {/* Real-time Packet Stream Table */}
      <div className="bg-slate-900 rounded-xl p-3 text-white overflow-hidden border border-slate-800">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2 pb-1 border-b border-slate-800">
          <span className="flex items-center gap-1.5">
            <Activity size={12} className="text-cyan-400" />
            LIVE DPI INSPECTOR TELEMETRY
          </span>
          <button
            onClick={resetStats}
            title="Reset Counter"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <RefreshCw size={11} />
          </button>
        </div>

        <div className="space-y-1.5 font-mono text-[11px]">
          {packets.map((pkt) => (
            <div
              key={pkt.id}
              className="flex items-center justify-between p-1.5 rounded bg-slate-800/60 border border-slate-700/50"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 text-[10px]">
                  {pkt.timestamp}
                </span>
                <span className="text-slate-200">{pkt.protocol}</span>
                <span className="text-slate-400 text-[10px] hidden sm:inline">
                  [{pkt.size} B]
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-400">
                  Entropy:{' '}
                  <span className="text-cyan-300 font-semibold">
                    {pkt.entropy}/8.0
                  </span>
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    pkt.verdict === 'PASSED'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse'
                  }`}
                >
                  {pkt.verdict}
                </span>
              </div>
            </div>
          ))}
          {packets.length === 0 && (
            <div className="py-4 text-center text-slate-500 text-xs">
              Initializing simulated stateful firewall stream...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
