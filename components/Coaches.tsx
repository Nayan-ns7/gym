
import React from 'react';
import { Coach } from '../types.ts';

const coaches: Coach[] = [
  { 
    name: 'Alex Rivera', 
    role: 'Elite Strength', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm9YduNbPtWtz7ysIc2J7Tocpg3HFPfsAhrgUyqI6OiyUxvpWMeXJrFH-dT4zRFLwAiiVl3IhIi92DspeoKBuGBUJfD5JDgYuVQohuhbyrzfFJIw0BUqqUhvipI0h9dNW2Rwsz-thWxtI_fhryk1V2AddpmiPLtK6UkkyiFyqOUpyMvRmCmnF3J1KtnTw24pW2Uq6ra7KxkWovQGu0fE4cvykSVeakEbPN5M2jvtCqH8PpyD9YmrhGd_t1_tXaoff3oyU4eYOxW14' 
  },
  { 
    name: 'Sarah Chen', 
    role: 'HIIT Protocol', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMBSPmxFsjKVGA2aiNQ1pn2x1ZBiQCpYoLVYkWqt3nw3pvQ90KhFDDMIYqmoSaRhGxni4gEN0tPQ3aI6sLsiwg1Cyhm4jSV9CeOA5JzfeuaQAvhhRekePRbSdAp3dVQJJkoR-PtAzf0uCXj5ydkqRpyIWbf_z0Eewye7KhtAv9R0O6AZ5YL-FxZ4nHAVru4PwP1qaJPDXJM34FH5zY80e3DJB_dIxPZ30NdE5RWNQrtkETP1GHD9jp25_JSn28afO8jf6vD9_n6wU' 
  },
  { 
    name: 'Marcus Thorne', 
    role: 'Hypertrophy', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwa3GPAfa_v-OsaBFFOlZuEBVgrYht4UveUwKINk3OcoqSbUtJsK7mmY8cPWrY_5hjh3apgovWoZFPZKlDCM2gRimJXlXTqmng26XrolJeoZT0LciVqsL_eRGKVRdWDkmH78FtYVEVGFCtgNgHrv0o40YaO80GbK76AIsYe2gTiFJA9jJtl-FUMfPw4R_D8-dX2egNMx92O1suAJhxNuiIuoA4JrFVu5rchh1LSY1GJmRRu1K8P_tzretMmp6D0xKM40gKqZrRE1o' 
  }
];

const Coaches: React.FC = () => {
  return (
    <section className="py-32 bg-background-dark relative overflow-hidden">
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 text-[180px] font-black text-white/[0.03] rotate-90 pointer-events-none whitespace-nowrap italic">VANGUARD</div>
      <div className="mb-16 px-6 flex justify-between items-end relative z-10">
        <div>
          <h2 className="text-xs font-black tracking-[0.5em] text-primary uppercase mb-3">Architects</h2>
          <h3 className="text-5xl font-[900] tracking-tighter italic uppercase">Coaches</h3>
        </div>
        <button className="text-primary text-[10px] font-black tracking-[0.4em] flex items-center gap-2 border-b-2 border-primary pb-2 uppercase active:opacity-50 transition-opacity">
          Full Team
        </button>
      </div>
      
      <div className="flex overflow-x-auto gap-10 px-6 hide-scrollbar relative z-10">
        {coaches.map((coach, index) => (
          <div key={index} className="flex-shrink-0 w-64 text-center space-y-8">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-56 h-56 rounded-full border border-white/10 p-3 relative z-10 bg-charcoal/50 backdrop-blur-md overflow-hidden">
                <img 
                  alt={`Trainer ${coach.name}`} 
                  className="w-full h-full rounded-full object-cover filter contrast-125 saturate-150 transition-transform duration-500 group-hover:scale-110" 
                  src={coach.image} 
                />
              </div>
            </div>
            <div>
              <h4 className="font-black text-2xl tracking-tighter uppercase italic">{coach.name}</h4>
              <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mt-2">{coach.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaches;
