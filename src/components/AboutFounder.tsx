import { ABOUT_FOUNDER } from "../config/siteData";
import { UserCheck, ShieldCheck, CheckCircle2 } from "lucide-react";

export const AboutFounder: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Card */}
        <div className="bg-gradient-to-br from-slate-50 to-gold-50/20 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Photo Placeholder Column */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="relative group w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-slate-200 border-4 border-white shadow-lg flex flex-col items-center justify-center p-4">
                {/* Photo placeholder content */}
                <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center text-navy-800 mb-2">
                  <UserCheck className="w-8 h-8 text-navy-800" />
                </div>
                <span className="text-xs font-bold text-navy-950">
                  {ABOUT_FOUNDER.name}
                </span>
                <span className="text-[10px] text-slate-500 mt-1">
                  Founder &amp; On-Ground Lead
                </span>
                <div className="mt-3 text-[9px] font-mono uppercase bg-navy-900 text-gold-300 px-2 py-0.5 rounded tracking-wider">
                  Photo Placeholder
                </div>

                {/* Subtle border badge */}
                <div className="absolute top-2 right-2 bg-emerald-500 text-white p-1 rounded-full shadow-xs" title="Gurugram Resident">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="mt-4 text-[11px] text-slate-600 italic">
                {ABOUT_FOUNDER.photoPlaceholderNote}
              </div>
            </div>

            {/* Founder Story & Message */}
            <div className="md:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100/80 text-gold-900 text-xs font-bold uppercase tracking-wider">
                Founder&apos;s Commitment
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                &ldquo;We treat your Gurugram home with the vigilance of our own.&rdquo;
              </h2>

              {/* 2-line Founder Story */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {ABOUT_FOUNDER.storyLine1}
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {ABOUT_FOUNDER.storyLine2}
              </p>

              {/* Founder Credentials list */}
              <div className="pt-3 border-t border-slate-200/80 space-y-2">
                {ABOUT_FOUNDER.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              {/* Signature touch */}
              <div className="pt-2 flex items-center gap-3">
                <div className="font-serif italic text-lg text-navy-900 font-bold">
                  {ABOUT_FOUNDER.name}
                </div>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 font-medium">
                  Gurugram Ground Operations
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
