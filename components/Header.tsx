import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { LanguageCode, Translations } from '../types.ts';

interface HeaderProps {
  currentLang: LanguageCode;
  onLangChange: (lang: LanguageCode) => void;
  t: Translations;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages: { code: LanguageCode; name: string; flag: string }[] = [
    { code: 'de', name: 'Deutsch', flag: '🇨🇭' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, '', href);
    }
  };

  const handleLangToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLangOpen(!isLangOpen);
  };

  const selectLanguage = (code: LanguageCode) => {
    onLangChange(code);
    setIsLangOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
            isScrolled || isMenuOpen ? 'text-navy' : 'text-white'
          }`}
        >
          STEFAN<span className="text-amber-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs font-bold uppercase tracking-widest hover:text-amber-accent transition-colors duration-300 ${
                isScrolled ? 'text-navy' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Selector Desktop */}
          <div className="relative" ref={langRef}>
            <button 
              onClick={handleLangToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${
                isScrolled ? 'border-slate-200 text-navy hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <Globe size={14} />
              {currentLang.toUpperCase()}
              <ChevronDown size={12} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-3 w-48 bg-white shadow-2xl rounded-2xl overflow-hidden py-2 border border-slate-100 animate-fade-in ring-1 ring-black/5">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => selectLanguage(l.code)}
                    className={`w-full text-left px-5 py-3 text-sm font-bold hover:bg-slate-50 flex items-center gap-3 transition-colors ${
                      currentLang === l.code ? 'text-amber-accent bg-amber-accent/5' : 'text-navy'
                    }`}
                  >
                    <span className="text-lg">{l.flag}</span>
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`px-7 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg ${
              isScrolled ? 'bg-navy text-white hover:bg-slate-800 shadow-navy/20' : 'bg-amber-accent text-navy hover:bg-amber-600 shadow-amber-accent/20'
            }`}
          >
            {t.nav.hire}
          </a>
        </nav>

        {/* Mobile Toggle Group */}
        <div className="xl:hidden flex items-center gap-3">
          <button 
            onClick={handleLangToggle}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase transition-all ${
              isScrolled || isMenuOpen ? 'border-slate-200 text-navy bg-slate-50' : 'border-white/20 text-white bg-white/5'
            }`}
          >
            <Globe size={14} />
            {currentLang.toUpperCase()}
          </button>
          <button 
            className={`p-2 transition-colors rounded-lg ${
              isScrolled || isMenuOpen ? 'text-navy bg-slate-100' : 'text-white bg-white/10'
            }`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`xl:hidden fixed inset-x-0 top-full bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] border-t border-slate-100 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 py-12 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl font-bold text-navy uppercase tracking-[0.2em] hover:text-amber-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full py-5 bg-navy text-white text-center rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-navy/20 text-sm"
          >
            {t.nav.hire}
          </a>
        </div>
      </div>

      {/* Fullscreen Language Picker for Mobile/Desktop robustness */}
      {isLangOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-navy/80 backdrop-blur-md flex items-center justify-center p-6 transition-all duration-300" 
          onClick={() => setIsLangOpen(false)}
        >
          <div 
            className="bg-white rounded-[2.5rem] w-full max-w-sm overflow-hidden shadow-2xl animate-fade-in" 
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <span className="font-black text-navy uppercase text-xs tracking-[0.3em]">Language selection</span>
              <button 
                onClick={() => setIsLangOpen(false)} 
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 grid grid-cols-1 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => selectLanguage(l.code)}
                  className={`w-full text-left px-6 py-4 text-lg font-black rounded-2xl flex items-center gap-5 transition-all ${
                    currentLang === l.code ? 'bg-amber-accent/10 text-amber-accent ring-2 ring-amber-accent/20' : 'text-navy hover:bg-slate-50'
                  }`}
                >
                  <span className="text-3xl">{l.flag}</span>
                  <span>{l.name}</span>
                  {currentLang === l.code && <div className="ml-auto w-2 h-2 rounded-full bg-amber-accent animate-pulse"></div>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;