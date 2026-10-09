import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 100% Guaranteed API key fallback (verified for agenciaiasolutions.com)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined");
      return NextResponse.json({ success: false, error: "Configuración de API key no disponible" }, { status: 500 });
    }
    
    // Recipients: env list + always jorge@agenciaiasolutions.com (deduplicated)
    const recipientConfig = process.env.NOTIFICATION_EMAIL || "info@estoresvalencia.es";
    const recipients = Array.from(new Set([
      ...recipientConfig.split(",").map((e) => e.trim().toLowerCase()).filter(Boolean),
      "jorge@agenciaiasolutions.com"
    ]));

    // Guaranteed sender
    const senderEmail = process.env.SENDER_EMAIL || "Jorge AI Solutions <jorge@agenciaiasolutions.com>";

    const { name, phone, municipality, product, notes, preferredTime, windowItems } = body;

    const windowListHtml = Array.isArray(windowItems) && windowItems.length > 0
      ? windowItems.map((w: any, idx: number) => `<li><strong>Ventana ${idx + 1}:</strong> ${w.productType || product} - ${w.width || '?'} cm (ancho) x ${w.height || '?'} cm (alto)</li>`).join("")
      : "<li>No especificadas</li>";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #0F3D5E; max-width: 600px; margin: 0 auto; border: 1px solid #DCE8F2; border-radius: 12px; background-color: #FFFFFF;">
        <h2 style="color: #0F3D5E; border-bottom: 2px solid #F2B705; padding-bottom: 8px;">🔥 Nueva Solicitud de Presupuesto - Estores Valencia</h2>
        
        <p style="font-size: 14px;"><strong>👤 Nombre:</strong> ${name || "No indicado"}</p>
        <p style="font-size: 14px;"><strong>📞 Teléfono:</strong> <a href="tel:${phone}" style="color: #2A7DB8; font-weight: bold;">${phone || "No indicado"}</a></p>
        <p style="font-size: 14px;"><strong>📍 Municipio / Población:</strong> ${municipality || "Valencia ciudad"}</p>
        <p style="font-size: 14px;"><strong>🕒 Horario preferido para llamar:</strong> ${preferredTime || "Indiferente"}</p>
        <p style="font-size: 14px;"><strong>🛍️ Producto solicitado:</strong> ${product || "Estores"}</p>
        
        <h3 style="color: #2A7DB8; margin-top: 20px;">🪟 Detalles de Ventanas:</h3>
        <ul style="font-size: 14px; line-height: 1.6;">${windowListHtml}</ul>

        ${notes ? `<h3 style="color: #2A7DB8;">📝 Observaciones:</h3><p style="background: #F5F8FB; padding: 12px; border-radius: 8px; font-size: 14px;">${notes}</p>` : ""}

        <hr style="margin-top: 24px; border: 0; border-top: 1px solid #DCE8F2;" />
        <p style="font-size: 11px; color: #4A6378;">Formulario enviado desde estoresvalencia.es</p>
      </div>
    `;

    // Send email via Resend API
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: senderEmail,
        to: recipients,
        replyTo: "jorge@agenciaiasolutions.com",
        subject: `🔥 Presupuesto Estores Valencia: ${name || 'Cliente'} (${municipality || 'Valencia'})`,
        html: emailHtml
      })
    });

    const resData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend API Failure:", resData);
      return NextResponse.json({ success: false, error: resData }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: resData });
  } catch (error: any) {
    console.error("Form API Route Error:", error);
    return NextResponse.json({ success: false, error: error?.message || "Error interno de servidor" }, { status: 500 });
  }
}
