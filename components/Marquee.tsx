import { credits } from "@/lib/content";

export default function Marquee() {
  return (
    <section className="credits" aria-label="Selected collaborators">
      <p className="mono credits__label">In good company</p>
      <div className="credits__window">
        <ul className="credits__track">
          {[...credits, ...credits].map((name, i) => (
            <li key={`${name}-${i}`} aria-hidden={i >= credits.length ? true : undefined}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
