import { useState } from "react";
import { FAQS, SITE_CONFIG, WHATSAPP_DEFAULT_MESSAGE } from "../config/siteData";
import { ChevronDown, MessageCircle } from "lucide-react";

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-900 text-xs font-bold uppercase tracking-wider">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            Clear answers to common NRI questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about pricing, key custody, emergency protocols, and overseas payments.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50 border-gold-400/80 shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-4 sm:py-5 px-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-navy-950 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-gold-500 text-navy-950 rotate-180"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp question helper */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-navy-950">Have a specific question not covered here?</h4>
            <p className="text-xs text-slate-500">
              Message our Gurugram desk directly on WhatsApp. We usually reply in under 15 minutes during IST business hours.
            </p>
          </div>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${WHATSAPP_DEFAULT_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-navy-950 text-gold-300 hover:bg-navy-900 transition-colors uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
