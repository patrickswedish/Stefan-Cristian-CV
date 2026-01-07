
import React from 'react';
import SectionHeading from './SectionHeading.tsx';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { Translations } from '../types.ts';

interface ExperienceProps {
  t: Translations;
}

const Experience: React.FC<ExperienceProps> = ({ t }) => {
  return (
    <section id="experience" className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title={t.experience.title} 
          subtitle={t.experience.subtitle}
        />

        <div className="max-w-6xl mx-auto mt-16 relative timeline-line">
          {t.experience.items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-center w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 md:w-6 md:h-6 bg-white border-4 border-amber-accent rounded-full -translate-x-1/2 z-10 top-8 md:top-10 shadow-lg ring-4 ring-amber-accent/10"></div>

                <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className={`flex flex-col gap-2 mb-6 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                      <span className="inline-flex items-center gap-2 text-amber-accent font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-navy group-hover:text-amber-accent transition-colors tracking-tighter leading-tight">
                        {item.position}
                      </h3>
                    </div>
                    
                    <div className={`flex flex-col gap-2 mb-6 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="flex items-center gap-2 text-navy font-bold text-sm uppercase">
                        <Building2 size={16} className="text-slate-400" />
                        {item.company}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                        <MapPin size={14} />
                        {item.location}
                      </div>
                    </div>

                    {item.tasks && item.tasks.length > 0 && (
                      <ul className={`space-y-3 text-slate-500 text-sm font-medium ${isEven ? 'md:text-right' : 'text-left'}`}>
                        {item.tasks.map((task, idx) => (
                          <li key={idx} className="leading-relaxed flex items-start gap-2">
                            {(!isEven || window.innerWidth < 768) && <span className="w-1 h-1 rounded-full bg-amber-accent mt-2 flex-shrink-0"></span>}
                            <span>{task}</span>
                            {isEven && window.innerWidth >= 768 && <span className="w-1 h-1 rounded-full bg-amber-accent mt-2 flex-shrink-0"></span>}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
