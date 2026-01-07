
import React from 'react';
import SectionHeading from './SectionHeading.tsx';
import { CheckCircle2 } from 'lucide-react';
import { Translations } from '../types.ts';

interface AboutProps {
  t: Translations;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-amber-accent font-black tracking-[0.3em] uppercase text-[10px] mb-4">{t.about.title}</h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-navy mb-8 leading-[1.1] tracking-tighter">
              {t.about.heading}
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg font-medium">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-inner w-full flex flex-col justify-between group">
              <div>
                <h4 className="text-xs font-black text-navy mb-8 uppercase tracking-[0.3em] opacity-50">{t.about.definesTitle}</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                  {t.about.defines.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-6 h-6 rounded-full bg-amber-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={14} className="text-amber-accent" />
                      </div>
                      <span className="text-slate-700 font-bold text-[11px] md:text-[12px] uppercase tracking-wider leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12 p-8 md:p-10 bg-navy rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl md:text-7xl font-black text-amber-accent mb-2 tracking-tighter">22+</div>
                  <div className="text-[10px] font-black opacity-70 uppercase tracking-[0.4em]">{t.about.yearsLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
