import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import ParallaxSection from "@/components/ParallaxSection";
import FadeInOnMount from "@/components/FadeInOnMount";

export const metadata: Metadata = {
  title: "About — Sovereign Chess Society Dubai",
  description: "The Sovereign Chess Society was founded in Dubai for intellectually serious operators. A private institution where chess is the shared language and the room is the product.",
  openGraph: {
    title: "About — Sovereign Chess Society Dubai",
    description: "Built for a room that did not exist. The origin, founding insight, and vision of the Sovereign Chess Society.",
    url: "https://www.sovereignchesssociety.com/about",
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

export default function AboutPage() {
  return (
    <>
      <Nav />

      <div style={{ backgroundColor: "var(--color-stone)", paddingTop: "62px" }}>

        {/* ── SECTION 1 — HERO ─────────────────────────────────────────────── */}
        <section
          className="flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center"
          style={{ minHeight: "50vh" }}
        >
          <FadeInOnMount delay={200} className="w-full max-w-[720px] mx-auto flex flex-col items-center">

            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
              About
            </p>

            <h1
              className="font-normal tracking-[-0.02em]"
              style={{
                ...display,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                color: "var(--color-navy)",
                lineHeight: 1.2,
                marginTop: "16px",
              }}
            >
              The Society.
            </h1>

            <p
              className="font-normal mx-auto"
              style={{
                ...display,
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                color: "var(--color-slate)",
                lineHeight: 1.6,
                marginTop: "24px",
                maxWidth: "560px",
              }}
            >
              Built on a single observation. Founded in Dubai. Designed to outlast its founder.
            </p>

          </FadeInOnMount>
        </section>

        {/* ── SECTION 2 — THE ORIGIN ───────────────────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16 md:py-24" style={{ backgroundColor: "var(--color-stone)" }}>
            <div className="w-full max-w-[680px] mx-auto">

              <hr style={{ border: "none", height: "1px", width: "80px", backgroundColor: "rgba(92,100,112,0.2)", margin: "0 auto 64px" }} />

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-slate)", textAlign: "center" }}>
                The Origin
              </p>

              <h2
                className="font-normal tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  color: "var(--color-navy)",
                  lineHeight: 1.3,
                  marginTop: "16px",
                  textAlign: "center",
                }}
              >
                Built for a room that didn't exist.
              </h2>

              <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "40px" }}>

                {/* First unit — context */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p style={{ ...sans, fontSize: "17px", color: "var(--color-charcoal)", lineHeight: 1.9 }}>
                    Dubai is home to thousands of exceptional operators.
                  </p>
                  <p style={{ ...sans, fontSize: "17px", color: "var(--color-charcoal)", lineHeight: 1.9 }}>
                    Founders who have built significant companies. Investors who deploy serious capital. Family office principals who think in decades.
                  </p>
                </div>

                {/* Second unit — the problem */}
                <p style={{ ...sans, fontSize: "17px", color: "var(--color-charcoal)", lineHeight: 1.9 }}>
                  Most of them are isolated by their own success.
                </p>

                {/* Pull statement */}
                <p
                  className="font-normal"
                  style={{
                    ...display,
                    fontSize: "1.4rem",
                    color: "var(--color-navy)",
                    lineHeight: 1.5,
                    marginTop: "8px",
                    marginBottom: "8px",
                    maxWidth: "520px",
                  }}
                >
                  The higher you climb,<br />
                  the fewer peers you find.
                </p>

                {/* Third unit — the diagnosis */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p style={{ ...sans, fontSize: "17px", color: "var(--color-charcoal)", lineHeight: 1.9 }}>
                    The rooms available to serious people — private clubs, networking groups, masterminds — optimize for the wrong things.
                  </p>
                  <p style={{ ...sans, fontSize: "17px", color: "var(--color-charcoal)", lineHeight: 1.9 }}>
                    Status. Transactions. Visibility.
                  </p>
                </div>

                {/* Fourth unit — the founding observation */}
                <p style={{ ...sans, fontSize: "17px", color: "var(--color-charcoal)", lineHeight: 1.9 }}>
                  The Sovereign Chess Society was founded on a single observation: the most valuable thing a serious operator can access is a room of equally serious people, with no agenda other than the quality of the thinking.
                </p>

                {/* Fifth unit — chess explained */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p style={{ ...sans, fontSize: "17px", color: "var(--color-charcoal)", lineHeight: 1.9 }}>
                    Chess became the mechanism. Not because every member is a strong player. Because chess is the one game that strips away everything except how you think.
                  </p>
                  <p style={{ ...sans, fontSize: "17px", color: "var(--color-charcoal)", lineHeight: 1.9 }}>
                    It is an honest game. It reveals character. It creates a shared language between people who would otherwise have no common ground.
                  </p>
                </div>

                {/* Closing line */}
                <p style={{ ...sans, fontWeight: 500, fontSize: "17px", color: "var(--color-navy)", lineHeight: 1.9 }}>
                  The Society is that room.
                </p>

              </div>

            </div>
          </section>
        </RevealSection>

        {/* ── EDITORIAL IMAGE — origin → founder pause ─────────────────────── */}
        <div style={{ backgroundColor: "var(--color-stone)" }}>
          <ParallaxSection
            src="/images/background.jpg"
            aspectRatio="21/9"
            className="mt-10 md:mt-16 mb-0"
          />
        </div>

        {/* ── SECTION 3 — THE FOUNDER ──────────────────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16 md:py-24" style={{ backgroundColor: "var(--color-navy)" }}>
            <div className="w-full max-w-[1080px] mx-auto">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
                The Founder
              </p>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 mt-12 items-start">

                {/* Left */}
                <div>
                  <h2
                    className="font-normal tracking-[-0.02em]"
                    style={{
                      ...display,
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      color: "var(--color-stone)",
                      lineHeight: 1.2,
                    }}
                  >
                    Ashan Veymont
                  </h2>

                  <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-brass)", marginTop: "16px" }}>
                    Founder — Sovereign Chess Society
                  </p>

                  <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
                    {[
                      "Ashan Veymont is a FIDE Chess Master and two-time State Chess Champion. He has spent the better part of a decade operating at the intersection of chess, capital, and strategy.",
                      "He founded the Sovereign Chess Society after observing a consistent gap in the market for serious operators: there was no private institution that combined intellectual rigour, cultural depth, and genuine peer quality.",
                      "His role within the Society is Founder and Custodian. The institution is designed to outlast any individual — including its founder.",
                    ].map((para, i) => (
                      <p key={i} style={{ ...sans, fontSize: "16px", color: "rgba(245,242,236,0.70)", lineHeight: 1.9 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right — pull quote */}
                <div
                  style={{
                    paddingLeft: "40px",
                    borderLeft: "1px solid rgba(176,141,87,0.25)",
                  }}
                >
                  <p
                    className="font-normal"
                    style={{
                      ...display,
                      fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                      color: "var(--color-stone)",
                      lineHeight: 1.5,
                      fontStyle: "italic",
                    }}
                  >
                    "The most valuable thing a serious operator can access is a room of equally serious people, with no agenda other than the quality of the thinking."
                  </p>

                  <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.08em", color: "var(--color-brass)", marginTop: "24px", textTransform: "uppercase" }}>
                    — Ashan Veymont, Founder
                  </p>
                </div>

              </div>
            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 4 — THE BELIEF SYSTEM ────────────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16 md:py-24" style={{ backgroundColor: "var(--color-stone)" }}>
            <div className="w-full max-w-[1080px] mx-auto">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-slate)" }}>
                The Belief System
              </p>

              <h2
                className="font-normal tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  color: "var(--color-navy)",
                  lineHeight: 1.25,
                  marginTop: "16px",
                }}
              >
                Seven beliefs.
              </h2>

              <p style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9, marginTop: "16px", maxWidth: "520px" }}>
                The Society is built on seven beliefs. They are not aspirational. They are operational. Every decision the institution makes can be traced back to one of them.
              </p>

              <div style={{ marginTop: "32px" }}>
                {[
                  { n: "01", text: "Thinking quality determines life outcomes more than intelligence." },
                  { n: "02", text: "Chess remains one of humanity's greatest laboratories for decision-making." },
                  { n: "03", text: "The people around you shape the quality of your thinking." },
                  { n: "04", text: "A room's value is determined by its standards." },
                  { n: "05", text: "Wealth without community produces isolation." },
                  { n: "06", text: "Conversation is a form of capital." },
                  { n: "07", text: "Institutions outlast individuals." },
                ].map((belief) => (
                  <div
                    key={belief.n}
                    className="flex gap-8 items-baseline pt-8 pb-8"
                    style={{ borderTop: "1px solid rgba(92,100,112,0.15)" }}
                  >
                    <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", color: "var(--color-brass)", flexShrink: 0, width: "32px" }}>
                      {belief.n}
                    </p>
                    <p style={{ ...sans, fontWeight: 500, fontSize: "16px", color: "var(--color-navy)", lineHeight: 1.6 }}>
                      {belief.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 5 — THE VISION ───────────────────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16 md:py-24 text-center" style={{ backgroundColor: "var(--color-navy)" }}>
            <div className="w-full max-w-[720px] mx-auto">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
                The Vision
              </p>

              <h2
                className="font-normal tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--color-stone)",
                  lineHeight: 1.3,
                  marginTop: "16px",
                }}
              >
                A chapter in every city<br />
                that matters.
              </h2>

              <div
                className="mx-auto text-left"
                style={{ maxWidth: "560px", marginTop: "32px", display: "flex", flexDirection: "column", gap: "24px" }}
              >
                {[
                  "The Society launches in Dubai. This is deliberate. Dubai is home to one of the highest concentrations of ambitious operators on earth — founders, investors, and principals who have chosen to build in one of the world's most consequential cities.",
                  "From Dubai, the Society expands to Singapore. Then London. Then New York. Each chapter maintains identical standards, identical culture, and identical intellectual rigour. A member travelling between cities encounters the same room.",
                  "The vision is a global institution. Built slowly. Built correctly. Built to last.",
                ].map((para, i) => (
                  <p key={i} style={{ ...sans, fontSize: "16px", color: "rgba(245,242,236,0.70)", lineHeight: 1.9 }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* City list */}
              <div
                className="flex flex-wrap justify-center"
                style={{ marginTop: "48px", gap: "48px 48px" }}
              >
                {[
                  { name: "Dubai", active: true },
                  { name: "Singapore", active: false },
                  { name: "London", active: false },
                  { name: "New York", active: false },
                ].map((city) => (
                  <p
                    key={city.name}
                    style={{
                      ...mono,
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: city.active ? "var(--color-brass)" : "rgba(245,242,236,0.30)",
                    }}
                  >
                    {city.name}
                  </p>
                ))}
              </div>

              <p style={{ ...mono, fontSize: "10px", color: "rgba(245,242,236,0.30)", marginTop: "24px", letterSpacing: "0.06em" }}>
                Dubai chapter now accepting founding applications.
              </p>

            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 6 — CLOSING CTA ──────────────────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16 md:py-20 text-center" style={{ backgroundColor: "var(--color-stone)" }}>
            <div className="w-full max-w-[640px] mx-auto flex flex-col items-center">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
                Join the Society
              </p>

              <h2
                className="font-normal tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--color-navy)",
                  lineHeight: 1.3,
                  marginTop: "16px",
                }}
              >
                The founding chapter<br />
                is now accepting applications.
              </h2>

              <p style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9, marginTop: "24px", maxWidth: "480px" }}>
                Founding membership is limited to 30 members. If you believe you belong in this room, the application is the appropriate next step.
              </p>

              <a
                href="/application"
                className="btn-primary mt-10 inline-block"
                style={{
                  ...sans,
                  backgroundColor: "var(--color-navy)",
                  color: "var(--color-stone)",
                  padding: "16px 40px",
                  borderRadius: "2px",
                  fontWeight: 500,
                  fontSize: "14px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
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
