import { useState } from "react";
import { 
  FileCheck, 
  Camera, 
  Calendar, 
  MapPin, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Flame, 
  Droplets, 
  Eye, 
  Download,
  ShieldCheck,
  Clock
} from "lucide-react";

export const SampleReportMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "checklist" | "notes" | "meters">("photos");

  const samplePhotos = [
    {
      title: "Main Entrance & Double Lock Verification",
      room: "Entry Foyer",
      timestamp: "11:34 AM IST • 04 Oct 2026",
      status: "Verified Secure",
      statusColor: "emerald",
      placeholderText: "Replace with photo of main door & biometric lock",
      notes: "Main Godrej double deadbolt intact. No tampering or forced entry signs.",
    },
    {
      title: "Living Room & Balcony Sliding Glass Track",
      room: "Drawing & Dining",
      timestamp: "11:42 AM IST • 04 Oct 2026",
      status: "Clean & Aired",
      statusColor: "emerald",
      placeholderText: "Replace with wide-angle living room photo",
      notes: "Windows opened for 30 minutes for air circulation. No odor or dust accumulation.",
    },
    {
      title: "Master Bedroom Balcony Drain & Ceiling",
      room: "Balcony Check",
      timestamp: "11:51 AM IST • 04 Oct 2026",
      status: "Advisory Resolved",
      statusColor: "amber",
      placeholderText: "Replace with balcony drain inspection photo",
      notes: "Dried leaves near rain drain cleared by inspector. No water ponding or parapet cracks.",
    },
    {
      title: "Kitchen Under-Sink Plumbing & RO Filter",
      room: "Kitchen",
      timestamp: "12:05 PM IST • 04 Oct 2026",
      status: "Dry & Normal",
      statusColor: "emerald",
      placeholderText: "Replace with kitchen under-sink trap photo",
      notes: "Angle valves dry. No moisture, mold, or cockroach infestation detected.",
    },
    {
      title: "DHBVN Smart Electricity Meter Display",
      room: "Utility Meter Board",
      timestamp: "12:14 PM IST • 04 Oct 2026",
      status: "Meter Verified",
      statusColor: "emerald",
      placeholderText: "Replace with close-up photo of DHBVN electric meter screen",
      notes: "Reading: 16,428.5 kWh. Mains MCB kept in designated safe standby mode.",
    },
    {
      title: "Master Bathroom Water Traps & Faucets",
      room: "Bathrooms",
      timestamp: "12:22 PM IST • 04 Oct 2026",
      status: "Flushed & Sealed",
      statusColor: "emerald",
      placeholderText: "Replace with bathroom vanity & sanitaryware photo",
      notes: "Flushed all 3 WC flushes and run taps for 60s to prevent dry trap sewer smell.",
    },
  ];

  const checklistItems = [
    { category: "Security & Physical Access", item: "Main door lock, latch, deadbolt & peephole", result: "Pass", detail: "Locks operated smoothly, lubed latch with graphite powder" },
    { category: "Security & Physical Access", item: "Window sliding latches and grill fasteners", result: "Pass", detail: "All 8 window panes locked tightly" },
    { category: "Moisture, Seepage & Walls", item: "Wall seepage test (common walls & shaft areas)", result: "Pass", detail: "Zero dampness found on bedroom & shaft drywall" },
    { category: "Moisture, Seepage & Walls", item: "Balcony rainwater outlet & grating", result: "Advisory", detail: "Cleared 2 handfulls of dry leaves from external drain grating" },
    { category: "Plumbing & Sanitaryware", item: "Bathroom flush valves & WC health faucets", result: "Pass", detail: "Water pressure normal, no continuous trickle in cistern" },
    { category: "Plumbing & Sanitaryware", item: "Floor trap water seals (anti-cockroach/odor)", result: "Pass", detail: "Poured 1 liter water into each dry floor trap" },
    { category: "Electrical & Appliances", item: "Main MCB panel & Earth Leakage (ELCB)", result: "Pass", detail: "Tripped test switch & reset successfully" },
    { category: "Electrical & Appliances", item: "Refrigerator / Geyser / Inverter check", result: "Pass", detail: "Inverter battery water level checked; appliances safely isolated" },
    { category: "Pest & Infestation Audit", item: "Pest droppings, termite trails or pigeon roosting", result: "Pass", detail: "No insect or pigeon netting breach observed" },
    { category: "Bills & Society Formalities", item: "Society notice board & physical mailbox", result: "Pass", detail: "Collected 1 MCG property tax circular; forwarded scanned copy" },
  ];

  return (
    <section id="sample-report" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-200/80 text-gold-800 text-xs font-bold uppercase tracking-wider">
            Radical Transparency
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            See exactly what arrives on your phone after every visit
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            No vague &ldquo;all looks good&rdquo; messages. You receive an exhaustive, timestamped digital report with HD photos, an actionable checklist, meter readings, and an HD video walkthrough link.
          </p>
        </div>

        {/* Visual Report Container Mockup */}
        <div className="bg-slate-900 rounded-3xl p-3 sm:p-6 shadow-2xl border border-slate-800 max-w-5xl mx-auto">
          
          {/* Report Paper Inner Container */}
          <div className="bg-white rounded-2xl shadow-inner overflow-hidden border border-slate-200">
            
            {/* Report Header Bar */}
            <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white p-6 sm:p-8 border-b-4 border-gold-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-gold-400 text-navy-950 uppercase tracking-wider">
                      Verified Report
                    </span>
                    <span className="text-xs text-slate-300 font-mono">ID: #GUR-2026-0894</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Property Routine Condition Audit
                  </h3>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-300 pt-1">
                    <span className="flex items-center gap-1 text-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      Flat 1802, Tower 3, DLF Phase 5, Gurugram
                    </span>
                    <span className="flex items-center gap-1 text-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      04 Oct 2026 • 11:30 AM IST
                    </span>
                  </div>
                </div>

                {/* Inspector Details */}
                <div className="bg-navy-800/80 border border-navy-700 rounded-xl p-3 text-right self-stretch md:self-auto flex md:flex-col justify-between items-center md:items-end">
                  <div className="text-[11px] text-slate-300">Audited by Ground Inspector:</div>
                  <div className="text-sm font-bold text-gold-300 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-gold-400" />
                    <span>Amit Verma (Field Lead)</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    GPS & Biometric Logged
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Summary Pill Row */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-700">Audit Status:</span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  38 Normal
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  1 Cleared on Site
                </span>
              </div>
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Visit duration: 52 mins • Weather: Sunny, 29°C
              </div>
            </div>

            {/* Mockup Tabs Navigation */}
            <div className="border-b border-slate-200 px-6 bg-white flex overflow-x-auto gap-2 sm:gap-6 text-sm font-medium">
              <button
                onClick={() => setActiveTab("photos")}
                className={`py-3.5 border-b-2 font-bold flex items-center gap-2 whitespace-nowrap transition-colors ${
                  activeTab === "photos"
                    ? "border-navy-900 text-navy-900"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <Camera className="w-4 h-4 text-gold-600" />
                Photo Proofs (6)
              </button>
              <button
                onClick={() => setActiveTab("checklist")}
                className={`py-3.5 border-b-2 font-bold flex items-center gap-2 whitespace-nowrap transition-colors ${
                  activeTab === "checklist"
                    ? "border-navy-900 text-navy-900"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <FileCheck className="w-4 h-4 text-gold-600" />
                40-Point Checklist
              </button>
              <button
                onClick={() => setActiveTab("meters")}
                className={`py-3.5 border-b-2 font-bold flex items-center gap-2 whitespace-nowrap transition-colors ${
                  activeTab === "meters"
                    ? "border-navy-900 text-navy-900"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <Zap className="w-4 h-4 text-gold-600" />
                Utility Meters
              </button>
              <button
                onClick={() => setActiveTab("notes")}
                className={`py-3.5 border-b-2 font-bold flex items-center gap-2 whitespace-nowrap transition-colors ${
                  activeTab === "notes"
                    ? "border-navy-900 text-navy-900"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <Eye className="w-4 h-4 text-gold-600" />
                Inspector Notes
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-6 sm:p-8 bg-slate-50/50 min-h-[380px]">
              
              {/* TAB 1: Photo Proofs */}
              {activeTab === "photos" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {samplePhotos.map((photo, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between"
                      >
                        {/* Placeholder Photo Box */}
                        <div className="relative bg-slate-100 border-b border-slate-200 aspect-video flex flex-col items-center justify-center p-4 text-center group">
                          {/* Simulated camera grid overlay */}
                          <div className="absolute inset-0 border-2 border-dashed border-slate-300/80 rounded m-2 pointer-events-none" />
                          <Camera className="w-7 h-7 text-slate-400 mb-2 group-hover:scale-110 transition-transform" />
                          <span className="text-[11px] font-semibold text-slate-600 px-2 leading-tight">
                            {photo.placeholderText}
                          </span>
                          <span className="mt-2 text-[9px] font-mono bg-navy-900/80 text-white px-2 py-0.5 rounded">
                            GPS 28.4595°N, 77.0266°E
                          </span>
                        </div>

                        {/* Caption & Notes */}
                        <div className="p-4 space-y-2">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-bold text-navy-900">{photo.room}</span>
                            <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 font-semibold px-2 py-0.5 rounded-full">
                              {photo.status}
                            </span>
                          </div>
                          <div className="text-xs text-slate-700 font-medium">
                            {photo.title}
                          </div>
                          <p className="text-[11px] text-slate-500 italic bg-slate-50 p-2 rounded border border-slate-100">
                            &ldquo;{photo.notes}&rdquo;
                          </p>
                          <div className="text-[10px] text-slate-400 font-mono pt-1">
                            {photo.timestamp}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-navy-900 text-white p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>Full 4K Video Walkthrough (4 mins 30 secs) available via secure Google Drive link.</span>
                    </div>
                    <span className="font-mono text-gold-400 font-bold bg-navy-800 px-3 py-1 rounded border border-navy-700">
                      Private Cloud Link Included
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 2: Checklist */}
              {activeTab === "checklist" && (
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 mb-2">
                    Showing 10 of 40 standard physical checkpoints conducted on this inspection date:
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs bg-white rounded-xl border border-slate-200 overflow-hidden">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-semibold text-[10px] border-b border-slate-200">
                        <tr>
                          <th className="py-3 px-4">Inspection Category</th>
                          <th className="py-3 px-4">Checkpoint</th>
                          <th className="py-3 px-4">Condition</th>
                          <th className="py-3 px-4">Inspector Field Remarks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {checklistItems.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="py-3 px-4 font-semibold text-navy-900">{item.category}</td>
                            <td className="py-3 px-4 text-slate-700">{item.item}</td>
                            <td className="py-3 px-4">
                              {item.result === "Pass" ? (
                                <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                  <CheckCircle2 className="w-3 h-3" /> Pass
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                  <AlertCircle className="w-3 h-3" /> Advisory
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-slate-600 font-mono text-[11px]">{item.detail}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: Utility Meters */}
              {activeTab === "meters" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-navy-900 uppercase">Electricity (DHBVN)</span>
                      <Zap className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-navy-950">
                      16,428.5 <span className="text-xs font-sans text-slate-500 font-normal">kWh</span>
                    </div>
                    <div className="text-xs text-slate-500 space-y-1">
                      <div>Previous (2 weeks ago): 16,422.1 kWh</div>
                      <div>Net consumption: 6.4 kWh (normal idle draw)</div>
                      <div className="text-emerald-600 font-semibold pt-1">No leakage or runaway load</div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-navy-900 uppercase">Piped Gas (Haryana City Gas)</span>
                      <Flame className="w-4 h-4 text-orange-500" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-navy-950">
                      432.1 <span className="text-xs font-sans text-slate-500 font-normal">SCM</span>
                    </div>
                    <div className="text-xs text-slate-500 space-y-1">
                      <div>Status: Main shut-off cock turned OFF</div>
                      <div>Zero movement on analog dials</div>
                      <div className="text-emerald-600 font-semibold pt-1">Safe & Gas odor negative</div>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-navy-900 uppercase">Society Prepaid Meter</span>
                      <Droplets className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-navy-950">
                      ₹ 3,420 <span className="text-xs font-sans text-slate-500 font-normal">Balance</span>
                    </div>
                    <div className="text-xs text-slate-500 space-y-1">
                      <div>Maintenance prepaid card balance: Adequate</div>
                      <div>Next recharge recommended by: 25 Oct</div>
                      <div className="text-emerald-600 font-semibold pt-1">Automatic recharge on file</div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Inspector Notes */}
              {activeTab === "notes" && (
                <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-navy-950 border-b border-slate-100 pb-3">
                    <User className="w-4 h-4 text-gold-600" />
                    <span>Inspector&apos;s Field Remarks & Preventive Recommendations</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
                    <p>
                      <strong>1. Overall Flat Condition:</strong> The apartment is in pristine order. Airing was conducted for approximately 45 minutes across the living room and master bedroom. Indoor humidity was normal (48%).
                    </p>
                    <p>
                      <strong>2. Balcony & Parapet:</strong> Heavy winds two days prior had blown several dry neem leaves towards the balcony floor drain. We cleared the debris to ensure open water flow during upcoming rains.
                    </p>
                    <p>
                      <strong>3. Water Traps & Faucets:</strong> All taps were turned on for approximately 60 seconds each to refresh water in the traps. Toilet flushes operated cleanly without any phantom cistern leak.
                    </p>
                    <p>
                      <strong>4. Mail & Notices:</strong> MCG Property Tax circular was collected from the society ground-floor mailbox and scanned copy has been sent to your registered email.
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Mockup Action Footer */}
            <div className="bg-slate-100 p-4 sm:p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <span className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                This interactive format is sent directly to your WhatsApp as a mobile-optimized PDF & web link.
              </span>
              <a
                href="#contact"
                className="font-bold text-navy-900 hover:text-gold-700 inline-flex items-center gap-1.5 underline underline-offset-4"
              >
                <span>Request a free sample PDF report</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
