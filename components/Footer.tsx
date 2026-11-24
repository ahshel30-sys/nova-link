"use client";

import { useState } from "react";
import { ArrowUp, Check, Loader2 } from "lucide-react";
import { site } from "@/lib/content";
import { persistDemo, validateNewsletter } from "@/lib/forms";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [legal, setLegal] = useState<"privacy" | "terms" | null>(null);

  const subscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = validateNewsletter(email);
    setError(message);
    if (message) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 600));
    persistDemo("novalink:newsletter", { email, createdAt: new Date().toISOString() });
    setStatus("success");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__news">
          <div>
            <p className="mono">Field notes</p>
            <h2>Signals from the<br /><em>edge of next.</em></h2>
          </div>
          <form onSubmit={subscribe} noValidate>
            <label className="sr-only" htmlFor="nl-news">Email address</label>
            <div className="footer__news-row">
              <input id="nl-news" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(null); setStatus("idle"); }} placeholder="Your email address" aria-invalid={Boolean(error)} aria-describedby={error ? "nl-news-error" : undefined} />
              <button className="btn btn--solid" type="submit" disabled={status === "submitting"}>{status === "submitting" ? <Loader2 className="spin" size={14} /> : "Subscribe"}</button>
            </div>
            {error ? <small className="field-error" id="nl-news-error">{error}</small> : null}
            {status === "success" ? <p className="footer__news-ok mono" role="status"><Check size={12} /> You&apos;re on the list. Demo only.</p> : <p className="mono footer__news-note">Demo newsletter — stored in your browser only.</p>}
          </form>
        </div>

        <div className="footer__credits">
          <dl>
            <div><dt className="mono">Direction</dt><dd>NOVALINK Studio</dd></div>
            <div><dt className="mono">Engineering</dt><dd>Platform &amp; AI</dd></div>
            <div><dt className="mono">Design</dt><dd>Interfaces &amp; Systems</dd></div>
          </dl>
          <div className="footer__places">
            <address><span className="mono">New York</span>100 Broad Street<br />New York, NY 10005</address>
            <address><span className="mono">London</span>18 Fenchurch Street<br />London EC3M 5QU</address>
            <ul className="mono">
              {site.socials.map((social) => <li key={social.label}><a href={social.href} target="_blank" rel="noreferrer">{social.label}</a></li>)}
            </ul>
          </div>
        </div>

        <p className="footer__fin" aria-hidden="true">NOVALINK.</p>

        <div className="footer__bottom mono">
          <p>© 2026 NOVALINK — fictional concept. All details are samples.</p>
          <div>
            <button type="button" onClick={() => setLegal("privacy")}>Privacy</button>
            <button type="button" onClick={() => setLegal("terms")}>Terms</button>
            <a href="#home">Back to top <ArrowUp size={12} /></a>
          </div>
        </div>
      </div>

      <dialog className="detail-dialog" open={Boolean(legal)} onClose={() => setLegal(null)}>
        <div className="detail-dialog__inner">
          <h2>{legal === "privacy" ? "Privacy — demo notice" : "Terms — demo notice"}</h2>
          <p>
            {legal === "privacy"
              ? "This is a fictional portfolio demonstration. Form data is stored only in your browser's localStorage and is never transmitted. No analytics, cookies or tracking are used."
              : "All names, projects, figures and contact details are fictional demonstration content. No services are sold and no agreements are formed through this website."}
          </p>
          <button className="btn btn--solid" type="button" onClick={() => setLegal(null)}>Close</button>
        </div>
      </dialog>
    </footer>
  );
}
