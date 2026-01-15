
import React from 'react';
import { Program } from '../types';

const programs: Program[] = [
  { id: '1', title: 'Strength', subtitle: 'Power Focus', icon: 'exercise' },
  { id: '2', title: 'Agility', subtitle: 'Endurance', icon: 'bolt' },
  { id: '3', title: 'Analyse', subtitle: 'Metabolic', icon: 'monitoring' },
  { id: '4', title: 'Growth', subtitle: 'Hypertrophy', icon: 'fitness_center' }
];

const Programs: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-charcoal/40 relative">
      <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(182,255,0,0.03)_0%,transparent_70%)]"></div>
      <div className="mb-16 text-center relative z-10">
        <h2 className="text-xs font-black tracking-[0.6em] text-primary uppercase mb-4 opacity-70">Battle Ground</h2>
        <h3 className="text-5xl font-black tracking-tighter italic uppercase">Programs</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-6 relative z-10 max-w-2xl mx-auto">
        {programs.map((program) => (
          <div key={program.id} className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center gap-6 shadow-card-ultra border-white/5 group hover:border-primary/40 transition-all duration-500">
            <div className="w-20 h-20 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
              <span className="material-symbols-outlined text-primary text-5xl neon-text">{program.icon}</span>
            </div>
            <div>
              <p className="font-black text-xs uppercase tracking-[0.3em] leading-none mb-1">{program.title}</p>
              <p className="text-[8px] text-gray-500 uppercase tracking-widest font-bold">{program.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
