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
      setIsScrolled(window.scrollY > 50);
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
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, '', href);
    }
  };

  const selectLanguage = (code: LanguageCode) => {
    onLangChange(code);
    setIsLangOpen(false);
    setIsMenuOpen(false);
    // Force a small delay to ensure UI updates before interactions
    setTimeout(() => {
      document.documentElement.lang = code;
    }, 0);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
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
          <nav className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] hover:text-amber-accent transition-colors duration-300 ${
                  isScrolled ? 'text-navy' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Selector Desktop */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] font-bold uppercase tracking-widest transition-all ${
                  isScrolled ? 'border-slate-200 text-navy hover:bg-slate-50 shadow-sm' : 'border-white/20 text-white hover:bg-white/10'
                }`}
              >
                <Globe size={14} className="text-amber-accent" />
                {currentLang.toUpperCase()}
                <ChevronDown size={12} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-3 w-56 bg-white shadow-2xl rounded-2xl overflow-hidden py-2 border border-slate-100 animate-fade-in ring-1 ring-black/5">
                  <div className="px-5 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 mb-1">
                    Select Language
                  </div>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => selectLanguage(l.code)}
                      className={`w-full text-left px-5 py-3.5 text-xs font-bold hover:bg-slate-50 flex items-center gap-3 transition-all ${
                        currentLang === l.code ? 'text-amber-accent bg-amber-accent/5' : 'text-navy'
                      }`}
                    >
                      <span className="text-lg grayscale-0 group-hover:scale-110 transition-transform">{l.flag}</span>
                      {l.name}
                      {currentLang === l.code && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-accent"></div>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-8 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 shadow-xl ${
                isScrolled ? 'bg-navy text-white hover:bg-slate-800 shadow-navy/20' : 'bg-amber-accent text-navy hover:bg-amber-600 shadow-amber-accent/20'
              }`}
            >
              {t.nav.hire}
            </a>
          </nav>

          {/* Mobile UI Buttons */}
          <div className="xl:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsLangOpen(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-black uppercase transition-all ${
                isScrolled || isMenuOpen ? 'border-slate-200 text-navy bg-slate-50' : 'border-white/20 text-white bg-white/5'
              }`}
            >
              <Globe size={14} className="text-amber-accent" />
              {currentLang.toUpperCase()}
            </button>
            <button 
              className={`p-2 transition-all rounded-xl active:scale-90 ${
                isScrolled || isMenuOpen ? 'text-navy bg-slate-100' : 'text-white bg-white/10'
              }`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div 
          className={`xl:hidden fixed inset-x-0 top-full bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] border-t border-slate-100 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-12 px-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-black text-navy uppercase tracking-[0.25em] hover:text-amber-accent transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="w-full h-px bg-slate-100 my-4"></div>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-5 bg-navy text-white text-center rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-navy/20 text-xs"
            >
              {t.nav.hire}
            </a>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Language Modal */}
      {isLangOpen && (
        <div 
          className="fixed inset-0 z-[200] bg-navy/60 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-6 transition-all duration-300"
          onClick={() => setIsLangOpen(false)}
        >
          <div 
            className="bg-white rounded-t-[2.5rem] sm:rounded-[3rem] w-full max-w-lg overflow-hidden shadow-2xl animate-fade-in" 
            onClick={e => e.stopPropagation()}
          >
            <div className="px-8 py-6 sm:py-8 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="font-black text-navy uppercase text-sm tracking-[0.3em]">Language selection</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Available in 6 languages</p>
              </div>
              <button 
                onClick={() => setIsLangOpen(false)} 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-slate-100 hover:bg-slate-200 transition-all shadow-sm"
              >
                <X size={20} className="text-navy" />
              </button>
            </div>
            <div className="p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => selectLanguage(l.code)}
                  className={`w-full text-left p-5 sm:p-6 rounded-[2rem] flex items-center gap-4 transition-all ${
                    currentLang === l.code ? 'bg-amber-accent text-navy shadow-xl shadow-amber-accent/20 ring-4 ring-amber-accent/10' : 'bg-slate-50 text-navy hover:bg-slate-100'
                  }`}
                >
                  <span className="text-3xl sm:text-4xl">{l.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-widest">{l.name}</span>
                    <span className={`text-[9px] font-bold uppercase opacity-60 tracking-tighter ${currentLang === l.code ? 'text-navy' : 'text-slate-400'}`}>
                      {l.code === 'de' ? 'Switzerland Preferred' : 'Global Ready'}
                    </span>
                  </div>
                  {currentLang === l.code && <div className="ml-auto w-2 h-2 rounded-full bg-navy"></div>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;