export default function Footer() {
  return (
    <footer
      className="px-6 py-16"
      style={{
        backgroundColor: "var(--color-navy)",
        borderTop: "1px solid rgba(245, 242, 236, 0.08)",
      }}
    >
      <div className="w-full max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        <div className="flex flex-col gap-3">
          <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 500, fontSize: "13px", letterSpacing: "0.08em", color: "var(--color-stone)" }}>
            Sovereign Chess Society
          </p>
          <p style={{ fontFamily: "var(--font-mono), 'Courier New', monospace", color: "rgba(92, 100, 112, 0.60)", fontSize: "11px", letterSpacing: "0.06em" }}>
            Dubai&nbsp;&bull;&nbsp;Founded MMXXVI
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          {[
            { label: "About",                  href: "#" },
            { label: "Membership",             href: "/membership" },
            { label: "Journal",                href: "#" },
            { label: "Sovereign Intelligence", href: "#" },
            { label: "Application",            href: "/application" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-link"
              style={{
                fontFamily: "var(--font-mono), 'Courier New', monospace",
                color: "var(--color-slate)",
                fontSize: "11px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col justify-between gap-8">
          <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "rgba(245, 242, 236, 0.50)", fontSize: "13px", lineHeight: "1.7", fontStyle: "italic" }}>
            The private home for intellectually serious operators.
          </p>
          <p style={{ fontFamily: "var(--font-mono), 'Courier New', monospace", color: "rgba(92, 100, 112, 0.40)", fontSize: "10px", letterSpacing: "0.04em" }}>
            &copy; MMXXVI Sovereign Chess Society. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
