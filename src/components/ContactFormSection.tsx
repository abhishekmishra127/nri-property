import { useState, type ChangeEvent, type FormEvent } from "react";
import { SITE_CONFIG, COUNTRIES, WHATSAPP_DEFAULT_MESSAGE } from "../config/siteData";
import { 
  Send, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck,
  Sparkles
} from "lucide-react";

interface ContactFormProps {
  initialService?: string;
}

export const ContactFormSection: React.FC<ContactFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: "",
    country: "United Arab Emirates (UAE)",
    countryCode: "+971",
    phone: "",
    email: "",
    propertyLocation: "",
    propertyStatus: "vacant",
    serviceInterested: initialService || "Free First Inspection",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

    // PLACEHOLDER HANDLER:
    // This is where you can plug in Formspree, EmailJS, Supabase, webhook, or your own backend API.
    // Example:
    // await fetch("https://api.yourdomain.com/inquiries", { method: "POST", body: JSON.stringify(formData) });
    console.log("Property Care Lead Form Submission:", formData);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-800/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Final CTA Band Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Zero Risk • Free First Physical Inspection
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Book your free first inspection or request a quick WhatsApp callback
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Fill in your property details below. Our Gurugram operations team will review your society and reach out within 4 hours to coordinate your complimentary 40-point assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-navy-900/90 rounded-3xl p-7 border border-navy-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Direct Contact Channels</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prefer an instant conversation? Reach out directly via phone or WhatsApp. We cater specifically to overseas time zones (Gulf, North America, UK, and Australia).
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${WHATSAPP_DEFAULT_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Instant Chat</div>
                    <div className="text-sm sm:text-base font-bold text-white">WhatsApp Desk</div>
                    <div className="text-xs text-slate-300">{SITE_CONFIG.phoneDisplay}</div>
                  </div>
                </a>

                {/* Phone Call */}
                <a
                  href={`tel:${SITE_CONFIG.phoneDisplay}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-navy-800/80 border border-navy-700 hover:border-gold-400/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gold-400 uppercase tracking-wider">Direct Phone</div>
                    <div className="text-sm sm:text-base font-bold text-white">{SITE_CONFIG.phoneDisplay}</div>
                    <div className="text-xs text-slate-300">Mon – Sat, 9:00 AM – 7:00 PM IST</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-navy-800/80 border border-navy-700 hover:border-gold-400/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">Official Email</div>
                    <div className="text-sm sm:text-base font-bold text-white break-all">{SITE_CONFIG.email}</div>
                    <div className="text-xs text-slate-300">Fast formal responses</div>
                  </div>
                </a>
              </div>

              {/* Physical Office / Hub */}
              <div className="pt-4 border-t border-navy-800 flex items-start gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Operations Hub:</strong> {SITE_CONFIG.address}
                </span>
              </div>
            </div>

            {/* Confidence Checkmark List */}
            <div className="bg-navy-900/60 rounded-2xl p-6 border border-navy-800 text-xs space-y-2.5 text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free 40-point initial audit report with zero obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No key or document handover without a signed agreement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>We never share or sell your contact information</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-7 sm:p-10 shadow-2xl border border-slate-100 relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950">
                    Inspection Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our Gurugram operations team has received your details for{" "}
                    <strong>{formData.propertyLocation || "your property"}</strong>.
                  </p>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    We will send an introductory message to your WhatsApp ({formData.countryCode} {formData.phone}) within 4 hours to coordinate access or share initial details.
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold bg-navy-950 text-white hover:bg-navy-900 transition-colors uppercase tracking-wider"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-navy-950">
                      Property &amp; Owner Information
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      All fields help us prepare an accurate preliminary report.
                    </p>
                  </div>

                  {/* 1. Name & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Mehta"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Country of Residence *
                      </label>
                      <select
                        value={formData.country}
                        onChange={handleCountryChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 outline-none transition-all bg-white"
                      >
                        {COUNTRIES.map((c, i) => (
                          <option key={i} value={c.name}>
                            {c.name} ({c.code})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 2. Phone / WhatsApp & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp Number *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-xs font-mono font-semibold text-slate-600">
                          {formData.countryCode}
                        </span>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 50 123 4567"
                          className="w-full px-4 py-3 rounded-r-xl border border-slate-200 text-sm text-slate-900 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* 3. Property Location & Sector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Property Society / Sector in Gurugram *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.propertyLocation}
                      onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
                      placeholder="e.g. DLF The Crest, Sector 54 or Ireo Skyon, Sector 60"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 outline-none transition-all"
                    />
                  </div>

                  {/* 4. Property Status & Service Interested */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Current Property Status *
                      </label>
                      <select
                        value={formData.propertyStatus}
                        onChange={(e) => setFormData({ ...formData, propertyStatus: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 outline-none transition-all bg-white"
                      >
                        <option value="vacant">Vacant (Locked / Unoccupied)</option>
                        <option value="rented">Currently Rented to Tenants</option>
                        <option value="possession_pending">New Flat / Awaiting Possession</option>
                        <option value="under_furnishing">Under Renovation / Furnishing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        value={formData.serviceInterested}
                        onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 outline-none transition-all bg-white"
                      >
                        <option value="Free First Inspection">Free First Inspection (Recommended)</option>
                        <option value="Basic Watch (₹2,999/mo)">Basic Watch Plan (₹2,999/mo)</option>
                        <option value="Standard Care (₹4,999/mo)">Standard Care Plan (₹4,999/mo)</option>
                        <option value="Premium Management (₹7,999/mo)">Premium Management Plan (₹7,999/mo)</option>
                        <option value="Tenant Search & Management">Tenant Search &amp; Management</option>
                        <option value="One-Off Snagging / Cleaning">One-Off Snagging / Deep Cleaning</option>
                      </select>
                    </div>
                  </div>

                  {/* 5. Message / Specific Concerns */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Notes or Urgent Concerns (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need someone to check ceiling seepage after rains, collect pending maintenance slips, or verify tenant vacating..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-navy-950 hover:from-gold-300 hover:to-gold-400 active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Transmitting details...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Free Inspection &amp; Callback</span>
                        </>
                      )}
                    </button>
                    <div className="text-[11px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Zero fee for 1st inspection • No obligation to purchase a plan</span>
                    </div>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
