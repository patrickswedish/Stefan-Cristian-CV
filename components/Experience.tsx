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
                className={`relative mb-12 md:mb-20 flex flex-col md:flex-row items-start md:items-center w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[1.5rem] md:left-1/2 w-4 h-4 md:w-6 md:h-6 bg-white border-4 border-amber-accent rounded-full -translate-x-1/2 z-10 top-8 md:top-1/2 md:-translate-y-1/2 shadow-lg ring-4 ring-amber-accent/10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-amber-accent/20 transition-all duration-500 group relative overflow-hidden">
                    <div className={`absolute top-0 w-2 h-full bg-amber-accent opacity-0 group-hover:opacity-100 transition-opacity ${isEven ? 'right-0' : 'left-0'}`}></div>
                    
                    <div className={`flex flex-col gap-2 mb-6 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full text-amber-accent font-black text-[9px] uppercase tracking-[0.2em] border border-slate-100">
                        <Calendar size={12} />
                        {item.period}
                      </div>
                      <h3 className="text-xl md:text-3xl font-black text-navy group-hover:text-amber-accent transition-colors tracking-tighter leading-tight mt-2">
                        {item.position}
                      </h3>
                    </div>
                    
                    <div className={`flex flex-col gap-2 mb-8 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="flex items-center gap-3 text-navy font-black text-xs uppercase tracking-widest">
                        <Building2 size={16} className="text-slate-400 group-hover:text-amber-accent transition-colors" />
                        {item.company}
                      </div>
                      <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        <MapPin size={14} className="text-slate-300" />
                        {item.location}
                      </div>
                    </div>

                    {item.tasks && item.tasks.length > 0 && (
                      <div className={`space-y-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        {item.tasks.map((task, idx) => (
                          <div key={idx} className={`flex items-start gap-3 group/task ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/30 mt-1.5 flex-shrink-0 group-hover/task:scale-150 transition-transform duration-300"></div>
                            <span className="text-slate-500 text-sm font-medium leading-relaxed group-hover/task:text-slate-700 transition-colors">{task}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
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