import { useState } from "react";
import { SITE_CONFIG, WHATSAPP_DEFAULT_MESSAGE } from "../config/siteData";
import { Building2, Menu, X, ShieldCheck, MessageCircle, User } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Discover", href: "#discover" },
    { label: "For Business", href: "#business" },
    { label: "Travel", href: "#travel" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-navy-950/95 backdrop-blur-md border-b border-navy-800/80 text-white transition-all shadow-md">
      {/* Top micro-bar for international NRI reassurance */}
      <div className="bg-navy-900 border-b border-navy-800/60 py-1.5 px-4 text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Serving Overseas Owners in UAE, USA, UK, Canada & Australia</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              Gurugram Registered Caretakers
            </span>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${WHATSAPP_DEFAULT_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Quick WhatsApp Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 shadow-md group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-gold-400 transition-colors leading-tight">
                {SITE_CONFIG.businessName}
              </span>
              <span className="text-xs text-gold-400/90 tracking-wide font-medium">
                Gurugram NRI Property Care & Inspections
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-gold-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#join-creator"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
              title="Join as Creator"
            >
              <User className="w-4 h-4" />
              <span>Join as Creator</span>
            </a>
            <a
              href="#profile"
              className="flex items-center gap-2 text-slate-200 hover:text-white"
              title="User Profile"
            >
              <User className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-md text-xs font-bold bg-gold-400 text-navy-950 uppercase tracking-wide"
            >
              Book Free
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-b border-navy-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-gold-400 px-2 py-1.5 rounded-md hover:bg-navy-800/50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-navy-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg text-sm font-bold bg-gold-400 text-navy-950 text-center uppercase tracking-wider shadow-md"
            >
              Book Free First Inspection
            </button>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${WHATSAPP_DEFAULT_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg text-sm font-semibold bg-navy-800 text-slate-100 flex items-center justify-center gap-2 border border-navy-700 hover:bg-navy-700"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Us (+91)
            </a>
            <div className="text-xs text-slate-400 text-center pt-1">
              Call us: {SITE_CONFIG.phoneDisplay}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
