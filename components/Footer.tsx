
import React from 'react';
// Fix: PERSONAL_INFO does not exist in constants.tsx, using STABLE_CONFIG instead
import { STABLE_CONFIG } from '../constants.tsx';
import { Translations } from '../types.ts';

interface FooterProps {
  t: Translations;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="bg-[#0A0F1E] text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-black mb-6 tracking-tighter">STEFAN CRISTIAN<span className="text-amber-accent">.</span></h2>
        <p className="text-slate-500 mb-12 max-w-xl mx-auto font-medium text-lg leading-relaxed">
          {t.hero.summary}
        </p>
        <div className="w-full h-px bg-white/5 mb-12"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
          <p>© {new Date().getFullYear()} {STABLE_CONFIG.name}.</p>
          <div className="flex gap-10">
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-amber-accent transition-colors">{t.nav.about}</a>
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-amber-accent transition-colors">{t.nav.experience}</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-amber-accent transition-colors">{t.nav.contact}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
