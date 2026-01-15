
import React, { useState } from 'react';
import { Program } from '../types';

const programs: Program[] = [
  { 
    id: '1', 
    title: 'Strength', 
    subtitle: 'Power Focus', 
    icon: 'exercise',
    description: 'High-caliber strength engineering utilizing Olympic-grade equipment and advanced linear periodization protocols.',
    highlights: ['Powerlifting Racks', 'Elite Coaching', 'Progressive Overload']
  },
  { 
    id: '2', 
    title: 'Agility', 
    subtitle: 'Endurance', 
    icon: 'bolt',
    description: 'Dynamic conditioning designed to optimize your VO2 max and explosive lateral movement for total athletic dominance.',
    highlights: ['Plyometric Drills', 'Sprint Training', 'Reactive Drills']
  },
  { 
    id: '3', 
    title: 'Analyse', 
    subtitle: 'Metabolic', 
    icon: 'monitoring',
    description: 'Data-driven metabolic conditioning. We track every heartbeat and calorie to engineer the perfect cardiovascular engine.',
    highlights: ['Biometric Tracking', 'VO2 Max Testing', 'Lactate Analysis']
  },
  { 
    id: '4', 
    title: 'Growth', 
    subtitle: 'Hypertrophy', 
    icon: 'fitness_center',
    description: 'Scientific muscle architecture. Focused on volume, tension, and metabolic stress to achieve maximum aesthetic potential.',
    highlights: ['Isolation Machines', 'Volume Protocols', 'Nutrition Guidance']
  }
];

const Programs: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<Program | null>(null);

  return (
    <section id="programs" className="py-32 px-6 bg-charcoal/40 relative">
      <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(182,255,0,0.03)_0%,transparent_70%)]"></div>
      <div className="mb-16 text-center relative z-10">
        <h2 className="text-xs font-black tracking-[0.6em] text-primary uppercase mb-4 opacity-70">Battle Ground</h2>
        <h3 className="text-5xl font-black tracking-tighter italic uppercase">Programs</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-6 relative z-10 max-w-2xl mx-auto">
        {programs.map((program) => (
          <button 
            key={program.id} 
            onClick={() => setActiveProgram(program)}
            className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center gap-6 shadow-card-ultra border-white/5 group hover:border-primary/40 transition-all duration-500 active:scale-95"
          >
            <div className="w-20 h-20 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
              <span className="material-symbols-outlined text-primary text-5xl neon-text">{program.icon}</span>
            </div>
            <div>
              <p className="font-black text-xs uppercase tracking-[0.3em] leading-none mb-1">{program.title}</p>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest font-bold">{program.subtitle}</p>
            </div>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Explore</span>
            </div>
          </button>
        ))}
      </div>

      {/* Exploration Modal */}
      {activeProgram && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
          <div className="glass w-full max-w-lg rounded-[3rem] overflow-hidden border border-primary/20 shadow-neon animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-white/5 flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-4xl neon-text">{activeProgram.icon}</span>
                </div>
                <div>
                  <h4 className="text-3xl font-black uppercase italic tracking-tighter">{activeProgram.title}</h4>
                  <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">{activeProgram.subtitle}</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveProgram(null)}
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <span className="material-symbols-outlined text-gray-400">close</span>
              </button>
            </div>
            
            <div className="p-8 space-y-8">
              <p className="text-gray-300 leading-relaxed font-light text-lg">
                {activeProgram.description}
              </p>
              
              <div className="space-y-4">
                <p className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">Program Highlights</p>
                <div className="grid grid-cols-1 gap-3">
                  {activeProgram.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      <span className="text-xs font-bold tracking-wider uppercase">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setActiveProgram(null)}
                className="w-full bg-primary text-black font-black py-5 rounded-2xl shadow-neon hover:shadow-neon-strong transition-all uppercase tracking-widest text-xs"
              >
                Return to Battle Ground
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;
