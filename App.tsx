
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Coaches from './components/Coaches';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-background-dark">
      <Navbar />
      
      <main>
        <Hero onJoinClick={scrollToPricing} />
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
