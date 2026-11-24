import { ArrowDown, ArrowUpRight } from "lucide-react";

function Network() {
  const nodes = Array.from({ length: 34 }, (_, i) => ({
    x: 120 + ((i * 191) % 1360),
    y: 80 + ((i * 113) % 640),
    r: i % 6 === 0 ? 4 : 2,
  }));
  return (
    <svg className="hero__network" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="hero-core" cx="72%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#4d8dff" stopOpacity="0.26" />
          <stop offset="60%" stopColor="#1d3f8c" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#05070e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="800" fill="url(#hero-core)" />
      <g stroke="#4d8dff" strokeWidth="0.6" opacity="0.18">
        {Array.from({ length: 33 }, (_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="800" />)}
        {Array.from({ length: 17 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 50} x2="1600" y2={i * 50} />)}
      </g>
      <g stroke="#49d9ff" strokeWidth="0.7" fill="none">
        {nodes.map((n, i) => <line key={`l${i}`} x1={n.x} y1={n.y} x2="1140" y2="300" opacity={i % 3 === 0 ? 0.28 : 0.1} />)}
      </g>
      <g>
        {nodes.map((n, i) => <circle key={`n${i}`} cx={n.x} cy={n.y} r={n.r} fill={i % 7 === 0 ? "#49d9ff" : "#7fa6ff"} opacity={i % 3 === 0 ? 0.75 : 0.3} />)}
      </g>
      <g fill="none" stroke="#49d9ff" opacity="0.35">
        {[110, 190, 280].map((r) => <circle key={r} cx="1140" cy="300" r={r} strokeWidth="0.8" />)}
      </g>
      <circle cx="1140" cy="300" r="9" fill="#49d9ff" opacity="0.85" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__light" aria-hidden="true" />
      <div className="hero__streak" aria-hidden="true" />
      <div className="hero__moon" aria-hidden="true" />
      <Network />
      <div className="hero__vignette" aria-hidden="true" />

      <div className="hero__content">
        <p className="mono hero__kicker">Next-generation technology studio — New York / London</p>
        <h1 className="hero__title" id="hero-title">
          <span>Engineering</span>
          <span>the <em>future.</em></span>
        </h1>
        <div className="hero__row">
          <p className="hero__lede">
            We transform ambitious ideas into intelligent digital systems that move businesses forward.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#solutions">Explore Our Capabilities <ArrowUpRight size={14} /></a>
            <a className="btn" href="#contact">Start a Project</a>
          </div>
        </div>
      </div>

      <div className="hero__slate mono" aria-hidden="true">
        <span>NOVALINK / 2026</span>
        <span>AI · SOFTWARE · INFRASTRUCTURE</span>
        <span>Scroll <ArrowDown size={12} /></span>
      </div>
    </section>
  );
}
