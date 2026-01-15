
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Programs from './components/Programs.tsx';
import Coaches from './components/Coaches.tsx';
import Pricing from './components/Pricing.tsx';
import Testimonials from './components/Testimonials.tsx';
import Footer from './components/Footer.tsx';

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
    <div className="relative min-h-screen bg-background-dark">
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

      {/* Persistent Bottom Bar (Decorative) */}
      <div className="fixed bottom-0 left-0 right-0 h-[3px] bg-white/5 z-[200]">
        <div className="h-full bg-primary shadow-neon w-[45%] mx-auto rounded-t-full transition-all"></div>
      </div>
    </div>
  );
};

export default App;
