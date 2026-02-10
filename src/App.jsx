import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import SpecialtiesSection from './components/SpecialitiesSection';
import EmergencyCare from './components/EmergencyCare';
import FacilitiesSection from './components/FacilitiesSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <WhatsAppButton />
      <Header />
      <main className="space-y-16 md:space-y-24">
        <div className="px-6 lg:px-8">
          <HeroSection />
        </div>
        
        <div className="px-6 lg:px-8">
          <IntroSection />
        </div>
        
        <div className="px-6 lg:px-8">
          <SpecialtiesSection />
        </div>
        
        <div className="px-6 lg:px-8">
          <EmergencyCare />
        </div>
        
        <div className="px-6 lg:px-8">
          <FacilitiesSection />
        </div>
        
        <div className="px-6 lg:px-8">
          <PartnersSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;