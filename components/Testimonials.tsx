
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-background-dark">
      <div className="mb-16">
        <span className="material-symbols-outlined text-primary text-8xl opacity-10 neon-text block">format_quote</span>
        <h3 className="text-5xl font-black -mt-12 tracking-tighter italic uppercase">Voices</h3>
      </div>
      
      <div className="flex overflow-x-auto gap-8 hide-scrollbar pb-8">
        {[
          {
            name: 'David Miller',
            role: 'Founder, TechOne',
            text: "The environment here is electric. It's the first gym that actually matches my intensity. The gear and the lighting are perfection.",
            initials: 'DM'
          },
          {
            name: 'Elena Rodriguez',
            role: 'Olympic Rower',
            text: "Absolute peak performance environment. No compromises, just results. The Pro Elite plan is worth every cent.",
            initials: 'ER'
          }
        ].map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-[90%] md:w-[60%] lg:w-[40%] glass p-10 rounded-[3rem] space-y-8 border-white/10 shadow-card-ultra">
            <div className="flex gap-1.5">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="material-symbols-outlined text-primary text-lg fill-1">star</span>
              ))}
            </div>
            <p className="text-gray-300 italic text-xl leading-relaxed font-light">"{testimonial.text}"</p>
            <div className="flex items-center gap-5 pt-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/30 to-white/5 border border-white/10 flex items-center justify-center font-black text-primary text-lg">
                {testimonial.initials}
              </div>
              <div>
                <p className="font-black text-lg tracking-tighter uppercase">{testimonial.name}</p>
                <p className="text-primary text-[10px] font-black uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
