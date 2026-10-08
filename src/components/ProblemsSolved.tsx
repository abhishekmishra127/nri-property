import { PROBLEMS } from "../config/siteData";
import { 
  AlertTriangle, 
  Receipt, 
  UserX, 
  Clock, 
  Wrench, 
  ShieldAlert,
  ArrowDown
} from "lucide-react";

export const ProblemsSolved: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "empty-damage":
        return <AlertTriangle className="w-6 h-6 text-amber-500" />;
      case "unpaid-bills":
        return <Receipt className="w-6 h-6 text-amber-500" />;
      case "bad-tenants":
        return <UserX className="w-6 h-6 text-amber-500" />;
      case "unreliable-caretakers":
        return <Clock className="w-6 h-6 text-amber-500" />;
      case "no-repair-supervision":
        return <Wrench className="w-6 h-6 text-amber-500" />;
      case "no-proof":
      default:
        return <ShieldAlert className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="problems" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider">
            Overseas Ownership Headaches
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            Managing a Gurugram home from thousands of miles away shouldn&apos;t keep you awake.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Most NRIs rely on busy relatives or casual brokers who only visit when something has already gone drastically wrong. Here are the common risks we eliminate:
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROBLEMS.map((problem, index) => (
            <div
              key={problem.id}
              className="group bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(problem.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 group-hover:text-navy-950 mb-2.5">
                  {problem.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center text-xs font-semibold text-gold-700">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 mr-2" />
                <span>Solved by our regular inspections</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition cue to Services */}
        <div className="mt-14 text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy-800 hover:text-gold-700 transition-colors"
          >
            <span>See how our professional services protect your home</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
