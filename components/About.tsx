import { ArrowUpRight } from "lucide-react";
import { stats } from "@/lib/content";
import { SectionHead } from "./ui";

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHead no="Sc. 06" label="About" title={<span id="about-title">TECHNOLOGY<br />WITH <em>PURPOSE.</em></span>} />
        <div className="about__layout">
          <div className="about__lead" data-reveal>
            <p>We believe the best technology disappears into the work. It makes a decision clearer, a process lighter, and a product feel inevitable.</p>
            <span className="about__rule" aria-hidden="true" />
            <p className="mono">A studio for the space between ambition and working software.</p>
          </div>
          <div className="about__details">
            {[
              { t: "Mission", d: "To give ambitious teams the technical partner they need: precise, direct and invested in the outcome." },
              { t: "Vision", d: "A digital landscape where intelligent systems are understandable, useful and built with care for the people who depend on them." },
              { t: "Innovation", d: "Prototype early, measure honestly, keep the simplest version that solves the real problem." },
              { t: "People", d: "Every interface, API and pipeline is designed around the humans who use and maintain it." },
            ].map((item) => (
              <article key={item.t} data-reveal>
                <h3 className="mono">{item.t}</h3>
                <p>{item.d}</p>
              </article>
            ))}
          </div>
        </div>

        <dl className="figures">
          {stats.map((stat, i) => (
            <div key={stat.label} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <dd>{stat.value}</dd>
              <dt className="mono">{stat.label}</dt>
            </div>
          ))}
        </dl>
        <p className="demo-strip" data-reveal><span>DEMO</span> Figures are illustrative portfolio content, not real company achievements.</p>
        <a className="about__link mono" href="#contact" data-reveal>Build something with us <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}
