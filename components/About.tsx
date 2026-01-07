import React from 'react';
import SectionHeading from './SectionHeading.tsx';
import { CheckCircle2 } from 'lucide-react';
import { Translations } from '../types.ts';

interface AboutProps {
  t: Translations;
}

const About: React.FC<AboutProps> = ({ t }) => {
  // Direct Google Drive image links formatted for embedding
  const image1 = "https://lh3.googleusercontent.com/d/1eH95GpUkJGl6rEC5WPtUd1TVc2f_PUc8";
  const image2 = "https://lh3.googleusercontent.com/d/1GWuzyT-M46Soc5CyCpq-ECZ-Kp5p80V7";

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Premium Image Stack */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-4/5 ml-auto">
              {/* Main Portrait/Action Image */}
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100 transform hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src={image1} 
                  alt="Stefan Cristian Professional" 
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
              </div>
              
              {/* Floating Accent Image */}
              <div className="absolute -left-1/4 bottom-12 w-2/3 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 hidden sm:block transform -rotate-3 hover:rotate-0 transition-all duration-700">
                <img 
                  src={image2} 
                  alt="Stefan Cristian Logistics" 
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-accent/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-navy/5 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="inline-block px-4 py-2 bg-slate-50 rounded-full border border-slate-100 mb-6 self-start">
              <h3 className="text-amber-accent font-black tracking-[0.3em] uppercase text-[10px]">{t.about.title}</h3>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-navy mb-10 leading-[1] tracking-tighter">
              {t.about.heading.split(' ').map((word, i) => i === 0 ? <span key={i}>{word} </span> : <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-slate-500">{word} </span>)}
            </h2>

            <div className="space-y-8 text-slate-600 leading-relaxed text-lg font-medium max-w-xl">
              <p className="border-l-4 border-amber-accent pl-6 italic text-navy/70">
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {t.about.defines.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group cursor-default">
                  <div className="w-8 h-8 rounded-xl bg-navy text-amber-accent flex items-center justify-center flex-shrink-0 group-hover:bg-amber-accent group-hover:text-navy transition-colors duration-300">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-navy font-black text-[11px] uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner group">
               <div className="relative">
                 <div className="text-5xl md:text-7xl font-black text-navy tracking-tighter group-hover:text-amber-accent transition-colors">22<span className="text-amber-accent text-3xl">+</span></div>
               </div>
               <div className="h-12 w-px bg-slate-200 mx-2"></div>
               <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] leading-tight max-w-[120px]">
                 {t.about.yearsLabel}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;