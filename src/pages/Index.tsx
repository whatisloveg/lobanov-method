import HeroSection from "@/components/HeroSection";
import MentorshipSection from "@/components/MentorshipSection";
import PersonalTrainingSection from "@/components/PersonalTrainingSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Page sections following AIDA structure */}
      <HeroSection />

      <div className="section-divider" />

      <MentorshipSection />

      <PersonalTrainingSection />

      <div className="section-divider" />

      <ResultsSection />

      <AboutSection />

      <CTASection />

      <Footer />
    </main>
  );
};

export default Index;
