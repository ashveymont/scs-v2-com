"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const links = [
    { label: "About",      href: "/about" },
    { label: "Membership", href: "/membership" },
    { label: "Journal",    href: "/journal" },
    { label: "Apply",      href: "/application" },
  ] as const;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: "62px",
          backgroundColor: scrolled
            ? "rgba(245, 242, 236, 0.98)"
            : "rgba(245, 242, 236, 0.95)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: scrolled
            ? "1px solid rgba(92, 100, 112, 0.20)"
            : "1px solid rgba(92, 100, 112, 0.10)",
          transition: "background-color 300ms ease, border-color 300ms ease",
        }}
      >
        <div className="w-full max-w-[1080px] mx-auto px-8 h-full flex items-center justify-between">

          {/* Wordmark */}
          <a
            href="/"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "0.08em",
              color: "var(--color-charcoal)",
              textDecoration: "none",
            }}
          >
            Sovereign Chess Society
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link uppercase"
                style={{
                  fontFamily: "var(--font-mono), 'Courier New', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                  color: "var(--color-slate)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              width: "44px",
              height: "44px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              gap: "5px",
              flexShrink: 0,
            }}
          >
            <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "var(--color-charcoal)" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "var(--color-charcoal)" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "var(--color-charcoal)" }} />
          </button>

        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className="fixed inset-0 md:hidden z-[100] flex flex-col items-center justify-center"
        style={{
          backgroundColor: "var(--color-stone)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 200ms ease",
        }}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "9px",
            right: "24px",
            width: "44px",
            height: "44px",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-charcoal)",
            fontSize: "28px",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Links */}
        <nav className="flex flex-col items-center" style={{ gap: "40px" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "var(--color-navy)",
                textDecoration: "none",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Provenance mark */}
        <p
          style={{
            position: "absolute",
            bottom: "32px",
            fontFamily: "var(--font-mono), 'Courier New', monospace",
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "var(--color-slate)",
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          Dubai&nbsp;&bull;&nbsp;Est. MMXXVI
        </p>
      </div>
    </>
  );
}
