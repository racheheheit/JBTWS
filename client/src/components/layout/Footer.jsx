import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { siteStatus } from '../../data/siteStatus';

export const Footer = () => {
  const { isHindi } = useLanguage();
  const statusInfo = siteStatus.labels[siteStatus.status] ?? siteStatus.labels.active;

  return (
    <footer className="w-full bg-[#1C2326] text-[#FAF7EF] pt-16 pb-12 border-t border-[#394D52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Brand & Emblem */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/jbtws_logo.png"
                alt="JBTWS Logo"
                className="w-14 h-14 object-contain rounded-full"
              />
              <div>
                <h3 className="text-2xl font-serif font-bold text-white tracking-tight leading-tight">
                  {isHindi ? 'जेबीटीडब्ल्यूएस दिल्ली' : 'JBTWS DELHI'}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#89A49C] uppercase tracking-wider">
                  {isHindi ? 'जौनसार बावर जनजातीय कल्याण समिति, दिल्ली' : 'Jaunsar Bawar Tribal Welfare Society, Delhi'}
                </p>
              </div>
            </div>


            <p className="text-xs text-[#89A49C] leading-relaxed max-w-sm font-sans">
              {isHindi
                ? 'जौनसार बावर जनजातीय कल्याण समिति दिल्ली में रहते हुए हमारी समृद्ध हिमालयी संस्कृति, परंपराओं, कला और सामुदायिक संबंधों के संरक्षण एवं समाज सेवा के लिए समर्पित संस्था।'
                : 'A dedicated community welfare organization preserving Himalayan cultural memory, traditions, wooden architecture, and social unity between Delhi and native Jaunsar-Bawar regions.'}
            </p>

            {/* Tagline Statement */}
            <div className="pt-2">
              <span className="text-xs font-serif italic text-[#BE9A5B] block">
                "Preserving Heritage • Empowering Communities"
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#BE9A5B] uppercase">
              {isHindi ? 'नेविगेशन' : 'NAVIGATION'}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono text-[#D2E8F0]">
              <li><Link to="/" className="hover:text-[#BE9A5B] transition-colors">HOME</Link></li>
              <li><Link to="/about" className="hover:text-[#BE9A5B] transition-colors">ABOUT</Link></li>
              <li><Link to="/culture" className="hover:text-[#BE9A5B] transition-colors">HERITAGE</Link></li>
              <li><Link to="/our-work" className="hover:text-[#BE9A5B] transition-colors">INITIATIVES</Link></li>
              <li><Link to="/gallery" className="hover:text-[#BE9A5B] transition-colors">GALLERY</Link></li>
              <li><Link to="/get-involved" className="hover:text-[#BE9A5B] transition-colors">GET INVOLVED</Link></li>
              <li><Link to="/contact" className="hover:text-[#BE9A5B] transition-colors">CONTACT</Link></li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#BE9A5B] uppercase">
              {isHindi ? 'जुड़ें' : 'CONNECT WITH US'}
            </h4>

            <div className="flex items-center gap-3 text-[#D2E8F0]">
              {/* Instagram */}
              <a
                href="https://instagram.com/jbjws_delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#394D52]/50 hover:bg-[#2B5B97] border border-[#394D52] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/jbjwsdelhi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#394D52]/50 hover:bg-[#2B5B97] border border-[#394D52] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@jbjws_delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#394D52]/50 hover:bg-[#8C2635] border border-[#394D52] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

            <p className="text-[11px] font-mono text-[#89A49C]">
              Email: info@jbjws.org
            </p>
          </div>
        </div>

        {/* Footer Pills & Copyright */}
        <div className="pt-8 border-t border-[#394D52]/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#89A49C]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#394D52]/40 border border-[#394D52] text-white">Delhi</span>
            <span className="text-[#394D52]">•</span>
            <span className="px-3 py-1 rounded-full bg-[#394D52]/40 border border-[#394D52] text-white">Jaunsar Bawar</span>
            <span className="text-[#394D52]">•</span>
            <span className="px-3 py-1 rounded-full bg-[#394D52]/40 border border-[#394D52] text-white">Community</span>
            <span className="text-[#394D52]">•</span>
            <span className="px-3 py-1 rounded-full bg-[#394D52]/40 border border-[#394D52] text-white">Culture</span>
          </div>

          {/* Status Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold tracking-wider border"
            style={{
              color: statusInfo.color,
              background: statusInfo.bg,
              borderColor: statusInfo.border,
            }}
          >
            {/* Pulsing dot */}
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ background: statusInfo.color }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ background: statusInfo.color }}
              />
            </span>
            {isHindi ? statusInfo.hi : statusInfo.en}
          </div>

          <p className="text-[11px] text-center md:text-right">
            © {new Date().getFullYear()} JBTWS — Jaunsar Bawar Tribal Welfare Society, Delhi.
          </p>
        </div>
      </div>
    </footer>
  );
};
