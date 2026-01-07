import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Education from './components/Education.tsx';
import Languages from './components/Languages.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';
import { LanguageCode } from './types.ts';
import { TRANSLATIONS } from './translations.ts';

const App: React.FC = () => {
  const [lang, setLang] = useState<LanguageCode>('de');
  
  // Safe translation retrieval
  const getT = (l: LanguageCode) => TRANSLATIONS[l] || TRANSLATIONS['de'];
  const t = getT(lang);

  // Initialize from storage or detect browser language
  useEffect(() => {
    const saved = localStorage.getItem('stefan-cv-lang') as LanguageCode;
    if (saved && TRANSLATIONS[saved]) {
      setLang(saved);
    } else {
      const browserLang = navigator.language.split('-')[0] as LanguageCode;
      if (TRANSLATIONS[browserLang]) {
        setLang(browserLang);
      }
    }
  }, []);

  const changeLanguage = useCallback((newLang: LanguageCode) => {
    if (TRANSLATIONS[newLang]) {
      setLang(newLang);
      localStorage.setItem('stefan-cv-lang', newLang);
      
      // Update document attributes for accessibility and SEO
      document.documentElement.lang = newLang;
      
      // Smooth scroll back to top if language changes significantly? 
      // User might prefer staying in place, so we won't force scroll.
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-[#F8FAFC]">
      {/* Header with language switcher and hamburger menu */}
      <Header currentLang={lang} onLangChange={changeLanguage} t={t} />
      
      <main className="flex-grow">
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Languages t={t} />
        <Contact t={t} />
      </main>
      
      <Footer t={t} />
      
      {/* Persistant floating contact component */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;