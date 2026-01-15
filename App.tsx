
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Programs from './components/Programs.tsx';
import Coaches from './components/Coaches.tsx';
import Pricing from './components/Pricing.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';
import LowerBottom from './components/LowerBottom.tsx';

const App: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrograms = () => {
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-background-dark pb-24 md:pb-0">
      <Navbar />
      
      <main>
        <Hero 
          onJoinClick={scrollToPricing} 
          onExploreClick={scrollToPrograms}
        />
        <About />
        <Programs />
        <Coaches />
        <Pricing />
        <Testimonials />
      </main>

      <Footer />
      
      <LowerBottom 
        onProgramsClick={scrollToPrograms}
        onPricingClick={scrollToPricing}
      />
    </div>
  );
};

export default App;
