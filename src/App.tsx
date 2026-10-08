import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemsSolved } from "./components/ProblemsSolved";
import { ServicesGrid } from "./components/ServicesGrid";
import { HowItWorks } from "./components/HowItWorks";
import { SampleReportMockup } from "./components/SampleReportMockup";
import { PlansSection } from "./components/PlansSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CoverageSection } from "./components/CoverageSection";
import { AboutFounder } from "./components/AboutFounder";
import { TestimonialsPlaceholder } from "./components/TestimonialsPlaceholder";
import { FaqAccordion } from "./components/FaqAccordion";
import { ContactFormSection } from "./components/ContactFormSection";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { BookingModal } from "./components/BookingModal";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string>("Free First Inspection");

  const handleOpenBooking = (planName?: string) => {
    if (planName) {
      setSelectedPlanForModal(planName);
    } else {
      setSelectedPlanForModal("Free First Inspection");
    }
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-gold-500/20 selection:text-navy-950">
      
      {/* 1. Header / Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking("Free First Inspection")} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking("Free First Inspection")} />

        {/* 3. Problems We Solve */}
        <ProblemsSolved />

        {/* 4. Services Grid */}
        <ServicesGrid />

        {/* 5. How It Works */}
        <HowItWorks onOpenBooking={() => handleOpenBooking("Free First Inspection")} />

        {/* 6. Sample Inspection Report Mockup */}
        <SampleReportMockup />

        {/* 7. Plans & Pricing (Highlighting Standard + One-off services) */}
        <PlansSection onSelectPlan={(plan) => handleOpenBooking(plan)} />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. Coverage (Gurugram Sectors & Societies) */}
        <CoverageSection />

        {/* 10. About / Founder */}
        <AboutFounder />

        {/* Testimonials Placeholder Block (explicitly marked, no fake reviews) */}
        <TestimonialsPlaceholder />

        {/* 11. FAQ Accordion */}
        <FaqAccordion />

        {/* 12. Final CTA Band + Full Contact Intake Form */}
        <ContactFormSection initialService={selectedPlanForModal} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Mobile Sticky Bar for easy thumb access on mobile */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking("Free First Inspection")} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        selectedPlan={selectedPlanForModal}
      />

    </div>
  );
}

export default App;
