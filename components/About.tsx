
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-background-dark border-t border-white/5 overflow-hidden">
      <div className="absolute -right-24 top-0 w-96 h-96 bg-primary/5 blur-[160px]"></div>
      <div className="relative z-10 max-w-xl mx-auto space-y-16">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-16 bg-primary shadow-neon"></div>
            <span className="text-xs font-black tracking-[0.5em] text-primary uppercase">About the Collective</span>
          </div>
          <h2 className="text-5xl font-black leading-[0.9] tracking-tighter italic uppercase">
            A SANCTUARY<br/>FOR <span className="text-stroke">CHAMPIONS</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Founded on the principles of relentless progression, Neon Gym is more than a facility—it's an ecosystem designed for high-impact transformation. We curate every detail, from biometric lighting to Olympic-standard equipment, ensuring your environment matches your ambition.
          </p>
        </div>
        
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group shadow-card-ultra">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <img 
            alt="Gym Interior" 
            className="w-full aspect-square object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1vQQsu1-6HO21Y4utPCtg6lU6tERaSpwyksd6wX1JqNrUbE9JK8Fv8HrVsKrpkrfqoHPfhYlRvGbfeqczXfYE_541KX-x9vswbgwpBefbOq6hxTivYCzplKwytNsBCujvzNCLdMZHx5VzS1gCD_G_H2FXeR1reaGQBsxN1SLDZ91nLpsquu9Ay4ga7WCHSxDdnKnOmRWj3C51mhq0YggEn0N03mYQMToxD_SOzCkfnAwtNr0Jl449FxtcBHBUXlahI9CPQBMfmyU" 
          />
          <div className="absolute bottom-10 left-10 right-10 z-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-black font-bold">bolt</span>
              </span>
              <h4 className="font-black text-xl tracking-tighter uppercase italic">Raw Power</h4>
            </div>
            <p className="text-gray-300 text-sm font-medium leading-relaxed">Experience a culture of discipline and excellence that demands your absolute best every single day.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="glass p-8 rounded-[2rem] border-white/10">
            <span className="text-4xl font-black text-primary block mb-2">15k</span>
            <span className="text-[10px] text-gray-500 font-black tracking-[0.3em] uppercase">Sq Ft Facility</span>
          </div>
          <div className="glass p-8 rounded-[2rem] border-white/10">
            <span className="text-4xl font-black text-primary block mb-2">100%</span>
            <span className="text-[10px] text-gray-500 font-black tracking-[0.3em] uppercase">Commitment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
