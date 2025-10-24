import HeroSection from '../components/HeroSection';
import RequirementsSection from '../components/RequirementsSection';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RequirementsSection />
      <ProcessSection />
      <Footer />
    </div>
  );
}

export default HomePage;
