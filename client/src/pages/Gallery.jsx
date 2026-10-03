import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { LightboxModal } from '../components/common/LightboxModal';
import { api } from '../services/api';

export const Gallery = () => {
  const { isHindi } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      setLoading(true);
      const res = await api.getGallery();
      if (res.success && res.data) {
        setGalleryItems(res.data);
      }
      setLoading(false);
    };
    fetchGallery();
  }, []);

  const categories = ['ALL', 'CULTURE', 'TEMPLES', 'FESTIVALS', 'HEALTHCARE', 'EDUCATION', 'COMMUNITY', 'PEOPLE'];

  const filteredItems = activeCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const currentSelectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      <SectionHeading
        badge="PHOTO ARCHIVE"
        badgeHindi="फोटो संग्रह"
        title="Jaunsar-Bawar Visual Gallery"
        titleHindi="जौनसार-बावर फोटो एवं दस्तावेज़ गैलरी"
        subtitle="Documented photographs of traditional temples, folk heritage, medical camps, classroom support, and community gatherings."
        subtitleHindi="मंदिरों, लोक नृत्यों, स्वास्थ्य शिविरों, कक्षाओं और सामुदायिक आयोजनों का सचित्र संग्रह।"
      />

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all ${
              activeCategory === cat
                ? 'bg-[#173F3A] text-[#D5A33A] border-[#D5A33A]/40 shadow'
                : 'bg-white text-[#66706D] border-[#DDD8CA] hover:bg-[#F7F3E8]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Grid */}
      {loading ? (
        <div className="text-center py-12 text-xs text-[#66706D]">Loading gallery...</div>
      ) : filteredItems.length === 0 ? (
        <div className="text-center py-12 text-xs text-[#66706D]">
          {isHindi ? 'इस श्रेणी में कोई चित्र उपलब्ध नहीं है।' : 'No gallery items available in this category yet.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <ImagePlaceholder
              key={item._id || idx}
              tag={`[GALLERY: ${item.category}]`}
              title={item.title}
              titleHindi={item.titleHindi}
              category={item.category}
              aspectRatio="aspect-[4/3]"
              showViewBtn={true}
              onClick={() => setSelectedIndex(idx)}
            />
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        item={currentSelectedItem}
        onNext={selectedIndex < filteredItems.length - 1 ? handleNext : null}
        onPrev={selectedIndex > 0 ? handlePrev : null}
      />
    </div>
  );
};
