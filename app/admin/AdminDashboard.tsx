"use client";

import { useState, useEffect, useCallback } from "react";
import { getSupabase } from "@/lib/supabase";

// ── Types ─────────────────────────────────────────────────────────────────────

type Application = {
  id: string;
  created_at: string;
  status: string;
  full_name: string;
  email: string;
  city: string;
  linkedin: string;
  referred_by: string | null;
  chess_experience: string;
  chess_rating: string | null;
  chess_description: string;
  role: string;
  company: string;
  industry: string;
  years_experience: string;
  built_or_operate: string;
  why_belong: string;
  significant_decision: string;
  ref1_name: string;
  ref1_role: string;
  ref1_company: string;
  ref1_email: string;
  ref2_name: string;
  ref2_role: string;
  ref2_company: string;
  ref2_email: string;
};

type StatusFilter = "all" | "received" | "reviewing" | "conversation" | "admitted" | "declined";

const STATUS_OPTIONS = ["received", "reviewing", "conversation", "admitted", "declined"];
const FILTER_TABS: StatusFilter[] = ["all", "received", "reviewing", "conversation", "admitted", "declined"];

// ── Styles ────────────────────────────────────────────────────────────────────

const inter = "Inter, system-ui, sans-serif";
const mono = "'IBM Plex Mono', 'Courier New', monospace";

// ── Date formatter ────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  const d = new Date(iso);
  const day = d.getDate();
  const month = d.toLocaleString("en-GB", { month: "short" });
  return `Applied ${day} ${month} MMXXVI`;
}

// ── Field row ─────────────────────────────────────────────────────────────────

function Field({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "8px 24px", marginBottom: "12px", alignItems: "start" }}>
      <p style={{ fontFamily: mono, fontSize: "10px", color: "#5C6470", textTransform: "uppercase", letterSpacing: "0.08em", paddingTop: "3px" }}>
        {label}
      </p>
      <p style={{ fontFamily: inter, fontSize: "14px", color: "#F5F2EC", lineHeight: 1.7, maxWidth: "600px" }}>
        {value}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: mono, fontSize: "10px", color: "#B08D57", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px", marginTop: "24px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      {children}
    </p>
  );
}

// ── Password screen ───────────────────────────────────────────────────────────

