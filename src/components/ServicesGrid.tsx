import { SERVICES } from "../config/siteData";
import { 
  Home, 
  Camera, 
  CreditCard, 
  Sparkles, 
  Wrench, 
  UserCheck, 
  TrendingUp, 
  FileText,
  ShieldCheck
} from "lucide-react";

export const ServicesGrid: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "property-inspections":
        return <Home className="w-6 h-6 text-navy-800" />;
      case "photo-video-reports":
        return <Camera className="w-6 h-6 text-navy-800" />;
      case "bill-payments":
        return <CreditCard className="w-6 h-6 text-navy-800" />;
      case "cleaning-pest":
        return <Sparkles className="w-6 h-6 text-navy-800" />;
      case "repairs-maintenance":
        return <Wrench className="w-6 h-6 text-navy-800" />;
      case "tenant-search":
        return <UserCheck className="w-6 h-6 text-navy-800" />;
      case "rent-collection":
        return <TrendingUp className="w-6 h-6 text-navy-800" />;
      case "document-society":
      default:
        return <FileText className="w-6 h-6 text-navy-800" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-200/80 text-gold-800 text-xs font-bold uppercase tracking-wider">
            Comprehensive Property Care
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            Everything your Gurugram property needs. Handled locally.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you own a high-rise condominium in DLF Phase 5, a luxury villa on Golf Course Extension, or an independent builder floor, our services cover every routine and emergency requirement.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-gold-400 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center group-hover:bg-gold-50 group-hover:border-gold-300 transition-colors">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-navy-100/70 text-navy-900 border border-navy-200/50">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy-950 group-hover:text-gold-700 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gurugram Ground Team Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note at bottom of Services */}
        <div className="mt-12 bg-navy-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Have a unique request or specific society rule?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              From power-of-attorney documents to builder snagging and renovation inspections, we customize our assistance.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-3 rounded-xl text-xs font-bold bg-gold-400 text-navy-950 hover:bg-gold-300 transition-colors uppercase tracking-wider shadow-sm"
          >
            Ask About Custom Needs
          </a>
        </div>

      </div>
    </section>
  );
};
