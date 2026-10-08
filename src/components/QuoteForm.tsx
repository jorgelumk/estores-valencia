"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, ShieldCheck, Clock, Send, Upload, Plus, Trash2 } from "lucide-react";

interface QuoteFormProps {
  initialProduct?: string;
  compact?: boolean;
}

export interface WindowItem {
  id: string;
  roomName: string;
  productType: string;
  width: string;
  height: string;
}

export function QuoteForm({ initialProduct = "enrollables", compact = false }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [windowItems, setWindowItems] = useState<WindowItem[]>([
    { id: "1", roomName: "Ventana 1", productType: initialProduct, width: "", height: "" }
  ]);

  const addWindowItem = () => {
    setWindowItems((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        roomName: `Ventana ${prev.length + 1}`,
        productType: initialProduct,
        width: "",
        height: ""
      }
    ]);
  };

  const removeWindowItem = (id: string) => {
    if (windowItems.length <= 1) return;
    setWindowItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateWindowItem = (id: string, field: keyof WindowItem, value: string) => {
    setWindowItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const [formData, setFormData] = useState({
    product: initialProduct,
    numWindows: "1-2 ventanas",
    approxWidth: "",
    approxHeight: "",
    photo: null as File | null,
    name: "",
    phone: "",
    municipality: "Valencia ciudad",
    preferredTime: "Mañanas (09:00 - 14:00)",
    notes: "",
    acceptTerms: false
  });

  const productOptions = [
    { value: "enrollables", label: "Estores enrollables" },
    { value: "screen", label: "Estores screen" },
    { value: "noche-y-dia", label: "Estores noche y día" },
    { value: "paqueto", label: "Estores paqueto" },
    { value: "opacos", label: "Estores opacos (blackout)" },
    { value: "motorizados", label: "Estores motorizados" },
    { value: "paneles-japoneses", label: "Paneles japoneses" },
    { value: "cortinas-verticales", label: "Cortinas verticales" },
    { value: "persianas-alicantinas", label: "Persianas alicantinas" },
    { value: "cortinas-tecnicas", label: "Cortinas técnicas generales" },
    { value: "empresas", label: "Proyectos para oficinas / empresas" }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, photo: e.target.files![0] }));
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("Debes aceptar los términos y condiciones de uso para enviar la solicitud.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/quote/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          windowItems
        })
      });

      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData?.error?.message || "Error al procesar el envío del correo.");
      }

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          event_category: "Formulario Presupuesto",
          event_label: formData.product
        });
      }
      setSubmitted(true);
    } catch (err: any) {
      console.error("Error al enviar formulario:", err);
      alert(`No se pudo enviar el formulario: ${err.message || "Error de conexión"}`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="card-brand p-8 text-center space-y-4 animate-fade-in">
        <div className="w-16 h-16 bg-[#E1EEF8] text-[#2A7DB8] rounded-full flex items-center justify-center mx-auto">
          <Check className="w-10 h-10 stroke-[3]" />
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-[#0F3D5E]">
          ¡Solicitud enviada con éxito!
        </h3>
        <p className="text-[#4A6378] text-sm max-w-md mx-auto">
          Gracias, <strong>{formData.name}</strong>. Hemos recibido tu solicitud para <strong>{formData.municipality}</strong>. Te contactaremos por teléfono o WhatsApp en menos de 24 horas laborables con tu presupuesto sin compromiso. Tras aceptarlo, acudiremos a mostrarte las muestras físicas y verificar las medidas finales.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="https://wa.me/34686382891?text=Hola,%20acabo%20de%20enviar%20mi%20solicitud%20de%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2.5"
          >
            Acelerar por WhatsApp
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(1);
            }}
            className="btn-secondary text-xs py-2.5"
          >
            Enviar otra solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-brand p-6 sm:p-8 relative">
      {/* Form Progress Bar */}
      {!compact && (
        <div className="mb-6">
          <div className="flex justify-between text-xs font-bold text-[#4A6378] mb-2">
            <span className={step >= 1 ? "text-[#2A7DB8]" : ""}>1. Producto</span>
            <span className={step >= 2 ? "text-[#2A7DB8]" : ""}>2. Medidas (Opcional)</span>
            <span className={step >= 3 ? "text-[#2A7DB8]" : ""}>3. Contacto</span>
          </div>
          <div className="h-2 w-full bg-[#E1EEF8] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2A7DB8] transition-all duration-300"
              style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
            ></div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: Product & Windows */}
        {(step === 1 || compact) && (
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#0F3D5E] border-b border-[#DCE8F2] pb-2">
              Paso 1: Selecciona el producto y ventanas
            </h3>

            <div>
              <label className="block text-xs font-semibold text-[#0F3D5E] mb-1">
                Tipo de producto
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-[#DCE8F2] bg-white text-sm text-[#0F3D5E] focus:ring-2 focus:ring-[#2A7DB8] outline-none"
              >
                {productOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0F3D5E] mb-1">
                Número de ventanas a equipar
              </label>
              <select
                name="numWindows"
                value={formData.numWindows}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-[#DCE8F2] bg-white text-sm text-[#0F3D5E] focus:ring-2 focus:ring-[#2A7DB8] outline-none"
              >
                <option value="1-2 ventanas">1 - 2 ventanas</option>
                <option value="3-5 ventanas">3 - 5 ventanas</option>
                <option value="Toda la casa (6+ ventanas)">Toda la vivienda (6+ ventanas)</option>
                <option value="Proyecto de oficina / local">Proyecto para oficina / empresa</option>
              </select>
            </div>

            {!compact && (
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-primary text-sm py-2.5 px-6 flex items-center gap-2"
                >
                  Siguiente paso
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: Medidas aproximadas por ventana & Foto (Multi-producto) */}
        {step === 2 && !compact && (
          <div className="space-y-5">
            <div className="border-b border-[#DCE8F2] pb-3 flex justify-between items-center flex-wrap gap-2">
              <div>
                <h3 className="font-heading font-bold text-lg text-[#0F3D5E]">
                  Paso 2: Medidas aproximadas por ventana
                </h3>
                <p className="text-xs text-[#4A6378] mt-0.5">
                  Puedes añadir tantas ventanas como necesites equipar en tu vivienda u oficina.
                </p>
              </div>
              <button
                type="button"
                onClick={addWindowItem}
                className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1 font-bold text-[#2A7DB8] border-[#2A7DB8]"
              >
                <Plus className="w-3.5 h-3.5" />
                Añadir otra ventana
              </button>
            </div>

            {/* List of window items */}
            <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
              {windowItems.map((item, index) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl border border-[#DCE8F2] bg-[#F5F8FB] space-y-3 relative group"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#0F3D5E] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#2A7DB8] text-white flex items-center justify-center text-[11px]">
                        {index + 1}
                      </span>
                      Ventana / Estancia #{index + 1}
                    </span>
                    {windowItems.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeWindowItem(item.id)}
                        className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 font-semibold"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Eliminar
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#0F3D5E] mb-1">
                        Estancia (ej: Salón, Dormitorio)
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Salón principal"
                        value={item.roomName}
                        onChange={(e) => updateWindowItem(item.id, "roomName", e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#DCE8F2] bg-white text-xs text-[#0F3D5E] focus:ring-2 focus:ring-[#2A7DB8] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#0F3D5E] mb-1">
                        Tipo de producto
                      </label>
                      <select
                        value={item.productType}
                        onChange={(e) => updateWindowItem(item.id, "productType", e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-[#DCE8F2] bg-white text-xs text-[#0F3D5E] focus:ring-2 focus:ring-[#2A7DB8] outline-none"
                      >
                        {productOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-semibold text-[#0F3D5E] mb-1">
                          Ancho (cm)
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: 150"
                          value={item.width}
                          onChange={(e) => updateWindowItem(item.id, "width", e.target.value)}
                          className="w-full p-2.5 rounded-lg border border-[#DCE8F2] bg-white text-xs text-[#0F3D5E] focus:ring-2 focus:ring-[#2A7DB8] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-[#0F3D5E] mb-1">
                          Alto (cm)
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: 220"
                          value={item.height}
                          onChange={(e) => updateWindowItem(item.id, "height", e.target.value)}
                          className="w-full p-2.5 rounded-lg border border-[#DCE8F2] bg-white text-xs text-[#0F3D5E] focus:ring-2 focus:ring-[#2A7DB8] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addWindowItem}
              className="w-full py-2.5 border-2 border-dashed border-[#2A7DB8]/40 hover:border-[#2A7DB8] rounded-xl text-xs font-bold text-[#2A7DB8] hover:bg-[#E1EEF8]/50 transition-colors flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              + Añadir otra ventana al presupuesto
            </button>

            <div>
              <label className="block text-xs font-semibold text-[#0F3D5E] mb-1">
                Adjuntar foto de las ventanas (opcional)
              </label>
              <label className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-[#DCE8F2] rounded-xl cursor-pointer hover:bg-[#F5F8FB] transition-colors">
                <Upload className="w-4 h-4 text-[#2A7DB8]" />
                <span className="text-xs font-medium text-[#4A6378]">
                  {formData.photo ? formData.photo.name : "Subir foto de las ventanas (.jpg, .png)"}
                </span>
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </label>
            </div>

            <div className="pt-2 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary text-sm py-2.5 px-4 flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Anterior
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="btn-primary text-sm py-2.5 px-6 flex items-center gap-2"
              >
                Siguiente paso
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Datos de Contacto */}
        {(step === 3 || compact) && (
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-[#0F3D5E] border-b border-[#DCE8F2] pb-2">
              {compact ? "Tus datos para el presupuesto sin compromiso" : "Paso 3: Tus datos para recibir el presupuesto"}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F3D5E] mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-[#DCE8F2] text-sm focus:ring-2 focus:ring-[#2A7DB8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F3D5E] mb-1">
                  Teléfono de contacto *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="686 382 891"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-[#DCE8F2] text-sm focus:ring-2 focus:ring-[#2A7DB8] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F3D5E] mb-1">
                  Municipio / Población *
                </label>
                <input
                  type="text"
                  name="municipality"
                  required
                  placeholder="Ej: Valencia, Paterna, Torrent..."
                  value={formData.municipality}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-[#DCE8F2] text-sm focus:ring-2 focus:ring-[#2A7DB8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F3D5E] mb-1">
                  Franja horaria preferida para llamar
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-[#DCE8F2] bg-white text-sm text-[#0F3D5E] focus:ring-2 focus:ring-[#2A7DB8] outline-none"
                >
                  <option value="Mañanas (09:00 - 14:00)">Mañanas (09:00 - 14:00)</option>
                  <option value="Tardes (16:00 - 19:00)">Tardes (16:00 - 19:00)</option>
                  <option value="Indiferente">Indiferente</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0F3D5E] mb-1">
                Comentarios o detalles (opcional)
              </label>
              <textarea
                name="notes"
                rows={2}
                placeholder="Indica cualquier preferencia de color, piso sin ascensor, orientación solar..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-[#DCE8F2] text-sm focus:ring-2 focus:ring-[#2A7DB8] outline-none"
              ></textarea>
            </div>

            {/* Checkbox Términos y Condiciones */}
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                required
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-0.5 h-4 w-4 rounded border-[#DCE8F2] text-[#2A7DB8] focus:ring-[#2A7DB8] cursor-pointer shrink-0"
              />
              <label htmlFor="acceptTerms" className="text-xs text-[#4A6378] cursor-pointer leading-tight">
                He leído y acepto los{" "}
                <Link
                  href="/aviso-legal/"
                  target="_blank"
                  className="underline font-semibold text-[#0F3D5E] hover:text-[#2A7DB8]"
                >
                  términos y condiciones de uso
                </Link>{" "}
                y la{" "}
                <Link
                  href="/privacidad/"
                  target="_blank"
                  className="underline font-semibold text-[#0F3D5E] hover:text-[#2A7DB8]"
                >
                  política de privacidad
                </Link>
                . *
              </label>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
              {!compact && (
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-secondary text-sm py-2.5 px-4 flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Anterior
                </button>
              )}

              <button
                type="submit"
                className="btn-accent text-sm py-3 px-8 w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
                Solicitar presupuesto gratis
              </button>
            </div>
          </div>
        )}
      </form>

      {/* Trust elements under form */}
      <div className="mt-6 pt-4 border-t border-[#DCE8F2] flex flex-wrap justify-between items-center gap-2 text-xs text-[#4A6378]">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-[#2A7DB8]" />
          Presupuesto 100% sin compromiso
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-[#2A7DB8]" />
          Verificación de medidas y muestras tras aceptar
        </span>
      </div>
    </div>
  );
}
