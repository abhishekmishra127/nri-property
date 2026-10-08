import { useState, type ChangeEvent, type FormEvent } from "react";
import { COUNTRIES, SITE_CONFIG, WHATSAPP_DEFAULT_MESSAGE } from "../config/siteData";
import { X, CheckCircle2, ShieldCheck, Send, MessageCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    country: "United Arab Emirates (UAE)",
    countryCode: "+971",
    phone: "",
    email: "",
    propertyLocation: "",
    propertyStatus: "vacant",
    serviceInterested: selectedPlan || "Free First Inspection",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = COUNTRIES.find((c) => c.name === e.target.value);
    setFormData((prev) => ({
      ...prev,
      country: e.target.value,
      countryCode: selected ? selected.code : "+",
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // PLACEHOLDER: Connect with your API / Formspree / EmailJS
    console.log("Modal Quick Booking Submission:", formData);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy-950">
              Inspection Booking Requested!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our Gurugram operations team has registered your request for <strong>{formData.propertyLocation}</strong>.
            </p>
            <p className="text-xs text-slate-500">
              We will message your WhatsApp ({formData.countryCode} {formData.phone}) within 4 hours to coordinate property access.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl text-xs font-bold bg-navy-950 text-white uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-block text-[11px] font-bold text-gold-700 bg-gold-50 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 border border-gold-200/60">
                100% Free Initial Physical Inspection
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                Book Property Assessment
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Receive a detailed 40-point photo &amp; video condition report of your Gurugram home.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vikram Malhotra"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-navy-900 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Country *
                  </label>
                  <select
                    value={formData.country}
                    onChange={handleCountryChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:border-navy-900 outline-none bg-white"
                  >
                    {COUNTRIES.map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name.split(" ")[0]} ({c.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone number"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-navy-900 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-navy-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Gurugram Society / Sector *
                </label>
                <input
                  type="text"
                  required
                  value={formData.propertyLocation}
                  onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
                  placeholder="e.g. DLF The Camellias or Sector 54"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:border-navy-900 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Status
                  </label>
                  <select
                    value={formData.propertyStatus}
                    onChange={(e) => setFormData({ ...formData, propertyStatus: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:border-navy-900 outline-none bg-white"
                  >
                    <option value="vacant">Vacant</option>
                    <option value="rented">Rented</option>
                    <option value="new_possession">New Possession</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Interested In
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={formData.serviceInterested}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-600 bg-slate-50 outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 hover:from-gold-300 hover:to-gold-400 active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Free Inspection Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  No payment required
                </span>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${WHATSAPP_DEFAULT_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Or WhatsApp directly
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
