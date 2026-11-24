"use client";

import { useEffect, useState, type ReactNode } from "react";

const TONES = {
  cobalt: "#4d8dff",
  cyan: "#49d9ff",
  violet: "#a37bff",
} as const;

export function Timecode() {
  const [text, setText] = useState("00:00:00:00");
  useEffect(() => {
    let frames = 0;
    const id = window.setInterval(() => {
      frames += 1;
      const f = frames % 24;
      const s = Math.floor(frames / 24) % 60;
      const m = Math.floor(frames / (24 * 60)) % 60;
      const h = Math.floor(frames / (24 * 60 * 60)) % 24;
      setText([h, m, s, f].map((n) => String(n).padStart(2, "0")).join(":"));
    }, 1000 / 12);
    return () => window.clearInterval(id);
  }, []);
  return <span className="timecode">{text}</span>;
}

export function Still({ variant, tone = "cobalt" }: { variant: number; tone?: keyof typeof TONES }) {
  const color = TONES[tone];
  const nodes = Array.from({ length: 18 }, (_, i) => ({
    x: 80 + ((i * 173 + variant * 67) % 1040),
    y: 50 + ((i * 97 + variant * 41) % 400),
    r: i % 5 === 0 ? 5 : 2.5,
  }));
  return (
    <svg className="still" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={`still-glow-${variant}`} cx="68%" cy="42%" r="58%">
          <stop offset="0%" stopColor={color} stopOpacity="0.32" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`still-line-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.85" />
          <stop offset="100%" stopColor={color} stopOpacity="0.03" />
        </linearGradient>
      </defs>
      <rect width="1200" height="500" fill="#05070e" />
      <rect width="1200" height="500" fill={`url(#still-glow-${variant})`} />
      <g stroke={color} strokeWidth="0.6" opacity="0.13">
        {Array.from({ length: 25 }, (_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" />)}
        {Array.from({ length: 11 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 50} x2="1200" y2={i * 50} />)}
      </g>
      {variant === 0 ? (
        <g fill="none" stroke={color}>
          {[70, 130, 195, 260].map((r) => <circle key={r} cx="770" cy="230" r={r} opacity={0.42 - r / 900} strokeWidth="1" />)}
          <path d="M60 370 Q230 180 400 280 T760 150 T1140 240" strokeWidth="2" />
          {nodes.filter((_, i) => i % 2 === 0).map((n) => <circle key={n.x} cx={n.x} cy={n.y} r="4" fill={color} stroke="none" opacity="0.8" />)}
        </g>
      ) : variant === 1 ? (
        <g fill="none" stroke={color} strokeWidth="1.2">
          {[110, 210, 310, 410].map((y, i) => (
            <path key={y} d={`M60 ${y} H${240 + i * 60} L${300 + i * 60} ${y - 50} H${620 + i * 40} L${680 + i * 40} ${y} H1140`} opacity={0.85 - i * 0.17} />
          ))}
          {nodes.slice(0, 12).map((n) => <rect key={n.x} x={n.x - 5} y={n.y - 5} width="10" height="10" fill={color} stroke="none" opacity="0.7" />)}
        </g>
      ) : (
        <g fill="none" stroke={color} strokeWidth="1.4">
          <path d="M60 320 C180 320 220 110 360 110 C520 110 520 380 690 380 C860 380 880 170 1140 170" strokeWidth="2" />
          <path d="M60 400 C260 400 300 250 520 250 C740 250 820 450 1140 420" opacity="0.45" />
          {nodes.filter((_, i) => i % 3 === 0).map((n) => <circle key={n.x} cx={n.x} cy={n.y} r="5" fill={color} stroke="none" />)}
          <rect x="780" y="60" width="220" height="100" opacity="0.3" />
        </g>
      )}
      <text x="34" y="466" fill={color} fontSize="11" fontFamily="monospace" letterSpacing="4" opacity="0.8">NOVALINK / SELECT {String(variant + 1).padStart(2, "0")}</text>
    </svg>
  );
}

export function SectionHead({ no, label, title, note }: { no: string; label: string; title: ReactNode; note?: string }) {
  return (
    <header className="section-head" data-reveal>
      <p className="label"><span>{no}</span>{label}</p>
      <h2 className="h2">{title}</h2>
      {note ? <p className="head-note">{note}</p> : null}
    </header>
  );
}
