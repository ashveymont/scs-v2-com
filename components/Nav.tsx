export default function Nav() {
  const links = ["About", "Membership", "Journal", "Apply"] as const;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8"
      style={{
        height: "62px",
        backgroundColor: "rgba(245, 242, 236, 0.95)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(92, 100, 112, 0.10)",
      }}
    >
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

      {/* Nav links — hidden on mobile */}
      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="nav-link uppercase"
            style={{
              fontFamily: "var(--font-mono), 'Courier New', monospace",
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "var(--color-slate)",
              textDecoration: "none",
            }}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}
