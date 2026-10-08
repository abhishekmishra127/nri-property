import { SITE_CONFIG, WHATSAPP_DEFAULT_MESSAGE } from "../config/siteData";
import { 
  ShieldCheck, 
  Video, 
  Camera, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  Clock,
  Sparkles
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-navy-800">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-navy-800/25 blur-3xl rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/4 right-5 w-72 h-72 bg-gold-500/10 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Dedicated NRI Property Management in Gurugram</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
              Your Gurugram property, looked after while you&apos;re{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200 underline decoration-gold-500/40 decoration-wavy decoration-1 underline-offset-8">
                abroad
              </span>
              .
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              We look after your luxury flats, builder floors, and villas in Gurugram with regular physical visits, weekly HD photo and video walkthrough reports, utility bill payments, reliable repairs, and tenant supervision.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm sm:text-base font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 hover:from-gold-300 hover:to-gold-400 active:scale-[0.98] shadow-lg shadow-gold-500/20 transition-all uppercase tracking-wider"
              >
                <span>Book a free first inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${WHATSAPP_DEFAULT_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold bg-navy-800/80 hover:bg-navy-750 text-white border border-navy-700/80 hover:border-gold-500/40 transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Short trust line under the buttons */}
            <div className="pt-2 text-xs sm:text-sm text-slate-300 flex flex-wrap items-center gap-y-2 gap-x-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>No credit card required</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Free 40-point condition report</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Signed custody agreement</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Strict local Gurugram team</span>
              </span>
            </div>

            {/* Country flags representation for NRI confidence */}
            <div className="pt-4 border-t border-navy-800/80 flex items-center gap-3 text-xs text-slate-300">
              <span className="text-slate-300 font-medium">Serving owners in:</span>
              <div className="flex items-center gap-2 flex-wrap font-semibold text-slate-200">
                <span className="bg-navy-800/80 px-2 py-0.5 rounded border border-navy-700">🇦🇪 UAE</span>
                <span className="bg-navy-800/80 px-2 py-0.5 rounded border border-navy-700">🇺🇸 USA</span>
                <span className="bg-navy-800/80 px-2 py-0.5 rounded border border-navy-700">🇬🇧 UK</span>
                <span className="bg-navy-800/80 px-2 py-0.5 rounded border border-navy-700">🇨🇦 Canada</span>
                <span className="bg-navy-800/80 px-2 py-0.5 rounded border border-navy-700">🇦🇺 Australia</span>
                <span className="bg-navy-800/80 px-2 py-0.5 rounded border border-navy-700">🇸🇬 Singapore</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Confidence Card / Sample Live Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="rounded-2xl bg-gradient-to-b from-navy-800/90 to-navy-900/95 p-6 border border-navy-700/80 shadow-2xl backdrop-blur-xl relative">
                
                {/* Header of the inspection card */}
                <div className="flex items-center justify-between border-b border-navy-700 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 font-bold text-sm">
                      <Camera className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gold-400 font-semibold">Latest Inspection Log</div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>DLF Phase 5, Gurugram</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] bg-emerald-500/10 text-emerald-300 font-semibold px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Verified Safe
                  </span>
                </div>

                {/* Property snapshot details */}
                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-2 text-slate-300 bg-navy-950/60 p-3 rounded-lg border border-navy-800">
                    <div>
                      <span className="text-slate-300 block text-[10px] uppercase">Property Type</span>
                      <span className="font-semibold text-slate-200">4 BHK Premium Condominium</span>
                    </div>
                    <div>
                      <span className="text-slate-300 block text-[10px] uppercase">Owner Location</span>
                      <span className="font-semibold text-slate-200">Dubai, UAE</span>
                    </div>
                    <div>
                      <span className="text-slate-300 block text-[10px] uppercase">Status</span>
                      <span className="font-semibold text-emerald-300">Vacant & Furnished</span>
                    </div>
                    <div>
                      <span className="text-slate-300 block text-[10px] uppercase">Frequency</span>
                      <span className="font-semibold text-slate-200">Weekly Care Plan</span>
                    </div>
                  </div>

                  {/* Checklist summary mini-feed */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide">
                      Routine Checklist Completed:
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded bg-navy-900 border border-navy-800 text-xs">
                      <span className="flex items-center gap-2 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Balcony & Ceiling Seepage Audit
                      </span>
                      <span className="text-[11px] text-emerald-400 font-medium">Passed</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-navy-900 border border-navy-800 text-xs">
                      <span className="flex items-center gap-2 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        DHBVN Electricity Meter Reading
                      </span>
                      <span className="text-[11px] text-slate-300 font-mono">14,820 kWh</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-navy-900 border border-navy-800 text-xs">
                      <span className="flex items-center gap-2 text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Tap Flushing & Drain Traps Filled
                      </span>
                      <span className="text-[11px] text-emerald-400 font-medium">No Odor</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-navy-900 border border-navy-800 text-xs">
                      <span className="flex items-center gap-2 text-slate-200">
                        <Video className="w-3.5 h-3.5 text-gold-400" />
                        4K Walkthrough Video Link
                      </span>
                      <span className="text-[11px] text-gold-300 font-medium">Uploaded to Drive</span>
                    </div>
                  </div>

                  {/* Direct report link teaser */}
                  <div className="pt-3 border-t border-navy-800 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-300" />
                      Report dispatched in &lt; 4 hours
                    </span>
                    <a
                      href="#sample-report"
                      className="text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-1 underline underline-offset-2"
                    >
                      <span>Preview full mockup</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Floating assurance badge */}
                <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-gradient-to-r from-navy-900 to-navy-800 border border-gold-500/40 rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-400 text-navy-950 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5 text-navy-950" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Zero Brokerage Bias</div>
                    <div className="text-[10px] text-slate-300">We work 100% for the homeowner</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
