import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || "info@estoresvalencia.es";
    const senderEmail = process.env.SENDER_EMAIL || "Jorge AI Solutions <jorge@agenciaiasolutions.com>";
    const verifiedFallbackSender = "Estores Valencia <presupuestos@pergolasbioclimaticasvalencia.es>";

    if (!apiKey) {
      console.warn("RESEND_API_KEY not set, logging lead locally:", body);
      return NextResponse.json({
        success: true,
        message: "Formulario recibido correctamente (modo simulación sin RESEND_API_KEY)."
      });
    }

    const { name, phone, municipality, product, notes, preferredTime, windowItems } = body;

    const windowListHtml = Array.isArray(windowItems) && windowItems.length > 0
      ? windowItems.map((w: any, idx: number) => `<li><strong>Ventana ${idx + 1}:</strong> ${w.productType || product} - ${w.width || '?'} cm (ancho) x ${w.height || '?'} cm (alto)</li>`).join("")
      : "<li>No especificadas</li>";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #0F3D5E; max-width: 600px; margin: 0 auto; border: 1px solid #DCE8F2; border-radius: 12px;">
        <h2 style="color: #0F3D5E; border-bottom: 2px solid #F2B705; padding-bottom: 8px;">🔥 Nueva Solicitud de Presupuesto - Estores Valencia</h2>
        
        <p><strong>👤 Nombre:</strong> ${name || "No indicado"}</p>
        <p><strong>📞 Teléfono:</strong> <a href="tel:${phone}">${phone || "No indicado"}</a></p>
        <p><strong>📍 Municipio / Población:</strong> ${municipality || "Valencia ciudad"}</p>
        <p><strong>🕒 Horario preferido:</strong> ${preferredTime || "Indiferente"}</p>
        <p><strong>🛍️ Producto principal:</strong> ${product || "Estores"}</p>
        
        <h3 style="color: #2A7DB8; margin-top: 20px;">🪟 Detalles de Ventanas:</h3>
        <ul>${windowListHtml}</ul>

        ${notes ? `<h3 style="color: #2A7DB8;">📝 Observaciones / Mensaje:</h3><p style="background: #F5F8FB; padding: 12px; border-radius: 8px;">${notes}</p>` : ""}

        <hr style="margin-top: 24px; border: 0; border-top: 1px solid #DCE8F2;" />
        <p style="font-size: 12px; color: #4A6378;">Enviado automáticamente desde el formulario web de estoresvalencia.es</p>
      </div>
    `;

    const recipients = recipientEmail.split(",").map((e) => e.trim());

    // Try sending with requested sender
    let resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: senderEmail,
        to: recipients,
        replyTo: "jorge@agenciaiasolutions.com",
        subject: `🔥 Solicitud Presupuesto: ${name} (${municipality || "Valencia"})`,
        html: emailHtml
      })
    });

    let resData = await resendRes.json();

    // If Resend rejects due to unverified domain, fallback to verified domain sender so lead is NEVER lost
    if (!resendRes.ok && (resData?.statusCode === 403 || resData?.message?.includes("domain"))) {
      console.warn("Unverified sender domain, falling back to verified domain sender:", resData);

      resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          from: verifiedFallbackSender,
          to: recipients,
          replyTo: "jorge@agenciaiasolutions.com",
          subject: `🔥 Solicitud Presupuesto: ${name} (${municipality || "Valencia"})`,
          html: emailHtml
        })
      });

      resData = await resendRes.json();
    }

    if (!resendRes.ok) {
      console.error("Resend API Error:", resData);
      return NextResponse.json({ success: false, error: resData }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: resData });
  } catch (error) {
    console.error("Form POST error:", error);
    return NextResponse.json({ success: false, error: "Error interno al procesar la solicitud" }, { status: 500 });
  }
}
