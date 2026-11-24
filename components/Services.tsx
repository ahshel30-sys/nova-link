import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { SectionHead } from "./ui";

const manifesto = "We take the difficult, tangled parts of technology and make them feel obvious. Clear systems. Honest interfaces. Work that stays understandable long after launch.".split(" ");

export default function Services() {
  return (
    <>
      <section className="section" id="solutions" aria-labelledby="solutions-title">
        <div className="container">
          <SectionHead no="Sc. 01" label="Capabilities" title={<span id="solutions-title">Six crafts.<br /><em>One engineering culture.</em></span>} note="From the first model to the final deploy — deliberate, measured and built to stay useful." />
        </div>
        <div className="strip">
          <ol className="strip__frames">
            {services.map((service) => (
              <li className="frame" key={service.no} data-reveal>
                <p className="mono frame__no">NL-{service.no}</p>
                <h3>{service.title}</h3>
                <p className="frame__text">{service.text}</p>
                <ul className="mono frame__tags">{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <ArrowUpRight className="frame__arrow" size={18} strokeWidth={1.3} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="manifesto" aria-label="Our point of view">
        <div className="container">
          <p className="label" data-reveal><span>Sc. 02</span>Point of view</p>
          <h2 className="manifesto__title">WE MAKE<br />COMPLEXITY <em>WORK.</em></h2>
          <p className="manifesto__text">
            {manifesto.map((word, i) => (
              <span key={i} style={{ ["--p" as string]: 8 + (i / manifesto.length) * 26 }}>{word} </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
