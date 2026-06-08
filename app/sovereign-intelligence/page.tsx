import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "Sovereign Intelligence — Chess, Capital and Cognition",
  description: "The institutional publication of the Sovereign Chess Society. Quarterly research at the intersection of chess, capital, and cognition for serious operators in Dubai.",
  openGraph: {
    title: "Sovereign Intelligence — Chess, Capital and Cognition",
    description: "The institutional publication. Issue I: The Opening Trap — what the first ten moves reveal about how serious operators think.",
    url: "https://www.sovereignchesssociety.com/sovereign-intelligence",
  },
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

// Pull quote component
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-normal"
      style={{
        ...display,
        fontSize: "1.3rem",
        color: "var(--color-navy)",
        lineHeight: 1.6,
        marginTop: "48px",
        marginBottom: "48px",
        paddingLeft: "32px",
        borderLeft: "2px solid rgba(176,141,87,0.4)",
      }}
    >
      {children}
    </p>
  );
}

export default function SovereignIntelligencePage() {
  return (
    <>
      <Nav />

      <div style={{ paddingTop: "62px" }}>

        {/* ── SECTION 1 — HERO ─────────────────────────────────────────────── */}
        <section
          className="flex flex-col items-center justify-center px-6 py-24 text-center"
          style={{ backgroundColor: "var(--color-navy)", minHeight: "50vh" }}
        >
          <div className="w-full max-w-[720px] mx-auto flex flex-col items-center">

            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
              Sovereign Intelligence
            </p>

            <h1
              className="font-normal tracking-[-0.02em]"
              style={{
                ...display,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "var(--color-stone)",
                lineHeight: 1.2,
                marginTop: "16px",
              }}
            >
              The institutional publication<br />
              of the Society.
            </h1>

            <p
              style={{
                ...sans,
                fontSize: "16px",
                color: "rgba(245,242,236,0.70)",
                lineHeight: 1.8,
                marginTop: "24px",
                maxWidth: "480px",
              }}
            >
              Quarterly. Researched. Permanent. Sovereign Intelligence examines the intersection of chess, capital, and cognition — through the lens of serious operators.
            </p>

            <div className="flex flex-wrap justify-center" style={{ marginTop: "40px", gap: "16px" }}>
              <a
                href="mailto:intelligence@sovereignchesssociety.com"
                style={{
                  ...sans,
                  backgroundColor: "var(--color-brass)",
                  color: "var(--color-navy)",
                  padding: "16px 32px",
                  borderRadius: "2px",
                  fontWeight: 500,
                  fontSize: "14px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Request the current issue
              </a>
              <a
                href="#article"
                style={{
                  ...sans,
                  backgroundColor: "transparent",
                  color: "var(--color-stone)",
                  border: "1px solid var(--color-stone)",
                  padding: "16px 32px",
                  borderRadius: "2px",
                  fontWeight: 500,
                  fontSize: "14px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Read Issue I
              </a>
            </div>

          </div>
        </section>

        {/* ── SECTION 2 — CURRENT ISSUE CARD ──────────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16 md:py-24" style={{ backgroundColor: "var(--color-stone)" }}>
            <div className="w-full max-w-[1080px] mx-auto">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-slate)" }}>
                Current Issue
              </p>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 mt-12 items-center">

                {/* Left — typographic cover */}
                <div className="flex justify-center md:justify-start">
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "320px",
                      aspectRatio: "3/4",
                      backgroundColor: "var(--color-navy)",
                      border: "1px solid rgba(13,19,33,0.15)",
                      padding: "40px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Top */}
                    <div>
                      <p style={{ ...mono, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-brass)" }}>
                        Sovereign Intelligence
                      </p>
                      <p style={{ ...mono, fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,242,236,0.4)", marginTop: "8px" }}>
                        Issue I
                      </p>
                    </div>

                    {/* Middle */}
                    <div style={{ textAlign: "center" }}>
                      <p className="font-normal" style={{ ...display, fontSize: "8rem", color: "var(--color-stone)", lineHeight: 1 }}>
                        I
                      </p>
                      <p style={{ ...mono, fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,242,236,0.5)", marginTop: "16px" }}>
                        The Opening Trap
                      </p>
                    </div>

                    {/* Bottom */}
                    <div>
                      <hr style={{ border: "none", height: "1px", width: "40px", backgroundColor: "var(--color-brass)", margin: 0 }} />
                      <p style={{ ...mono, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,242,236,0.4)", marginTop: "12px" }}>
                        Q1 MMXXVI
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right — issue detail */}
                <div>
                  <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
                    Issue I — Q1 MMXXVI
                  </p>

                  <h2
                    className="font-normal tracking-[-0.02em]"
                    style={{
                      ...display,
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      color: "var(--color-navy)",
                      lineHeight: 1.3,
                      marginTop: "16px",
                    }}
                  >
                    The Opening Trap
                  </h2>

                  <p className="font-normal" style={{ ...display, fontSize: "1.1rem", color: "var(--color-slate)", marginTop: "8px", fontStyle: "italic" }}>
                    What the first ten moves reveal about how serious operators think.
                  </p>

                  <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                    {[
                      "Every game begins with an opening. So does every venture. Every negotiation. Every consequential decision.",
                      "The opening is where most operators lose — not because they make obvious mistakes, but because they optimise for the wrong things.",
                      "This issue examines the opening trap: the systematic errors serious operators make in the earliest stages of their most important decisions — and what chess reveals about how to avoid them.",
                    ].map((para, i) => (
                      <p key={i} style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9 }}>
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center" style={{ marginTop: "32px", gap: "24px" }}>
                    <a
                      href="#article"
                      style={{ ...mono, fontSize: "12px", letterSpacing: "0.08em", color: "var(--color-brass)", textDecoration: "none" }}
                    >
                      Read full issue ↓
                    </a>
                    <a
                      href="mailto:intelligence@sovereignchesssociety.com"
                      style={{ ...mono, fontSize: "12px", letterSpacing: "0.08em", color: "var(--color-slate)", textDecoration: "none" }}
                    >
                      Request member edition →
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 3 — THE ARTICLE ──────────────────────────────────────── */}
        <section
          id="article"
          className="px-6 py-16 md:py-16"
          style={{ backgroundColor: "var(--color-stone)" }}
        >
          <div className="w-full max-w-[680px] mx-auto">

            {/* Divider */}
            <hr style={{ border: "none", height: "1px", width: "80px", backgroundColor: "rgba(92,100,112,0.2)", margin: "0 auto 64px" }} />

            {/* Article header */}
            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-slate)", textAlign: "center" }}>
              Sovereign Intelligence — Issue I
            </p>

            <h2
              className="font-normal tracking-[-0.02em]"
              style={{
                ...display,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                color: "var(--color-navy)",
                lineHeight: 1.2,
                marginTop: "16px",
                textAlign: "center",
              }}
            >
              The Opening Trap
            </h2>

            <p className="font-normal" style={{ ...display, fontSize: "1.1rem", color: "var(--color-slate)", marginTop: "12px", textAlign: "center", fontStyle: "italic" }}>
              What the first ten moves reveal about how serious operators think
            </p>

            <p style={{ ...mono, fontSize: "10px", letterSpacing: "0.08em", color: "rgba(92,100,112,0.5)", marginTop: "24px", textAlign: "center" }}>
              Sovereign Chess Society · Q1 MMXXVI
            </p>

            <hr style={{ border: "none", height: "1px", width: "40px", backgroundColor: "var(--color-brass)", margin: "32px auto 48px" }} />

            {/* Article body */}
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

              {/* Editor's Note */}
              <div>
                <p style={{ ...sans, fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brass)", marginBottom: "16px" }}>
                  Editor's Note
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "Every game begins with an opening.",
                    "So does every venture. Every negotiation. Every consequential decision.",
                    "The opening is where most operators lose — not because they make obvious mistakes, but because they optimise for the wrong things. Comfort over correctness. Familiarity over fitness. The move that feels right over the move that is right.",
                    "This issue examines the opening trap: the systematic errors that serious operators make in the earliest stages of their most important decisions — and what chess reveals about how to avoid them.",
                  ].map((para, i) => (
                    <p key={i} style={{ ...sans, fontSize: "clamp(17px, 2vw, 19px)", color: "var(--color-charcoal)", lineHeight: 1.95 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Section I */}
              <div>
                <p style={{ ...sans, fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brass)", marginBottom: "16px" }}>
                  I. The Illusion of the Familiar Opening
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "Every chess player has a favourite opening.",
                    "The Sicilian Defence. The King's Indian. The London System.",
                    "They return to it game after game — not always because it is objectively strongest, but because it is known. Comfortable. Rehearsed.",
                    "This is the first opening trap.",
                  ].map((para, i) => (
                    <p key={i} style={{ ...sans, fontSize: "clamp(17px, 2vw, 19px)", color: "var(--color-charcoal)", lineHeight: 1.95 }}>
                      {para}
                    </p>
                  ))}
                </div>

                <PullQuote>
                  Familiarity is not the same as fitness. The opening that served you well at 1400 may be the ceiling that prevents you reaching 1800.
                </PullQuote>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "Serious operators fall into this trap constantly. They apply the frameworks that generated their first success to situations those frameworks were never designed for. They call it experience. The board calls it a losing position.",
                    "The grandmaster's advantage is not that they know more openings. It is that they evaluate each position on its own terms — without the distortion of preference, habit, or identity.",
                  ].map((para, i) => (
                    <p key={i} style={{ ...sans, fontSize: "clamp(17px, 2vw, 19px)", color: "var(--color-charcoal)", lineHeight: 1.95 }}>
                      {para}
                    </p>
                  ))}
                </div>

                <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p style={{ ...sans, fontWeight: 500, fontSize: "17px", color: "var(--color-navy)", lineHeight: 1.7 }}>
                    The question is not: what do I know how to do?
                  </p>
                  <p style={{ ...sans, fontWeight: 500, fontSize: "17px", color: "var(--color-navy)", lineHeight: 1.7 }}>
                    The question is: what does this position require?
                  </p>
                </div>
              </div>

              {/* Section II */}
              <div>
                <p style={{ ...sans, fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brass)", marginBottom: "16px" }}>
                  II. Tempo and the Cost of Passive Play
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "In chess, tempo is everything.",
                    "A move that does not improve your position wastes a tempo. Waste enough tempos and your opponent controls the board — not through brilliance, but through your passivity.",
                    "Most operators understand urgency. Few understand tempo.",
                  ].map((para, i) => (
                    <p key={i} style={{ ...sans, fontSize: "clamp(17px, 2vw, 19px)", color: "var(--color-charcoal)", lineHeight: 1.95 }}>
                      {para}
                    </p>
                  ))}
                </div>

                <PullQuote>Urgency is emotional. Tempo is structural.</PullQuote>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "A founder who spends six months refining a pitch deck before speaking to a single customer is not being careful. They are losing tempo. The board is moving while they are preparing to move.",
                    "The opening principle is simple: every move must improve your position or contest your opponent's. A move that does neither is a loss — regardless of how necessary it felt.",
                    "Applied to capital allocation, hiring, market entry, or negotiation: the question is never whether an action feels productive. The question is whether it improves the position.",
                    "Passive play feels safe. It rarely is.",
                  ].map((para, i) => (
                    <p key={i} style={{ ...sans, fontSize: "clamp(17px, 2vw, 19px)", color: "var(--color-charcoal)", lineHeight: 1.95 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Section III */}
              <div>
                <p style={{ ...sans, fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brass)", marginBottom: "16px" }}>
                  III. The Centre and the Question of Control
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "Classical chess theory holds one principle above almost all others: control the centre.",
                    "The centre is where the game is decided. Pieces in the centre have maximum mobility. Pieces on the periphery have minimum influence.",
                    "The opening trap for operators is periphery thinking — spending the first phase of any endeavour optimising for things that are not the centre.",
                  ].map((para, i) => (
                    <p key={i} style={{ ...sans, fontSize: "clamp(17px, 2vw, 19px)", color: "var(--color-charcoal)", lineHeight: 1.95 }}>
                      {para}
                    </p>
                  ))}
                </div>

                <PullQuote>
                  Brand before product. Culture decks before customers. Organisational structure before revenue. These are not irrelevant. They are simply not the centre.
                </PullQuote>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "The centre — in any opening — is the question that determines everything else. In a business context: do customers want this, and will they pay for it? In a negotiation: what does the other party actually need? In a career: what is the one move that opens the most subsequent moves?",
                    "Operators who control the centre early make the subsequent moves easier. Operators who spend the opening on the periphery find themselves defending for the rest of the game.",
                  ].map((para, i) => (
                    <p key={i} style={{ ...sans, fontSize: "clamp(17px, 2vw, 19px)", color: "var(--color-charcoal)", lineHeight: 1.95 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Section IV */}
              <div>
                <p style={{ ...sans, fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brass)", marginBottom: "16px" }}>
                  IV. The Trap Within the Trap
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "Here is what makes opening traps dangerous: they are designed to look like opportunities.",
                    "The Scholar's Mate looks like a quick win. The poisoned pawn variation looks like a free pawn. The trap works because the victim sees what they want to see — not what the position actually contains.",
                    "The most consequential opening traps in business and capital operate the same way.",
                  ].map((para, i) => (
                    <p key={i} style={{ ...sans, fontSize: "clamp(17px, 2vw, 19px)", color: "var(--color-charcoal)", lineHeight: 1.95 }}>
                      {para}
                    </p>
                  ))}
                </div>

                <PullQuote>
                  The partnership that looks like distribution but is actually dependency. The funding round that looks like validation but is actually dilution at the wrong moment. The hire that looks like capability but is actually a culture fracture.
                </PullQuote>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "The experienced operator does not avoid these traps through caution. They avoid them through board vision — the capacity to see not just the immediate position, but the positions that follow from it.",
                    "This is what the Strategic Position Review exists to develop.",
                    "When a member brings a decision to the room, the room does not evaluate the move in isolation. It traces the lines forward. It asks: if this move, then what? And after that, what?",
                    "The trap is rarely in the move itself. It is always in what comes after.",
                  ].map((para, i) => (
                    <p key={i} style={{ ...sans, fontSize: "clamp(17px, 2vw, 19px)", color: "var(--color-charcoal)", lineHeight: 1.95 }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Section V */}
              <div>
                <p style={{ ...sans, fontWeight: 600, fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brass)", marginBottom: "16px" }}>
                  V. One Principle
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    "The opening does not win the game.",
                    "The opening determines what kind of game you will play.",
                    "A strong opening creates options. A weak opening creates problems. The rest of the game is spent either expanding your options or solving your problems.",
                    "Serious operators treat every opening — of a venture, a negotiation, a relationship, a decision — as the moment that shapes everything subsequent.",
                    "Not with anxiety. With precision.",
                  ].map((para, i) => (
                    <p key={i} style={{ ...sans, fontSize: "clamp(17px, 2vw, 19px)", color: "var(--color-charcoal)", lineHeight: 1.95 }}>
                      {para}
                    </p>
                  ))}
                </div>

                <p
                  className="font-normal"
                  style={{
                    ...display,
                    fontSize: "1.3rem",
                    color: "var(--color-navy)",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    marginTop: "32px",
                  }}
                >
                  The board is honest. The opening is your first statement of intent. Make it deliberately.
                </p>
              </div>

              {/* Closing meta */}
              <div
                style={{
                  marginTop: "16px",
                  paddingTop: "32px",
                  borderTop: "1px solid rgba(92,100,112,0.15)",
                }}
              >
                <p style={{ ...sans, fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.8 }}>
                  Sovereign Intelligence is the quarterly publication of the Sovereign Chess Society. It examines the intersection of chess, capital, and cognition — through the lens of serious operators.
                </p>
                <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.08em", color: "var(--color-brass)", marginTop: "16px" }}>
                  Issue II — The Sacrifice — publishes Q2 MMXXVI.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 4 — REQUEST ACCESS ───────────────────────────────────── */}
        <RevealSection>
          <section
            className="px-6 py-16 md:py-20 text-center"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            <div className="w-full max-w-[640px] mx-auto flex flex-col items-center">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
                Member Edition
              </p>

              <h2
                className="font-normal tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "var(--color-stone)",
                  lineHeight: 1.3,
                  marginTop: "16px",
                }}
              >
                The member edition goes further.
              </h2>

              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "20px", maxWidth: "520px" }}>
                {[
                  "The public edition contains the framework. The member edition contains the positions — anonymised Strategic Position Reviews from actual member decisions, examined in full.",
                  "Access to the member edition requires Society membership.",
                ].map((para, i) => (
                  <p key={i} style={{ ...sans, fontSize: "16px", color: "rgba(245,242,236,0.70)", lineHeight: 1.9 }}>
                    {para}
                  </p>
                ))}
              </div>

              <div className="flex flex-col items-center" style={{ marginTop: "40px", gap: "16px" }}>
                <a
                  href="/membership"
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
                  }}
                >
                  Apply For Membership
                </a>
                <a
                  href="mailto:intelligence@sovereignchesssociety.com"
                  style={{
                    ...mono,
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    color: "var(--color-brass)",
                    textDecoration: "none",
                  }}
                >
                  Request public edition by email
                </a>
              </div>

            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 5 — ARCHIVE ──────────────────────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16" style={{ backgroundColor: "var(--color-stone)" }}>
            <div className="w-full max-w-[1080px] mx-auto">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-slate)" }}>
                The Archive
              </p>

              <h2
                className="font-normal"
                style={{
                  ...display,
                  fontSize: "1.6rem",
                  color: "var(--color-navy)",
                  lineHeight: 1.25,
                  marginTop: "16px",
                }}
              >
                Published issues.
              </h2>

              <div style={{ marginTop: "40px" }}>

                {/* Live issue */}
                <div
                  className="flex justify-between items-baseline gap-8"
                  style={{ borderBottom: "1px solid rgba(92,100,112,0.15)", paddingTop: "24px", paddingBottom: "24px", flexWrap: "wrap" }}
                >
                  <p style={{ ...sans, fontWeight: 500, fontSize: "15px", color: "var(--color-navy)" }}>
                    Issue I — The Opening Trap
                  </p>
                  <p style={{ ...mono, fontSize: "11px", color: "var(--color-slate)", letterSpacing: "0.06em" }}>
                    Q1 MMXXVI
                  </p>
                  <a
                    href="#article"
                    style={{ ...mono, fontSize: "11px", color: "var(--color-brass)", letterSpacing: "0.06em", textDecoration: "none" }}
                  >
                    Read →
                  </a>
                </div>

                {/* Future issues */}
                {[
                  { title: "Issue II — The Sacrifice",       period: "Q2 MMXXVI" },
                  { title: "Issue III — Pattern Recognition", period: "Q3 MMXXVI" },
                  { title: "Issue IV — The Endgame",          period: "Q4 MMXXVI" },
                ].map((issue) => (
                  <div
                    key={issue.title}
                    className="flex justify-between items-baseline gap-8"
                    style={{
                      borderBottom: "1px solid rgba(92,100,112,0.15)",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      opacity: 0.3,
                      flexWrap: "wrap",
                    }}
                  >
                    <p style={{ ...sans, fontWeight: 500, fontSize: "15px", color: "var(--color-navy)" }}>
                      {issue.title}
                    </p>
                    <p style={{ ...mono, fontSize: "11px", color: "var(--color-slate)", letterSpacing: "0.06em" }}>
                      {issue.period}
                    </p>
                    <p style={{ ...mono, fontSize: "11px", color: "var(--color-slate)", letterSpacing: "0.06em" }}>
                      Forthcoming
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </section>
        </RevealSection>

      </div>

      <Footer />
    </>
  );
}
