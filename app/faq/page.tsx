import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import FadeInOnMount from "@/components/FadeInOnMount";

export const metadata: Metadata = {
  title: "FAQ — Sovereign Chess Society Dubai",
  description:
    "Answers to 16 common questions about the Sovereign Chess Society — Dubai's only private members institution for founders, investors, and executives who play chess. Membership, admissions, fees, and the Strategic Position Review explained.",
  openGraph: {
    title: "FAQ — Sovereign Chess Society Dubai",
    description:
      "Is chess skill required? What is the membership fee? Where does the Society meet in Dubai? Answers to 16 questions about SCS membership and admissions.",
    url: "https://www.sovereignchesssociety.com/faq",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Sovereign Chess Society?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Sovereign Chess Society is a private members institution for intellectually serious operators in Dubai who play chess. It exists as a social, intellectual, and cultural home for founders, investors, executives, and family office principals whose ambition, wealth, and curiosity have outgrown traditional networking environments. Chess is the shared language. The room is the product.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a private chess society in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Sovereign Chess Society is Dubai's only private members institution built around chess as a shared language. It is not a chess club, a chess school, or a recreational group. It is a private institution for founders, investors, family office principals, and senior executives who share a relationship with the game and a commitment to the quality of their thinking.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the Sovereign Chess Society for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Society is for founders, investors, family office principals, and senior executives who take chess seriously — not necessarily as competitors, but as thinkers. It is for people who have achieved enough to be respected, yet remain curious enough to continue growing. It is not for people seeking visibility, customers, shortcuts, or status. The filter is the quality of thinking. Chess is how that quality is revealed.",
      },
    },
    {
      "@type": "Question",
      name: "Is chess skill required to join the Sovereign Chess Society?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Society does not require competitive chess ability. It requires that chess means something to you — that you have sat across a board and understood that the game reveals something true about how you think. Members range from casual players to rated tournament competitors. What they share is a relationship with chess, not a rating.",
      },
    },
    {
      "@type": "Question",
      name: "What is the membership fee for the Sovereign Chess Society?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Membership is structured in two parts: a one-time founding fee and an annual subscription. Pricing is shared privately with applicants who reach the conversation stage of the admissions process. The Society does not lead with pricing because the room is the product, not the package.",
      },
    },
    {
      "@type": "Question",
      name: "Where does the Sovereign Chess Society meet in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monthly dinners and gatherings take place at private venues across Dubai — typically Four Seasons DIFC, Atlantis The Palm, and comparable institutional settings. Specific venues are confirmed to members ahead of each gathering. The Society does not hold events in public spaces.",
      },
    },
    {
      "@type": "Question",
      name: "Can I attend an event before applying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Events are reserved exclusively for members and invited guests of members. The admissions process exists to protect the quality of the room. Attendance before admission is not available.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the admissions process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process has no fixed timeline. Applications are reviewed when received. If the Membership Committee identifies a potential fit, you will be contacted for a private conversation. From application to admission typically takes between two and six weeks. Some applications remain under consideration longer.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Sovereign Chess Society only in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Society launches in Dubai. Singapore, London, and New York are planned as subsequent chapters. The timeline for expansion is determined by the quality of founding cohorts in each city — not by a fixed schedule. Each chapter maintains identical standards and culture.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Strategic Position Review?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Strategic Position Review is the Society's signature intellectual mechanism. Once per gathering, one member brings one important decision — not a pitch, not a presentation, but a position. The room examines it. The structure is challenged. The assumptions are tested. What leaves the room is not an answer. It is a sharper question. Participation is reserved for members.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I miss events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Attendance is an expectation of membership, not a courtesy. Members who consistently miss dinners, tournaments, and the Annual Conclave weaken the room they joined. The Membership Committee reviews engagement annually. Membership in the Society is active, not passive.",
      },
    },
    {
      "@type": "Question",
      name: "How do I refer someone to the Sovereign Chess Society?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each member receives one nomination per year. Nominations are submitted privately to the Membership Committee. A nomination is not a guarantee of admission — it opens a review. The nominating member is accountable for the quality of their recommendation. Nominations reflect on the nominator.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between the public and member editions of Sovereign Intelligence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The public edition of Sovereign Intelligence contains the framework — the intellectual thesis of each quarterly issue. The member edition contains the positions: anonymised Strategic Position Reviews from actual member decisions, examined in full. The member edition is accessible only to admitted members of the Society.",
      },
    },
    {
      "@type": "Question",
      name: "What makes the Sovereign Chess Society different from other private clubs in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most private clubs in Dubai optimise for status. Most business networks optimise for transactions. The Sovereign Chess Society optimises for the quality of the people in the room. The filter for membership is not your net worth, your industry, or your title. It is whether chess has fundamentally changed how you think. This produces a room where conversation operates at a different level of depth and precision than conventional networking environments. Members are not here to be seen or to collect contacts. They are here because they are equals — people who think with the same architectural clarity and the same tolerance for honest, adversarial feedback that the board demands.",
      },
    },
    {
      "@type": "Question",
      name: "Who founded the Sovereign Chess Society?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Sovereign Chess Society was founded by Ashan Veymont — Arena FIDE Chess Master, two-time State Chess Champion, and FIDE Certified Trainer. Ashan founded the Society after observing a consistent gap in the market for serious operators: there was no private institution that combined intellectual rigour, cultural depth, and genuine peer quality. His role within the Society is Founder and Custodian. The institution is designed to outlast any individual — including its founder.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be based in Dubai to apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Society is based in Dubai and its gatherings take place in Dubai. Membership requires the ability to attend monthly dinners and the Annual Conclave with regularity. If you are not currently based in Dubai but operate in the city with sufficient frequency to participate meaningfully, you are encouraged to apply. Your situation will be considered individually by the Membership Committee.",
      },
    },
  ],
};

