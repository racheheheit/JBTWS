import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Globe, LogIn } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
  const { isHindi, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = isHindi
    ? [
        { path: '/',            label: 'मुख्य' },
        { path: '/about',       label: 'परिचय' },
        { path: '/culture',     label: 'धरोहर' },
        { path: '/our-work',    label: 'पहल' },
        { path: '/gallery',     label: 'गैलरी' },
        { path: '/get-involved',label: 'जुड़ें' },
        { path: '/contact',     label: 'संपर्क' },
      ]
    : [
        { path: '/',            label: 'HOME' },
        { path: '/about',       label: 'ABOUT' },
        { path: '/culture',     label: 'HERITAGE' },
        { path: '/our-work',    label: 'INITIATIVES' },
        { path: '/gallery',     label: 'GALLERY' },
        { path: '/get-involved',label: 'GET INVOLVED' },
        { path: '/contact',     label: 'CONTACT' },
      ];

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1C3A3A]/97 backdrop-blur-md border-b border-[#2A5252]/50 shadow-lg py-2'
          : 'bg-[#1C3A3A] border-b border-[#2A5252]/40 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* ── Left: Logo + Brand ── */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="/assets/jbtws_logo.png"
            alt="JBTWS Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base sm:text-lg font-serif font-bold text-white tracking-tight group-hover:text-[#BE9A5B] transition-colors">
              {isHindi ? 'जेबीटीडब्ल्यूएस दिल्ली' : 'JBTWS DELHI'}
            </span>
            <span className="text-[10px] font-sans text-[#89A49C] tracking-wide">
              {isHindi ? 'जौनसार बावर जनजातीय कल्याण समिति' : 'Jaunsar Bawar Tribal Welfare Society'}
            </span>
          </div>
        </Link>

        {/* ── Centre / Right: Desktop Nav ── */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <nav className="flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] xl:text-xs font-bold font-mono tracking-widest transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#BE9A5B] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#BE9A5B]'
                      : 'text-[#D2E8F0]/75 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="h-4 w-px bg-[#89A49C]/30" />

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold font-mono text-white bg-[#2A5252]/60 hover:bg-[#2A5252] border border-[#89A49C]/25 transition-all"
            title="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#BE9A5B]" />
            <span className="text-white">EN</span>
            <span className="text-[#89A49C]">|</span>
            <span className="text-[#89A49C]">हिंदी</span>
          </button>

          <div className="h-4 w-px bg-[#89A49C]/30" />

          {/* Login Button */}
          <button
            onClick={() => {/* login logic coming soon */}}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-bold font-mono tracking-wider text-[#1C3A3A] bg-[#BE9A5B] hover:bg-[#d4ae6d] transition-all shadow-sm"
            title="Login (coming soon)"
          >
            <LogIn className="w-3.5 h-3.5" />
            {isHindi ? 'लॉगिन' : 'LOGIN'}
          </button>
        </div>

        {/* ── Mobile Controls ── */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 text-[11px] font-bold font-mono text-white bg-[#2A5252] rounded-md border border-[#89A49C]/25"
          >
            {isHindi ? 'EN' : 'हिंदी'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-[#BE9A5B] border border-[#2A5252] rounded-lg bg-[#2A5252]/50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1C3A3A] border-t border-[#2A5252]/40 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between px-4 py-3 text-xs font-bold font-mono tracking-wider rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#BE9A5B] bg-[#2A5252]/50'
                    : 'text-[#D2E8F0]/75 hover:bg-[#2A5252]/30 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#89A49C]" />
              </Link>
            );
          })}

          {/* Login — mobile */}
          <div className="pt-2 border-t border-[#2A5252]/40">
            <button
              onClick={() => {/* login logic coming soon */}}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold font-mono tracking-wider text-[#1C3A3A] bg-[#BE9A5B] hover:bg-[#d4ae6d] transition-all"
            >
              <LogIn className="w-4 h-4" />
              {isHindi ? 'लॉगिन' : 'LOGIN'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
