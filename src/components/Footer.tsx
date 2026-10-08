import { SITE_CONFIG, WHATSAPP_DEFAULT_MESSAGE } from "../config/siteData";
import { Building2, Phone, Mail, MessageCircle, MapPin, ShieldAlert, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 text-xs border-t border-navy-800 pb-20 sm:pb-8">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-400 flex items-center justify-center text-navy-950">
                <Building2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-base font-bold text-white block">
                  {SITE_CONFIG.businessName}
                </span>
                <span className="text-[11px] text-gold-400 font-medium">
                  NRI Property Care &amp; Inspection Services
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Professional on-ground property vigilance for Non-Resident Indians and outstation homeowners. Regular physical visits, photo/video reports, repair supervision, and bill settlement across Gurugram.
            </p>

            <div className="text-[11px] text-slate-300">
              Registered in Gurugram, Haryana, India.
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-gold-400 transition-colors">How It Works</a></li>
              <li><a href="#sample-report" className="hover:text-gold-400 transition-colors">Sample Report</a></li>
              <li><a href="#plans" className="hover:text-gold-400 transition-colors">Plans &amp; Pricing</a></li>
              <li><a href="#coverage" className="hover:text-gold-400 transition-colors">Coverage Areas</a></li>
              <li><a href="#faq" className="hover:text-gold-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Key Gurugram Sectors (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Sectors Served
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              <li>Golf Course Road (Sec 42, 53, 54)</li>
              <li>DLF Phase 1, 2, 3, 4, 5</li>
              <li>Golf Course Ext. (Sec 55–67)</li>
              <li>Sohna Road &amp; Nirvana Country</li>
              <li>Dwarka Expressway (Sec 81–113)</li>
              <li>MG Road &amp; Cyber City</li>
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Gurugram Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneDisplay}`} className="hover:text-white">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${WHATSAPP_DEFAULT_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: +{SITE_CONFIG.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white break-all">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Regulatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-navy-800 text-[11px] leading-relaxed text-slate-400 space-y-2">
          <div className="flex items-start gap-2 bg-navy-900/60 p-4 rounded-xl border border-navy-800">
            <ShieldAlert className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-300">Important Disclaimer:</strong> {SITE_CONFIG.businessName} operates exclusively as a property care, periodic physical inspection, and maintenance coordination service for private homeowners. We are not a registered real estate broker, brokerage firm, or developer. We do not provide legal, architectural, financial, or tax advice. All repairs and maintenance are performed by independent licensed vendors under the owner&apos;s authorization.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Placeholders */}
        <div className="mt-8 pt-6 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a href="#privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy [Placeholder]
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-200 transition-colors">
              Terms of Custody [Placeholder]
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
