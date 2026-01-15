
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass px-6 py-5 flex items-center justify-between border-b border-white/5">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-3xl neon-text">fitness_center</span>
        <span className="font-extrabold text-2xl tracking-tighter leading-none">
          NEON<span className="text-primary italic">GYM</span>
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full border border-primary/40 flex items-center justify-center bg-white/5 cursor-pointer hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-xl">person</span>
        </div>
        
        <button className="text-white active:scale-90 transition-transform md:hidden">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
