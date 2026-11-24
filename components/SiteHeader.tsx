"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { site } from "@/lib/content";
import { Timecode } from "./ui";

const ids = ["solutions", "technology", "projects", "about", "contact"];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter((n): n is HTMLElement => Boolean(n));
    const hero = document.getElementById("home");
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    if (hero) observer.observe(hero);
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => triggerRef.current?.focus(), 10);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => menuRef.current?.querySelector("a")?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && menuRef.current) {
        const items = Array.from(menuRef.current.querySelectorAll<HTMLElement>("a[href],button")).filter((n) => n.offsetParent !== null);
        if (!items.length) return;
        if (e.shiftKey && document.activeElement === items[0]) { e.preventDefault(); items[items.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === items[items.length - 1]) { e.preventDefault(); items[0].focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { cancelAnimationFrame(frame); document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, close]);

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <a className="brand" href="#home" aria-label="NOVALINK, back to top">
            <span className="brand__mark" aria-hidden="true" />
            NOVALINK
          </a>
          <nav className="header__nav" aria-label="Primary">
            {site.nav.map((link) => {
              const id = link.href.replace("#", "");
              return <a key={link.href} href={link.href} className={active === id ? "is-active" : ""} aria-current={active === id ? "page" : undefined}>{link.label}</a>;
            })}
          </nav>
          <div className="header__right">
            <p className="rec" aria-hidden="true"><span className="rec__dot" />REC <Timecode /></p>
            <a className="btn btn--small" href="#contact">Start a Project <ArrowUpRight size={13} /></a>
            <button ref={triggerRef} type="button" className="menu-toggle" aria-expanded={open} aria-controls="novalink-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => (open ? close() : setOpen(true))}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="mobile-menu" id="novalink-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label="Site menu">
          <p className="mono">Navigation</p>
          <nav aria-label="Mobile primary">
            {site.nav.map((link, i) => <a key={link.href} href={link.href} onClick={close}><span>0{i + 1}</span>{link.label}</a>)}
          </nav>
          <a className="btn btn--solid" href="#contact" onClick={close}>Start a Project <ArrowUpRight size={14} /></a>
          <p className="mono mobile-menu__meta">{site.location} · {site.email}</p>
        </div>
      ) : null}
    </>
  );
}
