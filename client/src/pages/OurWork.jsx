import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, GraduationCap, Leaf, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';

export const OurWork = () => {
  const { isHindi } = useLanguage();

  const works = [
    {
      titleEn: "Free Healthcare & Medical Camps",
      titleHi: "निःशुल्क चिकित्सा एवं स्वास्थ्य शिविर",
      descEn: "Organizing free medical checkups, doctor consultations, eye tests, and medicine distribution for underprivileged community members.",
      descHi: "जरूरतमंद सामुदायिक सदस्यों के लिए मुफ्त स्वास्थ्य परामर्श, आंख जांच और मुफ्त दवा वितरण अभियानों का संचालन।",
      icon: <Heart className="w-5 h-5 text-[#8C2635]" />,
      tag: "[HEALTHCARE WORK PLACEHOLDER]",
      link: "/healthcare"
    },
    {
      titleEn: "Educational Infrastructure & Awareness",
      titleHi: "शिक्षा अवसंरचना एवं जागरूकता",
      descEn: "Supporting classroom learning tools, distributing educational materials, and guiding youth towards academic and career advancement.",
      descHi: "कक्षा शिक्षण सामग्री का समर्थन, अध्ययन सामग्री वितरण और युवाओं को करियर मेंटरशिप।",
      icon: <GraduationCap className="w-5 h-5 text-[#126A73]" />,
      tag: "[EDUCATION WORK PLACEHOLDER]",
      link: "/education"
    },
    {
      titleEn: "Cleanliness & Environmental Drives",
      titleHi: "स्वच्छता एवं पर्यावरण संरक्षण अभियान",
      descEn: "Community cleanliness campaigns and tree planting drives encouraging hygiene and environmental sustainability.",
      descHi: "स्वच्छता और पौधरोपण अभियान जो पर्यावरण संतुलन और सामुदायिक स्वास्थ्य को बढ़ावा देते हैं।",
      icon: <Leaf className="w-5 h-5 text-[#173F3A]" />,
      tag: "[ENVIRONMENT WORK PLACEHOLDER]",
      link: "/events"
    },
    {
      titleEn: "Cultural Preservation & Festivals",
      titleHi: "सांस्कृतिक संरक्षण एवं उत्सव",
      descEn: "Organizing Pahari cultural meets, traditional folk music/dance showcases, and preserving local heritage.",
      descHi: "पहाड़ी सांस्कृतिक सम्मेलनों, लोक संगीत/नृत्य प्रदर्शनों का आयोजन और विरासत संरक्षण।",
      icon: <Sparkles className="w-5 h-5 text-[#D5A33A]" />,
      tag: "[CULTURE WORK PLACEHOLDER]",
      link: "/culture"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      <SectionHeading
        badge="SOCIAL IMPACT"
        badgeHindi="सामाजिक कार्य एवं प्रभाव"
        title="Our Work in the Community"
        titleHindi="समुदाय में हमारा समाज कल्याण कार्य"
        subtitle="Documented welfare initiatives covering healthcare, education, environmental cleanliness, and cultural unity."
        subtitleHindi="स्वास्थ्य सेवा, शिक्षा, स्वच्छता और सांस्कृतिक एकजुटता से जुड़ी संस्थागत गतिविधियां।"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map((w, idx) => (
          <div key={idx} className="bg-white border border-[#DDD8CA] rounded-2xl overflow-hidden card-editorial flex flex-col justify-between">
            <div>
              <ImagePlaceholder
                tag={w.tag}
                title={w.titleEn}
                titleHindi={w.titleHi}
                category="Social Impact Work"
                aspectRatio="aspect-video"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[#F7F3E8] border border-[#DDD8CA]">{w.icon}</div>
                  <h3 className={`h3-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
                    {isHindi ? w.titleHi : w.titleEn}
                  </h3>
                </div>
                <p className="text-xs text-[#66706D] leading-relaxed">
                  {isHindi ? w.descHi : w.descEn}
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                to={w.link}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#126A73] hover:text-[#173F3A]"
              >
                <span>{isHindi ? 'विस्तार से देखें' : 'Learn More'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
