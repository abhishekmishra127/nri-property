import { SITE_CONFIG, WHATSAPP_DEFAULT_MESSAGE } from "../config/siteData";
import { MessageCircle, ArrowRight } from "lucide-react";

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy-950/95 backdrop-blur-md border-t border-navy-800 p-3 sm:px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.35)]">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${WHATSAPP_DEFAULT_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold bg-navy-800 text-white border border-navy-700 active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>WhatsApp Us</span>
        </a>

        {/* Book Free Inspection */}
        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-md shadow-gold-500/20 active:scale-95 transition-all text-center uppercase tracking-wide"
        >
          <span>Free Inspection</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>

      </div>
    </div>
  );
};
