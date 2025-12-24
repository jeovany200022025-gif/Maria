
import React from 'react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, Lock, Activity, FileText, AlertCircle } from 'lucide-react';

const Security: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    { icon: <Lock />, title: 'Criptografia', desc: t('security_p1') },
    { icon: <Activity />, title: 'Automatizado', desc: t('security_p2') },
    { icon: <ShieldCheck />, title: 'Painel Seguro', en: 'Secure Panel', desc: 'Monitoramento 24/7 de todas as transações da plataforma.' },
  ];

  return (
    <section id="security" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
              {t('security_title')}
            </h2>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0A4D8C]/10 rounded-xl flex items-center justify-center text-[#0A4D8C]">
                    {React.cloneElement(f.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-red-500/5 border border-red-500/10 flex gap-4 items-start">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h5 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-1">Aviso de Risco Legal</h5>
                <p className="text-xs text-red-500/70 leading-relaxed">
                  Todo investimento financeiro carrega riscos. O capital investido pode sofrer flutuações e retornos não são garantidos, baseando-se em projeções de mercado. Invista apenas o capital que você está disposto a arriscar.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#0A4D8C]/5 blur-[100px] rounded-full" />
            <div className="relative glass-panel rounded-3xl p-10 border border-white/10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#0A4D8C] rounded-full flex items-center justify-center mb-8 blue-glow">
                <ShieldCheck size={48} className="text-white" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4">Proteção VIP</h3>
              <p className="text-gray-400 mb-8 max-w-sm">
                Sua privacidade e segurança são nossa prioridade número um. Utilizamos as mesmas tecnologias das maiores fintechs mundiais.
              </p>
              <div className="w-full space-y-3">
                <div className="bg-white/5 p-4 rounded-xl flex items-center justify-between border border-white/5">
                  <span className="text-sm font-semibold">SSL Status</span>
                  <span className="text-xs font-bold text-green-500 uppercase px-2 py-1 bg-green-500/10 rounded">Ativo</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl flex items-center justify-between border border-white/5">
                  <span className="text-sm font-semibold">Transações 24h</span>
                  <span className="text-xs font-bold text-[#0A4D8C] uppercase px-2 py-1 bg-[#0A4D8C]/10 rounded">Monitoradas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
