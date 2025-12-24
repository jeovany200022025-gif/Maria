
import React from 'react';
import { useLanguage } from './LanguageContext';
import { PLANS } from '../constants';
import { CheckCircle2, Clock, Landmark } from 'lucide-react';

interface PlansProps {
  onInvest: (planId: string) => void;
}

const InvestmentPlans: React.FC<PlansProps> = ({ onInvest }) => {
  const { t } = useLanguage();

  return (
    <section id="plans" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            {t('plans_title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('plans_disclaimer')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className="group relative glass-panel rounded-3xl p-8 border border-white/5 transition-all hover:border-[#0A4D8C]/50 hover:-translate-y-2 overflow-hidden"
            >
              {/* Plan Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center gap-2 text-[#0A4D8C] text-sm font-bold">
                    <Clock size={16} />
                    {plan.period} {t('plan_days')}
                  </div>
                </div>
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: `${plan.color}20`, border: `1px solid ${plan.color}` }}
                >
                  {plan.returnRate}%
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{t('plan_min')}</span>
                  <span className="text-white font-bold">{plan.minAmount.toLocaleString()} Kz</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{t('plan_max')}</span>
                  <span className="text-white font-bold">{plan.maxAmount.toLocaleString()} Kz</span>
                </div>
                <div className="h-[1px] bg-white/5" />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{t('plan_return')}</span>
                  <span className="text-xl font-bold text-[#0A4D8C]">+{plan.returnRate}%</span>
                </div>
              </div>

              <button 
                onClick={() => onInvest(plan.id)}
                className="w-full py-4 bg-white/5 hover:bg-[#0A4D8C] text-white font-bold rounded-xl border border-white/10 hover:border-[#0A4D8C] transition-all group-hover:blue-glow"
              >
                {t('plan_invest_btn')}
              </button>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0A4D8C]/5 blur-[40px] rounded-full transition-all group-hover:bg-[#0A4D8C]/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
