import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Camera, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/contentData';

/* ─── Banner slide data ─── */
const bannerSlides = [
  {
    src: '/assets/banner_1.jpg',
    labelEn: 'Community Celebration at Red Fort, Delhi',
    labelHi: 'लाल किला, दिल्ली में सामुदायिक उत्सव',
    position: 'center 25%',
  },
  {
    src: '/assets/banner_2.jpg',
    labelEn: 'Traditional Jaunsari Folk Dance & Music Troupes',
    labelHi: 'पारंपरिक जौनसारी लोक नृत्य एवं संगीत दल',
    position: 'center 35%',
  },
  {
    src: '/assets/banner_3.jpg',
    labelEn: 'Cultural Heritage Gathering & Traditional Attire',
    labelHi: 'सांस्कृतिक धरोहर सम्मेलन एवं पारंपरिक वेशभूषा',
    position: 'center 45%',
  },
];

export const Home = () => {
  const { isHindi } = useLanguage();

  /* Banner / slideshow state */
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimer = useRef(null);

  const startSlideTimer = () => {
    clearInterval(slideTimer.current);
    slideTimer.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % bannerSlides.length);
    }, 4000);
  };

  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(slideTimer.current);
  }, []);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
    startSlideTimer();
  };
  const prevSlide = () => goToSlide((currentSlide - 1 + bannerSlides.length) % bannerSlides.length);
  const nextSlide = () => goToSlide((currentSlide + 1) % bannerSlides.length);

  return (
    <div className="bg-[#FAF7EF] pb-16">
      {/* ================================================== */}
      {/* 1. HERO SECTION                                    */}
      {/* ================================================== */}
      <section id="hero" className="relative w-full bg-[#E2F1F8] overflow-hidden pt-6 sm:pt-8 md:pt-10 pb-0 border-b border-[#D2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">

          {/* Big Title — "JBTWS DELHI" */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#1C2326] leading-tight mb-1.5 select-none">
            {isHindi ? siteContent.org.titleHi : siteContent.org.titleEn}
          </h1>

          {/* Blue italic subtitle */}
          <p className="text-xs sm:text-sm md:text-base font-serif italic font-semibold text-[#2B5B97] mb-2">
            {isHindi ? siteContent.org.nameHi : siteContent.org.nameEn}
          </p>

          {/* Two-line tagline */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-normal text-[#1C2326] tracking-tight leading-snug max-w-2xl mx-auto mb-2">
            {isHindi ? (
              <>
                परंपरा का संरक्षण।<br />समुदाय का सशक्तिकरण।
              </>
            ) : (
              <>
                Preserving Heritage.<br />Empowering Communities.
              </>
            )}
          </h2>
        </div>

        {/* Hero artwork — transparent PNG illustration sitting flush at bottom */}
        <div className="w-full relative z-0 mt-1 sm:mt-2 max-w-4xl mx-auto px-4 flex justify-center">
          <img
            src="/assets/hero_art_transparent.png"
            alt="Jaunsar-Bawar Heritage Architecture Scene"
            className="w-full max-h-[220px] sm:max-h-[260px] md:max-h-[300px] object-contain block mx-auto -mb-1"
          />
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. IMAGE BANNER / SLIDESHOW (Framed editorial)     */}
      {/* ================================================== */}
      <section id="banner" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border border-[#D2E8F0] bg-[#1C2326] aspect-[16/9] sm:aspect-[21/9] max-h-[520px]">
        {/* Slides */}
        {bannerSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {slide.src ? (
              <img
                src={slide.src}
                alt={slide.labelEn}
                className="w-full h-full object-cover"
                style={{ objectPosition: slide.position || 'center' }}
              />
            ) : (
              /* Placeholder until real images are uploaded */
              <div
                className="w-full h-full flex flex-col items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${slide.color}ee 0%, ${slide.color}99 60%, #1C2326cc 100%)`,
                }}
              >
                <Camera className="w-16 h-16 text-white/30 mb-4" />
                <p className="text-white/60 text-sm font-mono tracking-widest uppercase">
                  {isHindi ? slide.labelHi : slide.labelEn}
                </p>
                <p className="text-white/30 text-xs font-mono mt-2 tracking-wide">
                  {isHindi ? '— फ़ोटो शीघ्र आएगी —' : '— Photo coming soon —'}
                </p>
              </div>
            )}

            {/* Caption bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
              <p className="text-white text-lg sm:text-xl font-serif font-medium">
                {isHindi ? slide.labelHi : slide.labelEn}
              </p>
            </div>
          </div>
        ))}

        {/* Arrow controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {bannerSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        </div>
      </section>

      {/* Main body content sections */}
      <div className="space-y-20 md:space-y-28 mt-20 md:mt-28">
        {/* ================================================== */}
        {/* 3. ABOUT SECTION */}
        {/* ================================================== */}
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-[#FAF7EF] border border-[#D2E8F0] rounded-3xl p-8 md:p-14 shadow-xs">
            <div className="max-w-4xl space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#2B5B97] uppercase">
                ABOUT OUR SAMITI
              </span>

              <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1C2326] leading-tight">
                {siteContent.about.headingEn}
              </h2>

              <p className="text-base md:text-lg text-[#394D52] leading-relaxed font-sans">
                {isHindi ? siteContent.about.introHi : siteContent.about.introEn}
              </p>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-bold text-white bg-[#1C2326] hover:bg-[#2B5B97] rounded-xl transition-all shadow"
                >
                  <span>{isHindi ? 'हमारे बारे में और जानें' : 'Read More About Us'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
