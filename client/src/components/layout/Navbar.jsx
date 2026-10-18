import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Globe, LogIn } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
  const { isHindi, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({ activity: false, 'governing-body': false });
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    {
      type: 'link',
      path: '/',
      labelEn: 'HOME',
      labelHi: 'मुख्य',
    },
    {
      type: 'link',
      path: '/about',
      labelEn: 'ABOUT',
      labelHi: 'परिचय',
    },
    {
      type: 'dropdown',
      id: 'activity',
      labelEn: 'ACTIVITY',
      labelHi: 'गतिविधियां',
      children: [
        { path: '/healthcare', labelEn: 'Medical Camp', labelHi: 'चिकित्सा शिविर' },
        { path: '/education',  labelEn: 'Education',    labelHi: 'शिक्षा' },
        { path: '/events',     labelEn: 'Social Drives', labelHi: 'सामाजिक अभियान' },
        { path: '/culture',    labelEn: 'Cultural Events', labelHi: 'सांस्कृतिक उत्सव' },
      ],
    },
    {
      type: 'dropdown',
      id: 'governing-body',
      labelEn: 'GOVERNING BODY',
      labelHi: 'प्रबंधकारिणी',
      children: [
        { path: '/governing-body/present', labelEn: 'Present', labelHi: 'वर्तमान कार्यकारिणी' },
        { path: '/governing-body/past',    labelEn: 'Past',    labelHi: 'पूर्व / संस्थापक सदस्य' },
      ],
    },
    {
      type: 'link',
      path: '/gallery',
      labelEn: 'GALLERY',
      labelHi: 'गैलरी',
    },
    {
      type: 'link',
      path: '/get-involved',
      labelEn: 'GET INVOLVED',
      labelHi: 'जुड़ें',
    },
    {
      type: 'link',
      path: '/contact',
      labelEn: 'CONTACT',
      labelHi: 'संपर्क',
    },
  ];

  const toggleMobileExpanded = (id) => {
    setMobileExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <header
      ref={navRef}
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
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          <nav className="flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => {
              if (item.type === 'dropdown') {
                const isChildActive = item.children.some(c => location.pathname.startsWith(c.path));
                const isOpen = activeDropdown === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => setActiveDropdown(prev => prev === item.id ? null : item.id)}
                      className={`inline-flex items-center gap-1 text-[11px] xl:text-xs font-bold font-mono tracking-widest transition-colors py-1 relative ${
                        isChildActive || isOpen
                          ? 'text-[#BE9A5B] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#BE9A5B]'
                          : 'text-[#D2E8F0]/75 hover:text-white'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      <span>{isHindi ? item.labelHi : item.labelEn}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#BE9A5B]' : 'text-[#89A49C]'
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="w-56 bg-[#173333] border border-[#2A5252] rounded-xl shadow-2xl py-2 backdrop-blur-md">
                          {item.children.map((sub) => {
                            const isSubActive = location.pathname === sub.path;
                            return (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                onClick={() => setActiveDropdown(null)}
                                className={`flex items-center justify-between px-4 py-2.5 text-xs font-mono font-bold tracking-wider transition-colors ${
                                  isSubActive
                                    ? 'text-[#BE9A5B] bg-[#2A5252]/60'
                                    : 'text-[#D2E8F0]/85 hover:text-white hover:bg-[#2A5252]/40'
                                }`}
                              >
                                <span>{isHindi ? sub.labelHi : sub.labelEn}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#89A49C] opacity-70" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[11px] xl:text-xs font-bold font-mono tracking-widest transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#BE9A5B] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#BE9A5B]'
                      : 'text-[#D2E8F0]/75 hover:text-white'
                  }`}
                >
                  {isHindi ? item.labelHi : item.labelEn}
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
        <div className="lg:hidden bg-[#1C3A3A] border-t border-[#2A5252]/40 px-4 py-4 space-y-1 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          {navItems.map((item) => {
            if (item.type === 'dropdown') {
              const isExpanded = mobileExpanded[item.id];
              const isChildActive = item.children.some(c => location.pathname.startsWith(c.path));

              return (
                <div key={item.id} className="space-y-1">
                  <button
                    onClick={() => toggleMobileExpanded(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-xs font-bold font-mono tracking-wider rounded-lg transition-colors ${
                      isChildActive
                        ? 'text-[#BE9A5B] bg-[#2A5252]/50'
                        : 'text-[#D2E8F0]/75 hover:bg-[#2A5252]/30 hover:text-white'
                    }`}
                  >
                    <span>{isHindi ? item.labelHi : item.labelEn}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#BE9A5B]' : 'text-[#89A49C]'
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-[#BE9A5B]/30 ml-4">
                      {item.children.map((sub) => {
                        const isSubActive = location.pathname === sub.path;
                        return (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center justify-between px-3 py-2 text-xs font-mono font-bold tracking-wider rounded-md transition-colors ${
                              isSubActive
                                ? 'text-[#BE9A5B] bg-[#2A5252]/60'
                                : 'text-[#D2E8F0]/75 hover:bg-[#2A5252]/30 hover:text-white'
                            }`}
                          >
                            <span>{isHindi ? sub.labelHi : sub.labelEn}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#89A49C]" />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 text-xs font-bold font-mono tracking-wider rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#BE9A5B] bg-[#2A5252]/50'
                    : 'text-[#D2E8F0]/75 hover:bg-[#2A5252]/30 hover:text-white'
                }`}
              >
                <span>{isHindi ? item.labelHi : item.labelEn}</span>
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
