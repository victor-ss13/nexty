import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // 1. Lê o corpo da requisição JSON enviada pelo formulário do frontend
        const body = await request.json();
        const { phone, notes } = body;

        // 2. Validação básica: garante que o telefone não está vazio e tem pelo menos 7dígitos
        if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
            return NextResponse.json(
                { error: "A valid phone number is required." },
                { status: 400 }
            );
        }

        const cleanPhone = phone.trim();
        const timeStamp = new Date().toISOString();

        // 3. Se houver um Webhook configurado (Discord, Slack, Zapier, etc.), dispara o alerta
        const webhookUrl = process.env.NEXTY_NOTIFICATION_WEBHOOK;
        if (webhookUrl) {
            try {
                await fetch(webhookUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        content: `📞 **New "Call Me Now" Lead!**\n- **Phone:** ${cleanPhone}\n- **Notes:** ${notes || "None"}\n- **Requested At:** ${timeStamp}`,
                        phone: cleanPhone,
                        timeStamp
                    }),
                });
            } catch (webhookError) {
                console.error("Webhook notification failed:", webhookError);
            }
        }

        console.log(`[CALL ME NOW] New callback request received: ${cleanPhone} at ${timeStamp}`);

        return NextResponse.json(
            {
                success: true,
                message: "Your call request has been received. Our team will reach out shortly!",
                phone: cleanPhone,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json(
            { error: "Internal server error. Please try again later." },
            { status: 500 }
        );
    }
}