
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Mail, Lock, User, ArrowLeft, Loader2 } from 'lucide-react';

interface AuthProps {
  type: 'login' | 'register';
  onBack: () => void;
  onSuccess: () => void;
}

const Auth: React.FC<AuthProps> = ({ type, onBack, onSuccess }) => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(type === 'login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0A4D8C]/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A4D8C]/5 blur-[100px] rounded-full" />

      <div className="w-full max-w-md relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          {t('nav_home')}
        </button>

        <div className="glass-panel p-10 rounded-[40px] border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#0A4D8C] rounded-2xl flex items-center justify-center mx-auto mb-6 blue-glow">
              <span className="text-white font-black text-3xl">A</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              {isLogin ? 'Bem-vindo de volta' : 'Crie sua conta VIP'}
            </h2>
            <p className="text-gray-500 text-sm">
              {isLogin ? 'Insira seus dados para acessar o painel.' : 'Comece sua jornada de investimentos hoje.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input 
                    type="text" 
                    required 
                    placeholder="João Silva"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:border-[#0A4D8C] focus:ring-1 focus:ring-[#0A4D8C] outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="email" 
                  required 
                  placeholder="seu@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:border-[#0A4D8C] focus:ring-1 focus:ring-[#0A4D8C] outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Senha</label>
                {isLogin && <button type="button" className="text-[10px] text-[#0A4D8C] font-bold uppercase hover:underline">Esqueceu a senha?</button>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="password" 
                  required 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:border-[#0A4D8C] focus:ring-1 focus:ring-[#0A4D8C] outline-none transition-all"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-5 bg-[#0A4D8C] text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-[#0c59a3] blue-glow disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" size={24} /> : (isLogin ? t('nav_login') : t('nav_register'))}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              {isLogin ? 'Não tem uma conta? ' : 'Já possui conta? '}
              <span className="text-[#0A4D8C] font-bold">{isLogin ? 'Registre-se' : 'Faça login'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
