import React from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const LightboxModal = ({ isOpen, onClose, item, onNext, onPrev }) => {
  const { isHindi } = useLanguage();

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#173F3A]/90 backdrop-blur-md p-4 md:p-8 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 text-[#DDD8CA] hover:text-white bg-[#173F3A] border border-[#DDD8CA]/30 rounded-full transition-colors"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-[#DDD8CA] hover:text-white bg-[#173F3A] border border-[#DDD8CA]/30 rounded-full transition-colors hidden md:flex"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-[#DDD8CA] hover:text-white bg-[#173F3A] border border-[#DDD8CA]/30 rounded-full transition-colors hidden md:flex"
          aria-label="Next item"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Content Container */}
      <div className="relative w-full max-w-4xl bg-[#173F3A] border border-[#DDD8CA]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Visual Container */}
        <div className="w-full md:w-2/3 bg-[#173F3A] min-h-[300px] md:min-h-[420px] flex items-center justify-center p-8 relative border-b md:border-b-0 md:border-r border-[#DDD8CA]/20">
          <div className="text-center p-6 border border-dashed border-[#D5A33A]/50 rounded-xl bg-[#126A73]/20 max-w-md">
            <span className="text-[11px] font-mono text-[#D5A33A] uppercase tracking-widest block mb-2 font-semibold">
              {item.tag || '[DOCUMENT / PHOTO PLACEHOLDER]'}
            </span>
            <h3 className={`text-xl font-bold text-[#F7F3E8] mb-2 ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
              {isHindi ? item.titleHindi || item.title : item.title}
            </h3>
            <p className="text-xs text-[#DDD8CA]">
              {item.category || item.location || 'Jaunsar-Bawar Cultural Archive'}
            </p>
          </div>
        </div>

        {/* Details Sidebar */}
        <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-[#173F3A]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 text-[11px] font-semibold text-[#D5A33A] bg-[#126A73]/40 border border-[#D5A33A]/30 rounded-md">
                {item.category || 'Archive Item'}
              </span>
              {item.year && (
                <span className="px-2.5 py-1 text-[11px] font-semibold text-[#DDD8CA] bg-[#173F3A] border border-[#DDD8CA]/30 rounded-md">
                  {item.year}
                </span>
              )}
            </div>

            <h3 className={`text-2xl font-bold text-[#F7F3E8] mb-3 ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
              {isHindi ? item.titleHindi || item.title : item.title}
            </h3>

            <p className="text-sm text-[#DDD8CA] leading-relaxed mb-4">
              {isHindi ? item.descriptionHindi || item.description : item.description}
            </p>

            {item.location && (
              <div className="flex items-start gap-2 text-xs text-[#DDD8CA]/80 border-t border-[#DDD8CA]/20 pt-4">
                <Info className="w-4 h-4 text-[#D5A33A] shrink-0 mt-0.5" />
                <span><strong>{isHindi ? 'स्थान' : 'Location'}:</strong> {item.location}</span>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-[#DDD8CA]/20">
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#F7F3E8] bg-[#126A73] hover:bg-[#126A73]/80 rounded-lg transition-colors"
            >
              {isHindi ? 'बंद करें' : 'Close Details'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
