"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { projects } from "@/lib/content";
import { SectionHead, Still } from "./ui";

const DWELL = 7000;

export default function Projects() {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [detail, setDetail] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggers = useRef<Array<HTMLButtonElement | null>>([]);
  const project = projects[active];
  const detailProject = detail !== null ? projects[detail] : null;

  useEffect(() => {
    if (held || hovering || detail !== null || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % projects.length), DWELL);
    return () => window.clearTimeout(id);
  }, [active, held, hovering, detail]);

  const closeDetail = useCallback(() => {
    const trigger = detail !== null ? triggers.current[detail] : null;
    setDetail(null);
    setTimeout(() => trigger?.focus(), 20);
  }, [detail]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (detail === null) { if (dialog.open) dialog.close(); return; }
    if (!dialog.open) dialog.showModal();
    requestAnimationFrame(() => closeRef.current?.focus());
  }, [detail]);

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead no="Sc. 04" label="Selected work" title={<span id="projects-title">Three builds.<br /><em>One frame each.</em></span>} note="Fictional portfolio concepts. Select a title to hold the frame, then open the specification." />

        <div className="reel" data-autoplay={!held && !hovering && detail === null} onPointerEnter={() => setHovering(true)} onPointerLeave={() => setHovering(false)}>
          <div className="reel__viewer">
            <div className="reel__frame">
              {projects.map((item, i) => (
                <div className="reel__still" key={item.id} data-active={i === active}>
                  <Still variant={i} tone={item.tone} />
                </div>
              ))}
              <span className="reel__mark reel__mark--tl" aria-hidden="true" />
              <span className="reel__mark reel__mark--tr" aria-hidden="true" />
              <span className="reel__mark reel__mark--bl" aria-hidden="true" />
              <span className="reel__mark reel__mark--br" aria-hidden="true" />
              <p className="reel__slate mono" aria-hidden="true">
                <span>SELECT {String(active + 1).padStart(2, "0")}/03</span>
                <span>{project.kind.toUpperCase()}</span>
                <span>2.39:1</span>
              </p>
            </div>

            <div className="reel__caption" aria-live="polite">
              <div className="reel__caption-inner" key={project.id}>
                <h3>{project.title}</h3>
                <p className="mono">{project.client} · {project.kind} · {project.runtime} · {project.year}</p>
                <p className="reel__note">{project.note}</p>
                <button className="reel__detail mono" type="button" onClick={() => setDetail(active)}>
                  View specification <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <ol className="reel__list">
            {projects.map((item, i) => (
              <li key={item.id}>
                <button
                  ref={(node) => { triggers.current[i] = node; }}
                  type="button"
                  className="reel__item"
                  aria-current={i === active ? "true" : undefined}
                  onClick={() => { setActive(i); setHeld(true); }}
                >
                  <span className="reel__thumb" aria-hidden="true"><Still variant={i} tone={item.tone} /></span>
                  <span className="reel__item-text">
                    <span className="mono">{String(i + 1).padStart(2, "0")} — {item.kind}</span>
                    <span className="reel__item-title">{item.title}</span>
                  </span>
                  <span className="mono reel__time">{item.runtime}</span>
                  <span className="reel__progress" key={i === active ? `run-${active}` : "idle"} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ol>
        </div>

        <p className="demo-strip" data-reveal><span>DEMO</span> All projects and clients are fictional portfolio concepts.</p>
      </div>

      <dialog ref={dialogRef} className="detail-dialog" aria-label={detailProject ? `${detailProject.title} specification` : "Project specification"} onCancel={(e) => { e.preventDefault(); closeDetail(); }} onClick={(e) => { if (e.target === dialogRef.current) closeDetail(); }}>
        {detailProject ? (
          <div className="detail-dialog__inner">
            <button ref={closeRef} type="button" className="dialog-close" onClick={closeDetail} aria-label="Close project details"><X size={20} /></button>
            <p className="mono">Project specification · Fictional concept</p>
            <h2>{detailProject.title}</h2>
            <p className="detail-dialog__summary">{detailProject.note}</p>
            <dl className="detail-dialog__grid">
              <div><dt className="mono">Client</dt><dd>{detailProject.client}</dd></div>
              <div><dt className="mono">Year</dt><dd>{detailProject.year}</dd></div>
              <div><dt className="mono">Our role</dt><dd>{detailProject.role}</dd></div>
              <div><dt className="mono">Outcome</dt><dd>{detailProject.outcome}</dd></div>
            </dl>
            <ul className="detail-dialog__stack">{detailProject.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            <a className="btn btn--solid" href="#contact" onClick={closeDetail}>Discuss a similar build <ArrowUpRight size={14} /></a>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
