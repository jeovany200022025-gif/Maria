
import React from 'react';
import { useLanguage } from './LanguageContext';
import { UserPlus, LayoutGrid, Wallet, BarChart3, Banknote } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: <UserPlus className="text-[#0A4D8C]" />, title: t('how_step1_title'), desc: t('how_step1_desc') },
    { icon: <LayoutGrid className="text-[#0A4D8C]" />, title: t('how_step2_title'), desc: t('how_step2_desc') },
    { icon: <Wallet className="text-[#0A4D8C]" />, title: t('how_step3_title'), desc: t('how_step3_desc') },
    { icon: <BarChart3 className="text-[#0A4D8C]" />, title: t('how_step4_title'), desc: t('how_step4_desc') },
    { icon: <Banknote className="text-[#0A4D8C]" />, title: 'Solicitar retirada', desc: 'Receba seus lucros diretamente na sua conta.' },
  ];

  return (
    <section id="how" className="py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-20">
          {t('how_title')}
        </h2>

        <div className="relative flex flex-col md:flex-row gap-12 justify-between">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center max-w-[200px] mx-auto">
              <div className="w-20 h-20 bg-[#0A4D8C]/10 border border-[#0A4D8C]/30 rounded-full flex items-center justify-center mb-6 blue-glow bg-blur">
                {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0B0B0B] border border-white/10 rounded-full flex items-center justify-center text-xs font-bold text-[#0A4D8C]">
                  0{idx + 1}
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
