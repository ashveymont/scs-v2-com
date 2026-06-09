"use client";

import { useState, useCallback, useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// ── Design tokens ────────────────────────────────────────────────────────────

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono), 'Courier New', monospace",
};
const display: React.CSSProperties = {
  fontFamily: "var(--font-display)",
};
const sans: React.CSSProperties = {
  fontFamily: "var(--font-inter), system-ui, sans-serif",
};

// ── Form data ─────────────────────────────────────────────────────────────────

type FormData = {
  // Step 1 — Identity
  fullName: string;
  email: string;
  city: string;
  linkedin: string;
  referredBy: string;
  // Step 2 — Chess
  chessExperience: string;
  chessRating: string;
  chessDescription: string;
  // Step 3 — Professional
  role: string;
  company: string;
  industry: string;
  yearsExperience: string;
  builtOrOperate: string;
  // Step 4 — Essay
  whyBelong: string;
  significantDecision: string;
  // Step 5 — References
  ref1Name: string;
  ref1Role: string;
  ref1Company: string;
  ref1Email: string;
  ref2Name: string;
  ref2Role: string;
  ref2Company: string;
  ref2Email: string;
  acknowledged: boolean;
};

const EMPTY: FormData = {
  fullName: "", email: "", city: "", linkedin: "", referredBy: "",
  chessExperience: "", chessRating: "", chessDescription: "",
  role: "", company: "", industry: "", yearsExperience: "", builtOrOperate: "",
  whyBelong: "", significantDecision: "",
  ref1Name: "", ref1Role: "", ref1Company: "", ref1Email: "",
  ref2Name: "", ref2Role: "", ref2Company: "", ref2Email: "",
  acknowledged: false,
};

// ── Validation ────────────────────────────────────────────────────────────────

function isStepValid(step: number, d: FormData): boolean {
  switch (step) {
    case 1:
      return !!(d.fullName && d.email && d.city && d.linkedin);
    case 2:
      return !!(d.chessExperience && d.chessDescription);
    case 3:
      return !!(d.role && d.company && d.industry && d.yearsExperience && d.builtOrOperate);
    case 4:
      return !!(d.whyBelong && d.significantDecision);
    case 5:
      return !!(
        d.ref1Name && d.ref1Role && d.ref1Company && d.ref1Email &&
        d.ref2Name && d.ref2Role && d.ref2Company && d.ref2Email &&
        d.acknowledged
      );
    default:
      return false;
  }
}

// ── Shared field components ──────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        ...mono,
        fontSize: "10px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-slate)",
        marginBottom: "8px",
      }}
    >
      {children}
    </p>
  );
}

function LineInput({
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...sans,
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: `1px solid ${focused ? "var(--color-navy)" : "rgba(92,100,112,0.3)"}`,
        borderRadius: 0,
        outline: "none",
        padding: "12px 0",
        fontSize: "16px",
        color: "var(--color-charcoal)",
        transition: "border-color 200ms ease",
      }}
    />
  );
}

function countWords(s: string) {
  return s.trim() === "" ? 0 : s.trim().split(/\s+/).length;
}

