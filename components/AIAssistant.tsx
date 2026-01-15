
import React, { useState, useEffect, useRef } from 'react';
import { generateWorkoutAdvice, getNearbyHubs } from '../services/geminiService.ts';
import { Message } from '../types.ts';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Systems online. I am the Neon Coach. How can I optimize your performance today, elite?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = [...messages, userMessage];
    const response = await generateWorkoutAdvice(history);
    
    setMessages(prev => [...prev, { role: 'model', content: response || "System timeout." }]);
    setIsLoading(false);
  };

  const findNearestHub = () => {
    if (!navigator.geolocation) {
      setMessages(prev => [...prev, { role: 'model', content: "Geolocation is not supported by your browser." }]);
      return;
    }

    setMessages(prev => [...prev, { role: 'user', content: "Find nearest elite hubs." }]);
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const { text, chunks } = await getNearbyHubs(latitude, longitude);
      
      let finalContent = text;
      // Google Maps grounding chunks use the 'maps' property
      if (chunks && chunks.length > 0) {
        finalContent += "\n\n**Nearby Hubs:**\n" + chunks.map((c: any) => {
          const mapData = c.maps;
          if (!mapData) return null;
          return `- [${mapData.title || 'Map Link'}](${mapData.uri})`;
        }).filter(Boolean).join('\n');
      }

      setMessages(prev => [...prev, { role: 'model', content: finalContent }]);
      setIsLoading(false);
    }, (err) => {
      setMessages(prev => [...prev, { role: 'model', content: "Access denied to location data." }]);
      setIsLoading(false);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center p-0 md:p-6 bg-black/80 backdrop-blur-sm">
      <div className="w-full h-[90vh] md:h-auto md:max-w-xl bg-charcoal border border-primary/20 rounded-t-[3rem] md:rounded-[3rem] shadow-neon flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between glass">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-neon">
              <span className="material-symbols-outlined text-black font-black">smart_toy</span>
            </span>
            <div>
              <h3 className="font-black uppercase tracking-tighter italic text-xl">Neon Coach <span className="text-primary italic">AI</span></h3>
              <p className="text-[9px] font-bold text-primary tracking-[0.4em] uppercase">Human Performance Engineer</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        {/* Chat Body */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-primary text-black font-bold' 
                  : 'bg-white/5 border border-white/10 text-gray-200'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 p-5 rounded-[2rem] flex gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Tools */}
        <div className="px-6 flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          <button 
            onClick={findNearestHub}
            className="flex-shrink-0 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-widest uppercase hover:bg-primary/10 hover:border-primary/30 transition-all"
          >
            Locate Hubs
          </button>
          <button 
            onClick={() => setInput("Build me a high-intensity back workout.")}
            className="flex-shrink-0 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-widest uppercase hover:bg-primary/10 hover:border-primary/30 transition-all"
          >
            Back Shred
          </button>
          <button 
            onClick={() => setInput("What should I eat for peak recovery?")}
            className="flex-shrink-0 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-widest uppercase hover:bg-primary/10 hover:border-primary/30 transition-all"
          >
            Nutrition Tip
          </button>
        </div>

        {/* Input */}
        <div className="p-6 border-t border-white/5 glass">
          <div className="relative">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query performance systems..."
              className="w-full bg-background-dark border-white/10 rounded-2xl py-5 px-6 pr-16 text-sm focus:border-primary focus:ring-0 transition-all placeholder:text-gray-600"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-neon active:scale-90 transition-all disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-black font-black">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
