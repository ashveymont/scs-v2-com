import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Why Serious Operators Play Chess — The Journal",
  description: "Chess is not a hobby. For the operator who takes it seriously, chess is a cognitive laboratory. Published by the Sovereign Chess Society.",
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

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-normal"
      style={{
        ...display,
        fontSize: "1.3rem",
        color: "var(--color-navy)",
        lineHeight: 1.6,
        marginTop: "40px",
        marginBottom: "40px",
        paddingLeft: "32px",
        borderLeft: "2px solid rgba(176,141,87,0.4)",
      }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        ...sans,
        fontWeight: 600,
        fontSize: "13px",
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
        color: "var(--color-brass)",
        marginTop: "64px",
        marginBottom: "24px",
      }}
    >
      {children}
    </p>
  );
}

const bodyText = (text: string, key: number) => (
  <p
    key={key}
    style={{
      ...{ fontFamily: "var(--font-inter), system-ui, sans-serif" },
      fontSize: "clamp(17px, 2vw, 19px)",
      color: "var(--color-charcoal)",
      lineHeight: 1.95,
    }}
  >
    {text}
  </p>
);

export default function ArticlePage() {
  return (
    <>
      <Nav />

      <div style={{ paddingTop: "62px" }}>

        {/* ── ARTICLE HERO ─────────────────────────────────────────────────── */}
        <section className="px-6 py-24 text-center" style={{ backgroundColor: "var(--color-stone)" }}>
          <div className="w-full max-w-[680px] mx-auto flex flex-col items-center">

            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
              The Journal — 001
            </p>

            <h1
              className="font-normal tracking-[-0.02em]"
              style={{
                ...display,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--color-navy)",
                lineHeight: 1.2,
                marginTop: "16px",
              }}
            >
              Why Serious Operators Play Chess
            </h1>

            <p
              className="font-normal"
              style={{
                ...display,
                fontSize: "1.2rem",
                color: "var(--color-slate)",
                lineHeight: 1.5,
                marginTop: "16px",
                fontStyle: "italic",
              }}
            >
              And what it reveals about the quality of their thinking
            </p>

            <p style={{ ...mono, fontSize: "10px", letterSpacing: "0.08em", color: "rgba(92,100,112,0.5)", marginTop: "32px" }}>
              Sovereign Chess Society · The Journal · MMXXVI
            </p>

            <hr style={{ border: "none", height: "1px", width: "40px", backgroundColor: "var(--color-brass)", margin: "32px auto 0" }} />

          </div>
        </section>

        {/* ── ARTICLE BODY ─────────────────────────────────────────────────── */}
        <section className="px-6 pb-24" style={{ backgroundColor: "var(--color-stone)" }}>
          <div
            className="w-full max-w-[640px] mx-auto"
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >

            {/* Opening — no section heading */}
            {[
              "Chess is not a hobby.",
              "For the operator who takes it seriously, chess is a cognitive laboratory. A controlled environment where the quality of your thinking is stripped of every advantage that normally protects you — your network, your capital, your reputation, your team.",
              "At the board, you have only your mind.",
              "This is why chess attracts a specific kind of serious person. Not the person who wants to win. The person who wants to know how they think — and whether it is good enough.",
            ].map(bodyText)}

            {/* Section: The board does not lie */}
            <SectionHeading>The Board Does Not Lie</SectionHeading>

            {[
              "In business, feedback is slow, noisy, and easy to misinterpret. A bad decision can look like a good one for years. A good decision can be punished by bad luck. The signal is buried in the noise.",
              "Chess removes the noise entirely.",
              "Every move is immediately part of the position. There is no market to blame. No team to credit. No timing to invoke. The position reflects exactly the quality of every decision that preceded it.",
            ].map(bodyText)}

            <PullQuote>
              This is uncomfortable for operators who have learned to manage perception as skillfully as they manage performance. At the board, perception is irrelevant. The position is the truth.
            </PullQuote>

            {[
              "Strong operators are drawn to this. Not because they are masochists. Because they understand that honest feedback — however uncomfortable — is the most valuable input available. And honest feedback is extraordinarily rare at the level they operate.",
            ].map(bodyText)}

            {/* Section: Pattern recognition */}
            <SectionHeading>Pattern Recognition Under Pressure</SectionHeading>

            {[
              "The grandmaster does not calculate every possible move.",
              "There are approximately 10¹²⁰ possible chess games — more than the number of atoms in the observable universe. Calculating everything is not possible. It never was.",
              "What grandmasters develop instead is pattern recognition so refined that the correct move often appears before the calculation begins. They have seen this structure before. They know what it requires.",
            ].map(bodyText)}

            <PullQuote>
              The competent operator analyses each situation from first principles. Thorough. Slow. Dependent on complete information. The exceptional operator recognises the pattern.
            </PullQuote>

            {[
              "Chess accelerates the development of pattern recognition because it compresses experience. A serious player makes more consequential decisions in a single afternoon of chess than a business leader makes in a month of meetings.",
              "The patterns accumulate. The recognition sharpens.",
            ].map(bodyText)}

            {/* Section: Psychology of losing */}
            <SectionHeading>The Psychology of the Losing Position</SectionHeading>

            {[
              "Every serious chess player knows what it feels like to be losing.",
              "Not the casual discomfort of being behind on points. The particular psychological state of knowing the position is objectively worse — and that you put it there.",
              "What you do in a losing position reveals everything about how you think under pressure.",
            ].map(bodyText)}

            <PullQuote>
              The weak player panics. They make desperate moves — sacrifices that create the appearance of activity without improving the position. They are playing to feel better, not to play better.
            </PullQuote>

            {[
              "The strong player recalibrates. They accept the reality of the position without being defeated by it. They find the most resilient continuation — the move that gives the opponent the most problems, that keeps the most options open, that makes the path to victory as narrow as possible.",
              "This is not optimism. It is discipline.",
              "The operator who has trained this response at the chess board carries it into the boardroom, the negotiation, the moment when the market moves against them. They do not perform confidence. They practice the cognitive habit of finding the best available move — whatever the position.",
            ].map(bodyText)}

            {/* Section: Why the Society exists */}
            <SectionHeading>Why the Society Exists</SectionHeading>

            {[
              "Chess is the shared language of the Sovereign Chess Society not because every member is a strong player.",
              "Because every member understands what the game reveals.",
              "The board strips away the advantages that normally separate serious people from honest self-assessment. At the board, you cannot delegate. You cannot reframe. You cannot wait for more information.",
              "You must think. Clearly. Under pressure. With incomplete information. Against an opponent who is trying to exploit every weakness in your thinking.",
            ].map(bodyText)}

            <p
              className="font-normal"
              style={{
                ...display,
                fontSize: "1.3rem",
                color: "var(--color-navy)",
                lineHeight: 1.6,
                fontStyle: "italic",
                marginTop: "40px",
              }}
            >
              This is the closest most operators will ever come to an honest assessment of how their mind works.
            </p>
            <p
              className="font-normal"
              style={{
                ...display,
                fontSize: "1.3rem",
                color: "var(--color-navy)",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              The Society exists to create a room where people who have taken that assessment seriously — and continued to pursue improvement — can find their peers.
            </p>
            <p
              className="font-normal"
              style={{
                ...display,
                fontSize: "1.3rem",
                color: "var(--color-navy)",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              Chess made them. The room keeps them sharp.
            </p>

            {/* Article close */}
            <div
              style={{
                marginTop: "64px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(92,100,112,0.15)",
              }}
            >
              <p style={{ ...sans, fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.8 }}>
                The Journal is published by the Sovereign Chess Society. It examines chess, capital, and cognition through the lens of serious operators.
              </p>
              <a
                href="/journal"
                style={{
                  ...mono,
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  color: "var(--color-brass)",
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: "24px",
                }}
              >
                ← Back to the Journal
              </a>
            </div>

          </div>
        </section>

        {/* ── ARTICLE CTA ──────────────────────────────────────────────────── */}
        <RevealSection>
          <section
            className="px-6 py-16 text-center"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            <div className="w-full max-w-[640px] mx-auto flex flex-col items-center">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
                The Society
              </p>

              <h2
                className="font-normal tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  color: "var(--color-stone)",
                  lineHeight: 1.4,
                  marginTop: "16px",
                }}
              >
                If this resonated, the application is the appropriate next step.
              </h2>

              <p style={{ ...sans, fontSize: "15px", color: "rgba(245,242,236,0.60)", lineHeight: 1.8, marginTop: "16px" }}>
                Founding membership is limited to 30 members.
              </p>

              <a
                href="/application"
                style={{
                  ...sans,
                  backgroundColor: "transparent",
                  color: "var(--color-stone)",
                  border: "1px solid var(--color-stone)",
                  padding: "16px 40px",
                  borderRadius: "2px",
                  fontWeight: 500,
                  fontSize: "14px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  marginTop: "32px",
                  display: "inline-block",
                }}
              >
                Begin Application
              </a>

            </div>
          </section>
        </RevealSection>

      </div>

      <Footer />
    </>
  );
}
