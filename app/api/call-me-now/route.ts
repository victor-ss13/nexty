import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, notes } = body;

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    const cleanPhone = phone.trim();
    const timestamp = new Date().toISOString();

    // If an external webhook is provided (Discord, Slack, Telegram, Zapier, Make, etc.)
    const webhookUrl = process.env.NEXTY_NOTIFICATION_WEBHOOK;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `📞 **New "Call Me Now" Lead!**\n- **Phone:** ${cleanPhone}\n- **Notes:** ${notes || "None"}\n- **Requested At:** ${timestamp}`,
            phone: cleanPhone,
            timestamp,
          }),
        });
      } catch (webhookError) {
        console.error("Failed to trigger webhook notification:", webhookError);
      }
    }

    console.log(`[CALL ME NOW] New lead received: ${cleanPhone} at ${timestamp}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your call request has been received. Our team will reach out shortly!",
        phone: cleanPhone,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing call-me-now request:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
