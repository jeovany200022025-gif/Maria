
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Wallet, TrendingUp, History, LogOut, ArrowUpRight, ArrowDownLeft, PlusCircle } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const { t } = useLanguage();

  const stats = [
    { label: t('dashboard_balance'), value: '25,450.00 Kz', icon: <Wallet className="text-[#0A4D8C]" />, trend: '+5% este mês' },
    { label: t('dashboard_invested'), value: '1,500,000.00 Kz', icon: <TrendingUp className="text-green-500" />, trend: 'Ativo' },
    { label: t('dashboard_earnings'), value: '375,000.00 Kz', icon: <History className="text-blue-400" />, trend: '+25% ROI' },
  ];

  const transactions = [
    { type: 'invest', label: 'Investimento Platinum', date: '12 Out, 2023', amount: '-1,000,000 Kz', status: 'Processado' },
    { type: 'earning', label: 'Rendimento Bronze', date: '08 Out, 2023', amount: '+12,500 Kz', status: 'Recebido' },
    { type: 'withdraw', label: 'Saque para Conta', date: '01 Out, 2023', amount: '-50,000 Kz', status: 'Completo' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 border-r border-white/5 bg-[#0B0B0B] flex-col p-6 fixed h-full">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-[#0A4D8C] rounded flex items-center justify-center font-bold">A</div>
          <span className="text-lg font-bold tracking-tight">AURA VIP</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#0A4D8C]/10 text-[#0A4D8C] rounded-xl font-bold transition-all">
            <TrendingUp size={20} /> Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <Wallet size={20} /> Carteira
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <History size={20} /> Histórico
          </button>
        </nav>

        <button 
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 text-red-500/70 hover:text-red-500 transition-all mt-auto"
        >
          <LogOut size={20} /> Sair da Conta
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-6 md:p-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-white">{t('dashboard_welcome')}, Carlos!</h1>
            <p className="text-gray-500">Gerencie seus ativos com precisão.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
              {t('dashboard_withdraw')}
            </button>
            <button className="px-6 py-3 bg-[#0A4D8C] text-white rounded-xl font-bold flex items-center gap-2 blue-glow">
              <PlusCircle size={20} /> Novo Investimento
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="glass-panel p-6 rounded-3xl border border-white/5">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.trend}</span>
              </div>
              <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="font-bold text-white text-lg">{t('dashboard_history')}</h3>
            <button className="text-xs font-bold text-[#0A4D8C] hover:underline uppercase tracking-widest">Ver Tudo</button>
          </div>
          <div className="divide-y divide-white/5">
            {transactions.map((tx, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === 'invest' ? 'bg-red-500/10 text-red-500' : 
                    tx.type === 'earning' ? 'bg-green-500/10 text-green-500' : 
                    'bg-blue-500/10 text-blue-500'
                  }`}>
                    {tx.type === 'invest' ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                  </div>
                  <div>
                    <div className="font-bold text-white">{tx.label}</div>
                    <div className="text-xs text-gray-500">{tx.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-bold ${tx.amount.startsWith('+') ? 'text-green-500' : 'text-white'}`}>
                    {tx.amount}
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">{tx.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
