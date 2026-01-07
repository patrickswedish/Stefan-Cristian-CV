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
        {/* The background uses a high-end logistics image */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1586769852044-692d6e3703a0?auto=format&fit=crop&q=80')] bg-cover bg-center scale-110 opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 text-[10px] md:text-xs font-black tracking-[0.3em] text-amber-accent uppercase border border-amber-accent/30 rounded-full bg-navy/40 backdrop-blur-xl shadow-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></span>
            {t.hero.badge}
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] font-black mb-8 tracking-tighter animate-fade-in opacity-0 leading-[0.85]">
          STEFAN<br/>CRISTIAN
        </h1>

        <div className="flex justify-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-3xl text-slate-200 text-sm md:text-base font-bold shadow-2xl backdrop-blur-md hover:bg-white/10 transition-all cursor-default group">
            <CalendarCheck size={20} className="text-amber-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">{t.hero.availability}</span>
          </div>
        </div>
        
        <p className="text-base sm:text-lg md:text-2xl font-medium text-slate-300 mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0 px-4" style={{ animationDelay: '0.4s' }}>
          {t.hero.summary}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20 max-w-6xl mx-auto animate-fade-in opacity-0 px-4" style={{ animationDelay: '0.5s' }}>
          {t.hero.facts.map((factText, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 md:p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-amber-accent/10 hover:border-amber-accent/20 transition-all hover:-translate-y-2 group backdrop-blur-md">
              <div className="text-amber-accent mb-5 group-hover:scale-110 transition-transform flex-shrink-0 bg-navy/50 p-4 rounded-2xl">
                {factIcons[index] || factIcons[0]}
              </div>
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-white/90 leading-tight text-center">{factText}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8 animate-fade-in opacity-0 px-4" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={scrollToContact}
            className="px-12 py-6 bg-amber-accent hover:bg-amber-600 text-navy font-black rounded-3xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-amber-accent/30 w-full sm:w-auto uppercase tracking-widest text-xs"
          >
            {t.hero.ctaContact}
          </button>
          <button 
            onClick={handleDownloadCV}
            className="px-12 py-6 bg-white/5 hover:bg-white/10 text-white font-black rounded-3xl border border-white/10 transition-all w-full sm:w-auto uppercase tracking-widest text-xs backdrop-blur-xl active:scale-95 shadow-2xl"
          >
            {t.hero.ctaDownload}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <ChevronDown size={40} className="text-amber-accent" />
      </div>
    </section>
  );
};

export default Hero;