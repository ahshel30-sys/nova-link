import { stackGroups } from "@/lib/content";
import { SectionHead } from "./ui";

function Diagram() {
  return (
    <svg className="tech-diagram" viewBox="0 0 520 300" aria-hidden="true">
      <g fill="none" stroke="#49d9ff" strokeWidth="0.8" opacity="0.35">
        {[40, 80, 120].map((r) => <circle key={r} cx="260" cy="150" r={r} />)}
      </g>
      <g stroke="#4d8dff" strokeWidth="0.8" opacity="0.5">
        {stackGroups.map((_, i) => {
          const a = (i / stackGroups.length) * Math.PI * 2 - Math.PI / 2;
          return <line key={i} x1="260" y1="150" x2={260 + Math.cos(a) * 118} y2={150 + Math.sin(a) * 118} />;
        })}
      </g>
      {stackGroups.map((group, i) => {
        const a = (i / stackGroups.length) * Math.PI * 2 - Math.PI / 2;
        return <circle key={group.no} cx={260 + Math.cos(a) * 118} cy={150 + Math.sin(a) * 118} r="7" fill={i === 4 ? "#a37bff" : "#4d8dff"} />;
      })}
      <rect x="220" y="110" width="80" height="80" fill="#0a1125" stroke="#49d9ff" strokeWidth="1" />
      <text x="260" y="155" textAnchor="middle" fill="#eaf1ff" fontSize="11" fontFamily="monospace" letterSpacing="1">NL CORE</text>
    </svg>
  );
}

export default function Stack() {
  return (
    <section className="section tech" id="technology" aria-labelledby="tech-title">
      <div className="container">
        <SectionHead no="Sc. 03" label="Technology" title={<span id="tech-title">A stack with<br /><em>clear edges.</em></span>} note="A deliberately small set of tools, understood deeply. Chosen for clarity and the ability to evolve." />
        <div className="tech__layout">
          <div className="tech__diagram" data-reveal><Diagram /></div>
          <div className="tech__groups">
            {stackGroups.map((group, i) => (
              <article className="tech-group" key={group.no} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="tech-group__head"><span className="mono">{group.no}</span><h3>{group.group}</h3></div>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <p className="mono">{group.note}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
