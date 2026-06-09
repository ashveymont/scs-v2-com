"use client";

import { useState } from "react";

export default function SIEmailCapture() {
  const [siEmail, setSiEmail] = useState("");
  const [siSent, setSiSent] = useState(false);
  const [siLoading, setSiLoading] = useState(false);

  const handleSIRequest = async () => {
    if (!siEmail) return;
    setSiLoading(true);
    try {
      await fetch("/api/intelligence-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: siEmail }),
      });
      setSiSent(true);
    } catch (e) {
      console.error(e);
    } finally {
      setSiLoading(false);
    }
  };

  if (siSent) {
    return (
      <p
        style={{
          fontFamily: "var(--font-mono), 'Courier New', monospace",
          fontSize: "11px",
          letterSpacing: "0.08em",
          color: "var(--color-brass)",
          marginTop: "24px",
        }}
      >
        Issue I has been sent to your inbox.
      </p>
    );
  }

  return (
    <div style={{ marginTop: "24px", maxWidth: "360px", width: "100%" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
        <input
          type="email"
          value={siEmail}
          onChange={(e) => setSiEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSIRequest()}
          placeholder="Your email address"
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            borderBottom: "1px solid rgba(245,242,236,0.3)",
            padding: "8px 0",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "14px",
            color: "var(--color-stone)",
            outline: "none",
          }}
        />
        <button
          onClick={handleSIRequest}
          disabled={siLoading || !siEmail}
          style={{
            background: "none",
            border: "none",
            fontFamily: "var(--font-mono), 'Courier New', monospace",
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: siEmail ? "var(--color-brass)" : "rgba(176,141,87,0.3)",
            cursor: siEmail ? "pointer" : "not-allowed",
            whiteSpace: "nowrap",
            padding: "8px 0",
          }}
        >
          {siLoading ? "Sending..." : "Receive Issue I →"}
        </button>
      </div>
      <p
        style={{
          fontFamily: "var(--font-mono), 'Courier New', monospace",
          fontSize: "10px",
          letterSpacing: "0.08em",
          color: "rgba(245,242,236,0.25)",
          marginTop: "8px",
        }}
      >
        Sent once. No newsletter. No follow-up sequence.
      </p>
    </div>
  );
}
