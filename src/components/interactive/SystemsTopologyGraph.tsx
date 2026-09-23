import React, { useEffect, useRef, useState } from 'react';
import { Network, Server } from 'lucide-react';

interface TopologyNode {
  id: string;
  label: string;
  role: string;
  color: string;
  x: number;
  y: number;
  radius: number;
  protocol: string;
  latency: string;
  throughput: string;
}

interface TopologyEdge {
  from: string;
  to: string;
}

const NODES: TopologyNode[] = [
  {
    id: 'telecom',
    label: 'Telecom DID Cluster',
    role: 'Asmorphic High-Availability DID Router',
    color: '#8B5CF6', // Purple
    x: 0.2,
    y: 0.35,
    radius: 22,
    protocol: 'SIP / RTP / DBus',
    latency: '12ms',
    throughput: '34.2k req/s',
  },
  {
    id: 'gateway',
    label: 'API & Telemetry Mesh',
    role: 'Python FastAPI & Laravel Distributed Core',
    color: '#6366F1', // Indigo
    x: 0.5,
    y: 0.25,
    radius: 26,
    protocol: 'gRPC / HTTP/3 / WS',
    latency: '8ms',
    throughput: '48.5k req/s',
  },
  {
    id: 'dpi',
    label: 'DPI Camouflage Proxy',
    role: 'circles WebRTC Obfuscation Node',
    color: '#06B6D4', // Cyan
    x: 0.8,
    y: 0.35,
    radius: 22,
    protocol: 'ChaCha20 / TLS 1.3',
    latency: '16ms',
    throughput: '12.4k pkt/s',
  },
  {
    id: 'db',
    label: 'PostgreSQL Distributed',
    role: 'Strict Foreign-Key Tenant-Scoped Cluster',
    color: '#10B981', // Emerald
    x: 0.32,
    y: 0.72,
    radius: 24,
    protocol: 'PL/pgSQL / pgBouncer',
    latency: '3ms',
    throughput: '18.9k qps',
  },
  {
    id: 'cache',
    label: 'Redis Cache & Queue',
    role: 'In-Memory Pub/Sub & Session State',
    color: '#F43F5E', // Rose
    x: 0.68,
    y: 0.72,
    radius: 22,
    protocol: 'RESP / Memory Heap',
    latency: '0.8ms',
    throughput: '92.1k ops/s',
  },
];

const EDGES: TopologyEdge[] = [
  { from: 'telecom', to: 'gateway' },
  { from: 'gateway', to: 'dpi' },
  { from: 'gateway', to: 'db' },
  { from: 'gateway', to: 'cache' },
  { from: 'telecom', to: 'db' },
  { from: 'dpi', to: 'cache' },
];

export const SystemsTopologyGraph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<TopologyNode | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Edges with animated pulses
      EDGES.forEach((edge) => {
        const source = NODES.find((n) => n.id === edge.from);
        const target = NODES.find((n) => n.id === edge.to);
        if (!source || !target) return;

        const x1 = source.x * width;
        const y1 = source.y * height;
        const x2 = target.x * width;
        const y2 = target.y * height;

        // Base line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Traveling pulse packet
        const progress = (t * 0.008 + (source.radius % 5) * 0.2) % 1;
        const px = x1 + (x2 - x1) * progress;
        const py = y1 + (y2 - y1) * progress;

        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = source.color;
        ctx.shadowColor = source.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 2. Draw Nodes
      NODES.forEach((node) => {
        const nx = node.x * width;
        const ny = node.y * height;
        const isHovered = hoveredNode?.id === node.id;

        // Outer glow on hover
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(nx, ny, node.radius + 8, 0, Math.PI * 2);
          ctx.fillStyle = node.color + '22';
          ctx.fill();
        }

        // Outer circle
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = node.color;
        ctx.lineWidth = isHovered ? 4 : 3;
        ctx.shadowColor = node.color + '44';
        ctx.shadowBlur = isHovered ? 12 : 6;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Inner center dot
        ctx.beginPath();
        ctx.arc(nx, ny, 6, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Node Label
        ctx.fillStyle = '#1e293b';
        ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, nx, ny + node.radius + 15);
      });

      t++;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [hoveredNode]);

  // Handle Mouse Hover
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const found = NODES.find((node) => {
      const nx = node.x * canvas.width;
      const ny = node.y * canvas.height;
      const dist = Math.hypot(mouseX - nx, mouseY - ny);
      return dist <= node.radius + 10;
    });

    setHoveredNode(found || null);
  };

  return (
    <div className="glass-card p-6 md:p-8 bg-gradient-to-br from-white via-indigo-50/20 to-purple-50/30">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-8 rounded-lg bg-brand-indigo/10 text-brand-indigo flex items-center justify-center">
              <Network size={18} />
            </span>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-indigo">
              Interactive Topology
            </span>
          </div>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
            Distributed Systems Architecture
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Hover over nodes to inspect real-time throughput, latency, and
            protocol telemetry
          </p>
        </div>

        {/* Selected / Hovered Node Telemetry Card */}
        {hoveredNode ? (
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: hoveredNode.color }}
            />
            <div>
              <span className="font-bold text-xs text-slate-900 block font-mono">
                {hoveredNode.label}
              </span>
              <span className="text-[11px] text-slate-500 block">
                {hoveredNode.protocol} · Latency:{' '}
                <strong className="text-slate-800">
                  {hoveredNode.latency}
                </strong>{' '}
                · Rate:{' '}
                <strong className="text-slate-800">
                  {hoveredNode.throughput}
                </strong>
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200 text-xs text-slate-500 flex items-center gap-2 font-mono">
            <Server size={14} className="text-brand-indigo animate-pulse" />
            <span>5 Active Distributed Subsystems</span>
          </div>
        )}
      </div>

      <div className="relative w-full aspect-[2/1] min-h-[260px] bg-white/70 rounded-xl border border-slate-200/80 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={900}
          height={450}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredNode(null)}
          className="w-full h-full block cursor-crosshair"
        />
      </div>
    </div>
  );
};
