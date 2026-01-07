
import React from 'react';
import SectionHeading from './SectionHeading.tsx';
import { Translations } from '../types.ts';

interface LanguagesProps {
  t: Translations;
}

const Languages: React.FC<LanguagesProps> = ({ t }) => {
  return (
    <section id="languages" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <SectionHeading title={t.languages.title} subtitle={t.languages.subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 max-w-6xl mx-auto">
          {t.languages.items.map((lang, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:border-amber-accent/50 transition-all hover:-translate-y-1 group">
              <div className="text-navy font-black text-xl mb-4 group-hover:text-amber-accent transition-colors tracking-tighter">{lang.name}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 px-4 py-2 bg-slate-50 rounded-full inline-block group-hover:bg-amber-accent/10 transition-colors">
                {lang.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
