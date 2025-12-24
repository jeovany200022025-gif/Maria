
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import InvestmentPlans from './components/InvestmentPlans';
import HowItWorks from './components/HowItWorks';
import Security from './components/Security';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

type Page = 'home' | 'plans' | 'how' | 'security' | 'faq' | 'login' | 'register' | 'dashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle smooth scroll for landing page sections
  useEffect(() => {
    if (['plans', 'how', 'security', 'faq'].includes(currentPage)) {
      const element = document.getElementById(currentPage);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // After scrolling, reset current page to home visually but keep highlight?
        // Actually, just let the router handle it.
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  if (currentPage === 'dashboard' && isLoggedIn) {
    return (
      <LanguageProvider>
        <Dashboard onLogout={handleLogout} />
      </LanguageProvider>
    );
  }

  if (currentPage === 'login' || currentPage === 'register') {
    return (
      <LanguageProvider>
        <Auth 
          type={currentPage} 
          onBack={() => setCurrentPage('home')} 
          onSuccess={handleAuthSuccess}
        />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="bg-[#0B0B0B] text-white selection:bg-[#0A4D8C] selection:text-white">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        
        <main>
          <Hero onNavigate={handleNavigate} />
          <InvestmentPlans onInvest={() => handleNavigate('register')} />
          <HowItWorks />
          <Security />
          <FAQ />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
