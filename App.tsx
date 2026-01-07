import React, { useState, useEffect } from 'react';
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
  const t = TRANSLATIONS[lang] || TRANSLATIONS['de'];

  // Optional: Auto-detect language or use local storage
  useEffect(() => {
    const saved = localStorage.getItem('stefan-cv-lang') as LanguageCode;
    if (saved && TRANSLATIONS[saved]) {
      setLang(saved);
    }
  }, []);

  const changeLanguage = (newLang: LanguageCode) => {
    setLang(newLang);
    localStorage.setItem('stefan-cv-lang', newLang);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
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
      <FloatingWhatsApp />
    </div>
  );
};

export default App;