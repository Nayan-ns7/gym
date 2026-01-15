
import React from 'react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Basic',
    price: '29',
    features: ['24/7 Access', 'High-End Equipment', 'Digital Locker Room']
  },
  {
    name: 'Pro Elite',
    price: '59',
    popular: true,
    features: ['Everything in Basic', 'Unlimited HIIT Classes', 'Cryo & Sauna Access', '1 Monthly Guest Pass']
  },
  {
    name: 'Ultimate',
    price: '99',
    features: ['Pro Elite Access', 'Personal Coach (Weekly)', 'Nutrition Concierge', 'VIP Lounge Access']
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 relative bg-charcoal/20">
      <div className="mb-20 text-center">
        <h2 className="text-xs font-black tracking-[0.6em] text-primary uppercase mb-6">Investment</h2>
        <h3 className="text-5xl font-[900] tracking-tighter italic uppercase ultra-hd-shadow">Choose Your Tier</h3>
      </div>
      
      <div className="space-y-10 max-w-md mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
        {tiers.map((tier, index) => (
          <div 
            key={index} 
            className={`p-10 rounded-[3rem] relative overflow-hidden transition-all duration-500 ${
              tier.popular 
                ? 'bg-charcoal border-glow shadow-neon-strong z-10' 
                : 'glass border-white/10 shadow-card-ultra'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-black px-10 py-2.5 uppercase tracking-[0.4em] rounded-b-2xl shadow-neon">
                MOST POPULAR
              </div>
            )}
            
            <div className={`flex justify-between items-start mb-10 ${tier.popular ? 'mt-4' : ''}`}>
              <div>
                <h4 className={`font-black italic uppercase tracking-tighter ${tier.popular ? 'text-3xl text-primary neon-text' : 'text-2xl'}`}>
                  {tier.name}
                </h4>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-5xl font-black text-white">${tier.price}</span>
                  <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">/mo</span>
                </div>
              </div>
            </div>
            
            <ul className={`space-y-6 mb-12 ${tier.popular ? 'text-gray-200 font-bold' : 'text-gray-400 font-medium'}`}>
              {tier.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-xl neon-text">check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-6 rounded-2xl font-black tracking-[0.2em] text-xs transition-all uppercase ${
              tier.popular 
                ? 'bg-primary text-black shadow-neon hover:shadow-neon-strong active:scale-95' 
                : 'border border-white/10 hover:bg-white/5 active:scale-95'
            }`}>
              CHOOSE {tier.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
