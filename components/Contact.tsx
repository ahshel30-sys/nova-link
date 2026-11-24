"use client";

import { useState } from "react";
import { AlertCircle, ArrowUpRight, Check, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { budgetRanges, projectTypes, site } from "@/lib/content";
import { persistDemo, reference, validateInquiry, type Errors, type Inquiry } from "@/lib/forms";

const empty: Inquiry = { name: "", company: "", email: "", projectType: "", budget: "", description: "" };
type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [values, setValues] = useState<Inquiry>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [ref, setRef] = useState("");

  const update = (field: keyof Inquiry, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (status === "error") setStatus("idle");
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validateInquiry(values);
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`nl-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      await new Promise((r) => setTimeout(r, 850));
      const nextRef = reference();
      persistDemo("novalink:inquiries", { ...values, reference: nextRef, createdAt: new Date().toISOString() });
      setRef(nextRef);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(empty); setErrors({}); setRef(""); setStatus("idle");
    setTimeout(() => document.getElementById("nl-name")?.focus(), 50);
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__copy">
          <p className="label" data-reveal><span>Sc. 07</span>Your project</p>
          <h2 className="contact__title" id="contact-title" data-reveal>LET&apos;S MAKE<br />SOMETHING <em>NEXT.</em></h2>
          <p className="contact__lede" data-reveal>Tell us what you are building. We reply within one working day with questions, a rough number and an honest view.</p>
          <dl className="contact__details" data-reveal>
            <div><dt className="mono">New work</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div><dt className="mono">Telephone</dt><dd><a href="tel:+12125550147">{site.phone}</a> <span className="mono">sample</span></dd></div>
            <div><dt className="mono">Based in</dt><dd>{site.location} <MapPin size={13} className="inline-icon" aria-hidden="true" /></dd></div>
          </dl>
          <p className="demo-strip" data-reveal><span>DEMO</span> Fictional contact details — nothing is sent to a real company.</p>
          <div className="contact__mini mono" aria-hidden="true"><Mail size={13} /> <Phone size={13} /> ENQUIRY / 2026</div>
        </div>

        <div data-reveal>
          <div className="slate" data-sent={status === "success"}>
            {status === "success" ? (
              <div className="slate__success" role="status" aria-live="polite">
                <span className="slate__success-icon"><Check size={22} /></span>
                <p className="mono">Slate recorded</p>
                <h3>We have your brief.</h3>
                <p>Thank you, {values.name.split(" ")[0]}. Saved locally for this demo. Reference <strong>{ref}</strong>.</p>
                <p className="demo-strip"><span>DEMO</span> No message was sent.</p>
                <button className="btn" type="button" onClick={reset}>Send another inquiry</button>
              </div>
            ) : (
              <>
                <div className="slate__sticks" aria-hidden="true"><span className="slate__stick slate__stick--top" /><span className="slate__stick" /></div>
                {status === "error" ? <p className="form-alert" role="alert"><AlertCircle size={15} /> Could not save in this browser. Try again or email us.</p> : null}
                <form className="slate__body" onSubmit={submit} noValidate aria-busy={status === "submitting"}>
                  <div className={`slate__field ${errors.name ? "has-error" : ""}`}>
                    <span className="mono">Full name *</span>
                    <input id="nl-name" value={values.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "nl-name-error" : undefined} />
                    {errors.name ? <small className="field-error" id="nl-name-error">{errors.name}</small> : null}
                  </div>
                  <div className={`slate__field ${errors.company ? "has-error" : ""}`}>
                    <span className="mono">Company *</span>
                    <input id="nl-company" value={values.company} onChange={(e) => update("company", e.target.value)} placeholder="Company" autoComplete="organization" aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "nl-company-error" : undefined} />
                    {errors.company ? <small className="field-error" id="nl-company-error">{errors.company}</small> : null}
                  </div>
                  <div className={`slate__field slate__field--wide ${errors.email ? "has-error" : ""}`}>
                    <span className="mono">Email *</span>
                    <input id="nl-email" type="email" value={values.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "nl-email-error" : undefined} />
                    {errors.email ? <small className="field-error" id="nl-email-error">{errors.email}</small> : null}
                  </div>
                  <div className={`slate__field ${errors.projectType ? "has-error" : ""}`}>
                    <span className="mono">Project type *</span>
                    <select id="nl-projectType" value={values.projectType} onChange={(e) => update("projectType", e.target.value)} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "nl-projectType-error" : undefined}>
                      <option value="">Select type</option>
                      {projectTypes.map((item) => <option key={item}>{item}</option>)}
                    </select>
                    {errors.projectType ? <small className="field-error" id="nl-projectType-error">{errors.projectType}</small> : null}
                  </div>
                  <div className={`slate__field ${errors.budget ? "has-error" : ""}`}>
                    <span className="mono">Budget *</span>
                    <select id="nl-budget" value={values.budget} onChange={(e) => update("budget", e.target.value)} aria-invalid={Boolean(errors.budget)} aria-describedby={errors.budget ? "nl-budget-error" : undefined}>
                      <option value="">Select range</option>
                      {budgetRanges.map((item) => <option key={item}>{item}</option>)}
                    </select>
                    {errors.budget ? <small className="field-error" id="nl-budget-error">{errors.budget}</small> : null}
                  </div>
                  <div className={`slate__field slate__field--wide ${errors.description ? "has-error" : ""}`}>
                    <span className="mono">Project description *</span>
                    <textarea id="nl-description" rows={3} maxLength={1200} value={values.description} onChange={(e) => update("description", e.target.value)} placeholder="What are you building?" aria-invalid={Boolean(errors.description)} aria-describedby={errors.description ? "nl-description-error" : undefined} />
                    {errors.description ? <small className="field-error" id="nl-description-error">{errors.description}</small> : null}
                  </div>
                  <div className="slate__actions">
                    <button className="btn btn--solid" type="submit" disabled={status === "submitting"}>
                      {status === "submitting" ? <><Loader2 className="spin" size={14} /> Sending…</> : <>Send inquiry <ArrowUpRight size={14} /></>}
                    </button>
                    <p className="mono">Demo form · stored in your browser only</p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
