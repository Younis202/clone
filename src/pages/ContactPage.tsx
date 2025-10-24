import HeroSection from '../components/ContactPage/HeroSection';
import RequirementsSection from '../components/ContactPage/RequirementsSection';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RequirementsSection />
      <Footer />
    </div>
  );
}

export default ContactPage;
