import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import FadeInOnMount from "@/components/FadeInOnMount";

export const metadata: Metadata = {
  title: "Membership — Private Chess Society Dubai",
  description: "Founding membership in the Sovereign Chess Society is limited to 30 members. A private institution for Dubai founders, investors, and executives who play chess.",
  openGraph: {
    title: "Membership — Private Chess Society Dubai",
    description: "The five standards. The admissions process. Who belongs and who does not.",
    url: "https://www.sovereignchesssociety.com/membership",
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

export default function MembershipPage() {
  return (
    <>
      <Nav />

      <div style={{ backgroundColor: "var(--color-stone)", paddingTop: "62px" }}>

        {/* ── SECTION 1 — HERO ─────────────────────────────────────────────── */}
        <section
          className="flex flex-col items-center justify-center px-6 py-16 md:py-32 text-center"
          style={{ minHeight: "60vh" }}
        >
          <FadeInOnMount delay={200} className="w-full max-w-[720px] mx-auto flex flex-col items-center">

            <p className="label" style={{ color: "var(--color-brass)" }}>
              Membership
            </p>

            <h1
              className="font-normal mt-4 tracking-[-0.02em]"
              style={{
                ...display,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                color: "var(--color-navy)",
                lineHeight: 1.2,
              }}
            >
              Membership
            </h1>

            <p
              className="font-normal mt-6 mx-auto"
              style={{
                ...display,
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                color: "var(--color-slate)",
                lineHeight: 1.6,
                maxWidth: "560px",
              }}
            >
              A private institution for intellectually serious operators united by a shared language: chess.
            </p>

            <p
              className="mt-6 mx-auto"
              style={{
                ...sans,
                fontSize: "16px",
                color: "var(--color-slate)",
                lineHeight: 1.9,
                maxWidth: "520px",
              }}
            >
              Admission is selective. The Society does not sell membership. The Society grants admission. Every application is reviewed individually by the Membership Committee.
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

          </FadeInOnMount>
        </section>

        {/* ── SECTION 2 — WHO BELONGS ──────────────────────────────────────── */}
        <RevealSection>
          <section
            className="px-6 py-16 md:py-24"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            <div className="w-full max-w-[1080px] mx-auto">

              <p className="label" style={{ color: "var(--color-brass)" }}>
                The Member
              </p>

              <h2
                className="font-normal mt-4 tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--color-stone)",
                  lineHeight: 1.25,
                }}
              >
                The room is built for a specific kind of person.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">

                {/* Left — Who Belongs */}
                <div>
                  <p
                    className="mb-8"
                    style={{
                      ...mono,
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      color: "var(--color-brass)",
                    }}
                  >
                    Who Belongs
                  </p>

                  {[
                    { title: "Founders", body: "People who have built something significant and understand the weight of consequential decisions." },
                    { title: "Investors", body: "Those who deploy capital and understand that judgment, not information, determines outcomes." },
                    { title: "Family Office Principals", body: "Operators of multigenerational wealth who think in decades, not quarters." },
                    { title: "Senior Executives", body: "Leaders who have earned their position through performance and carry real institutional responsibility." },
                    { title: "Operators", body: "Builders who have moved from execution to strategy and are shaping what comes next." },
                  ].map((row) => (
                    <div
                      key={row.title}
                      className="py-5"
                      style={{ borderBottom: "1px solid rgba(245, 242, 236, 0.10)" }}
                    >
                      <p style={{ ...sans, fontWeight: 500, fontSize: "16px", color: "var(--color-stone)" }}>
                        {row.title}
                      </p>
                      <p className="mt-1" style={{ ...sans, fontSize: "14px", color: "rgba(245,242,236,0.6)", lineHeight: 1.7 }}>
                        {row.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right — Who Does Not Belong — significantly quieter */}
                <div>
                  <p
                    className="mb-8"
                    style={{
                      ...mono,
                      fontSize: "11px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      color: "rgba(92, 100, 112, 0.5)",
                    }}
                  >
                    Who Does Not Belong
                  </p>

                  {[
                    { title: "People seeking visibility", body: "The Society has no stage." },
                    { title: "People seeking customers", body: "The Chamber is not a sales floor." },
                    { title: "People seeking shortcuts", body: "There are none here." },
                    { title: "People seeking status", body: "Status is not the standard." },
                    { title: "People seeking networking opportunities", body: "Networking is not the purpose." },
                  ].map((row) => (
                    <div
                      key={row.title}
                      className="py-5"
                      style={{ borderBottom: "1px solid rgba(245, 242, 236, 0.06)" }}
                    >
                      <p style={{ ...sans, fontWeight: 500, fontSize: "16px", color: "rgba(245,242,236,0.4)" }}>
                        {row.title}
                      </p>
                      <p className="mt-1" style={{ ...sans, fontSize: "14px", color: "rgba(245,242,236,0.25)", lineHeight: 1.7 }}>
                        {row.body}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 3 — THE FIVE STANDARDS ──────────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16 md:py-32" style={{ backgroundColor: "var(--color-stone)" }}>
            <div className="w-full max-w-[1080px] mx-auto">

              <p className="label">The Standard</p>

              <h2
                className="font-normal mt-4 tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--color-navy)",
                  lineHeight: 1.25,
                }}
              >
                Five standards define admission.
              </h2>

              <p
                className="mt-6"
                style={{
                  ...sans,
                  fontSize: "16px",
                  color: "var(--color-slate)",
                  lineHeight: 1.9,
                  maxWidth: "560px",
                }}
              >
                The Membership Committee evaluates every application against five standards. No single standard is sufficient alone. All five must be present.
              </p>

              <div className="mt-12">
                {[
                  {
                    n: "01",
                    name: "Character",
                    body: "The foundation. Who you are when no one is watching. How you treat people with less power than you. Whether your word means something. Character cannot be acquired through achievement. It is either present or absent.",
                  },
                  {
                    n: "02",
                    name: "Capital",
                    body: "Not wealth as status — wealth as freedom. The financial commitment exists to ensure members can fully participate in the life of the Society without constraint. The threshold exists to protect the room, not define it.",
                  },
                  {
                    n: "03",
                    name: "Chess",
                    body: "Not mastery — relationship. The Society does not require Grandmaster strength. It requires that chess means something to you. That you have sat across a board and understood that the game reveals something true about how you think.",
                  },
                  {
                    n: "04",
                    name: "Contribution",
                    body: "Membership is not passive. Every member improves the room or the room declines. Contribution means bringing your full thinking to the Strategic Position Review. Mentoring the next generation. Introducing people who should know each other.",
                  },
                  {
                    n: "05",
                    name: "Commitment",
                    body: "Attendance is not optional. The Society is built on presence. Monthly dinners. Quarterly tournaments. The Annual Conclave. Members who join and disappear weaken the institution. Commitment to the room is part of the standard.",
                  },
                ].map((standard) => (
                  <div
                    key={standard.n}
                    className="pt-8 pb-8"
                    style={{ borderTop: "1px solid rgba(92, 100, 112, 0.15)" }}
                  >
                    {/* Desktop: two-column. Mobile: number+name on one line, description below */}
                    <div className="hidden md:grid md:grid-cols-[3fr_7fr] md:gap-16">
                      <div>
                        <p className="index">{standard.n}</p>
                        <h3
                          className="font-normal mt-2"
                          style={{
                            ...display,
                            fontSize: "1.6rem",
                            color: "var(--color-navy)",
                            lineHeight: 1.25,
                          }}
                        >
                          {standard.name}
                        </h3>
                      </div>
                      <p
                        style={{
                          ...sans,
                          fontSize: "16px",
                          color: "var(--color-slate)",
                          lineHeight: 1.9,
                          maxWidth: "520px",
                        }}
                      >
                        {standard.body}
                      </p>
                    </div>

                    {/* Mobile: number + name inline, description below */}
                    <div className="md:hidden">
                      <div className="flex items-baseline gap-3 mb-3">
                        <p className="index shrink-0">{standard.n}</p>
                        <h3
                          className="font-normal"
                          style={{
                            ...display,
                            fontSize: "1.3rem",
                            color: "var(--color-navy)",
                            lineHeight: 1.25,
                          }}
                        >
                          {standard.name}
                        </h3>
                      </div>
                      <p
                        style={{
                          ...sans,
                          fontSize: "15px",
                          color: "var(--color-slate)",
                          lineHeight: 1.9,
                        }}
                      >
                        {standard.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 4 — MEMBERSHIP EXPERIENCE ───────────────────────────── */}
        <RevealSection>
          <section
            className="px-6 py-16 md:py-24"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            <div className="w-full max-w-[1080px] mx-auto">

              <p className="label" style={{ color: "var(--color-brass)" }}>
                The Experience
              </p>

              <h2
                className="font-normal mt-4 tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--color-stone)",
                  lineHeight: 1.25,
                }}
              >
                Seven rituals. One institution.
              </h2>

              <p
                className="mt-6"
                style={{
                  ...sans,
                  fontSize: "16px",
                  color: "rgba(245,242,236,0.70)",
                  lineHeight: 1.9,
                  maxWidth: "520px",
                }}
              >
                Membership is not a subscription. It is participation in a living institution. These are the seven ways that participation takes form.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 mt-16">

                {/* Left — context */}
                <div className="md:pt-2">
                  <p className="label" style={{ color: "var(--color-brass)" }}>
                    The Gatherings
                  </p>
                  <h3
                    className="font-normal mt-4"
                    style={{
                      ...display,
                      fontSize: "1.4rem",
                      color: "var(--color-stone)",
                      lineHeight: 1.35,
                    }}
                  >
                    What membership looks like.
                  </h3>
                  <p
                    className="mt-4"
                    style={{
                      ...sans,
                      fontSize: "14px",
                      color: "rgba(245,242,236,0.60)",
                      lineHeight: 1.8,
                    }}
                  >
                    These are not benefits. They are obligations and privileges in equal measure.
                  </p>
                </div>

                {/* Right — seven rows */}
                <div>
                  {[
                    { n: "01", title: "Monthly Black Tie Dinner", body: "The Society convenes in a private dining room. Standards are embodied. The room is experienced in person." },
                    { n: "02", title: "Quarterly Tournament", body: "Members compete across the board. Chess reveals character. Results are recorded." },
                    { n: "03", title: "Strategic Position Review", body: "One member. One decision. The room examines the position. Reserved for members only." },
                    { n: "04", title: "GM Simultaneous Exhibition", body: "A serving Grandmaster plays every member simultaneously. The experience does not leave you." },
                    { n: "05", title: "Mental Fitness Sessions", body: "The mind that governs the board governs the business. Monthly sessions with specialists in cognitive performance." },
                    { n: "06", title: "The Chamber", body: "A private communication layer for members. Introductions. Conversations. Capital finds its direction." },
                    { n: "07", title: "Annual Conclave", body: "Once each year, every member convenes. The institution remembers what it is for." },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="py-6 flex gap-6 items-baseline"
                      style={{ borderBottom: "1px solid rgba(245, 242, 236, 0.10)" }}
                    >
                      <p className="index shrink-0 w-6">{item.n}</p>
                      <div>
                        <p style={{ ...sans, fontWeight: 600, fontSize: "15px", color: "var(--color-stone)", lineHeight: 1.4 }}>
                          {item.title}
                        </p>
                        <p className="mt-1" style={{ ...sans, fontSize: "14px", color: "rgba(245,242,236,0.65)", lineHeight: 1.7 }}>
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 5 — THE ADMISSIONS PROCESS ──────────────────────────── */}
        <RevealSection>
          <section className="px-6 py-16 md:py-24" style={{ backgroundColor: "var(--color-stone)" }}>
            <div className="w-full max-w-[720px] mx-auto">

              <p className="label">Admission</p>

              <h2
                className="font-normal mt-4 tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--color-navy)",
                  lineHeight: 1.25,
                }}
              >
                The admissions process.
              </h2>

              <p
                className="mt-6"
                style={{
                  ...sans,
                  fontSize: "16px",
                  color: "var(--color-slate)",
                  lineHeight: 1.9,
                }}
              >
                The Society does not operate a sales process. It operates an admissions process. The distinction matters.
              </p>

              <div className="mt-12">
                {[
                  {
                    n: "01",
                    title: "Application",
                    body: "Complete the application. The questions are not formalities. The essay questions matter. The Membership Committee reads every application.",
                  },
                  {
                    n: "02",
                    title: "Initial Review",
                    body: "The Committee reviews the application against the five standards. Most applications do not proceed past this stage. This is expected.",
                  },
                  {
                    n: "03",
                    title: "Conversation",
                    body: "Selected applicants are invited for a private conversation with a founding member. This is not an interview. It is a mutual assessment.",
                  },
                  {
                    n: "04",
                    title: "Committee Review",
                    body: "The founding member presents the candidate to the full Membership Committee. The Committee votes. Admission requires consensus.",
                  },
                  {
                    n: "05",
                    title: "Admission",
                    body: "Admitted members receive a private invitation. The founding fee and first year subscription are due within 14 days. The membership card follows.",
                  },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="flex gap-8 items-start pt-8 pb-8"
                    style={{ borderTop: "1px solid rgba(92, 100, 112, 0.15)" }}
                  >
                    <p
                      className="shrink-0 mt-1"
                      style={{
                        ...mono,
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        color: "var(--color-brass)",
                        width: "32px",
                      }}
                    >
                      {step.n}
                    </p>
                    <div>
                      <p style={{ ...sans, fontWeight: 600, fontSize: "16px", color: "var(--color-navy)" }}>
                        {step.title}
                      </p>
                      <p className="mt-2" style={{ ...sans, fontSize: "15px", color: "var(--color-slate)", lineHeight: 1.8 }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 6 — EXPECTATIONS ─────────────────────────────────────── */}
        <RevealSection>
          <section
            className="px-6 py-16 md:py-24"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            <div className="w-full max-w-[1080px] mx-auto">

              <p className="label" style={{ color: "var(--color-brass)" }}>
                Expectations
              </p>

              <h2
                className="font-normal mt-4 tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--color-stone)",
                  lineHeight: 1.25,
                }}
              >
                Membership is active. Not passive.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {[
                  {
                    title: "Attendance",
                    body: "Members are expected to attend monthly dinners and the Annual Conclave. Consistent absence weakens the room and reflects on the member.",
                  },
                  {
                    title: "Participation",
                    body: "The Strategic Position Review requires genuine engagement. Passive observation is not participation. The room expects thinking, not spectatorship.",
                  },
                  {
                    title: "Contribution",
                    body: "Every member is expected to make the room better than they found it. Through introductions. Through the Chamber. Through mentorship. Through presence.",
                  },
                ].map((col) => (
                  <div
                    key={col.title}
                    className="pt-8"
                    style={{ borderTop: "1px solid rgba(245, 242, 236, 0.15)" }}
                  >
                    <p style={{ ...sans, fontWeight: 600, fontSize: "15px", color: "var(--color-stone)", marginBottom: "12px" }}>
                      {col.title}
                    </p>
                    <p style={{ ...sans, fontSize: "14px", color: "rgba(245,242,236,0.6)", lineHeight: 1.8 }}>
                      {col.body}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 7 — CLOSING CTA ──────────────────────────────────────── */}
        <RevealSection>
          <section
            id="application"
            className="px-6 py-16 md:py-24 text-center"
            style={{ backgroundColor: "var(--color-stone)" }}
          >
            <div className="w-full max-w-[640px] mx-auto flex flex-col items-center">

              <p className="label" style={{ color: "var(--color-brass)" }}>
                Membership Applications
              </p>

              <h2
                className="font-normal mt-4 tracking-[-0.02em]"
                style={{
                  ...display,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--color-navy)",
                  lineHeight: 1.3,
                }}
              >
                The application is the beginning of a conversation.
              </h2>

              <p
                className="mt-6"
                style={{
                  ...sans,
                  fontSize: "16px",
                  color: "var(--color-slate)",
                  lineHeight: 1.9,
                }}
              >
                Applications are reviewed carefully and selectively by the Membership Committee. Every application receives genuine consideration.
              </p>

              <p
                className="mt-4"
                style={{
                  ...sans,
                  fontSize: "16px",
                  color: "var(--color-slate)",
                  lineHeight: 1.9,
                }}
              >
                If there appears to be a mutual fit, you will hear from us.
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

              <p
                className="mt-6"
                style={{
                  ...mono,
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                  color: "rgba(92, 100, 112, 0.5)",
                  lineHeight: 1.8,
                }}
              >
                Founding membership is limited to 30 members.<br />
                The Society is currently accepting applications<br />
                for the Dubai founding cohort.
              </p>

            </div>
          </section>
        </RevealSection>

      </div>

      <Footer />
    </>
  );
}
