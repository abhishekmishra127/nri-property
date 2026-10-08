import { useState } from "react";
import { COVERAGE_SECTORS } from "../config/siteData";
import { MapPin, Search, CheckCircle2, Building, ShieldCheck } from "lucide-react";

export const CoverageSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSectors = COVERAGE_SECTORS.filter((sector) => {
    const q = searchTerm.toLowerCase();
    return (
      sector.zone.toLowerCase().includes(q) ||
      sector.areas.toLowerCase().includes(q) ||
      sector.societies.toLowerCase().includes(q)
    );
  });

  return (
    <section id="coverage" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider">
            Operational Service Areas
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            Comprehensive Gurugram coverage
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our field operations units are strategically stationed across Gurugram, ensuring rapid physical attendance in high-rise condominiums, gated communities, and independent floors.
          </p>
        </div>

        {/* Quick Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your society or sector (e.g. DLF, Crest, Sector 54, Golf Course...)"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 text-sm text-slate-800 placeholder-slate-400 outline-none shadow-sm transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Coverage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSectors.length > 0 ? (
            filteredSectors.map((zone, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-gold-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy-950 leading-tight">
                        {zone.zone}
                      </h3>
                      <div className="text-xs text-slate-500 mt-1 font-medium">
                        {zone.areas}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Condominiums & Societies:
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {zone.societies}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Active Ground Route
                  </span>
                  <span className="text-slate-400 font-normal">Free 1st inspection</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <Building className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h4 className="text-base font-bold text-navy-950">Don&apos;t see your specific sector listed?</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 mb-4">
                We cover all HUDA sectors and private builder developments across greater Gurugram. Contact us to confirm your society.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="px-4 py-2 rounded-lg bg-navy-950 text-white text-xs font-semibold hover:bg-navy-900"
              >
                View all Gurugram zones
              </button>
            </div>
          )}
        </div>

        {/* Coverage Note */}
        <div className="mt-10 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-gold-600" />
          <span>Covering high-rise condominiums, gated plotted villas, and independent floors across Gurugram.</span>
        </div>

      </div>
    </section>
  );
};
