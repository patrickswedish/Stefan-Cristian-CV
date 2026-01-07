
import React from 'react';
import SectionHeading from './SectionHeading.tsx';
import { GraduationCap, BookOpen } from 'lucide-react';
import { Translations } from '../types.ts';

interface EducationProps {
  t: Translations;
}

const Education: React.FC<EducationProps> = ({ t }) => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title={t.education.title} subtitle={t.education.subtitle} />

        <div className="max-w-4xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row gap-10 items-start p-10 rounded-[40px] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="w-20 h-20 bg-navy rounded-3xl flex items-center justify-center flex-shrink-0 text-amber-accent shadow-2xl">
              <GraduationCap size={40} />
            </div>
            <div>
              <span className="text-amber-accent font-black text-[10px] tracking-[0.3em] uppercase mb-2 block">1991 – 1993</span>
              <h3 className="text-3xl font-black text-navy mb-3 tracking-tighter">{t.education.mechanic.title}</h3>
              <p className="text-lg font-bold text-slate-600 mb-6 uppercase tracking-wider text-sm">{t.education.mechanic.school}</p>
              <p className="text-slate-500 leading-relaxed font-medium">
                {t.education.mechanic.desc}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start p-10 rounded-[40px] border border-dashed border-slate-200 hover:border-amber-accent/30 transition-all">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center flex-shrink-0 text-slate-300 shadow-inner">
              <BookOpen size={40} />
            </div>
            <div>
              <span className="text-slate-400 font-black text-[10px] tracking-[0.3em] uppercase mb-2 block">1980 – 1991</span>
              <h3 className="text-2xl font-black text-slate-700 mb-2 tracking-tighter">{t.education.school.title}</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{t.education.school.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
