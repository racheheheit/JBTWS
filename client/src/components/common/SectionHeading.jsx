import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const SectionHeading = ({
  badge,
  badgeHindi,
  title,
  titleHindi,
  subtitle,
  subtitleHindi,
  align = 'center',
  className = '',
  light = false
}) => {
  const { isHindi } = useLanguage();

  const alignmentClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} mb-12 ${className}`}>
      {(badge || badgeHindi) && (
        <span className={`inline-flex items-center gap-2 px-3.5 py-1 mb-3 text-[12px] font-medium tracking-widest uppercase rounded-full ${
          light
            ? 'text-[#D5A33A] bg-[#173F3A]/80 border border-[#D5A33A]/30'
            : 'text-[#8C2635] bg-[#8C2635]/8 border border-[#8C2635]/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8C2635]" />
          {isHindi ? badgeHindi || badge : badge}
        </span>
      )}

      <h2 className={`h2-title ${
        isHindi ? 'font-display-hi' : 'font-display-en'
      } ${light ? 'text-[#F7F3E8]' : 'text-[#173F3A]'}`}>
        {isHindi ? titleHindi || title : title}
      </h2>

      {/* Muted Saffron Himalayan Divider */}
      <div className="w-12 h-0.5 bg-[#D5A33A] my-4 rounded-full" />

      {(subtitle || subtitleHindi) && (
        <p className={`text-base md:text-lg max-w-2xl font-normal leading-relaxed ${
          light ? 'text-[#DDD8CA]' : 'text-[#66706D]'
        }`}>
          {isHindi ? subtitleHindi || subtitle : subtitle}
        </p>
      )}
    </div>
  );
};
