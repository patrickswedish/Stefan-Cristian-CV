
import React from 'react';
import SectionHeading from './SectionHeading.tsx';
import { Check } from 'lucide-react';
import { Translations } from '../types.ts';

interface SkillsProps {
  t: Translations;
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  return (
    <section id="skills" className="py-24 bg-navy text-white">
      <div className="container mx-auto px-6">
        <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} light />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {t.skills.categories.map((category, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-[40px] p-10 hover:bg-white/10 transition-all hover:-translate-y-2">
              <h3 className="text-sm font-black mb-10 text-amber-accent uppercase tracking-[0.2em]">{category.title}</h3>
              <ul className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-amber-accent" />
                    </div>
                    <span className="text-slate-300 font-bold text-sm tracking-wide">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
