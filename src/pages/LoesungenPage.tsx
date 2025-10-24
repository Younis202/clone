import HeroSection from '../components/loesungenPage/HeroSection';
import IntroSection from '../components/loesungenPage/IntroSection';
import LoesungenSection from '../components/loesungenPage/LoesungenSection';
import BenefitsSection from '../components/loesungenPage/BenefitsSection';
import AboutSection from '../components/loesungenPage/AboutSection';
import Footer from '../components/loesungenPage/Footer';

function LoesungenPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <LoesungenSection />
      <BenefitsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default LoesungenPage;
