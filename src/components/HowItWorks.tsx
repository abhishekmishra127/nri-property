import { HOW_IT_WORKS } from "../config/siteData";
import { ArrowRight, ClipboardList, Search, ShieldCheck, CheckCircle } from "lucide-react";

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ClipboardList className="w-5 h-5 text-gold-600" />;
      case 1:
        return <Search className="w-5 h-5 text-gold-600" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-gold-600" />;
      case 3:
      default:
        return <CheckCircle className="w-5 h-5 text-gold-600" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider">
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            How we protect your Gurugram home from start to finish
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            You don&apos;t have to travel to India or coordinate with unreliable contacts. We make onboarding smooth, secure, and completely transparent.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative">
          {HOW_IT_WORKS.map((step, index) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative flex flex-col justify-between hover:border-gold-400 hover:shadow-md transition-all group"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200/60 flex items-center justify-center">
                    {getStepIcon(index)}
                  </div>
                  <span className="text-2xl font-black text-slate-200 group-hover:text-gold-500/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400">
                <span>Step {index + 1} of 4</span>
                {index < 3 && (
                  <span className="text-gold-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Next <ArrowRight className="w-3 h-3" />
                  </span>
                )}
                {index === 3 && (
                  <span className="text-emerald-600 font-semibold flex items-center gap-1">
                    Continuous Care ✓
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center bg-gold-50/70 border border-gold-200/80 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm sm:text-base font-bold text-navy-950">
              Step 2 is 100% Free with zero commitment.
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Get an unbiased 40-point condition report of your flat before deciding.
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded-xl text-xs font-bold bg-navy-950 text-gold-300 hover:bg-navy-900 transition-colors uppercase tracking-wider shadow-sm"
          >
            Claim Free First Inspection
          </button>
        </div>

      </div>
    </section>
  );
};
