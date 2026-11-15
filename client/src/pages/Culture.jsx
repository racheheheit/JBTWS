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

  const danceHighlights = [
    {
      image: "/assets/cultural_dance_1.jpg",
      titleEn: "Harul — The Circle Dance of Jaunsar",
      titleHi: "हारुल — जौनसार का पारंपरिक वृत्त नृत्य",
      descEn: "Women in vibrant traditional attire perform the iconic Harul folk dance in a united circle — a living symbol of Jaunsari community spirit and celebration.",
      descHi: "रंग-बिरंगी पारंपरिक पोशाक में महिलाएं एकजुट होकर हारुल लोक नृत्य करती हैं — जौनसारी समुदाय की एकता और उत्सव का जीवंत प्रतीक।",
      tag: "Women's Folk Dance"
    },
    {
      image: "/assets/cultural_dance_2.jpg",
      titleEn: "Men's Traditional Folk Performance",
      titleHi: "पुरुषों का पारंपरिक लोक प्रदर्शन",
      descEn: "Men adorned in white traditional Jaunsari robes perform rhythmic folk dance — a centuries-old practice that keeps ancestral heritage alive across generations.",
      descHi: "श्वेत पारंपरिक जौनसारी वस्त्र पहने पुरुष ताल-बद्ध लोक नृत्य करते हैं — एक सदियों पुरानी परंपरा जो पीढ़ी-दर-पीढ़ी विरासत को जीवित रखती है।",
      tag: "Men's Folk Dance"
    }
  ];

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

      {/* Featured Folk Dance Showcase */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#8C2635] bg-[#F7F3E8] border border-[#DDD8CA] rounded-full">
            {isHindi ? 'सांस्कृतिक कार्यक्रम' : 'Cultural Events'}
          </span>
          <h2 className={`h2-title text-[#173F3A] mt-4 ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
            {isHindi ? 'जौनसारी लोक नृत्य परंपरा' : 'Jaunsari Folk Dance Heritage'}
          </h2>
          <p className="text-sm text-[#66706D] leading-relaxed mt-2">
            {isHindi
              ? 'हारुल और पारंपरिक लोक नृत्य जौनसार-बावर की सांस्कृतिक पहचान के अभिन्न अंग हैं।'
              : 'Harul and traditional folk performances are the soul of Jaunsar-Bawar\'s living cultural identity.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {danceHighlights.map((dance, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPillar({
                title: dance.titleEn,
                titleHindi: dance.titleHi,
                category: "Cultural Events — Folk Dance",
                image: dance.image,
                description: dance.descEn,
                descriptionHindi: dance.descHi,
                location: "Jaunsar-Bawar Cultural Festival"
              })}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#DDD8CA] shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] bg-black/10"
            >
              <img
                src={dance.image}
                alt={dance.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F3A]/90 via-[#173F3A]/20 to-transparent flex items-end p-5">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#D5A33A] bg-[#173F3A]/70 px-2.5 py-0.5 rounded-md border border-[#D5A33A]/30 w-fit">
                    {dance.tag}
                  </div>
                  <h3 className={`text-sm font-semibold text-[#F7F3E8] leading-snug ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
                    {isHindi ? dance.titleHi : dance.titleEn}
                  </h3>
                  <p className="text-xs text-[#DDD8CA] leading-relaxed line-clamp-2">
                    {isHindi ? dance.descHi : dance.descEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
