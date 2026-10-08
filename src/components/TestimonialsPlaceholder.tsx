import { MessageSquareQuote, ShieldAlert, Sparkles, User } from "lucide-react";

export const TestimonialsPlaceholder: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Placeholder banner explicitly noting real feedback policy */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-dashed border-gold-400/80 shadow-xs relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-700" />
              <span>Client Reviews &amp; Owner Feedback</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
              Genuine NRI Owner Experiences
            </h3>
            
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900 text-center font-medium flex items-center justify-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                <strong>Policy Notice:</strong> We do not publish fake testimonials, inflated stars, or fabricated metrics. Real verified owner testimonials &amp; video reviews from Dubai, London, and Silicon Valley will be added here.
              </span>
            </div>
          </div>

          {/* Testimonial Placeholder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between relative group hover:border-gold-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-slate-400">
                    <MessageSquareQuote className="w-6 h-6 text-gold-500/60" />
                    <span className="text-[10px] font-mono bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                      Slot 0{slot}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 italic leading-relaxed mb-4">
                    [Placeholder for verified NRI homeowner feedback regarding property inspection, tenant transition, or bill payment experience in Gurugram.]
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-700">
                      [Owner Name, Slot {slot}]
                    </div>
                    <div className="text-[10px] text-slate-400">
                      [Country • Society e.g. DLF / Ireo / M3M]
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-slate-400">
            Edit <code className="text-navy-900 bg-slate-100 px-1 py-0.5 rounded text-[11px]">TestimonialsPlaceholder.tsx</code> to insert real quotes once collected.
          </div>

        </div>

      </div>
    </section>
  );
};
