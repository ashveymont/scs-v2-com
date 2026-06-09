import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Sovereign Chess Society <intelligence@sovereignchesssociety.com>",
      to: email,
      subject: "Sovereign Intelligence — Issue I: The Opening Trap",
      html: `
        <div style="font-family: Georgia, serif;
          max-width: 560px; margin: 0 auto;
          padding: 40px 20px; color: #171717;">

          <p style="font-family: monospace;
            font-size: 11px; letter-spacing: 0.12em;
            color: #B08D57; text-transform: uppercase;">
            SOVEREIGN INTELLIGENCE — ISSUE I
          </p>

          <h1 style="font-size: 24px; font-weight: normal;
            margin: 16px 0 8px; color: #171717;">
            The Opening Trap
          </h1>

          <p style="font-size: 14px; font-style: italic;
            color: #5C6470; margin-bottom: 32px;">
            What the first ten moves reveal about how
            serious operators think.
          </p>

          <p style="font-size: 16px; line-height: 1.9;
            color: #5C6470; margin-bottom: 24px;">
            Issue I of Sovereign Intelligence is available
            to read in full at the link below.
          </p>

          <a href="https://www.sovereignchesssociety.com/sovereign-intelligence"
            style="display: inline-block;
            font-family: monospace; font-size: 12px;
            letter-spacing: 0.08em; color: #B08D57;
            text-decoration: none;
            border-bottom: 1px solid rgba(176,141,87,0.4);
            padding-bottom: 2px; margin-bottom: 40px;">
            Read The Opening Trap →
          </a>

          <p style="font-size: 15px; line-height: 1.9;
            color: #5C6470; margin-bottom: 20px;">
            Sovereign Intelligence examines the intersection
            of chess, capital, and cognition — through the
            lens of serious operators. Published quarterly
            by the Sovereign Chess Society.
          </p>

          <p style="font-size: 15px; line-height: 1.9;
            color: #5C6470;">
            If the thinking resonated, the membership
            application is the appropriate next step.
          </p>

          <a href="https://www.sovereignchesssociety.com/application"
            style="display: inline-block;
            font-family: monospace; font-size: 11px;
            letter-spacing: 0.08em; color: #B08D57;
            text-decoration: none; margin-top: 12px;">
            Begin Application →
          </a>

          <div style="margin-top: 48px;
            padding-top: 24px;
            border-top: 1px solid #eee;">
            <p style="font-family: monospace;
              font-size: 10px; color: #5C6470;
              letter-spacing: 0.08em;">
              Sovereign Chess Society · Dubai · Founded MMXXVI
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
