import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy of the Sovereign Chess Society.",
  robots: { index: false, follow: false },
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

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <div style={{ backgroundColor: "var(--color-stone)", paddingTop: "62px" }}>
        <section className="px-6 py-24">
          <div className="w-full max-w-[680px] mx-auto">

            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-slate)" }}>
              Privacy
            </p>

            <h1
              className="font-normal"
              style={{
                ...display,
                fontSize: "2rem",
                color: "var(--color-navy)",
                lineHeight: 1.2,
                marginTop: "16px",
              }}
            >
              Privacy Policy
            </h1>

            <div
              className="flex flex-col"
              style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9, marginTop: "32px", gap: "24px" }}
            >
              <p>
                The Sovereign Chess Society collects only the information necessary to process membership applications and communicate with members and applicants.
              </p>
              <p>
                Information submitted through the application form — including name, contact details, professional background, and references — is used solely for the purpose of evaluating membership applications. This information is never sold, shared with third parties, or used for marketing purposes.
              </p>
              <p>
                The Society uses industry-standard security measures to protect all submitted information.
              </p>
              <p>
                For any privacy-related enquiries, contact:{" "}
                <a
                  href="mailto:info@sovereignchesssociety.com"
                  style={{ color: "var(--color-navy)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  info@sovereignchesssociety.com
                </a>
              </p>
            </div>

            <p style={{ ...mono, fontSize: "11px", color: "rgba(92,100,112,0.5)", marginTop: "48px" }}>
              Last updated: June MMXXVI
            </p>

          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
