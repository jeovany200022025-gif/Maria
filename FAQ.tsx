
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0B0B0B] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-panel border border-white/5 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white">
                  {language === 'pt' ? item.q_pt : item.q_en}
                </span>
                {openIndex === idx ? <ChevronUp className="text-[#0A4D8C]" /> : <ChevronDown className="text-gray-500" />}
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  {language === 'pt' ? item.a_pt : item.a_en}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
