import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/contentData';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { LightboxModal } from '../components/common/LightboxModal';

export const Culture = () => {
  const { isHindi } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      <SectionHeading
        badge="CULTURE & HERITAGE"
        badgeHindi="सांस्कृतिक धरोहर"
        title="Culture of Jaunsar-Bawar"
        titleHindi="जौनसार-बावर की पावन सांस्कृतिक परंपरा"
        subtitle="A sacred Himalayan cultural lineage defined by ancient wooden temples, rhythmic folk dances, customary dress, seasonal festivals, and deep community unity."
        subtitleHindi="काष्ठ वास्तुकला, लोक नृत्यों, पारंपरिक वेशभूषा, त्योहारों और सामुदायिक सद्भाव से समृद्ध हिमालयी धरोहर।"
      />

      {/* 8 Cultural Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteContent.culturalCategories.map((cat, idx) => (
          <div
            key={cat.id || idx}
            className="bg-white border border-[#DDD8CA] rounded-2xl overflow-hidden card-editorial flex flex-col justify-between"
          >
            <div>
              <ImagePlaceholder
                tag={`[CULTURAL CATEGORY 0${idx + 1} PLACEHOLDER]`}
                title={cat.titleEn}
                titleHindi={cat.titleHi}
                category={`Section 0${idx + 1}`}
                aspectRatio="aspect-[16/10]"
                showViewBtn={true}
                onClick={() => setSelectedPillar({
                  title: cat.titleEn,
                  titleHindi: cat.titleHi,
                  category: `Section 0${idx + 1} — Cultural Pillar`,
                  tag: `[CULTURAL CATEGORY 0${idx + 1} PLACEHOLDER]`,
                  description: cat.descEn,
                  descriptionHindi: cat.descHi,
                  location: "Jaunsar-Bawar Region, Uttarakhand"
                })}
              />

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-display-en font-bold text-[#8C2635]">
                    0{idx + 1}
                  </span>
                  <h3 className={`h3-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
                    {isHindi ? cat.titleHi : cat.titleEn}
                  </h3>
                </div>

                <p className="text-xs text-[#66706D] leading-relaxed">
                  {isHindi ? cat.descHi : cat.descEn}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedPillar({
                  title: cat.titleEn,
                  titleHindi: cat.titleHi,
                  category: `Section 0${idx + 1} — Cultural Pillar`,
                  tag: `[CULTURAL CATEGORY 0${idx + 1} PLACEHOLDER]`,
                  description: cat.descEn,
                  descriptionHindi: cat.descHi,
                  location: "Jaunsar-Bawar Region, Uttarakhand"
                })}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#126A73] hover:text-[#173F3A]"
              >
                <Eye className="w-3.5 h-3.5 text-[#D5A33A]" />
                <span>{isHindi ? 'विवरण एवं फोटो संग्रह देखें' : 'View Section Archive'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <LightboxModal
        isOpen={!!selectedPillar}
        onClose={() => setSelectedPillar(null)}
        item={selectedPillar}
      />
    </div>
  );
};
