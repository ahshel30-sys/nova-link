"use client";

import { useState } from "react";
import { acts, timeline, TOTAL_WEEKS } from "@/lib/content";
import { SectionHead } from "./ui";

const pct = (weeks: number) => `${(weeks / TOTAL_WEEKS) * 100}%`;

export default function Process() {
  const [active, setActive] = useState(0);
  const playhead = [12, 38, 66, 94][active];

  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead no="Sc. 05" label="Method" title={<span id="process-title">Eight weeks.<br /><em>Cut to picture.</em></span>} note="A typical engagement, laid out like an edit timeline. Select an act to move the playhead." />

        <div className="nle" data-reveal>
          <div className="nle__bar mono">
            <span className="nle__dots" aria-hidden="true"><i /><i /><i /></span>
            <span>novalink_build_v08 — Timeline</span>
            <span>8 wks</span>
          </div>
          <div className="nle__scroll" role="group" aria-label="Project schedule by discipline" tabIndex={0}>
            <div className="nle__inner">
              <div className="nle__ruler mono" aria-hidden="true">
                <span />
                <div>{Array.from({ length: TOTAL_WEEKS }, (_, i) => <i key={i}>W{i + 1}</i>)}</div>
              </div>
              <div className="nle__tracks">
                {timeline.map((track) => (
                  <div className="nle__track" key={track.id} data-tone={track.tone}>
                    <p className="mono nle__track-name">{track.name}</p>
                    <ul className="nle__lane">
                      {track.clips.map((clip) => (
                        <li className="nle__clip" key={clip.label} style={{ left: pct(clip.start), width: pct(clip.end - clip.start) }}>
                          <span>{clip.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="nle__playhead-lane" aria-hidden="true"><span className="nle__playhead" style={{ left: `${playhead}%` }} /></div>
              </div>
            </div>
          </div>
        </div>

        <ol className="acts">
          {acts.map((act, i) => (
            <li key={act.no} className={i === active ? "is-active" : ""} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <button type="button" onClick={() => setActive(i)} aria-pressed={i === active}>
                <p className="mono acts__no">{act.no} / {act.weeks}</p>
                <h3>{act.title}</h3>
                <p className="acts__text">{act.text}</p>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
