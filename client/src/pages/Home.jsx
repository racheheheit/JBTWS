import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Send, Camera, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/contentData';
import { imagePlaceholders } from '../data/images';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { LightboxModal } from '../components/common/LightboxModal';

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
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryCategory, setGalleryCategory] = useState("All");

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

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const filteredGallery = galleryCategory === "All"
    ? imagePlaceholders.gallery
    : imagePlaceholders.gallery.filter(item => item.category === galleryCategory);

  return (
    <div className="bg-[#FAF7EF] pb-16">
      {/* ================================================== */}
      {/* 1. HERO SECTION                                    */}
      {/* ================================================== */}
      <section id="hero" className="relative w-full bg-[#E2F1F8] overflow-hidden pt-8 sm:pt-12 md:pt-14 pb-0 border-b border-[#D2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">

          {/* Big Title — "JBTWS DELHI" */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#1C2326] leading-tight mb-2 select-none">
            {isHindi ? siteContent.org.titleHi : siteContent.org.titleEn}
          </h1>

          {/* Blue italic subtitle */}
          <p className="text-sm sm:text-base md:text-lg font-serif italic font-semibold text-[#2B5B97] mb-3">
            {isHindi ? siteContent.org.nameHi : siteContent.org.nameEn}
          </p>

          {/* Two-line tagline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-normal text-[#1C2326] tracking-tight leading-snug max-w-3xl mx-auto mb-2">
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
        <div className="w-full relative z-0 mt-2 sm:mt-4 max-w-5xl mx-auto px-4 flex justify-center">
          <img
            src="/assets/hero_art_transparent.png"
            alt="Jaunsar-Bawar Heritage Architecture Scene"
            className="w-full max-h-[360px] md:max-h-[440px] lg:max-h-[480px] object-contain block mx-auto -mb-1"
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
        <div className="bg-[#FAF7EF] border border-[#D2E8F0] rounded-3xl p-8 md:p-14 shadow-xs space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#2B5B97] uppercase">
              ABOUT OUR SAMITI
            </span>

            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1C2326] leading-tight">
              {siteContent.about.headingEn}
            </h2>

            <p className="text-base md:text-lg text-[#394D52] leading-relaxed font-sans">
              {isHindi ? siteContent.about.introHi : siteContent.about.introEn}
            </p>
          </div>

          {/* 4 Elegant Cards with Subtle Hover Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.about.cards.map((card) => (
              <div
                key={card.id}
                className="bg-[#FAF7EF] border border-[#D2E8F0] hover:border-[#89A49C] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-[#BE9A5B] block">
                    {card.num}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1C2326] group-hover:text-[#2B5B97] transition-colors">
                    {isHindi ? card.titleHi : card.titleEn}
                  </h3>
                  <p className="text-xs text-[#394D52] leading-relaxed">
                    {isHindi ? card.descHi : card.descEn}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#D2E8F0]/60 flex items-center gap-1 text-[11px] font-mono font-bold text-[#49605C] group-hover:text-[#2B5B97]">
                  <span>{isHindi ? 'विवरण' : 'EXPLORE'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. HERITAGE SECTION */}
      {/* ================================================== */}
      <section id="heritage" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#BE9A5B] uppercase">
              CULTURAL VISUAL LANGUAGE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1C2326]">
              {siteContent.heritage.headingEn}
            </h2>
            <p className="text-sm md:text-base text-[#394D52]">
              {isHindi ? siteContent.heritage.subheadingHi : siteContent.heritage.subheadingEn}
            </p>
          </div>

          {/* 4 Editorial Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.heritage.cards.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#D2E8F0] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="p-4 bg-[#E2F1F8]/40">
                  <ImagePlaceholder
                    tag={item.tag}
                    title={item.titleEn}
                    titleHindi={item.titleHi}
                    category="Heritage Visual"
                    aspectRatio="aspect-[4/3]"
                    className="rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-mono font-bold text-[#BE9A5B] uppercase">
                    {item.id}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1C2326] group-hover:text-[#2B5B97] transition-colors">
                    {isHindi ? item.titleHi : item.titleEn}
                  </h3>
                  <p className="text-xs text-[#394D52] leading-relaxed">
                    {isHindi ? item.descHi : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. INITIATIVES SECTION */}
      {/* ================================================== */}
      <section id="initiatives" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#E2F1F8]/60 border border-[#D2E8F0] rounded-3xl p-8 md:p-14 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#2B5B97] uppercase">
              COMMUNITY PROGRAMMES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1C2326]">
              {siteContent.initiatives.headingEn}
            </h2>
          </div>

          {/* 6 Initiatives 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.initiatives.list.map((init) => (
              <div
                key={init.num}
                className="bg-[#FAF7EF] border border-[#D2E8F0] hover:border-[#2B5B97] rounded-2xl p-6 transition-all duration-300 hover:shadow-md space-y-3"
              >
                <span className="text-xs font-mono font-bold text-[#BE9A5B]">
                  INITIATIVE {init.num}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1C2326]">
                  {isHindi ? init.titleHi : init.titleEn}
                </h3>
                <p className="text-xs text-[#394D52] leading-relaxed">
                  {isHindi ? init.descHi : init.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. GALLERY SECTION */}
      {/* ================================================== */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#BE9A5B] uppercase">
                CULTURAL ARCHIVE
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1C2326]">
                {siteContent.gallery.headingEn}
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {siteContent.gallery.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-full border transition-all ${
                    galleryCategory === cat
                      ? 'bg-[#1C2326] text-white border-[#1C2326]'
                      : 'bg-white text-[#394D52] border-[#D2E8F0] hover:border-[#89A49C]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Editorial Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#1C2326] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <ImagePlaceholder
                  tag={item.tag}
                  title={item.title}
                  titleHindi={item.titleHindi}
                  category={item.category}
                  aspectRatio="aspect-[4/3]"
                  className="group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                />

                {/* Dark Overlay & Caption Reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2326]/90 via-[#1C2326]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono uppercase text-[#BE9A5B] tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-serif font-bold text-white leading-snug">
                    {isHindi ? item.titleHindi : item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 6. GET INVOLVED SECTION */}
      {/* ================================================== */}
      <section id="get-involved" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#1C2326] text-white rounded-3xl p-8 md:p-14 space-y-10 border border-[#394D52]">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#BE9A5B] uppercase">
              JOIN OUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-white">
              {siteContent.getInvolved.headingEn}
            </h2>
            <p className="text-sm md:text-base text-[#89A49C]">
              {isHindi ? siteContent.getInvolved.copyHi : siteContent.getInvolved.copyEn}
            </p>
          </div>

          {/* 4 Get Involved Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.getInvolved.sections.map((sec) => (
              <div
                key={sec.id}
                className="bg-[#394D52]/30 border border-[#394D52] hover:border-[#BE9A5B] rounded-2xl p-6 space-y-3 transition-colors"
              >
                <span className="text-xs font-mono font-bold text-[#BE9A5B]">
                  {sec.titleEn}
                </span>
                <h3 className="text-lg font-serif font-bold text-white">
                  {isHindi ? sec.titleHi : sec.titleEn}
                </h3>
                <p className="text-xs text-[#89A49C] leading-relaxed">
                  {isHindi ? sec.descHi : sec.descEn}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-mono font-bold text-[#1C2326] bg-[#BE9A5B] hover:bg-white rounded-xl shadow-lg transition-all"
            >
              <span>{isHindi ? siteContent.getInvolved.ctaHi : siteContent.getInvolved.ctaEn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7. CONTACT SECTION */}
      {/* ================================================== */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#FAF7EF] border border-[#D2E8F0] rounded-3xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#2B5B97] uppercase">
                REACH OUT
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1C2326]">
                {siteContent.contact.headingEn}
              </h2>
            </div>

            <div className="space-y-4 text-xs font-sans text-[#394D52]">
              <div>
                <span className="font-mono font-bold text-[#BE9A5B] block uppercase text-[11px] mb-1">
                  Visit / Write
                </span>
                <p className="text-sm font-medium text-[#1C2326]">
                  {siteContent.contact.visitAddress}
                </p>
              </div>

              <div>
                <span className="font-mono font-bold text-[#BE9A5B] block uppercase text-[11px] mb-1">
                  Call / Connect
                </span>
                <p className="text-sm font-medium text-[#1C2326]">
                  {siteContent.contact.phone}
                </p>
              </div>

              <div>
                <span className="font-mono font-bold text-[#BE9A5B] block uppercase text-[11px] mb-1">
                  Email
                </span>
                <p className="text-sm font-medium text-[#1C2326]">
                  {siteContent.contact.email}
                </p>
              </div>
            </div>
          </div>

          {/* Right Modern Enquiry Form */}
          <div className="lg:col-span-7 bg-[#E2F1F8]/50 border border-[#D2E8F0] rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-serif font-bold text-[#1C2326] mb-4">
              {isHindi ? 'पूछताछ भेजें' : 'Send an Enquiry'}
            </h3>

            {formSubmitted ? (
              <div className="p-4 bg-[#89A49C]/20 border border-[#89A49C] text-[#1C2326] rounded-xl text-xs font-mono">
                ✓ Thank you for reaching out! Your message has been sent successfully.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#394D52] uppercase mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-2.5 text-xs bg-white border border-[#D2E8F0] rounded-lg focus:outline-none focus:border-[#2B5B97]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#394D52] uppercase mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@example.com"
                    className="w-full px-4 py-2.5 text-xs bg-white border border-[#D2E8F0] rounded-lg focus:outline-none focus:border-[#2B5B97]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#394D52] uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How would you like to connect or collaborate?"
                    className="w-full px-4 py-2.5 text-xs bg-white border border-[#D2E8F0] rounded-lg focus:outline-none focus:border-[#2B5B97]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-bold text-white bg-[#1C2326] hover:bg-[#2B5B97] rounded-lg transition-colors shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND ENQUIRY</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <LightboxModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};