const faqs = [
  {
    n: "01",
    q: "What is the Sovereign Chess Society?",
    a: "The Sovereign Chess Society is a private members institution for intellectually serious operators in Dubai who play chess. It exists as a social, intellectual, and cultural home for founders, investors, executives, and family office principals whose ambition, wealth, and curiosity have outgrown traditional networking environments. Chess is the shared language. The room is the product.",
  },
  {
    n: "02",
    q: "Is there a private chess society in Dubai?",
    a: "Yes. The Sovereign Chess Society is Dubai's only private members institution built around chess as a shared language. It is not a chess club, a chess school, or a recreational group. It is a private institution for founders, investors, family office principals, and senior executives who share a relationship with the game and a commitment to the quality of their thinking.",
  },
  {
    n: "03",
    q: "Who is the Sovereign Chess Society for?",
    a: "The Society is for founders, investors, family office principals, and senior executives who take chess seriously — not necessarily as competitors, but as thinkers. It is for people who have achieved enough to be respected, yet remain curious enough to continue growing. It is not for people seeking visibility, customers, shortcuts, or status. The filter is the quality of thinking. Chess is how that quality is revealed.",
  },
  {
    n: "04",
    q: "Is chess skill required to join the Sovereign Chess Society?",
    a: "No. The Society does not require competitive chess ability. It requires that chess means something to you — that you have sat across a board and understood that the game reveals something true about how you think. Members range from casual players to rated tournament competitors. What they share is a relationship with chess, not a rating.",
  },
  {
    n: "05",
    q: "What is the membership fee for the Sovereign Chess Society?",
    a: "Membership is structured in two parts: a one-time founding fee and an annual subscription. Pricing is shared privately with applicants who reach the conversation stage of the admissions process. The Society does not lead with pricing because the room is the product, not the package.",
  },
  {
    n: "06",
    q: "Where does the Sovereign Chess Society meet in Dubai?",
    a: "Monthly dinners and gatherings take place at private venues across Dubai — typically Four Seasons DIFC, Atlantis The Palm, and comparable institutional settings. Specific venues are confirmed to members ahead of each gathering. The Society does not hold events in public spaces.",
  },
  {
    n: "07",
    q: "Can I attend an event before applying?",
    a: "No. Events are reserved exclusively for members and invited guests of members. The admissions process exists to protect the quality of the room. Attendance before admission is not available.",
  },
  {
    n: "08",
    q: "How long does the admissions process take?",
    a: "The process has no fixed timeline. Applications are reviewed when received. If the Membership Committee identifies a potential fit, you will be contacted for a private conversation. From application to admission typically takes between two and six weeks. Some applications remain under consideration longer.",
  },
  {
    n: "09",
    q: "Is the Sovereign Chess Society only in Dubai?",
    a: "The Society launches in Dubai. Singapore, London, and New York are planned as subsequent chapters. The timeline for expansion is determined by the quality of founding cohorts in each city — not by a fixed schedule. Each chapter maintains identical standards and culture.",
  },
  {
    n: "10",
    q: "What is the Strategic Position Review?",
    a: "The Strategic Position Review is the Society's signature intellectual mechanism. Once per gathering, one member brings one important decision — not a pitch, not a presentation, but a position. The room examines it. The structure is challenged. The assumptions are tested. What leaves the room is not an answer. It is a sharper question. Participation is reserved for members.",
  },
  {
    n: "11",
    q: "What happens if I miss events?",
    a: "Attendance is an expectation of membership, not a courtesy. Members who consistently miss dinners, tournaments, and the Annual Conclave weaken the room they joined. The Membership Committee reviews engagement annually. Membership in the Society is active, not passive.",
  },
  {
    n: "12",
    q: "How do I refer someone to the Sovereign Chess Society?",
    a: "Each member receives one nomination per year. Nominations are submitted privately to the Membership Committee. A nomination is not a guarantee of admission — it opens a review. The nominating member is accountable for the quality of their recommendation. Nominations reflect on the nominator.",
  },
  {
    n: "13",
    q: "What is the difference between the public and member editions of Sovereign Intelligence?",
    a: "The public edition of Sovereign Intelligence contains the framework — the intellectual thesis of each quarterly issue. The member edition contains the positions: anonymised Strategic Position Reviews from actual member decisions, examined in full. The member edition is accessible only to admitted members of the Society.",
  },
  {
    n: "14",
    q: "What makes the Sovereign Chess Society different from other private clubs in Dubai?",
    a: "Most private clubs in Dubai optimise for status. Most business networks optimise for transactions. The Sovereign Chess Society optimises for the quality of the people in the room. The filter for membership is not your net worth, your industry, or your title. It is whether chess has fundamentally changed how you think. This produces a room where conversation operates at a different level of depth and precision than conventional networking environments. Members are not here to be seen or to collect contacts. They are here because they are equals — people who think with the same architectural clarity and the same tolerance for honest, adversarial feedback that the board demands.",
  },
  {
    n: "15",
    q: "Who founded the Sovereign Chess Society?",
    a: "The Sovereign Chess Society was founded by Ashan Veymont — Arena FIDE Chess Master, two-time State Chess Champion, and FIDE Certified Trainer. Ashan founded the Society after observing a consistent gap in the market for serious operators: there was no private institution that combined intellectual rigour, cultural depth, and genuine peer quality. His role within the Society is Founder and Custodian. The institution is designed to outlast any individual — including its founder.",
  },
  {
    n: "16",
    q: "Do I need to be based in Dubai to apply?",
    a: "The Society is based in Dubai and its gatherings take place in Dubai. Membership requires the ability to attend monthly dinners and the Annual Conclave with regularity. If you are not currently based in Dubai but operate in the city with sufficient frequency to participate meaningfully, you are encouraged to apply. Your situation will be considered individually by the Membership Committee.",
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Nav />

      <div style={{ backgroundColor: "var(--color-stone)", paddingTop: "62px" }}>

        {/* ── SECTION 1 — HERO ─────────────────────────────────────────────── */}
        <section className="flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center">
          <FadeInOnMount delay={200} className="w-full max-w-[720px] mx-auto flex flex-col items-center">

            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
              The Society
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
              Questions about
              <br />
              the Society.
            </h1>

            <p
              style={{
                ...sans,
                fontSize: "16px",
                color: "var(--color-slate)",
                lineHeight: 1.8,
                marginTop: "24px",
                maxWidth: "520px",
              }}
            >
              The most common questions about membership, admissions, and the life of the Sovereign Chess Society — Dubai's private institution for intellectually serious operators.
            </p>

          </FadeInOnMount>
        </section>

        {/* ── SECTION 2 — FAQ ITEMS ─────────────────────────────────────────── */}
        <RevealSection>
          <section className="px-6 pb-16 md:pb-24" style={{ backgroundColor: "var(--color-stone)" }}>
            <div className="w-full max-w-[720px] mx-auto">

              <hr style={{ border: "none", height: "1px", width: "80px", backgroundColor: "rgba(92,100,112,0.2)", margin: "0 auto 64px" }} />

              <dl>
                {faqs.map((item) => (
                  <div
                    key={item.n}
                    className="py-8"
                    style={{ borderBottom: "1px solid rgba(92,100,112,0.15)" }}
                  >
                    <dt
                      style={{
                        ...sans,
                        fontWeight: 600,
                        fontSize: "17px",
                        color: "var(--color-navy)",
                        lineHeight: 1.5,
                        marginBottom: "16px",
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ ...mono, fontSize: "11px", color: "var(--color-brass)", flexShrink: 0, marginTop: "3px" }}>
                        {item.n}
                      </span>
                      <span>{item.q}</span>
                    </dt>
                    <dd
                      style={{
                        ...sans,
                        fontSize: "16px",
                        color: "var(--color-slate)",
                        lineHeight: 1.9,
                        margin: 0,
                        paddingLeft: "27px",
                      }}
                    >
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>

            </div>
          </section>
        </RevealSection>

        {/* ── SECTION 3 — CLOSING CTA ──────────────────────────────────────── */}
        <RevealSection>
          <section
            className="px-6 py-16 md:py-20 text-center"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            <div className="w-full max-w-[640px] mx-auto flex flex-col items-center">

              <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-brass)" }}>
                Membership
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
                If your question was answered,
                <br />
                the next step is the application.
              </h2>

              <p
                style={{
                  ...sans,
                  fontSize: "16px",
                  color: "rgba(245,242,236,0.7)",
                  lineHeight: 1.9,
                  marginTop: "24px",
                }}
              >
                Founding membership is limited to 30 members.
                <br />
                Applications are reviewed individually.
              </p>

              <a
                href="/application"
                style={{
                  ...sans,
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "var(--color-stone)",
                  textDecoration: "none",
                  border: "1px solid var(--color-stone)",
                  borderRadius: "2px",
                  padding: "16px 40px",
                  display: "inline-block",
                  marginTop: "40px",
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
