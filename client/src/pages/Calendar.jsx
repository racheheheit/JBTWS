import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/contentData';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { LightboxModal } from '../components/common/LightboxModal';
import { api } from '../services/api';

export const CalendarPage = () => {
  const { isHindi } = useLanguage();
  const [calendarData, setCalendarData] = useState(null);
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const fetchCal = async () => {
      const res = await api.getCalendar('2023');
      if (res.success && res.data) {
        setCalendarData(res.data);
      }
    };
    fetchCal();
  }, []);

  const months = calendarData?.months || siteContent.calendar2023;
  const currentMonth = months[activeMonthIndex] || months[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      <SectionHeading
        badge="CULTURAL ARCHIVE"
        badgeHindi="सांस्कृतिक अभिलेखागार"
        title="2023 Cultural Calendar Archive"
        titleHindi="2023 सांस्कृतिक डिजिटल कैलेंडर"
        subtitle="Digital archival preservation of the official 2023 organizational calendar featuring monthly cultural themes, temple heritage, and social work."
        subtitleHindi="समिति के 2023 कैलेंडर का डिजिटल संग्रह - माह-दर-माह सांस्कृतिक थीम और गतिविधियों का अवलोकन करें।"
      />

      {/* Top Banner */}
      <div className="bg-[#173F3A] text-[#F7F3E8] rounded-2xl p-6 border border-[#DDD8CA]/30 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#126A73]/40 border border-[#D5A33A]/30 text-[#D5A33A]">
            <CalendarIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className={`text-lg font-bold text-[#D5A33A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
              2023 Official Organizational Calendar PDF
            </h3>
            <p className="text-xs text-[#DDD8CA]">
              {isHindi ? 'मूल कैलेंडर दस्तावेज़ देखें एवं डाउनलोड करें' : 'View or download the original printed calendar document.'}
            </p>
          </div>
        </div>

        <a
          href="/documents/2023_Jaunsar_Bawar_Calendar.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#126A73] hover:bg-[#126A73]/90 rounded-xl transition-all shrink-0 shadow"
        >
          <FileText className="w-4 h-4" />
          <span>{isHindi ? 'मूल PDF दस्तावेज़ खोलें' : 'View Full Calendar PDF'}</span>
        </a>
      </div>

      {/* Month Navigator Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {months.map((m, idx) => (
          <button
            key={idx}
            onClick={() => setActiveMonthIndex(idx)}
            className={`p-3 rounded-xl border text-center transition-all ${
              activeMonthIndex === idx
                ? 'bg-[#173F3A] text-[#D5A33A] border-[#D5A33A]/50 shadow font-bold'
                : 'bg-white text-[#202625] border-[#DDD8CA] hover:bg-[#F7F3E8]'
            }`}
          >
            <span className="text-xs block mb-0.5">{m.monthName || m.month}</span>
            <span className="text-[11px] text-[#66706D] block line-clamp-1">
              {isHindi ? m.monthNameHindi || m.titleHi : m.titleEn}
            </span>
          </button>
        ))}
      </div>

      {/* Active Month Feature Showcase */}
      <div className="bg-white border border-[#DDD8CA] rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#126A73] bg-[#F7F3E8] border border-[#DDD8CA] rounded-full">
              {currentMonth.monthName || currentMonth.month}
            </span>
          </div>

          <h2 className={`h2-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
            {isHindi ? currentMonth.themeHindi || currentMonth.titleHi : currentMonth.theme || currentMonth.titleEn}
          </h2>

          <p className="text-[#202625] text-base leading-relaxed">
            {isHindi ? currentMonth.descriptionHindi || currentMonth.titleHi : currentMonth.description || currentMonth.titleEn}
          </p>

          <div className="pt-4 flex items-center gap-3">
            <button
              disabled={activeMonthIndex === 0}
              onClick={() => setActiveMonthIndex(prev => Math.max(0, prev - 1))}
              className="p-2 text-[#202625] hover:text-[#126A73] bg-[#F7F3E8] border border-[#DDD8CA] disabled:opacity-40 rounded-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono font-semibold text-[#66706D]">
              Month {activeMonthIndex + 1} of {months.length}
            </span>
            <button
              disabled={activeMonthIndex === months.length - 1}
              onClick={() => setActiveMonthIndex(prev => Math.min(months.length - 1, prev + 1))}
              className="p-2 text-[#202625] hover:text-[#126A73] bg-[#F7F3E8] border border-[#DDD8CA] disabled:opacity-40 rounded-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ImagePlaceholder
            tag={`[2023 CALENDAR: ${currentMonth.monthName || currentMonth.month}]`}
            title={currentMonth.theme || currentMonth.titleEn}
            titleHindi={currentMonth.themeHindi || currentMonth.titleHi}
            category="Calendar Month Page"
            aspectRatio="aspect-[4/3]"
            showViewBtn={true}
            onClick={() => setLightboxOpen(true)}
          />
        </div>
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        item={{
          title: `2023 Calendar — ${currentMonth.monthName || currentMonth.month}`,
          titleHindi: `2023 कैलेंडर — ${currentMonth.monthNameHindi || currentMonth.month}`,
          category: "2023 Digital Calendar Archive",
          tag: `[2023 CALENDAR: ${currentMonth.monthName || currentMonth.month}]`,
          description: currentMonth.description || currentMonth.titleEn,
          descriptionHindi: currentMonth.descriptionHindi || currentMonth.titleHi,
          location: "Jaunsar-Bawar / Delhi"
        }}
      />
    </div>
  );
};
