# NRI Property Care Gurugram — Landing Page

A fast, mobile-first, conversion-focused landing page built with **React 19**, **TypeScript**, and **Tailwind CSS** for an NRI property management & home inspection service in Gurugram, India.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### 2. Run the Development Server
Open your terminal in this directory:
```bash
cd nri-property-care
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
To create an optimized production build:
```bash
npm run build
npm run preview
```

---

## 📁 Project Architecture & Customization

All copy, contact information, pricing plans, and Gurugram coverage areas are centralized in a single configuration file for easy maintenance:

### ⚙️ Main Configuration File: `src/config/siteData.ts`
- **Business Name:** Edit `SITE_CONFIG.businessName`
- **Phone & WhatsApp:** Edit `SITE_CONFIG.phoneDisplay` and `SITE_CONFIG.whatsappNumber`
- **Email & Address:** Edit `SITE_CONFIG.email` and `SITE_CONFIG.address`
- **Monthly Plans & Pricing:** Edit the `PLANS` array (Basic, Standard, Premium)
- **One-off Services:** Edit `ONE_OFF_SERVICES`
- **Gurugram Sectors & Societies:** Edit `COVERAGE_SECTORS`
- **Founder Story & Credentials:** Edit `ABOUT_FOUNDER`
- **FAQ Items:** Edit `FAQS`

### 🧩 Sections in Order:
1. **Header (`src/components/Navbar.tsx`)**: Logo, nav links (Services, How it works, Plans, FAQ), WhatsApp shortcut, and "Book free inspection" CTA.
2. **Hero (`src/components/Hero.tsx`)**: Headline, subheading, primary "Book free inspection", secondary "WhatsApp us", trust bullets, and interactive inspection card teaser.
3. **Problems We Solve (`src/components/ProblemsSolved.tsx`)**: 6 cards addressing unnoticed seepage/damage, unpaid bills, bad tenants, unreliable caretakers, repair supervision, and lack of proof.
4. **Services (`src/components/ServicesGrid.tsx`)**: 8 core services with badges and icons (Property inspections, photo/video reports, bill payments, cleaning/pest control, repairs, tenant search/verification, rent collection, society coordination).
5. **How It Works (`src/components/HowItWorks.tsx`)**: 4 progressive steps (Share property details > Free first inspection > Choose a plan > Monthly reports and updates).
6. **Sample Inspection Report (`src/components/SampleReportMockup.tsx`)**: An interactive visual mockup of an authentic Gurugram inspection report featuring tabbed navigation:
   - Photo Proofs with timestamps & GPS coordinates
   - 40-Point condition checklist with Pass/Advisory tags
   - Utility meter readings (DHBVN electricity, piped gas, society prepaid balance)
   - Field remarks & preventive recommendations
7. **Plans & Pricing (`src/components/PlansSection.tsx`)**: 3 monthly plans (Basic Watch, Standard Care [highlighted as most popular], Premium) and standalone one-off services.
8. **Why Choose Us (`src/components/WhyChooseUs.tsx`)**: Transparent pricing, strict key custody protocol, local Gurugram operations team, digital proof for every visit.
9. **Coverage (`src/components/CoverageSection.tsx`)**: Interactive searchable directory of Gurugram sectors and societies (DLF Phase 1-5, Golf Course Road, Golf Course Extension, Sohna Road, Dwarka Expressway, etc.).
10. **About / Founder (`src/components/AboutFounder.tsx`)**: Dedicated founder card with photo placeholder, credentials, and 2-line story.
11. **Testimonials (`src/components/TestimonialsPlaceholder.tsx`)**: Clearly marked placeholder block honoring the rule against fake or inflated testimonials.
12. **FAQ Accordion (`src/components/FaqAccordion.tsx`)**: Interactive accordion answering key safety, pricing, report delivery, tenant management, emergencies, and overseas payments.
13. **Final CTA & Lead Form (`src/components/ContactFormSection.tsx`)**: Lead intake form with Name, Country, WhatsApp, Email, Property Sector, Status (vacant/rented), Service interested in, and Message, alongside direct contact details.
14. **Footer (`src/components/Footer.tsx`)**: Contact details, Gurugram address, legal disclaimer (not a real estate broker, no legal/tax advice), and terms/privacy placeholders.
15. **Mobile Sticky Bar (`src/components/MobileStickyBar.tsx`)**: Fixed thumb-friendly bottom bar on mobile with "WhatsApp us" and "Book free inspection".
16. **Booking Modal (`src/components/BookingModal.tsx`)**: Quick-booking popup.

---

## 🔍 SEO & Meta Tags
Configured in `index.html`:
- Targeted title & description for *"NRI property management Gurugram"*
- Open Graph (`og:title`, `og:image`, `og:description`) and Twitter Card tags
- Valid **`LocalBusiness` JSON-LD schema** with Gurugram address coordinates, telephone, area served, and accepted currencies (INR, AED, USD, GBP, etc.)

---

## 🔌 Connecting Form Submissions
In `src/components/ContactFormSection.tsx` and `src/components/BookingModal.tsx`, look for:
```typescript
// PLACEHOLDER HANDLER:
// Plug in Formspree, EmailJS, Webhook, or your backend API here
console.log("Property Care Lead Form Submission:", formData);
```
Replace this console log with your preferred webhook or email notification endpoint.
