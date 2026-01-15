
import React from 'react';

interface LowerBottomProps {
  onProgramsClick: () => void;
  onPricingClick: () => void;
}

const LowerBottom: React.FC<LowerBottomProps> = ({ onProgramsClick, onPricingClick }) => {
  const phoneNumber = "9906246681";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[500] px-4 pb-6 md:pb-8 pointer-events-none">
      <div className="max-w-md mx-auto glass rounded-[2.5rem] border border-white/5 shadow-2xl p-2 flex items-center justify-between pointer-events-auto">
        
        {/* Contact/Call Logic */}
        <a 
          href={`tel:${phoneNumber}`}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 group hover:bg-white/5 rounded-2xl transition-all"
        >
          <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">call</span>
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-primary">Contact</span>
        </a>

        {/* Programs Quick Link */}
        <button 
          onClick={onProgramsClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 group hover:bg-white/5 rounded-2xl transition-all"
        >
          <span className="material-symbols-outlined text-white text-2xl group-hover:scale-110 transition-transform">grid_view</span>
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white">Programs</span>
        </button>

        {/* Pricing Link (Replacing the AI button position for balance) */}
        <button 
          onClick={onPricingClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 group hover:bg-white/5 rounded-2xl transition-all"
        >
          <span className="material-symbols-outlined text-white text-2xl group-hover:scale-110 transition-transform">payments</span>
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white">Pricing</span>
        </button>

        {/* Profile/Membership */}
        <button className="flex-1 flex flex-col items-center justify-center gap-1 py-3 group hover:bg-white/5 rounded-2xl transition-all">
          <span className="material-symbols-outlined text-white text-2xl group-hover:scale-110 transition-transform">badge</span>
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white">Elite</span>
        </button>

      </div>
      
      {/* Decorative Glow Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-12 bg-primary/5 blur-3xl -z-10 rounded-full"></div>
    </div>
  );
};

export default LowerBottom;
