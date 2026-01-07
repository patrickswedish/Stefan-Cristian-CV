
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      <div className="w-20 h-1 bg-amber-accent mx-auto mb-4"></div>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
