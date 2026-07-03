import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import DashboardPreview from "../components/landing/DashboardPreview";
import AISection from "../components/landing/AISection";
import Footer from "../components/layout/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <AISection />
      <Footer/>
    </div>
  );
}

export default LandingPage;
