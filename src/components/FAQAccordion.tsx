"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
}

export function FAQAccordion({ faqs, title = "Preguntas frecuentes" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {title && (
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-6 h-6 text-[#2A7DB8]" />
          <h2 className="font-heading font-bold text-2xl text-[#0F3D5E]">{title}</h2>
        </div>
      )}

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="card-brand overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base text-[#0F3D5E] hover:text-[#2A7DB8] transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2A7DB8] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-sm text-[#4A6378] leading-relaxed border-t border-[#F5F8FB]">
                  <p className="pt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
