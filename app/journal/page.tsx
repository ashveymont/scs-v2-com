import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "The Journal — The Sovereign Chess Society",
  description: "Chess, capital, and cognition. The Journal of the Sovereign Chess Society, published for founders, investors, and operators.",
};

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono), 'Courier New', monospace",
};
const display: React.CSSProperties = {
  fontFamily: "var(--font-display)",
};
const sans: React.CSSProperties = {
  fontFamily: "var(--font-inter), system-ui, sans-serif",
};

export default function JournalPage() {
  return (
    <>
      <Nav />

      <div style={{ backgroundColor: "var(--color-stone)", paddingTop: "62px" }}>

        {/* ── SECTION 1 — HERO ─────────────────────────────────────────────── */}
        <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
          <div className="w-full max-w-[720px] mx-auto flex flex-col items-center">

            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
              The Journal
            </p>

            <h1
              className="font-normal tracking-[-0.02em]"
              style={{
                ...display,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "var(--color-navy)",
                lineHeight: 1.2,
                marginTop: "16px",
              }}
            >
              Chess. Capital. Cognition.
            </h1>

            <p
              style={{
                ...sans,
                fontSize: "16px",
                color: "var(--color-slate)",
                lineHeight: 1.8,
                marginTop: "24px",
                maxWidth: "480px",
              }}
            >
              The Journal of the Sovereign Chess Society. Published for founders, investors, and operators who understand that how you think determines what you build.
            </p>

          </div>
        </section>

        {/* ── SECTION 2 — FEATURED ARTICLE ─────────────────────────────────── */}
        <RevealSection>
          <section className="px-6 pb-16 md:pb-24" style={{ backgroundColor: "var(--color-stone)" }}>
            <div className="w-full max-w-[1080px] mx-auto">

              <hr style={{ border: "none", height: "1px", width: "80px", backgroundColor: "rgba(92,100,112,0.2)", margin: "0 auto 64px" }} />

              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-start">

                {/* Left — article summary */}
                <div>
                  <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "24px" }}>
                    Latest
                  </p>

                  <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.1em", color: "var(--color-brass)", marginBottom: "16px" }}>
                    001
                  </p>

                  <h2
                    className="font-normal tracking-[-0.02em]"
                    style={{
                      ...display,
                      fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                      color: "var(--color-navy)",
                      lineHeight: 1.2,
                    }}
                  >
                    Why Serious Operators Play Chess
                  </h2>

                  <p className="font-normal" style={{ ...display, fontSize: "1.1rem", color: "var(--color-slate)", marginTop: "12px", fontStyle: "italic" }}>
                    And what it reveals about the quality of their thinking
                  </p>

                  <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "480px" }}>
                    <p style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9 }}>
                      Chess is not a hobby. For the operator who takes it seriously, chess is a cognitive laboratory. A controlled environment where the quality of your thinking is stripped of every advantage that normally protects you — your network, your capital, your reputation, your team.
                    </p>
                    <p style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9 }}>
                      At the board, you have only your mind.
                    </p>
                  </div>

                  <a
                    href="/journal/why-serious-operators-play-chess"
                    style={{ ...mono, fontSize: "12px", letterSpacing: "0.08em", color: "var(--color-brass)", textDecoration: "none", display: "inline-block", marginTop: "40px" }}
                  >
                    Read the article →
                  </a>
                </div>

                {/* Right — typographic card */}
                <div
                  style={{
                    backgroundColor: "var(--color-navy)",
                    padding: "48px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "360px",
                  }}
                >
                  <p style={{ ...mono, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-brass)" }}>
                    The Journal — 001
                  </p>

                  <p
                    className="font-normal"
                    style={{
                      ...display,
                      fontSize: "1.2rem",
                      color: "var(--color-stone)",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      marginTop: "48px",
                      marginBottom: "48px",
                    }}
                  >
                    "The board strips away every advantage that normally protects you. At the board, you have only your mind."
                  </p>

                  <div>
                    <hr style={{ border: "none", height: "1px", width: "40px", backgroundColor: "var(--color-brass)", margin: 0 }} />
                    <p style={{ ...mono, fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,242,236,0.3)", marginTop: "16px" }}>
                      Sovereign Chess Society
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 3 — COMING NEXT ──────────────────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16 md:py-20" style={{ backgroundColor: "var(--color-navy)" }}>
            <div className="w-full max-w-[1080px] mx-auto">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
                Coming Next
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    n: "002",
                    title: "The Psychology of the Losing Position",
                    subtitle: "What happens to your thinking when the board is against you.",
                  },
                  {
                    n: "003",
                    title: "Pattern Recognition Under Pressure",
                    subtitle: "How grandmasters process complexity — and what operators can learn from it.",
                  },
                  {
                    n: "004",
                    title: "The Sacrifice",
                    subtitle: "When giving something up is the strongest move available.",
                  },
                ].map((card) => (
                  <div
                    key={card.n}
                    className="pt-8"
                    style={{ borderTop: "1px solid rgba(245,242,236,0.15)" }}
                  >
                    <p style={{ ...mono, fontSize: "11px", color: "var(--color-brass)", marginBottom: "12px" }}>
                      {card.n}
                    </p>
                    <h3
                      className="font-normal"
                      style={{ ...display, fontSize: "1.2rem", color: "var(--color-stone)", lineHeight: 1.3 }}
                    >
                      {card.title}
                    </h3>
                    <p style={{ ...sans, fontSize: "14px", color: "rgba(245,242,236,0.5)", lineHeight: 1.7, marginTop: "8px", fontStyle: "italic" }}>
                      {card.subtitle}
                    </p>
                    <p style={{ ...mono, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,242,236,0.3)", marginTop: "16px" }}>
                      Forthcoming
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 4 — JOURNAL MISSION ──────────────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16 text-center" style={{ backgroundColor: "var(--color-stone)" }}>
            <div className="w-full max-w-[640px] mx-auto flex flex-col items-center">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-slate)" }}>
                The Mission
              </p>

              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9 }}>
                  The Journal exists to answer one question: what can chess reveal about how serious operators think?
                </p>
                <p style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9 }}>
                  Every article is written for founders, investors, and executives who take both chess and their work seriously. Not as entertainment. As intellectual infrastructure.
                </p>
              </div>

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.08em", color: "rgba(92,100,112,0.5)", marginTop: "32px" }}>
                Published by the Sovereign Chess Society · Dubai · MMXXVI
              </p>

            </div>
          </section>
        </RevealSection>

      </div>

      <Footer />
    </>
  );
}
