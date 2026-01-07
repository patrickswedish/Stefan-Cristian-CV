
import React from 'react';
import { ChevronDown, CalendarCheck, ShieldCheck, Truck, MapPin, Globe } from 'lucide-react';
import { Translations } from '../types.ts';

interface HeroProps {
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    window.print();
  };

  const factIcons = [
    <ShieldCheck key="shield" className="w-6 h-6 md:w-7 md:h-7" />,
    <Truck key="truck" className="w-6 h-6 md:w-7 md:h-7" />,
    <MapPin key="map" className="w-6 h-6 md:w-7 md:h-7" />,
    <Globe key="globe" className="w-6 h-6 md:w-7 md:h-7" />
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-navy text-white pt-24 pb-12">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80')] bg-cover bg-center scale-110 opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] md:text-xs font-black tracking-[0.3em] text-amber-accent uppercase border border-amber-accent/30 rounded-full bg-amber-accent/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {t.hero.badge}
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter animate-fade-in opacity-0 leading-[0.9]" style={{ animationDelay: '0.2s' }}>
          Stefan Cristian
        </h1>

        <div className="flex justify-center mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-slate-200 text-sm md:text-base font-semibold shadow-2xl backdrop-blur-sm">
            <CalendarCheck size={18} className="text-amber-accent flex-shrink-0" />
            <span className="tracking-wide">{t.hero.availability}</span>
          </div>
        </div>
        
        <p className="text-base sm:text-lg md:text-2xl font-light text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          {t.hero.summary}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-6xl mx-auto animate-fade-in opacity-0 px-4" style={{ animationDelay: '0.5s' }}>
          {t.hero.facts.map((factText, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:scale-[1.03] group backdrop-blur-sm">
              <div className="text-amber-accent mb-4 group-hover:scale-110 transition-transform flex-shrink-0">
                {factIcons[index] || factIcons[0]}
              </div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-300 leading-tight">{factText}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in opacity-0 px-4" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={scrollToContact}
            className="px-10 py-5 bg-amber-accent hover:bg-amber-600 text-navy font-black rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-amber-accent/20 w-full sm:w-auto uppercase tracking-widest text-xs"
          >
            {t.hero.ctaContact}
          </button>
          <button 
            onClick={handleDownloadCV}
            className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl border border-white/20 transition-all w-full sm:w-auto uppercase tracking-widest text-xs backdrop-blur-md active:scale-95"
          >
            {t.hero.ctaDownload}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
