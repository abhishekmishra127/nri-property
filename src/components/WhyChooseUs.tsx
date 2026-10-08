import { WHY_CHOOSE_US } from "../config/siteData";
import { 
  CheckCircle2, 
  KeyRound, 
  MapPin, 
  FileCheck, 
  Globe2, 
  Scale, 
  ShieldCheck 
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-gold-500" />;
      case "KeyRound":
        return <KeyRound className="w-6 h-6 text-gold-500" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-gold-500" />;
      case "FileCheck":
        return <FileCheck className="w-6 h-6 text-gold-500" />;
      case "Globe2":
        return <Globe2 className="w-6 h-6 text-gold-500" />;
      case "Scale":
      default:
        return <Scale className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider">
            Built on Trust & Integrity
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            Why overseas homeowners trust us with their keys
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Your home in Gurugram represents immense emotional and financial capital. We treat custody, key security, and reporting with strict professional rigor.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 hover:bg-white hover:border-gold-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center mb-5 shadow-sm">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-700">Strict Standard Operating Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Guarantee Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white border border-navy-800 shadow-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
            <KeyRound className="w-7 h-7 text-gold-400" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              The 100% Key Custody Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We never duplicate keys, never loan keys to unauthorized workers, and only access your home during scheduled, pre-notified windows with instant check-in alerts to your phone.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
