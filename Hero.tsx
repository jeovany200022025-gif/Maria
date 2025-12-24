
import React from 'react';
import { useLanguage } from './LanguageContext';
import { TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Abstract Background Animations */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#0A4D8C]/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#0A4D8C]/10 blur-[150px] rounded-full" />
      
      {/* Animated Grids */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#0A4D8C] text-xs font-bold uppercase tracking-widest">
            <Zap size={14} className="animate-bounce" />
            Fintech de Elite em Angola
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
            <span className="block text-gradient">{t('hero_title')}</span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => onNavigate('plans')}
              className="px-8 py-4 bg-[#0A4D8C] hover:bg-[#0c59a3] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all group blue-glow"
            >
              {t('hero_cta_plans')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('register')}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold transition-all"
            >
              {t('hero_cta_account')}
            </button>
          </div>

          <div className="flex items-center gap-8 pt-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#0A4D8C]" />
              <span className="text-xs font-semibold">Criptografia SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-[#0A4D8C]" />
              <span className="text-xs font-semibold">Crescimento Sustentável</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-[#0A4D8C]/10 blur-[80px] rounded-full animate-pulse" />
          <div className="relative glass-panel rounded-3xl p-8 border border-white/10 blue-glow">
            {/* Mock Chart UI */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Crescimento Aura VIP</div>
                  <div className="text-3xl font-bold text-white">+75% / 20 dias</div>
                </div>
                <div className="w-24 h-8 bg-[#0A4D8C]/20 rounded-lg flex items-center justify-center text-[#0A4D8C] text-xs font-bold">
                  TRENDING
                </div>
              </div>
              <div className="h-48 flex items-end gap-2">
                {[40, 60, 45, 80, 55, 95, 75, 100].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-gradient-to-t from-[#0A4D8C] to-[#0A4D8C]/40 rounded-t-md transition-all hover:opacity-80 cursor-pointer" 
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Volume</div>
                  <div className="text-sm font-bold">500M Kz</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Membros</div>
                  <div className="text-sm font-bold">12.5k</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Payouts</div>
                  <div className="text-sm font-bold">450M Kz</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
