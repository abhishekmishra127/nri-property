import { PLANS, ONE_OFF_SERVICES } from "../config/siteData";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface PlansSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider">
            Predictable & Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            Simple monthly care plans. Zero hidden commissions.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Pick the level of vigilance that matches your property. Cancel or adjust anytime. Start with our complimentary free inspection before paying.
          </p>
        </div>

        {/* 3 Core Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PLANS.map((plan) => {
            const isStandard = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isStandard
                    ? "bg-navy-950 text-white shadow-2xl ring-2 ring-gold-400 scale-[1.02] lg:-translate-y-2"
                    : "bg-white text-slate-900 border border-slate-200 shadow-md hover:shadow-lg"
                }`}
              >
                {/* Popular Badge */}
                {isStandard && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular For NRIs</span>
                  </div>
                )}

                <div>
                  {/* Plan Tag & Title */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isStandard
                          ? "bg-navy-800 text-gold-400 border border-gold-400/30"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {plan.planTag}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-bold tracking-tight ${isStandard ? "text-white" : "text-navy-950"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 min-h-[32px] ${isStandard ? "text-slate-300" : "text-slate-500"}`}>
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-slate-200/20">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-sm font-medium ${isStandard ? "text-slate-400" : "text-slate-500"}`}>
                        from
                      </span>
                      <span className={`text-4xl font-extrabold tracking-tight ${isStandard ? "text-gold-300" : "text-navy-950"}`}>
                        ₹{plan.priceInr}
                      </span>
                      <span className={`text-xs ${isStandard ? "text-slate-300" : "text-slate-500"}`}>
                        /month
                      </span>
                    </div>
                    <div className={`text-[11px] mt-1 ${isStandard ? "text-slate-400" : "text-slate-500"}`}>
                      {plan.priceNote} • International currency billing available
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className={`text-xs font-semibold uppercase tracking-wider ${isStandard ? "text-gold-400" : "text-slate-700"}`}>
                      What&apos;s included:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isStandard
                              ? "bg-gold-400/20 text-gold-400"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={isStandard ? "text-slate-200" : "text-slate-700"}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center justify-center gap-2 ${
                      isStandard
                        ? "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 hover:from-gold-300 hover:to-gold-400 active:scale-98 shadow-gold-500/20 shadow-md"
                        : "bg-navy-950 text-white hover:bg-navy-900 active:scale-98"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className={`text-[10px] text-center mt-2.5 ${isStandard ? "text-slate-400" : "text-slate-500"}`}>
                    Start with a 100% Free First Inspection
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on One-off services */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
            <div>
              <div className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-semibold text-xs mb-1">
                Flexible Standalone Assistance
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                Need one-off services without a monthly plan?
              </h3>
            </div>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Transparent fixed quotation before dispatch
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ONE_OFF_SERVICES.map((oneOff, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70 hover:border-gold-300 transition-colors">
                <h4 className="text-sm font-bold text-navy-950 mb-1.5">{oneOff.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{oneOff.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <span>All repair bills or vendor services are billed directly at actual vendor cost with GST receipts.</span>
            <button
              onClick={() => onSelectPlan("One-off Special Request")}
              className="text-navy-900 font-bold hover:text-gold-700 underline underline-offset-4 flex items-center gap-1"
            >
              Request a custom one-off quote <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
