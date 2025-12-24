
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Menu, X, Globe, User } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLang = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const Logo = () => (
    <div 
      className="flex items-center gap-2 cursor-pointer group" 
      onClick={() => onNavigate('home')}
    >
      <div className="w-10 h-10 bg-gradient-to-br from-[#0A4D8C] to-[#001f3f] rounded-lg flex items-center justify-center blue-glow transition-transform group-hover:scale-105">
        <span className="text-white font-bold text-xl">A</span>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-extrabold text-lg leading-tight tracking-tight">AURA ANGOLA</span>
        <span className="text-[#0A4D8C] text-[10px] font-bold tracking-[0.2em]">VIP INVESTMENTS</span>
      </div>
    </div>
  );

  const navLinks = [
    { id: 'home', label: t('nav_home') },
    { id: 'plans', label: t('nav_plans') },
    { id: 'how', label: t('nav_how') },
    { id: 'security', label: t('nav_security') },
    { id: 'faq', label: t('nav_faq') },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm font-medium transition-colors hover:text-[#0A4D8C] ${
                currentPage === link.id ? 'text-[#0A4D8C]' : 'text-gray-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-xs font-bold hover:bg-white/5 transition-colors"
          >
            <Globe size={14} />
            {language.toUpperCase()}
          </button>
          <button 
            onClick={() => onNavigate('login')}
            className="text-sm font-semibold text-white/80 hover:text-white"
          >
            {t('nav_login')}
          </button>
          <button 
            onClick={() => onNavigate('register')}
            className="bg-[#0A4D8C] hover:bg-[#0c59a3] text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 blue-glow"
          >
            {t('nav_start')}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0B0B0B] border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMenuOpen(false);
              }}
              className="text-left text-lg font-medium text-gray-300 border-b border-white/5 pb-2"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center justify-between pt-2">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm font-bold"
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </button>
            <div className="flex gap-4">
              <button onClick={() => onNavigate('login')} className="text-sm font-bold">{t('nav_login')}</button>
              <button onClick={() => onNavigate('register')} className="bg-[#0A4D8C] px-6 py-2 rounded-full text-sm font-bold">{t('nav_start')}</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
