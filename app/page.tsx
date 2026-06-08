import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import RevealSection from "@/components/RevealSection";
import ParallaxSection from "@/components/ParallaxSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Private Home For Intellectually Serious Operators",
  description: "Sovereign Chess Society is a private members institution for founders, investors, executives, and family office principals who share a common language: chess.",
  openGraph: {
    title: "Sovereign Chess Society — Dubai",
    description: "The private home for intellectually serious operators. A private members institution founded in Dubai.",
    url: "https://www.sovereignchesssociety.com",
  },
};

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--color-stone)" }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="flex flex-col items-center justify-center px-6"
        style={{ minHeight: "calc(100vh - 62px)" }}
      >
        <div className="w-full max-w-2xl flex flex-col items-center text-center">

          <p className="label mb-5">
            Dubai&nbsp;&bull;&nbsp;Founded MMXXVI
          </p>

          {/* N4 — clamp for very small screens */}
          <h1
            className="leading-[1.18] font-normal mb-8 tracking-[-0.01em]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-navy)",
              fontSize: "clamp(1.8rem, 8vw, 2.6rem)",
            }}
          >
            The Private Home For<br />
            Intellectually Serious Operators.
          </h1>

          <p
            className="text-base leading-[1.8] font-normal max-w-[600px] mb-14"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              color: "var(--color-slate)",
            }}
          >
            A private members institution for founders, investors, executives,
            and family office principals who share a common language: chess.
          </p>

          {/* R3 — buttons: fixed max-width via .btn-primary / .btn-secondary CSS */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#"
              className="btn-primary inline-block px-7 py-3 text-sm tracking-wide"
              style={{
                backgroundColor: "var(--color-navy)",
                color: "var(--color-stone)",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Apply For Membership
            </a>

            <a
              href="#"
              className="btn-secondary inline-block px-7 py-3 text-sm tracking-wide border"
              style={{
                color: "var(--color-navy)",
                borderColor: "var(--color-navy)",
                backgroundColor: "transparent",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Explore The Society
            </a>
          </div>

        </div>
      </section>

      {/* ── Section A: Parallax Image ─────────────────────────────────────── */}
      {/* Portrait image (5464×8192) scrolls top→bottom through a 21:9 window */}
      <ParallaxSection />

      {/* ── Founding Insight ─────────────────────────────────────────────── */}
      {/* R1 — mobile: py-12 (was py-20) */}
      <RevealSection>
        <section className="flex flex-col items-center px-6 py-12 md:py-20">
          <div className="w-full max-w-[680px] flex flex-col items-center text-center">

            <hr
              className="mb-14 border-0 h-px w-20"
              style={{ backgroundColor: "rgba(92, 100, 112, 0.2)" }}
            />

            <p className="label mb-10">The Founding Insight</p>

            <h2
              className="font-normal mb-14 tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-navy)",
                fontSize: "1.9rem",
                lineHeight: "1.4",
              }}
            >
              Dubai has wealth.<br />
              Dubai has ambition.<br />
              Dubai has intelligence.<br />
              What it lacks is a room.
            </h2>

            <div
              className="text-left w-full flex flex-col gap-7"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                color: "var(--color-charcoal)",
                fontSize: "17px",
                lineHeight: "1.8",
              }}
            >
              <p>
                Most private clubs optimize for status. Most networking groups
                optimize for transactions. Most masterminds optimize for business
                outcomes.
              </p>
              <p>
                The Sovereign Chess Society optimizes for the quality of the
                people in the room.
              </p>
              <p>
                Chess is the mechanism. The room is the product.
              </p>
            </div>

          </div>
        </section>
      </RevealSection>

      {/* ── What The Society Is ──────────────────────────────────────────── */}
      {/* R1 — mobile: py-16 (was py-32) */}
      <RevealSection>
        <section
          className="px-6 py-16 md:py-32"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          <div className="w-full max-w-[1080px] mx-auto">

            <p className="label mb-10" style={{ color: "var(--color-brass)" }}>
              The Society
            </p>

            {/* R1 — headline mb-10 on mobile (was mb-20) */}
            <h2
              className="font-normal mb-10 md:mb-20 tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-stone)",
                fontSize: "1.9rem",
                lineHeight: "1.3",
              }}
            >
              Three things define the room.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">

              <div className="pt-8" style={{ borderTop: "1px solid rgba(245, 242, 236, 0.15)" }}>
                <p className="index mb-6">01</p>
                <h3 className="font-normal mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--color-stone)", fontSize: "1.2rem", lineHeight: "1.3" }}>The Room</h3>
                <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "rgba(245, 242, 236, 0.7)", fontSize: "15px", lineHeight: "1.8" }}>
                  Exceptional people who have achieved enough to be respected,
                  yet remain curious enough to continue growing. The room is the
                  product. Everything else exists to protect it.
                </p>
              </div>

              <div className="pt-8" style={{ borderTop: "1px solid rgba(245, 242, 236, 0.15)" }}>
                <p className="index mb-6">02</p>
                <h3 className="font-normal mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--color-stone)", fontSize: "1.2rem", lineHeight: "1.3" }}>The Board</h3>
                <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "rgba(245, 242, 236, 0.7)", fontSize: "15px", lineHeight: "1.8" }}>
                  Chess is not entertainment. It is the shared language — the
                  cognitive filter that separates this room from every other
                  private institution.
                </p>
              </div>

              <div className="pt-8" style={{ borderTop: "1px solid rgba(245, 242, 236, 0.15)" }}>
                <p className="index mb-6">03</p>
                <h3 className="font-normal mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--color-stone)", fontSize: "1.2rem", lineHeight: "1.3" }}>The Standard</h3>
                <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "rgba(245, 242, 236, 0.7)", fontSize: "15px", lineHeight: "1.8" }}>
                  Quality above scale. Depth above breadth. Contribution above
                  visibility. The standard is not negotiable.
                </p>
              </div>

            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── The Seven Pillars ────────────────────────────────────────────── */}
      {/* R1 — mobile: py-16 (was py-32) */}
      {/* N1 — label changed to "The Gatherings" */}
      <RevealSection>
        <section className="px-6 py-16 md:py-32" style={{ backgroundColor: "var(--color-stone)" }}>
          <div className="w-full max-w-[1080px] mx-auto">
            {/* R1 — gap-8 on mobile (was gap-16) */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-24">

              <div className="md:pt-6">
                {/* N1 — renamed from "The Society" to "The Gatherings" */}
                <p className="label mb-10">The Gatherings</p>
                <h2
                  className="font-normal mb-6 tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontSize: "1.75rem", lineHeight: "1.3" }}
                >
                  What happens<br />inside the room.
                </h2>
                <p className="leading-[1.8]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "var(--color-slate)", fontSize: "14px", maxWidth: "300px" }}>
                  Seven gatherings. Seven purposes. One standard.
                </p>
              </div>

              <div>
                {[
                  { n: "01", title: "Monthly Black Tie Dinner", body: "The Society convenes. Standards are embodied. The room is experienced." },
                  { n: "02", title: "Quarterly Tournament", body: "Members compete. Chess reveals character. The board does not lie." },
                  { n: "03", title: "Strategic Position Review", body: "One member. One decision. The room examines the position." },
                  { n: "04", title: "GM Simultaneous Exhibition", body: "A Grandmaster plays the room. The experience is not forgotten." },
                  { n: "05", title: "Mental Fitness Sessions", body: "The mind that governs the board also governs the business." },
                  { n: "06", title: "The Chamber", body: "Trust creates possibility. The Chamber is where it lives." },
                  { n: "07", title: "Annual Conclave", body: "One gathering. Every member. The institution renews itself." },
                ].map((pillar) => (
                  <div key={pillar.n} className="py-6 flex gap-8 items-baseline" style={{ borderBottom: "1px solid rgba(92, 100, 112, 0.15)" }}>
                    <p className="index shrink-0 w-6">{pillar.n}</p>
                    <div>
                      <p className="mb-1" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "var(--color-charcoal)", fontSize: "15px", fontWeight: 600, lineHeight: "1.4" }}>{pillar.title}</p>
                      <p style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "var(--color-slate)", fontSize: "14px", lineHeight: "1.8" }}>{pillar.body}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── Strategic Position Review ─────────────────────────────────────── */}
      {/* R1 — mobile: py-20 (was py-40) */}
      <RevealSection>
        <section className="px-6 py-20 md:py-40" style={{ backgroundColor: "var(--color-navy)" }}>
          <div className="w-full max-w-[1080px] mx-auto">

            <p className="label mb-10" style={{ color: "var(--color-brass)" }}>
              The Strategic Position Review
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

              {/* Left — headline + body + note */}
              <div>
                <h2
                  className="font-normal mb-10 tracking-[-0.02em]"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-stone)",
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    lineHeight: "1.12",
                  }}
                >
                  The Room<br />
                  Within<br />
                  The Room.
                </h2>

                <div
                  className="flex flex-col gap-6 mb-12"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    color: "rgba(245, 242, 236, 0.70)",
                    fontSize: "16px",
                    lineHeight: "1.9",
                  }}
                >
                  <p>Once per gathering, a member brings one important decision.</p>
                  <p>Not a pitch. Not a presentation. A position.</p>
                  <p>
                    The room examines it. The structure is challenged. The
                    assumptions are tested. The thinking becomes clearer.
                  </p>
                  <p>
                    What leaves the room is not an answer. It is a sharper
                    question.
                  </p>
                </div>

                <p style={{ fontFamily: "var(--font-mono), 'Courier New', monospace", color: "rgba(176, 141, 87, 0.60)", fontSize: "11px", letterSpacing: "0.08em" }}>
                  Reserved for members of the Society.
                </p>
              </div>

              {/* Right — pull quote */}
              {/* R2 — .spr-blockquote adds brass left border on mobile */}
              <div className="flex flex-col justify-center md:pt-4">
                <blockquote
                  className="spr-blockquote font-normal mb-12"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-stone)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    lineHeight: "1.25",
                    letterSpacing: "-0.02em",
                  }}
                >
                  "One member.<br />
                  One decision.<br />
                  The room examines<br />
                  the position."
                </blockquote>

                <div className="flex flex-col gap-5">
                  <hr className="border-0 h-px" style={{ width: "200px", backgroundColor: "rgba(176, 141, 87, 0.4)" }} />
                  <p style={{ fontFamily: "var(--font-mono), 'Courier New', monospace", color: "rgba(92, 100, 112, 0.7)", fontSize: "11px", letterSpacing: "0.10em" }}>
                    Dubai&nbsp;&bull;&nbsp;Est. MMXXVI
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── The Chamber ──────────────────────────────────────────────────── */}
      {/* R1 — mobile: py-16 (was py-36), label mb-8 on mobile */}
      <RevealSection>
        <section className="px-6 py-16 md:py-36" style={{ backgroundColor: "var(--color-stone)" }}>
          <div className="w-full max-w-[720px] mx-auto">

            <p className="label mb-8 md:mb-12" style={{ color: "var(--color-brass)" }}>
              The Chamber
            </p>

            <h2
              className="font-normal mb-14 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontSize: "clamp(2rem, 3.5vw, 2.6rem)", lineHeight: "1.2" }}
            >
              Trust creates possibility.
            </h2>

            <div className="flex flex-col gap-8" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "var(--color-charcoal)", fontSize: "17px", lineHeight: "1.9" }}>
              <p>Inside every institution, there is a room within the room.</p>
              <p>
                The Chamber is where exceptional people — already aligned by
                standards, already tested by the board — discover what becomes
                possible when trust is established first.
              </p>
              <p>
                Introductions happen. Conversations begin. Capital finds its
                direction. Not because it was arranged. Because the room made it
                inevitable.
              </p>
            </div>

          </div>
        </section>
      </RevealSection>

      {/* ── Sovereign Intelligence ───────────────────────────────────────── */}
      {/* R1 — mobile: py-16 (was py-32) */}
      <RevealSection>
        <section className="px-6 py-16 md:py-32" style={{ backgroundColor: "var(--color-navy)" }}>
          <div className="w-full max-w-[1080px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 items-center">

              <div>
                <p className="label mb-10" style={{ color: "var(--color-brass)" }}>
                  Sovereign Intelligence
                </p>
                <h2
                  className="font-normal mb-10 tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-stone)", fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)", lineHeight: "1.25" }}
                >
                  The institutional<br />publication of the Society.
                </h2>
                <div className="flex flex-col gap-6 mb-12" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "rgba(245, 242, 236, 0.70)", fontSize: "16px", lineHeight: "1.8", maxWidth: "380px" }}>
                  <p>Quarterly. Researched. Permanent.</p>
                  <p>The Sovereign Intelligence Report examines the intersection of chess, capital, and cognition — through the lens of serious operators.</p>
                  <p>A public edition is available. The member edition goes further.</p>
                </div>
                <a
                  href="#"
                  className="si-cta"
                  style={{ fontFamily: "var(--font-mono), 'Courier New', monospace", color: "var(--color-brass)", fontSize: "12px", letterSpacing: "0.10em", textDecoration: "none" }}
                >
                  Request the current issue →
                </a>
              </div>

              {/* R4 — .si-card makes width responsive (100% / max 260px) */}
              <div className="flex justify-center md:justify-end">
                <div
                  className="si-card flex flex-col justify-between"
                  style={{
                    padding: "32px 28px 28px",
                    border: "1px solid rgba(245, 242, 236, 0.12)",
                    backgroundColor: "rgba(245, 242, 236, 0.03)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-mono), 'Courier New', monospace", color: "var(--color-brass)", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" }}>Sovereign Intelligence</p>
                  <p className="font-normal" style={{ fontFamily: "var(--font-display)", color: "var(--color-stone)", fontSize: "7rem", lineHeight: "1", letterSpacing: "-0.03em" }}>I</p>
                  <div className="flex flex-col gap-5">
                    <p style={{ fontFamily: "var(--font-mono), 'Courier New', monospace", color: "rgba(92, 100, 112, 0.8)", fontSize: "10px", letterSpacing: "0.16em" }}>Q1 MMXXVI</p>
                    <hr className="border-0 h-px" style={{ backgroundColor: "var(--color-brass)", width: "40px" }} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── Annual Conclave ───────────────────────────────────────────────── */}
      {/* R1 — mobile: py-20 (was py-40) */}
      {/* C2 — .conclave-grid: single column on mobile, 1fr 1fr on desktop */}
      <RevealSection>
        <section className="px-6 py-20 md:py-40" style={{ backgroundColor: "var(--color-stone)" }}>
          <div className="w-full max-w-[1080px] mx-auto">

            <p className="label mb-12" style={{ color: "var(--color-brass)" }}>
              The Annual Conclave
            </p>

            <h2
              className="font-normal mb-10 tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-navy)",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                lineHeight: "1.2",
              }}
            >
              One gathering.<br />
              Every member.<br />
              The institution renews itself.
            </h2>

            <p
              className="mb-20"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                color: "var(--color-slate)",
                fontSize: "17px",
                lineHeight: "1.9",
                maxWidth: "480px",
              }}
            >
              Once each year, the Society convenes.<br />
              Not to transact. Not to perform. To remember what the room is for.
            </p>

            {/* C2 — .conclave-grid handles responsive layout via CSS */}
            <div className="conclave-grid">
              <FadeIn style={{ width: "100%" }}>
                <Image
                  src="/images/conclave-table.JPG"
                  alt=""
                  width={736}
                  height={981}
                  quality={100}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 0 }}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </FadeIn>

              <FadeIn style={{ width: "100%" }} delay={150}>
                <Image
                  src="/images/conclave-gathering.JPG"
                  alt=""
                  width={736}
                  height={981}
                  quality={100}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 0 }}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </FadeIn>
            </div>

            <p
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-navy)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                lineHeight: "1.5",
                fontStyle: "italic",
                textAlign: "center",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              "These people are not networking.<br />
              They are participating in something meaningful."
            </p>

          </div>
        </section>
      </RevealSection>

      {/* ── Colophon rule ────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "var(--color-stone)", display: "flex", justifyContent: "center" }}>
        <hr style={{ border: "none", height: "1px", width: "60px", backgroundColor: "#B08D57", margin: 0 }} />
      </div>

      {/* ── Membership CTA ───────────────────────────────────────────────── */}
      {/* R1 — mobile: py-12 (was py-20) */}
      <RevealSection>
        <section className="px-6 py-12 md:py-20" style={{ backgroundColor: "var(--color-stone)" }}>
          <div className="w-full max-w-[640px] mx-auto flex flex-col items-center text-center">

            <p className="label mb-10" style={{ color: "var(--color-brass)" }}>
              Membership
            </p>

            {/* R5 — removed <br /> — let text wrap naturally on mobile */}
            <h2
              className="font-normal mb-10 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)", fontSize: "clamp(2rem, 3.5vw, 2.6rem)", lineHeight: "1.2" }}
            >
              Membership applications are now open.
            </h2>

            <p className="mb-12" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", color: "var(--color-slate)", fontSize: "16px", lineHeight: "1.9", maxWidth: "480px" }}>
              Admission is selective. Applications are reviewed by the Membership
              Committee. Founding membership is limited.
            </p>

            <a
              href="/application"
              className="btn-primary inline-block px-8 py-3.5 text-sm tracking-wide mb-6"
              style={{ backgroundColor: "var(--color-navy)", color: "var(--color-stone)", fontFamily: "var(--font-inter), system-ui, sans-serif", borderRadius: "2px", textDecoration: "none" }}
            >
              Begin Application
            </a>

            {/* R5 — disclaimer increased from 11px to 12px */}
            <p style={{ fontFamily: "var(--font-mono), 'Courier New', monospace", color: "rgba(92, 100, 112, 0.60)", fontSize: "12px", letterSpacing: "0.04em" }}>
              Applications are reviewed individually. Not every application results in an offer.
            </p>

          </div>
        </section>
      </RevealSection>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <Footer />

    </div>
  );
}
