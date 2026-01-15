
import React from 'react';

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick, onExploreClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/60 to-background-dark"></div>
        <img 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1vQQsu1-6HO21Y4utPCtg6lU6tERaSpwyksd6wX1JqNrUbE9JK8Fv8HrVsKrpkrfqoHPfhYlRvGbfeqczXfYE_541KX-x9vswbgwpBefbOq6hxTivYCzplKwytNsBCujvzNCLdMZHx5VzS1gCD_G_H2FXeR1reaGQBsxN1SLDZ91nLpsquu9Ay4ga7WCHSxDdnKnOmRWj3C51mhq0YggEn0N03mYQMToxD_SOzCkfnAwtNr0Jl449FxtcBHBUXlahI9CPQBMfmyU" 
        />
      </div>
      
      <div className="relative z-10 text-center space-y-12 w-full max-w-lg">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-2 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Est. 2024 • THE NEW STANDARD
        </div>
        
        <div className="space-y-6">
          <h1 className="text-7xl font-[900] leading-[0.8] tracking-tighter uppercase italic ultra-hd-shadow">
            EVOLVE<br/>
            <span className="text-primary neon-text">BEYOND</span><br/>
            LIMITS
          </h1>
          <p className="text-gray-300 text-xl font-medium tracking-wide max-w-xs mx-auto opacity-90">
            Premium infrastructure for elite human performance.
          </p>
        </div>
        
        <div className="flex flex-col gap-5 w-full px-4 pt-4">
          <button 
            onClick={onJoinClick}
            className="bg-primary text-black font-black py-6 px-8 rounded-2xl shadow-neon hover:shadow-neon-strong transition-all active:scale-[0.98] text-base tracking-widest uppercase"
          >
            JOIN THE ELITE
          </button>
          <button 
            onClick={onExploreClick}
            className="border border-white/20 glass py-6 px-8 rounded-2xl font-bold hover:bg-white/10 transition-all text-base tracking-widest uppercase"
          >
            EXPLORE PROGRAMS
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.5em] uppercase font-black">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
