import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/contentData';
import { SectionHeading } from '../components/common/SectionHeading';

export const About = () => {
  const { isHindi } = useLanguage();

  const objectives = [
    {
      titleEn: "Cultural Preservation",
      titleHi: "सांस्कृतिक संरक्षण",
      descEn: "Safeguarding Jaunsar-Bawar temple architecture, folk dances (Harul), language, festivals, and ancestral traditions.",
      descHi: "जौनसार-बावर की काष्ठ मंदिर वास्तुकला, लोक नृत्यों, बोली, त्योहारों और पूर्वजों की परंपराओं का संरक्षण।"
    },
    {
      titleEn: "Free Healthcare & Camps",
      titleHi: "निःशुल्क स्वास्थ्य सेवा",
      descEn: "Organizing free medical checkup camps, specialist health consultations, and essential medicine distribution for needy families.",
      descHi: "जरूरतमंद परिवारों के लिए मुफ्त चिकित्सा जांच शिविर, विशेषज्ञ डॉक्टर परामर्श और आवश्यक दवाओं का वितरण।"
    },
    {
      titleEn: "Educational Support",
      titleHi: "शिक्षा एवं छात्र सहायता",
      descEn: "Promoting education awareness, guiding youth towards higher learning, and supporting classroom infrastructure.",
      descHi: "शिक्षा जागरूकता को बढ़ावा देना, युवाओं को उच्च शिक्षा के लिए मार्गदर्शन देना और स्कूल अवसंरचना में सहयोग।"
    },
    {
      titleEn: "Community Unity & Welfare",
      titleHi: "सामुदायिक एकता एवं कल्याण",
      descEn: "Fostering mutual help, social harmony, and kinship among Jaunsar-Bawar community members residing in Delhi.",
      descHi: "दिल्ली में रहने वाले जौनसार-बावर समुदाय के सदस्यों के बीच आपसी सहयोग, सामाजिक सद्भाव और भाईचारे को बढ़ावा देना।"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <SectionHeading
        badge="ORGANIZATION PROFILE"
        badgeHindi="संस्थागत परिचय"
        title="Jaunsar Bawar Janjatiya Kalyan Samiti, Delhi"
        titleHindi="जौनसार बावर जनजातीय कल्याण समिति, दिल्ली"
        subtitle="Dedicated to preserving rich Himalayan tribal heritage while empowering communities through healthcare, education, and social unity."
        subtitleHindi="स्वास्थ्य, शिक्षा और सामाजिक एकता के माध्यम से समुदाय को सशक्त बनाते हुए समृद्ध हिमालयी जनजातीय विरासत के संरक्षण के लिए समर्पित।"
      />

      {/* Main Profile & Background */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 bg-white border border-[#DDD8CA] rounded-2xl p-8 shadow-sm space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#126A73]">
            {isHindi ? 'हमारी पृष्ठभूमि' : 'Our Background & Mission'}
          </span>
          <h3 className={`h3-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
            {isHindi ? 'जड़ों का सम्मान, समुदाय का विकास' : 'Preserving Heritage, Serving Society'}
          </h3>
          <p className="text-[#202625] text-base leading-relaxed">
            {isHindi
              ? "जौनसार बावर जनजातीय कल्याण समिति, दिल्ली एक गैर-राजनीतिक सामुदायिक कल्याण संगठन है। यह समिति दिल्ली और एनसीआर में रहने वाले जौनसार-बावर (उत्तराखंड) के लोगों को एक मंच पर लाती है। हमारा मुख्य उद्देश्य अपनी विशिष्ट सांस्कृतिक धरोहर का संरक्षण करना तथा स्वास्थ्य, शिक्षा और सामाजिक विकास के क्षेत्र में ठोस काम करना है।"
              : "Jaunsar Bawar Janjatiya Kalyan Samiti, Delhi is a non-political community welfare organization established to bring together people hailing from the Jaunsar-Bawar region of Dehradun district, Uttarakhand, who reside in Delhi. The Samiti acts as an anchor for cultural preservation, healthcare relief, educational enhancement, and environmental awareness."}
          </p>
          <p className="text-[#202625] text-base leading-relaxed">
            {isHindi
              ? "समिति समय-समय पर निःशुल्क चिकित्सा शिविरों (जैसे 17वां नि:शुल्क चिकित्सा शिविर), छात्र सहायता कार्यक्रमों, स्वच्छता अभियानों और सांस्कृतिक सम्मेलनों का सफल आयोजन करती आ रही है।"
              : "Over the years, the Samiti has regularly conducted health checkup initiatives (including the landmark 17th Free Medical Camp), student mentoring sessions, environmental cleanliness drives, and annual Pahari cultural meets."}
          </p>
        </div>

        {/* Official Registration & References */}
        <div className="lg:col-span-5 bg-[#173F3A] text-[#F7F3E8] rounded-2xl p-8 border border-[#DDD8CA]/30 space-y-6 shadow-xl">
          <div className="flex items-center gap-3 border-b border-[#DDD8CA]/20 pb-4">
            <ShieldCheck className="w-8 h-8 text-[#D5A33A] shrink-0" />
            <div>
              <h4 className="text-base font-bold text-[#D5A33A]">
                {isHindi ? 'संस्थागत विवरण' : 'Organization Details'}
              </h4>
              <p className="text-xs text-[#DDD8CA]/80">Official Charter & References</p>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <span className="text-[#DDD8CA]/70 block mb-1">Official Name (English):</span>
              <p className="font-semibold text-[#F7F3E8]">Jaunsar Bawar Janjatiya Kalyan Samiti, Delhi</p>
            </div>
            <div>
              <span className="text-[#DDD8CA]/70 block mb-1">Official Name (Hindi):</span>
              <p className="font-semibold text-[#D5A33A] font-body-hi">जौनसार बावर जनजातीय कल्याण समिति, दिल्ली</p>
            </div>
            <div>
              <span className="text-[#DDD8CA]/70 block mb-1">Primary Native Region:</span>
              <p className="font-semibold text-[#F7F3E8]">Jaunsar-Bawar, Dehradun, Uttarakhand</p>
            </div>
            <div>
              <span className="text-[#DDD8CA]/70 block mb-1">HQ / Operations:</span>
              <p className="font-semibold text-[#F7F3E8]">Delhi & NCR</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Objectives */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className={`h2-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
            {isHindi ? 'हमारे मुख्य उद्देश्य' : 'Our Core Objectives'}
          </h3>
          <p className="text-xs md:text-sm text-[#66706D] mt-2">
            {isHindi ? 'समिति के चार मुख्य कार्यक्षेत्र जो हमारे प्रत्येक अभियान को दिशा देते हैं।' : 'Four fundamental pillars guiding all organizational programs and community efforts.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((obj, i) => (
            <div key={i} className="bg-white border border-[#DDD8CA] rounded-xl p-6 card-editorial flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#F7F3E8] border border-[#DDD8CA] text-[#126A73] font-bold flex items-center justify-center shrink-0">
                0{i + 1}
              </div>
              <div className="space-y-1">
                <h4 className={`h3-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
                  {isHindi ? obj.titleHi : obj.titleEn}
                </h4>
                <p className="text-xs text-[#66706D] leading-relaxed">
                  {isHindi ? obj.descHi : obj.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