function PasswordScreen({ onAuth }: { onAuth: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      sessionStorage.setItem("scs_admin_auth", "1");
      onAuth();
    } else {
      setError(true);
      setPw("");
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0D1321", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "320px" }}>
        <p style={{ fontFamily: mono, fontSize: "10px", color: "#B08D57", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "32px", textAlign: "center" }}>
          Sovereign Chess Society
        </p>
        <p style={{ fontFamily: inter, fontWeight: 500, fontSize: "18px", color: "#F5F2EC", marginBottom: "24px", textAlign: "center" }}>
          Admin Access
        </p>
        <input
          type="password"
          value={pw}
          onChange={(e) => { setPw(e.target.value); setError(false); }}
          placeholder="Password"
          autoFocus
          style={{
            width: "100%",
            background: "transparent",
            border: "none",
            borderBottom: "1px solid rgba(245,242,236,0.3)",
            color: "#F5F2EC",
            fontFamily: inter,
            fontSize: "15px",
            padding: "12px 0",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        {error && (
          <p style={{ fontFamily: inter, fontSize: "13px", color: "#e05555", marginTop: "8px" }}>
            Incorrect password
          </p>
        )}
        <button
          type="submit"
          style={{
            marginTop: "24px",
            width: "100%",
            backgroundColor: "#B08D57",
            color: "#0D1321",
            fontFamily: inter,
            fontWeight: 500,
            fontSize: "14px",
            padding: "12px",
            border: "none",
            borderRadius: 0,
            cursor: "pointer",
          }}
        >
          Enter
        </button>
      </form>
    </div>
  );
}

// ── Main dashboard ────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Check session on mount
  useEffect(() => {
    setAuthed(sessionStorage.getItem("scs_admin_auth") === "1");
  }, []);

  // Fetch applications
  const fetchApps = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error: err } = await getSupabase()
        .from("applications")
        .select("*")
        .order("created_at", { ascending: false });
      if (err) throw err;
      setApps(data || []);
    } catch (e) {
      console.error(e);
      setError("Failed to load applications. Check Supabase RLS policy.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchApps();
  }, [authed, fetchApps]);

  const handleSignOut = () => {
    sessionStorage.removeItem("scs_admin_auth");
    window.location.reload();
  };

  const handleStatusChange = async (app: Application, newStatus: string) => {
    const prev = app.status;
    // Optimistic update
    setApps((all) => all.map((a) => a.id === app.id ? { ...a, status: newStatus } : a));
    try {
      const { error: err } = await getSupabase()
        .from("applications")
        .update({ status: newStatus })
        .eq("id", app.id);
      if (err) throw err;
      setSavedId(app.id);
      setTimeout(() => setSavedId(null), 1000);
    } catch {
      // Revert
      setApps((all) => all.map((a) => a.id === app.id ? { ...a, status: prev } : a));
      setError("Failed to update status.");
      setTimeout(() => setError(null), 3000);
    }
  };

  // Stats
  const count = (s: string) => apps.filter((a) => a.status === s).length;
  const filtered = filter === "all" ? apps : apps.filter((a) => a.status === filter);

  // Auth loading state
  if (authed === null) return null;
  if (!authed) return <PasswordScreen onAuth={() => setAuthed(true)} />;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#111827", fontFamily: inter }}>

      {/* ── Top bar ──────────────────────────────────────────────────────────── */}
      <div style={{ height: "56px", backgroundColor: "#0D1321", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>

        <p style={{ fontFamily: inter, fontWeight: 500, fontSize: "14px", color: "#F5F2EC", flexShrink: 0 }}>
          SCS Admin
        </p>

        {/* Filter tabs */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                fontFamily: mono,
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                borderBottom: filter === tab ? "2px solid #B08D57" : "2px solid transparent",
                color: filter === tab ? "#B08D57" : "#5C6470",
                cursor: "pointer",
                padding: "4px 0",
                transition: "color 150ms ease",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          onClick={handleSignOut}
          style={{ fontFamily: mono, fontSize: "11px", color: "#5C6470", background: "none", border: "none", cursor: "pointer" }}
        >
          Sign out
        </button>
      </div>

      {/* ── Stats row ────────────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#0D1321", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 32px" }}>
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          {[
            { label: "Total", value: apps.length },
            { label: "Received", value: count("received") },
            { label: "Reviewing", value: count("reviewing") },
            { label: "Conversation", value: count("conversation") },
            { label: "Admitted", value: count("admitted") },
          ].map((stat) => (
            <div key={stat.label}>
              <p style={{ fontFamily: inter, fontWeight: 600, fontSize: "24px", color: "#F5F2EC", lineHeight: 1 }}>
                {stat.value}
              </p>
              <p style={{ fontFamily: mono, fontSize: "10px", color: "#5C6470", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Error banner ─────────────────────────────────────────────────────── */}
      {error && (
        <div style={{ backgroundColor: "#4a1515", padding: "12px 32px", fontFamily: inter, fontSize: "13px", color: "#e05555" }}>
          {error}
        </div>
      )}

      {/* ── Applications list ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 32px" }}>

        {loading ? (
          <p style={{ fontFamily: inter, fontSize: "14px", color: "#5C6470", textAlign: "center", marginTop: "64px" }}>
            Loading applications…
          </p>
        ) : filtered.length === 0 ? (
          <p style={{ fontFamily: inter, fontSize: "14px", color: "#5C6470", textAlign: "center", marginTop: "64px" }}>
            No applications {filter !== "all" ? `with status "${filter}"` : ""}.
          </p>
        ) : (
          filtered.map((app) => {
            const expanded = expandedId === app.id;
            const saved = savedId === app.id;
            return (
              <div key={app.id} style={{ marginBottom: "12px" }}>

                {/* Row */}
                <div
                  style={{
                    backgroundColor: "#1a2535",
                    borderRadius: "4px",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "32px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Left */}
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <p style={{ fontFamily: inter, fontWeight: 600, fontSize: "16px", color: "#F5F2EC" }}>
                      {app.full_name}
                    </p>
                    <p style={{ fontFamily: inter, fontSize: "14px", color: "#5C6470", marginTop: "4px" }}>
                      {app.role} · {app.company}
                    </p>
                    <div style={{ display: "flex", gap: "16px", marginTop: "8px", flexWrap: "wrap" }}>
                      <p style={{ fontFamily: mono, fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{app.city}</p>
                      <a href={app.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: mono, fontSize: "11px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
                        LinkedIn ↗
                      </a>
                    </div>
                    <p style={{ fontFamily: mono, fontSize: "10px", color: "rgba(255,255,255,0.25)", marginTop: "8px" }}>
                      {formatDate(app.created_at)}
                    </p>
                  </div>

                  {/* Center */}
                  <div style={{ flex: 1, minWidth: "160px" }}>
                    <p style={{ fontFamily: mono, fontSize: "11px", color: "#B08D57", marginBottom: "4px" }}>
                      {app.chess_experience}
                    </p>
                    {app.chess_rating && (
                      <p style={{ fontFamily: mono, fontSize: "11px", color: "#5C6470" }}>{app.chess_rating}</p>
                    )}
                    {app.referred_by && (
                      <p style={{ fontFamily: mono, fontSize: "11px", color: "#5C6470", marginTop: "4px" }}>
                        Ref: {app.referred_by}
                      </p>
                    )}
                  </div>

                  {/* Right */}
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
                    <select
                      value={app.status}
                      onChange={(e) => handleStatusChange(app, e.target.value)}
                      style={{
                        backgroundColor: "#0D1321",
                        border: `1px solid ${saved ? "#4ade80" : "rgba(255,255,255,0.15)"}`,
                        color: "#F5F2EC",
                        padding: "6px 12px",
                        borderRadius: "2px",
                        fontFamily: inter,
                        fontSize: "13px",
                        cursor: "pointer",
                        transition: "border-color 300ms ease",
                        outline: "none",
                      }}
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>

                    <button
                      onClick={() => setExpandedId(expanded ? null : app.id)}
                      style={{
                        fontFamily: mono,
                        fontSize: "11px",
                        color: "#B08D57",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      {expanded ? "Close ↑" : "View full application ↓"}
                    </button>
                  </div>
                </div>

                {/* Expanded panel */}
                {expanded && (
                  <div style={{ backgroundColor: "#0D1321", padding: "24px 32px", borderTop: "1px solid rgba(255,255,255,0.08)", borderRadius: "0 0 4px 4px", marginTop: "-4px" }}>

                    <SectionLabel>Identity</SectionLabel>
                    <Field label="Full Name" value={app.full_name} />
                    <Field label="Email" value={app.email} />
                    <Field label="City" value={app.city} />
                    <Field label="LinkedIn" value={app.linkedin} />
                    <Field label="Referred By" value={app.referred_by} />

                    <SectionLabel>Chess</SectionLabel>
                    <Field label="Experience" value={app.chess_experience} />
                    <Field label="Rating" value={app.chess_rating} />
                    <Field label="Relationship with Chess" value={app.chess_description} />

                    <SectionLabel>Professional</SectionLabel>
                    <Field label="Role" value={app.role} />
                    <Field label="Company" value={app.company} />
                    <Field label="Industry" value={app.industry} />
                    <Field label="Years Experience" value={app.years_experience} />
                    <Field label="What They've Built" value={app.built_or_operate} />

                    <SectionLabel>Essay</SectionLabel>
                    <Field label="Why They Belong" value={app.why_belong} />
                    <Field label="Significant Decision" value={app.significant_decision} />

                    <SectionLabel>References</SectionLabel>
                    <Field label="Professional — Name" value={app.ref1_name} />
                    <Field label="Professional — Role" value={`${app.ref1_role} at ${app.ref1_company}`} />
                    <Field label="Professional — Email" value={app.ref1_email} />
                    <Field label="Character — Name" value={app.ref2_name} />
                    <Field label="Character — Role" value={`${app.ref2_role} at ${app.ref2_company}`} />
                    <Field label="Character — Email" value={app.ref2_email} />

                    <button
                      onClick={() => setExpandedId(null)}
                      style={{ fontFamily: mono, fontSize: "11px", color: "#5C6470", background: "none", border: "none", cursor: "pointer", marginTop: "24px", padding: 0 }}
                    >
                      Close
                    </button>
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
