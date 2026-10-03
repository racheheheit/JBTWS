import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { api } from '../services/api';

export const Events = () => {
  const { isHindi } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventsData = async () => {
      setLoading(true);
      const res = await api.getEvents();
      if (res.success && res.data) {
        setEvents(res.data);
      }
      setLoading(false);
    };
    fetchEventsData();
  }, []);

  const categories = ['All', 'Healthcare', 'Education', 'Culture', 'Environment'];

  const filteredEvents = activeCategory === 'All'
    ? events
    : events.filter(e => e.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      <SectionHeading
        badge="ORGANIZATIONAL EVENTS"
        badgeHindi="कार्यक्रम एवं आयोजन"
        title="Community Events & Programs"
        titleHindi="सामुदायिक कार्यक्रम एवं गतिविधियां"
        subtitle="Explore documented health camps, cultural festivals, educational drives, and environmental programs."
        subtitleHindi="स्वास्थ्य शिविरों, सांस्कृतिक उत्सवों, शिक्षा अभियानों और पर्यावरण कार्यक्रमों की सूची।"
      />

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all ${
              activeCategory === cat
                ? 'bg-[#173F3A] text-[#D5A33A] border-[#D5A33A]/40 shadow'
                : 'bg-white text-[#66706D] border-[#DDD8CA] hover:bg-[#F7F3E8]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Event Cards Grid */}
      {loading ? (
        <div className="text-center py-12 text-xs text-[#66706D]">Loading events...</div>
      ) : filteredEvents.length === 0 ? (
        <div className="text-center py-12 text-xs text-[#66706D]">
          {isHindi ? 'इस श्रेणी में कोई कार्यक्रम उपलब्ध नहीं है।' : 'No events available in this category yet.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <div key={evt._id} className="bg-white border border-[#DDD8CA] rounded-2xl overflow-hidden card-editorial flex flex-col justify-between">
              <div>
                <ImagePlaceholder
                  tag={`[EVENT: ${evt.title.toUpperCase()}]`}
                  title={evt.title}
                  titleHindi={evt.titleHindi}
                  category={evt.category}
                  aspectRatio="aspect-video"
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-[10px] uppercase font-bold text-[#126A73] bg-[#F7F3E8] border border-[#DDD8CA] rounded-md">
                      {evt.category}
                    </span>
                    {evt.date && (
                      <span className="text-[11px] text-[#66706D] flex items-center gap-1 font-mono">
                        <CalendarIcon className="w-3 h-3 text-[#126A73]" />
                        {evt.date}
                      </span>
                    )}
                  </div>

                  <h3 className={`h3-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
                    {isHindi ? evt.titleHindi : evt.title}
                  </h3>

                  <p className="text-xs text-[#66706D] leading-relaxed line-clamp-3">
                    {isHindi ? evt.descriptionHindi : evt.description}
                  </p>

                  <div className="pt-2 text-xs text-[#66706D] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D5A33A] shrink-0" />
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