function LineTextarea({
  value,
  onChange,
  minHeight = 120,
  placeholder,
  maxWords,
}: {
  value: string;
  onChange: (v: string) => void;
  minHeight?: number;
  placeholder?: string;
  maxWords: number;
}) {
  const [focused, setFocused] = useState(false);
  const words = countWords(value);
  const over = words > maxWords;
  return (
    <div>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...sans,
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${focused ? "var(--color-navy)" : "rgba(92,100,112,0.3)"}`,
          borderRadius: 0,
          outline: "none",
          padding: "12px 0",
          fontSize: "16px",
          color: "var(--color-charcoal)",
          resize: "vertical",
          minHeight: `${minHeight}px`,
          transition: "border-color 200ms ease",
          lineHeight: "1.8",
        }}
      />
      <p
        style={{
          ...mono,
          fontSize: "10px",
          letterSpacing: "0.06em",
          color: over ? "#b04040" : "rgba(92,100,112,0.5)",
          marginTop: "6px",
          textAlign: "right",
        }}
      >
        {words} / {maxWords} words
      </p>
    </div>
  );
}

function RadioGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            style={{
              ...sans,
              background: "none",
              border: "none",
              borderLeft: `2px solid ${selected ? "var(--color-brass)" : "transparent"}`,
              cursor: "pointer",
              textAlign: "left",
              padding: "12px 16px",
              fontSize: "15px",
              color: selected ? "var(--color-navy)" : "var(--color-charcoal)",
              transition: "border-color 150ms ease, color 150ms ease",
              lineHeight: 1.4,
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        textAlign: "left",
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: "16px",
          height: "16px",
          border: checked
            ? "1px solid var(--color-navy)"
            : "1px solid rgba(92,100,112,0.4)",
          backgroundColor: checked ? "var(--color-navy)" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 150ms ease, border-color 150ms ease",
          marginTop: "2px",
        }}
      >
        {checked && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path
              d="M1 3.5L3.5 6L8 1"
              stroke="var(--color-stone)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span style={{ ...sans, fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.7 }}>
        {label}
      </span>
    </button>
  );
}

// ── Buttons ───────────────────────────────────────────────────────────────────

function BtnPrimary({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        ...sans,
        backgroundColor: "var(--color-navy)",
        color: "var(--color-stone)",
        padding: "16px 40px",
        borderRadius: "2px",
        border: "none",
        fontWeight: 500,
        fontSize: "14px",
        letterSpacing: "0.02em",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "opacity 150ms ease, background-color 200ms ease",
      }}
      onMouseEnter={(e) => {
        if (!disabled)
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a2535";
      }}
      onMouseLeave={(e) => {
        if (!disabled)
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "var(--color-navy)";
      }}
    >
      {children}
    </button>
  );
}

function BtnBack({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...sans,
        backgroundColor: "transparent",
        color: "var(--color-navy)",
        padding: "16px 40px",
        borderRadius: "2px",
        border: "1px solid var(--color-navy)",
        fontWeight: 400,
        fontSize: "14px",
        letterSpacing: "0.02em",
        cursor: "pointer",
        transition: "opacity 150ms ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.opacity = "0.6";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.opacity = "1";
      }}
    >
      Back
    </button>
  );
}

// ── Step indicator ────────────────────────────────────────────────────────────

const STEP_NAMES = ["IDENTITY", "CHESS", "PROFESSIONAL", "ESSAY", "REFERENCES"];

function StepIndicator({ step }: { step: number }) {
  return (
    <p
      style={{
        ...mono,
        fontSize: "11px",
        letterSpacing: "0.12em",
        color: "var(--color-slate)",
        textAlign: "center",
        marginTop: "48px",
        textTransform: "uppercase",
      }}
    >
      Step {String(step).padStart(2, "0")} of 05 — {STEP_NAMES[step - 1]}
    </p>
  );
}

function StepHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-normal tracking-[-0.02em]"
      style={{
        ...display,
        fontSize: "2rem",
        color: "var(--color-navy)",
        lineHeight: 1.25,
        marginTop: "32px",
      }}
    >
      {children}
    </h2>
  );
}

function StepBody({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ ...sans, fontSize: "15px", color: "var(--color-slate)", lineHeight: 1.8, marginTop: "16px" }}>
      {children}
    </p>
  );
}

// ── Reference block ───────────────────────────────────────────────────────────

function ReferenceBlock({
  label,
  nameVal, onName,
  roleVal, onRole,
  companyVal, onCompany,
  emailVal, onEmail,
}: {
  label: string;
  nameVal: string; onName: (v: string) => void;
  roleVal: string; onRole: (v: string) => void;
  companyVal: string; onCompany: (v: string) => void;
  emailVal: string; onEmail: (v: string) => void;
}) {
  return (
    <div>
      <p
        style={{
          ...mono,
          fontSize: "10px",
          letterSpacing: "0.12em",
          color: "var(--color-brass)",
          textTransform: "uppercase",
          marginBottom: "24px",
        }}
      >
        {label}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div><FieldLabel>Name</FieldLabel><LineInput value={nameVal} onChange={onName} /></div>
        <div><FieldLabel>Role</FieldLabel><LineInput value={roleVal} onChange={onRole} /></div>
        <div><FieldLabel>Company</FieldLabel><LineInput value={companyVal} onChange={onCompany} /></div>
        <div><FieldLabel>Email</FieldLabel><LineInput value={emailVal} onChange={onEmail} type="email" /></div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);

  // GA4: track application started on mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "application_started", {
        event_category: "Application",
        event_label: "Step 1 Loaded",
      });
    }
  }, []);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = useCallback(
    (field: keyof FormData) =>
      (value: string | boolean) =>
        setData((d) => ({ ...d, [field]: value })),
    []
  );

  const valid = isStepValid(step, data);

  const next = () => {
    if (valid) setStep((s) => Math.min(s + 1, 5));
  };
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    if (!valid || isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      // GA4: track application completed
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "application_completed", {
          event_category: "Application",
          event_label: "Submission Confirmed",
        });
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Confirmation ─────────────────────────────────────────────────────────────

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center text-center px-6"
        style={{ maxWidth: "560px", margin: "0 auto", paddingTop: "128px", paddingBottom: "128px" }}
      >
        <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.12em", color: "var(--color-brass)", textTransform: "uppercase" }}>
          Application Received
        </p>
        <h2
          className="font-normal tracking-[-0.02em]"
          style={{ ...display, fontSize: "2rem", color: "var(--color-navy)", lineHeight: 1.25, marginTop: "24px" }}
        >
          Thank you.
        </h2>
        <p style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9, marginTop: "24px" }}>
          Your application has been received by the Membership Committee.
        </p>
        <p style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9, marginTop: "20px" }}>
          Applications are reviewed carefully. If the Committee believes there may be a mutual fit, you will hear from us directly.
        </p>
        <p style={{ ...sans, fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.9, marginTop: "20px" }}>
          This process takes time. We do not rush it.
        </p>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────────

  return (
    <div className="px-6" style={{ maxWidth: "640px", margin: "0 auto", paddingBottom: "96px" }}>

      <StepIndicator step={step} />

      {/* ── STEP 1 — IDENTITY ──────────────────────────────────────────────── */}
      {step === 1 && (
        <div>
          <StepHeadline>Who are you?</StepHeadline>
          <StepBody>Begin with the fundamentals.</StepBody>

          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <FieldLabel>Full Name</FieldLabel>
              <LineInput value={data.fullName} onChange={set("fullName") as (v: string) => void} />
            </div>
            <div>
              <FieldLabel>Email Address</FieldLabel>
              <LineInput value={data.email} onChange={set("email") as (v: string) => void} type="email" />
            </div>
            <div>
              <FieldLabel>City of Residence</FieldLabel>
              <LineInput value={data.city} onChange={set("city") as (v: string) => void} />
            </div>
            <div>
              <FieldLabel>LinkedIn Profile</FieldLabel>
              <LineInput value={data.linkedin} onChange={set("linkedin") as (v: string) => void} type="url" placeholder="https://linkedin.com/in/…" />
            </div>
            <div>
              <FieldLabel>Referred By (Optional)</FieldLabel>
              <LineInput value={data.referredBy} onChange={set("referredBy") as (v: string) => void} />
            </div>
          </div>

          <div style={{ marginTop: "64px" }}>
            <BtnPrimary onClick={next} disabled={!valid}>Continue</BtnPrimary>
          </div>
        </div>
      )}

      {/* ── STEP 2 — CHESS ─────────────────────────────────────────────────── */}
      {step === 2 && (
        <div>
          <StepHeadline>Your relationship with chess.</StepHeadline>
          <StepBody>
            The Society does not require mastery. It requires that chess means something to you.
          </StepBody>

          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <FieldLabel>How long have you played chess?</FieldLabel>
              <div style={{ marginTop: "8px" }}>
                <RadioGroup
                  options={["Less than 1 year", "1 to 5 years", "5 to 10 years", "More than 10 years"]}
                  value={data.chessExperience}
                  onChange={set("chessExperience") as (v: string) => void}
                />
              </div>
            </div>
            <div>
              <FieldLabel>Approximate Chess Rating (Optional)</FieldLabel>
              <LineInput
                value={data.chessRating}
                onChange={set("chessRating") as (v: string) => void}
                placeholder="e.g. 1200 FIDE, 1450 Chess.com, Unrated"
              />
            </div>
            <div>
              <FieldLabel>Describe your relationship with chess</FieldLabel>
              <LineTextarea
                value={data.chessDescription}
                onChange={set("chessDescription") as (v: string) => void}
                minHeight={120}
                placeholder="How did you come to chess? What does it reveal to you?"
                maxWords={300}
              />
            </div>
          </div>

          <div style={{ marginTop: "64px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <BtnBack onClick={back} />
            <BtnPrimary onClick={next} disabled={!valid}>Continue</BtnPrimary>
          </div>
        </div>
      )}

      {/* ── STEP 3 — PROFESSIONAL ──────────────────────────────────────────── */}
      {step === 3 && (
        <div>
          <StepHeadline>Your professional context.</StepHeadline>

          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <FieldLabel>Current Role</FieldLabel>
              <LineInput value={data.role} onChange={set("role") as (v: string) => void} />
            </div>
            <div>
              <FieldLabel>Company or Organisation</FieldLabel>
              <LineInput value={data.company} onChange={set("company") as (v: string) => void} />
            </div>
            <div>
              <FieldLabel>Industry</FieldLabel>
              <LineInput value={data.industry} onChange={set("industry") as (v: string) => void} />
            </div>
            <div>
              <FieldLabel>Years of Operating Experience</FieldLabel>
              <LineInput value={data.yearsExperience} onChange={set("yearsExperience") as (v: string) => void} />
            </div>
            <div>
              <FieldLabel>Describe what you have built or operate</FieldLabel>
              <LineTextarea
                value={data.builtOrOperate}
                onChange={set("builtOrOperate") as (v: string) => void}
                minHeight={120}
                placeholder="What have you built, led, or are currently responsible for?"
                maxWords={200}
              />
            </div>
          </div>

          <div style={{ marginTop: "64px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <BtnBack onClick={back} />
            <BtnPrimary onClick={next} disabled={!valid}>Continue</BtnPrimary>
          </div>
        </div>
      )}

      {/* ── STEP 4 — ESSAY ─────────────────────────────────────────────────── */}
      {step === 4 && (
        <div>
          <StepHeadline>Two questions.</StepHeadline>
          <StepBody>
            These questions matter. The Membership Committee reads every response.
          </StepBody>

          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div>
              <FieldLabel>Why do you belong in this room?</FieldLabel>
              <LineTextarea
                value={data.whyBelong}
                onChange={set("whyBelong") as (v: string) => void}
                minHeight={180}
                placeholder="What would you bring to the room? What would you take from it?"
                maxWords={400}
              />
            </div>
            <div>
              <FieldLabel>
                What is the most significant decision you are currently holding — and how are you reading the position?
              </FieldLabel>
              <LineTextarea
                value={data.significantDecision}
                onChange={set("significantDecision") as (v: string) => void}
                minHeight={180}
                placeholder="Speak plainly. The room values clarity over polish."
                maxWords={400}
              />
            </div>
          </div>

          <div style={{ marginTop: "64px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <BtnBack onClick={back} />
            <BtnPrimary onClick={next} disabled={!valid}>Continue</BtnPrimary>
          </div>
        </div>
      )}

      {/* ── STEP 5 — REFERENCES ────────────────────────────────────────────── */}
      {step === 5 && (
        <div>
          <StepHeadline>Two references.</StepHeadline>
          <StepBody>
            The Society requires two references. References are contacted only if your application advances to the conversation stage. They will not be contacted without your knowledge.
          </StepBody>

          <div style={{ marginTop: "40px" }}>
            <ReferenceBlock
              label="Professional Reference"
              nameVal={data.ref1Name} onName={set("ref1Name") as (v: string) => void}
              roleVal={data.ref1Role} onRole={set("ref1Role") as (v: string) => void}
              companyVal={data.ref1Company} onCompany={set("ref1Company") as (v: string) => void}
              emailVal={data.ref1Email} onEmail={set("ref1Email") as (v: string) => void}
            />
          </div>

          <div style={{ marginTop: "40px" }}>
            <ReferenceBlock
              label="Character Reference"
              nameVal={data.ref2Name} onName={set("ref2Name") as (v: string) => void}
              roleVal={data.ref2Role} onRole={set("ref2Role") as (v: string) => void}
              companyVal={data.ref2Company} onCompany={set("ref2Company") as (v: string) => void}
              emailVal={data.ref2Email} onEmail={set("ref2Email") as (v: string) => void}
            />
          </div>

          <div style={{ marginTop: "48px" }}>
            <Checkbox
              checked={data.acknowledged}
              onChange={set("acknowledged") as (v: boolean) => void}
              label="I understand that membership is selective and that submitting this application does not guarantee admission or a response."
            />
          </div>

          <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <BtnBack onClick={back} />
            <BtnPrimary onClick={handleSubmit} disabled={!valid || isSubmitting}>
              {isSubmitting ? "Submitting…" : "Submit Application"}
            </BtnPrimary>
          </div>
        </div>
      )}

    </div>
  );
}
