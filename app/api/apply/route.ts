import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data = await req.json();

    // 1. Save to Supabase
    const { error: dbError } = await getSupabase().from("applications").insert({
      full_name: data.fullName,
      email: data.email,
      city: data.city,
      linkedin: data.linkedin,
      referred_by: data.referredBy || null,
      chess_experience: data.chessExperience,
      chess_rating: data.chessRating || null,
      chess_description: data.chessDescription,
      role: data.role,
      company: data.company,
      industry: data.industry,
      years_experience: data.yearsExperience,
      built_or_operate: data.builtOrOperate,
      why_belong: data.whyBelong,
      significant_decision: data.significantDecision,
      ref1_name: data.ref1Name,
      ref1_role: data.ref1Role,
      ref1_company: data.ref1Company,
      ref1_email: data.ref1Email,
      ref2_name: data.ref2Name,
      ref2_role: data.ref2Role,
      ref2_company: data.ref2Company,
      ref2_email: data.ref2Email,
    });

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Failed to save application" },
        { status: 500 }
      );
    }

    // 2. Notification email to SCS
    await resend.emails.send({
      from: "SCS Applications <applications@sovereignchesssociety.com>",
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Application — ${data.fullName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 640px;
          margin: 0 auto; padding: 40px 20px; color: #171717;">

          <p style="font-family: monospace; font-size: 11px;
            letter-spacing: 0.12em; color: #5C6470;
            text-transform: uppercase;">
            SOVEREIGN CHESS SOCIETY — NEW APPLICATION
          </p>

          <h1 style="font-size: 24px; font-weight: normal;
            margin: 16px 0 32px;">
            ${data.fullName}
          </h1>

          <table style="width: 100%; border-collapse: collapse;
            margin-bottom: 32px;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="font-family: monospace; font-size: 10px;
                color: #5C6470; text-transform: uppercase;
                padding: 8px 0; width: 40%;">Email</td>
              <td style="padding: 8px 0; font-size: 14px;">
                ${data.email}
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="font-family: monospace; font-size: 10px;
                color: #5C6470; text-transform: uppercase;
                padding: 8px 0;">City</td>
              <td style="padding: 8px 0; font-size: 14px;">
                ${data.city}
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="font-family: monospace; font-size: 10px;
                color: #5C6470; text-transform: uppercase;
                padding: 8px 0;">LinkedIn</td>
              <td style="padding: 8px 0; font-size: 14px;">
                <a href="${data.linkedin}">${data.linkedin}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="font-family: monospace; font-size: 10px;
                color: #5C6470; text-transform: uppercase;
                padding: 8px 0;">Role</td>
              <td style="padding: 8px 0; font-size: 14px;">
                ${data.role}, ${data.company}
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="font-family: monospace; font-size: 10px;
                color: #5C6470; text-transform: uppercase;
                padding: 8px 0;">Chess Experience</td>
              <td style="padding: 8px 0; font-size: 14px;">
                ${data.chessExperience}${data.chessRating ? " — " + data.chessRating : ""}
              </td>
            </tr>
            <tr>
              <td style="font-family: monospace; font-size: 10px;
                color: #5C6470; text-transform: uppercase;
                padding: 8px 0;">Referred By</td>
              <td style="padding: 8px 0; font-size: 14px;">
                ${data.referredBy || "—"}
              </td>
            </tr>
          </table>

          <div style="margin-bottom: 32px;">
            <p style="font-family: monospace; font-size: 10px;
              color: #B08D57; text-transform: uppercase;
              letter-spacing: 0.12em; margin-bottom: 8px;">
              CHESS — RELATIONSHIP
            </p>
            <p style="font-size: 15px; line-height: 1.8; color: #171717;">
              ${data.chessDescription}
            </p>
          </div>

          <div style="margin-bottom: 32px;">
            <p style="font-family: monospace; font-size: 10px;
              color: #B08D57; text-transform: uppercase;
              letter-spacing: 0.12em; margin-bottom: 8px;">
              WHAT THEY HAVE BUILT
            </p>
            <p style="font-size: 15px; line-height: 1.8; color: #171717;">
              ${data.builtOrOperate}
            </p>
          </div>

          <div style="margin-bottom: 32px;">
            <p style="font-family: monospace; font-size: 10px;
              color: #B08D57; text-transform: uppercase;
              letter-spacing: 0.12em; margin-bottom: 8px;">
              WHY DO YOU BELONG IN THIS ROOM?
            </p>
            <p style="font-size: 15px; line-height: 1.8; color: #171717;">
              ${data.whyBelong}
            </p>
          </div>

          <div style="margin-bottom: 32px;">
            <p style="font-family: monospace; font-size: 10px;
              color: #B08D57; text-transform: uppercase;
              letter-spacing: 0.12em; margin-bottom: 8px;">
              SIGNIFICANT DECISION
            </p>
            <p style="font-size: 15px; line-height: 1.8; color: #171717;">
              ${data.significantDecision}
            </p>
          </div>

          <div style="border-top: 1px solid #eee; padding-top: 24px;">
            <p style="font-family: monospace; font-size: 10px;
              color: #5C6470; text-transform: uppercase;
              letter-spacing: 0.12em; margin-bottom: 16px;">
              REFERENCES
            </p>
            <p style="font-size: 14px; line-height: 1.8; color: #171717; margin-bottom: 8px;">
              <strong>Professional:</strong> ${data.ref1Name},
              ${data.ref1Role} at ${data.ref1Company} — ${data.ref1Email}
            </p>
            <p style="font-size: 14px; line-height: 1.8; color: #171717;">
              <strong>Character:</strong> ${data.ref2Name},
              ${data.ref2Role} at ${data.ref2Company} — ${data.ref2Email}
            </p>
          </div>

          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #eee;">
            <p style="font-family: monospace; font-size: 10px; color: #5C6470;">
              Sovereign Chess Society · Dubai · MMXXVI
            </p>
          </div>
        </div>
      `,
    });

    // 3. Confirmation email to applicant
    await resend.emails.send({
      from: "Sovereign Chess Society <applications@sovereignchesssociety.com>",
      to: data.email,
      subject: "Your application has been received",
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px;
          margin: 0 auto; padding: 40px 20px; color: #171717;">

          <p style="font-family: monospace; font-size: 11px;
            letter-spacing: 0.12em; color: #B08D57;
            text-transform: uppercase;">
            SOVEREIGN CHESS SOCIETY
          </p>

          <h1 style="font-size: 28px; font-weight: normal;
            margin: 16px 0 24px;">
            Thank you, ${data.fullName.split(" ")[0]}.
          </h1>

          <p style="font-size: 16px; line-height: 1.9; color: #5C6470; margin-bottom: 20px;">
            Your application has been received by the Membership Committee.
          </p>

          <p style="font-size: 16px; line-height: 1.9; color: #5C6470; margin-bottom: 20px;">
            Applications are reviewed carefully. If the Committee believes
            there may be a mutual fit, you will hear from us directly.
          </p>

          <p style="font-size: 16px; line-height: 1.9; color: #5C6470;">
            This process takes time. We do not rush it.
          </p>

          <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #eee;">
            <p style="font-family: monospace; font-size: 10px;
              color: #5C6470; letter-spacing: 0.08em;">
              Sovereign Chess Society · Dubai · Founded MMXXVI
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
