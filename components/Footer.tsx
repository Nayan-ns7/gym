
import React from 'react';

const Footer: React.FC = () => {
  const phoneNumber = "9906246681";

  return (
    <footer className="bg-black py-24 px-8 border-t border-white/5">
      <div className="flex flex-col items-center text-center gap-16 max-w-lg mx-auto">
        <div className="flex flex-col items-center gap-6">
          <span className="material-symbols-outlined text-primary text-6xl neon-text">fitness_center</span>
          <span className="font-[900] text-4xl tracking-tighter italic">NEON<span className="text-primary">GYM</span></span>
          <p className="text-gray-500 text-[10px] tracking-[0.4em] max-w-[280px] uppercase font-black leading-relaxed">
            Defining the new era of high-performance human potential.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <h4 className="text-[10px] font-black tracking-[0.5em] text-primary uppercase">Direct Access</h4>
          <a 
            href={`tel:${phoneNumber}`} 
            className="flex items-center justify-center gap-3 glass px-8 py-4 rounded-2xl border-primary/20 hover:border-primary transition-all group"
          >
            <span className="material-symbols-outlined text-primary group-hover:animate-bounce">call</span>
            <span className="text-xl font-black tracking-tighter">+{phoneNumber}</span>
          </a>
          <p className="text-[9px] text-gray-600 font-bold tracking-widest uppercase">Available 24/7 for Elite Support</p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-20 gap-y-8 text-[11px] font-black tracking-[0.4em] text-gray-400 uppercase">
          <a className="hover:text-primary transition-colors" href="#">Home</a>
          <a className="hover:text-primary transition-colors" href="#">Programs</a>
          <a className="hover:text-primary transition-colors" href="#">Vanguard</a>
          <a className="hover:text-primary transition-colors" href="#">Investment</a>
          <a className="hover:text-primary transition-colors" href="#">Global</a>
          <a className="hover:text-primary transition-colors" href="#">Support</a>
        </div>
        
        <div className="flex gap-10">
          {['public', 'group', 'alternate_email'].map((icon, idx) => (
            <a key={idx} className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:border-primary/50 transition-all group" href="#">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform text-2xl">{icon}</span>
            </a>
          ))}
        </div>
        
        <div className="pt-12 w-full border-t border-white/5">
          <div className="text-[9px] text-gray-700 uppercase tracking-[0.5em] font-black">
            © 2024 NEON GYM GLOBAL • 4K ULTRA FIDELITY EXPERIENCE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
