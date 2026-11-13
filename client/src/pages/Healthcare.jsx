import React, { useState } from 'react';
import { Stethoscope, Pill, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/contentData';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { LightboxModal } from '../components/common/LightboxModal';

export const Healthcare = () => {
  const { isHindi } = useLanguage();
  const [medicalPosterOpen, setMedicalPosterOpen] = useState(false);

  const healthServices = [
    {
      titleEn: "Free Specialist Consultations",
      titleHi: "निःशुल्क विशेषज्ञ डॉक्टर परामर्श",
      descEn: "Consultations with practicing medical specialists for general health, eye care, and blood pressure control.",
      descHi: "सामान्य स्वास्थ्य, नेत्र चिकित्सा और रक्तचाप नियंत्रण के लिए विशेषज्ञ डॉक्टरों द्वारा परामर्श।",
      icon: <Stethoscope className="w-5 h-5 text-[#126A73]" />
    },
    {
      titleEn: "Free Medicine Distribution",
      titleHi: "मुफ्त आवश्यक दवा वितरण",
      descEn: "Distribution of prescribed medicines free of charge to attending patients during medical camps.",
      descHi: "चिकित्सा शिविरों में आए मरीजों को आवश्यकतानुसार निःशुल्क दवाओं का वितरण।",
      icon: <Pill className="w-5 h-5 text-[#8C2635]" />
    },
    {
      titleEn: "Diagnostic Health Screenings",
      titleHi: "स्वास्थ्य जांच एवं स्क्रीनिंग",
      descEn: "Diagnostic screenings covering blood pressure, eye vision testing, and basic health metrics.",
      descHi: "रक्तचाप, दृष्टि परीक्षण और मौलिक स्वास्थ्य मानकों की जांच।",
      icon: <Eye className="w-5 h-5 text-[#D5A33A]" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      <SectionHeading
        badge="HEALTHCARE INITIATIVES"
        badgeHindi="स्वास्थ्य सेवाएं"
        title="Healthcare for the Community"
        titleHindi="समुदाय के लिए निःशुल्क स्वास्थ्य सेवाएं"
        subtitle="Organizing free medical checkup camps, specialist doctor consultations, and medicine distribution for underprivileged families."
        subtitleHindi="जरूरतमंद परिवारों के लिए निःशुल्क चिकित्सा परामर्श, स्वास्थ्य जांच शिविर और दवा वितरण अभियानों का संचालन।"
      />

      {/* FEATURE SECTION: 17TH FREE MEDICAL CAMP */}
      <div className="bg-[#173F3A] border border-[#DDD8CA]/30 text-[#F7F3E8] rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#D5A33A] bg-[#126A73]/40 border border-[#D5A33A]/30 rounded-full">
              {isHindi ? siteContent.medicalCamp17.tagHi : siteContent.medicalCamp17.tagEn}
            </span>

            <h2 className={`h2-title text-[#F7F3E8] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
              {isHindi ? siteContent.medicalCamp17.titleHi : siteContent.medicalCamp17.titleEn}
            </h2>

            <p className="text-sm sm:text-base text-[#DDD8CA] leading-relaxed">
              {isHindi ? siteContent.medicalCamp17.descHi : siteContent.medicalCamp17.descEn}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {(isHindi ? siteContent.medicalCamp17.pointsHi : siteContent.medicalCamp17.pointsEn).map((pt, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#F7F3E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#D5A33A] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => setMedicalPosterOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#126A73] hover:bg-[#126A73]/90 rounded-xl transition-all shadow"
              >
                <FileText className="w-4 h-4" />
                <span>{isHindi ? 'शिविर पोस्टर एवं विवरण देखें' : 'View Camp Poster Details'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              onClick={() => setMedicalPosterOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#D5A33A]/40 shadow-xl hover:shadow-2xl transition-all duration-300 aspect-[4/3] bg-black/20"
            >
              <img
                src="/assets/medical_camp.jpg"
                alt="Free Medical Camp Checkup by JBTWS Doctors"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F3A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-xs font-semibold text-[#F7F3E8] bg-[#126A73] px-3.5 py-1.5 rounded-lg border border-[#DDD8CA]/30 shadow">
                  {isHindi ? 'बड़ा चित्र देखें' : 'Click to View Full Photo'}
                </span>
              </div>
              <div className="absolute top-3 left-3 bg-[#173F3A]/85 backdrop-blur-xs text-[#D5A33A] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md border border-[#D5A33A]/30">
                {isHindi ? 'चिकित्सा शिविर' : 'Free Medical Camp'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className={`h2-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
            {isHindi ? 'स्वास्थ्य शिविर सेवाएं' : 'Key Medical Services Offered'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthServices.map((srv, idx) => (
            <div key={idx} className="bg-white border border-[#DDD8CA] rounded-2xl p-6 card-editorial space-y-3">
              <div className="p-2.5 rounded-lg bg-[#F7F3E8] border border-[#DDD8CA] w-fit">{srv.icon}</div>
              <h4 className={`h3-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
                {isHindi ? srv.titleHi : srv.titleEn}
              </h4>
              <p className="text-xs text-[#66706D] leading-relaxed">
                {isHindi ? srv.descHi : srv.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      <LightboxModal
        isOpen={medicalPosterOpen}
        onClose={() => setMedicalPosterOpen(false)}
        item={{
          title: "17th Free Medical Camp Doctor Consultations",
          titleHindi: "17वां निःशुल्क चिकित्सा शिविर - डॉक्टर परामर्श",
          category: "Medical Camp Archive",
          image: "/assets/medical_camp.jpg",
          description: "Specialist doctors and volunteers providing health checkups, consultations, and distributing free medicines to children and community families during the JBTWS medical camp.",
          descriptionHindi: "जौनसार बावर जनजातीय कल्याण समिति, दिल्ली द्वारा आयोजित निःशुल्क चिकित्सा शिविर में विशेषज्ञ डॉक्टरों द्वारा बच्चों व जरूरतमंद परिवारों का स्वास्थ्य परीक्षण एवं दवा वितरण।",
          location: "Delhi"
        }}
      />
    </div>
  );
};
