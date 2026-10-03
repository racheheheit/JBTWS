import React from 'react';
import { Image as ImageIcon, Eye } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ImagePlaceholder = ({
  tag = "[IMAGE PLACEHOLDER]",
  title = "Photo Placeholder",
  titleHindi = "फोटो स्थानधारक",
  category = "Gallery Image",
  aspectRatio = "aspect-video",
  className = "",
  onClick = null,
  showViewBtn = false,
  dark = false
}) => {
  const { isHindi } = useLanguage();

  return (
    <div
      onClick={onClick}
      className={`relative group overflow-hidden border rounded-2xl flex flex-col items-center justify-center text-center p-6 transition-all duration-300 ${
        dark
          ? 'bg-[#123833] border-[#DDD8CA]/30 text-[#F7F3E8]'
          : 'bg-[#EAE4D5] border-[#DDD8CA] text-[#202625]'
      } ${
        onClick ? 'cursor-pointer hover:border-[#126A73] hover:shadow-lg' : ''
      } ${aspectRatio} ${className}`}
    >
      {/* Subtle Frame Corners */}
      <div className={`absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 ${dark ? 'border-[#D5A33A]/60' : 'border-[#126A73]/40'}`} />
      <div className={`absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 ${dark ? 'border-[#D5A33A]/60' : 'border-[#126A73]/40'}`} />
      <div className={`absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 ${dark ? 'border-[#D5A33A]/60' : 'border-[#126A73]/40'}`} />
      <div className={`absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 ${dark ? 'border-[#D5A33A]/60' : 'border-[#126A73]/40'}`} />

      {/* Category Badge */}
      <span className={`relative z-10 px-2.5 py-0.5 mb-3 text-[10px] uppercase tracking-widest font-semibold rounded-full ${
        dark
          ? 'text-[#D5A33A] bg-[#173F3A] border border-[#D5A33A]/30'
          : 'text-[#126A73] bg-[#F7F3E8] border border-[#DDD8CA]'
      }`}>
        {category}
      </span>

      {/* Icon & Title */}
      <div className="relative z-10 flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full border flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform ${
          dark
            ? 'bg-[#173F3A] border-[#D5A33A]/40 text-[#D5A33A]'
            : 'bg-white border-[#DDD8CA] text-[#126A73] shadow-sm'
        }`}>
          <ImageIcon className="w-6 h-6" />
        </div>
        <p className={`text-[11px] font-mono tracking-wider font-semibold mb-1 ${
          dark ? 'text-[#D5A33A]' : 'text-[#8C2635]'
        }`}>
          {tag}
        </p>
        <h4 className={`text-xs font-semibold max-w-[85%] line-clamp-2 ${
          dark ? 'text-[#F7F3E8]' : 'text-[#202625]'
        }`}>
          {isHindi ? titleHindi || title : title}
        </h4>
      </div>

      {/* Hover View Overlay */}
      {showViewBtn && (
        <div className="absolute inset-0 bg-[#173F3A]/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#126A73] border border-[#DDD8CA]/30 px-4 py-2 rounded-lg shadow">
            <Eye className="w-4 h-4 text-[#D5A33A]" />
            {isHindi ? 'विवरण देखें' : 'View Image'}
          </span>
        </div>
      )}
    </div>
  );
};
