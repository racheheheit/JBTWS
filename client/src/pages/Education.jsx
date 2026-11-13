import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { LightboxModal } from '../components/common/LightboxModal';

export const Education = () => {
  const { isHindi } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const eduPillars = [
    {
      titleEn: "Education Awareness Drives",
      titleHi: "शिक्षा जागरूकता अभियान",
      descEn: "Encouraging higher education and academic awareness among community youth.",
      descHi: "युवाओं के बीच उच्च शिक्षा और शैक्षणिक जागरूकता को प्रोत्साहित करना।",
      icon: <GraduationCap className="w-5 h-5 text-[#126A73]" />
    },
    {
      titleEn: "Classroom Infrastructure Support",
      titleHi: "कक्षा अवसंरचना सहयोग",
      descEn: "Supporting classroom learning environments and supplying educational study tools.",
      descHi: "कक्षा शिक्षण परिवेश में सुधार और अध्ययन सामग्री का सहयोग।",
      icon: <BookOpen className="w-5 h-5 text-[#D5A33A]" />
    },
    {
      titleEn: "Student Mentorship & Guidance",
      titleHi: "छात्र मार्गदर्शन एवं मेंटरशिप",
      descEn: "Providing mentoring and career advice to students entering competitive academic fields.",
      descHi: "प्रतियोगी परीक्षाओं और उच्च शिक्षण संस्थानों में प्रवेश हेतु छात्रों को मार्गदर्शन।",
      icon: <Users className="w-5 h-5 text-[#173F3A]" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      <SectionHeading
        badge="EDUCATION & YOUTH"
        badgeHindi="शिक्षा एवं युवा कल्याण"
        title="Education & Awareness"
        titleHindi="शिक्षा जागरूकता एवं युवा सशक्तिकरण"
        subtitle="Supporting youth through classroom infrastructure, educational awareness, and mentorship opportunities."
        subtitleHindi="कक्षा अवसंरचना, शिक्षा जागरूकता और मेंटरशिप के माध्यम से युवाओं का समर्थन।"
      />

      {/* Classroom Showcase Feature */}
      <div className="bg-white border border-[#DDD8CA] rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#126A73] bg-[#F7F3E8] border border-[#DDD8CA] rounded-full">
            {isHindi ? 'सामुदायिक कक्षा पहल' : 'Community Classroom Drive'}
          </span>

          <h2 className={`h2-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
            {isHindi ? 'विद्यार्थियों के लिए शैक्षणिक समर्थन' : 'Educational Guidance & Infrastructure Support'}
          </h2>

          <p className="text-[#202625] text-base leading-relaxed">
            {isHindi
              ? "समिति का निरंतर प्रयास है कि दिल्ली और जौनसार-बावर क्षेत्र के बच्चों को बेहतर शिक्षण अवसर मिलें। इसके तहत शैक्षणिक सामग्री का वितरण और मेंटरशिप कार्यक्रम चलाए जाते हैं।"
              : "Jaunsar Bawar Janjatiya Kalyan Samiti, Delhi actively supports student education through awareness initiatives, classroom learning support, and mentoring programs designed for children and youth."}
          </p>

          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#202625]">
              <CheckCircle2 className="w-4 h-4 text-[#126A73] shrink-0" />
              <span>{isHindi ? 'अध्ययन सामग्री और सहायता वितरण' : 'Study materials & guidance distribution'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#202625]">
              <CheckCircle2 className="w-4 h-4 text-[#126A73] shrink-0" />
              <span>{isHindi ? 'युवाओं के लिए करियर और उच्च शिक्षा मेंटरशिप' : 'Career and higher education mentorship for youth'}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            onClick={() => setSelectedImage({
              title: "Community Classroom & Educational Setup",
              titleHindi: "सामुदायिक कक्षा एवं शैक्षणिक परिवेश",
              category: "Education Initiative",
              image: "/assets/education_classroom.jpg",
              description: "Classroom infrastructure and study environment established to support quality education and learning for community children.",
              location: "JBTWS Community Center"
            })}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#D5A33A]/40 shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] bg-black/10"
          >
            <img
              src="/assets/education_classroom.jpg"
              alt="Community Classroom by JBTWS"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173F3A]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-xs font-semibold text-[#F7F3E8] bg-[#126A73] px-3.5 py-1.5 rounded-lg border border-[#DDD8CA]/30 shadow">
                {isHindi ? 'बड़ा चित्र देखें' : 'Click to View Full Photo'}
              </span>
            </div>
            <div className="absolute top-3 left-3 bg-[#173F3A]/85 backdrop-blur-xs text-[#D5A33A] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md border border-[#D5A33A]/30">
              {isHindi ? 'शिक्षा शिविर' : 'Education Drive'}
            </div>
          </div>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eduPillars.map((p, idx) => (
          <div key={idx} className="bg-white border border-[#DDD8CA] rounded-2xl p-6 card-editorial space-y-3">
            <div className="p-2.5 rounded-lg bg-[#F7F3E8] border border-[#DDD8CA] w-fit">{p.icon}</div>
            <h4 className={`h3-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
              {isHindi ? p.titleHi : p.titleEn}
            </h4>
            <p className="text-xs text-[#66706D] leading-relaxed">
              {isHindi ? p.descHi : p.descEn}
            </p>
          </div>
        ))}
      </div>

      <LightboxModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        item={selectedImage}
      />
    </div>
  );
};
