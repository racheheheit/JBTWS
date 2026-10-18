import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';

export const About = () => {
  const { isHindi } = useLanguage();

  const objectives = [
    {
      clause: "3(a)",
      titleEn: "Member Welfare & Advancement",
      titleHi: "सदस्य कल्याणकारी गतिविधियां",
      descEn: "To undertake welfare activities, for promoting the cause and overall well-being of its members.",
      descHi: "सदस्यों के हितों, अधिकारों और सर्वांगीण कल्याण को बढ़ावा देने के लिए सक्रिय कल्याणकारी गतिविधियों का संचालन करना।"
    },
    {
      clause: "3(b)",
      titleEn: "Socio-Cultural Unity & Community Centre",
      titleHi: "सामाजिक-सांस्कृतिक संवाद एवं सामुदायिक केंद्र",
      descEn: "To increase socio-cultural interaction among its members and satisfy their needs due to unique cultural backgrounds. To make efforts to build a Community Centre for this purpose after obtaining land from the concerned authorities.",
      descHi: "सदस्यों के बीच सामाजिक-सांस्कृतिक मेलजोल बढ़ाना और उनकी विशिष्ट सांस्कृतिक पृष्ठभूमि की आवश्यकताओं को पूरा करना; तथा संबंधित प्राधिकरणों से भूमि प्राप्त कर इस उद्देश्य के लिए एक समर्पित सामुदायिक केंद्र (Community Centre) स्थापित करने का प्रयास करना।"
    },
    {
      clause: "3(c)",
      titleEn: "Protection Against Harassment & Exploitation",
      titleHi: "उत्पीड़न एवं शोषण से सुरक्षा व सहायता",
      descEn: "To come for the rescue of those persons (hailing from Jaunsar Bawar Tribal area) who suffer harassment and exploitation.",
      descHi: "जौनसार-बावर जनजातीय क्षेत्र के ऐसे प्रवासियों और नागरिकों की रक्षा, सहायता व न्याय दिलाना जो किसी भी प्रकार के उत्पीड़न या शोषण का सामना करते हैं।"
    },
    {
      clause: "3(d)",
      titleEn: "Education, Awareness & National Cultural Recognition",
      titleHi: "ज्ञान-जागरूकता प्रसार एवं राष्ट्रीय सांस्कृतिक सम्मान",
      descEn: "To undertake programmes for spreading useful knowledge and awareness in the tribal belt of Jaunsar Bawar (situated in north-western Dehradun, Uttarakhand) which lags far behind. Simultaneously, to make efforts towards earning a rightful place at the national level for the highly rich but little known culture of Jaunsar Bawar.",
      descHi: "जौनसार-बावर (देहरादून, उत्तराखंड) के जनजातीय क्षेत्र में उपयोगी ज्ञान व जागरूकता कार्यक्रमों का प्रसार करना; तथा इस क्षेत्र की अत्यंत समृद्ध किंतु अल्पज्ञात संस्कृति को राष्ट्रीय स्तर पर उसका गौरवपूर्ण स्थान दिलाना।"
    },
    {
      clause: "3(e)",
      titleEn: "Delivery of Financial Aids, Grants & Regional Development",
      titleHi: "वित्तीय सहायता/अनुदान का पारदर्शी वितरण व विकास",
      descEn: "To help in the process of the delivery of financial aids/grants given by the State/Central Government and NGOs, so that benefits actually reach the needy in Jaunsar Bawar, ensuring development of this otherwise backward and neglected area.",
      descHi: "केंद्र व राज्य सरकारों तथा गैर-सरकारी संगठनों द्वारा प्रदत्त आर्थिक सहायता व अनुदानों के वितरण में सहयोग करना ताकि लाभ सीधे जरूरतमंदों तक पहुंचे और क्षेत्र का संतुलित विकास सुनिश्चित हो।"
    },
    {
      clause: "3(f)",
      titleEn: "Resolving Socio-Economic Problems",
      titleHi: "सामाजिक-आर्थिक समस्याओं का समाधान",
      descEn: "To make efforts to highlight and to overcome the socio-economic problems of Jaunsar-Bawar by taking help from various forums available for that purpose.",
      descHi: "विभिन्न उपलब्ध लोकतांत्रिक व प्रशासनिक मंचों के माध्यम से जौनसार-बावर की सामाजिक व आर्थिक समस्याओं को प्रमुखता से उठाना और उनके समाधान के ठोस उपाय करना।"
    },
    {
      clause: "3(g)",
      titleEn: "Promoting Sporting Talents & National Schemes (SAG)",
      titleHi: "खेल प्रतिभाओं को प्रोत्साहन एवं राष्ट्रीय योजनाएं (SAG)",
      descEn: "To make efforts to bring out the sporting talents from Jaunsar Bawar at national level under various schemes of GOI such as the \"Special Area Games\" (SAG) Scheme.",
      descHi: "भारत सरकार की 'स्पेशल एरिया गेम्स' (Special Area Games - SAG) जैसी योजनाओं के तहत जौनसार-बावर के प्रतिभावान खिलाड़ियों को तराशना और उन्हें राष्ट्रीय पटल पर अवसर दिलाना।"
    },
    {
      clause: "3(h)",
      titleEn: "Land & Building Infrastructure",
      titleHi: "भूमि, भवन एवं संस्थागत अवसंरचना",
      descEn: "To own land and building or take them on lease or rent for achieving aims of the Society.",
      descHi: "समिति के घोषित उद्देश्यों की पूर्ति के लिए भूमि और भवनों का स्वामित्व प्राप्त करना अथवा उन्हें पट्टे या किराए पर लेना।"
    },
    {
      clause: "3(i)",
      titleEn: "Grants, Aids & Institutional Assistance",
      titleHi: "अनुदान, सहायता एवं वित्तीय संसाधन",
      descEn: "To receive grants and aids or any other assistance from the GOI, NGOs, etc., in order to fulfill the aims and objects of the Society.",
      descHi: "समिति के घोषित उद्देश्यों की पूर्ति हेतु भारत सरकार, गैर-सरकारी संस्थाओं आदि से सहायता, अनुदान और संसाधन प्राप्त करना।"
    },
    {
      clause: "3(j)",
      titleEn: "Dedicated & Value-Driven Membership",
      titleHi: "सकारात्मक एवं समर्पित सदस्यता विस्तार",
      descEn: "To make efforts to bring within its fold as its members right-thinking, effective, and willing persons conforming to the Rules and Regulations to fulfill the Society's aims.",
      descHi: "समिति के उद्देश्यों की प्राप्ति हेतु नियमों के तहत सकारात्मक सोच वाले, कर्मठ और समर्पित व्यक्तियों को संगठन से जोड़ना।"
    },
    {
      clause: "3(k)",
      titleEn: "Incidental & Conducive Activities",
      titleHi: "समस्त अनुषंगी एवं संवर्धक कल्याणकारी कार्य",
      descEn: "To do all such things as incidental or conducive to the attainment of any of the above objects.",
      descHi: "उपरोक्त सभी लक्ष्यों और उद्देश्यों की सफल प्राप्ति के लिए सभी प्रासंगिक, अनुकूल और आवश्यक कदम उठाना।"
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
              <p className="text-xs text-[#DDD8CA]/80">Official MoA & Registration</p>
            </div>
          </div>

          <div className="space-y-3.5 text-xs">
            <div>
              <span className="text-[#DDD8CA]/70 block mb-0.5">Official Name (English):</span>
              <p className="font-semibold text-[#F7F3E8]">JAUNSAR BAWAR TRIBAL WELFARE SOCIETY, DELHI</p>
            </div>
            <div>
              <span className="text-[#DDD8CA]/70 block mb-0.5">Official Name (Hindi):</span>
              <p className="font-semibold text-[#D5A33A] font-body-hi">जौनसार बावर जनजातीय कल्याण समिति, दिल्ली</p>
            </div>
            <div>
              <span className="text-[#DDD8CA]/70 block mb-0.5">Registration Framework:</span>
              <p className="font-semibold text-[#F7F3E8]">Societies Registration Act, 1860 (NCT of Delhi)</p>
            </div>
            <div>
              <span className="text-[#DDD8CA]/70 block mb-0.5">Registered Office Address:</span>
              <p className="font-semibold text-[#F7F3E8] leading-relaxed">
                D-11, FIRST FLOOR, DELHI CITIZEN CGHS LIMITED, PLOT NO-24, SECTOR-13, ROHINI, Rohini Sector 13, North West Delhi, Delhi, 110085
              </p>
            </div>
            <div>
              <span className="text-[#DDD8CA]/70 block mb-0.5">Primary Native Region:</span>
              <p className="font-semibold text-[#F7F3E8]">Jaunsar-Bawar, District Dehradun, Uttarakhand</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Objectives / Aims */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className={`h2-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
            {isHindi ? 'हमारे मुख्य उद्देश्य (Aims & Objects)' : 'Our Main Objectives (Aims & Objects)'}
          </h3>
          <p className="text-xs md:text-sm text-[#66706D] mt-2">
            {isHindi
              ? 'समिति के संस्थापन ज्ञापन (Memorandum of Association) के क्लॉज 3 के तहत घोषित आधिकारिक लक्ष्य एवं उद्देश्य।'
              : 'Official aims and objects set forth under Clause 3 of the Memorandum of Association.'}
          </p>
        </div>

        <div className="bg-white border border-[#DDD8CA] rounded-2xl shadow-sm divide-y divide-[#DDD8CA]/60 overflow-hidden">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 transition-colors hover:bg-[#FAF7EF]/60 flex items-start gap-4 sm:gap-5"
            >
              {/* Numeric pointer (1, 2, 3...) */}
              <div className="shrink-0 mt-0.5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#173F3A] text-[#FAF7EF] font-mono font-bold text-xs tracking-wider shadow-xs">
                  {i + 1}
                </span>
              </div>

              {/* Content pointer */}
              <div className="space-y-1.5 flex-1">
                <h4 className={`text-base sm:text-lg font-semibold text-[#173F3A] leading-snug ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
                  {isHindi ? obj.titleHi : obj.titleEn}
                </h4>
                <p className="text-xs sm:text-sm text-[#4A5552] leading-relaxed">
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
