import React from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { ShieldCheck, Phone, Briefcase, History } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';

const presentMembers = [
  {
    name: "Ramesh Chand Joshi (IRS, Retd.)",
    nameHi: "रमेश चंद जोशी (आईआरएस, सेवा.)",
    position: "Chairman",
    positionHi: "अध्यक्ष (चेयरमैन)",
    occupation: "Service (IRS Retd.)",
    occupationHi: "सेवा (आईआरएस सेवा.)",
    phone: "+91 98118 24711",
    badge: "Key Office Bearer"
  },
  {
    name: "Rajeshwar Singh",
    nameHi: "राजेश्वर सिंह",
    position: "President",
    positionHi: "अध्यक्ष (प्रेसिडेंट)",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 99112 39391",
    badge: "Key Office Bearer"
  },
  {
    name: "Attar Singh Rana",
    nameHi: "अतर सिंह राणा",
    position: "Vice President",
    positionHi: "उपाध्यक्ष",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 80100 94205",
    badge: "Office Bearer"
  },
  {
    name: "Ravindra Singh Rana",
    nameHi: "रवींद्र सिंह राणा",
    position: "Vice President",
    positionHi: "उपाध्यक्ष",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 99682 90149",
    badge: "Office Bearer"
  },
  {
    name: "Sultan Singh",
    nameHi: "सुल्तान सिंह",
    position: "Secretary",
    positionHi: "महासचिव (सेक्रेटरी)",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 99682 34418",
    badge: "Key Office Bearer"
  },
  {
    name: "Khajan Singh",
    nameHi: "खजान सिंह",
    position: "Joint Secretary",
    positionHi: "संयुक्त सचिव",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 99583 37449",
    badge: "Office Bearer"
  },
  {
    name: "Raghuveer Singh Chauhan",
    nameHi: "रघुवीर सिंह चौहान",
    position: "Joint Secretary",
    positionHi: "संयुक्त सचिव",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 97611 97577",
    badge: "Office Bearer"
  },
  {
    name: "Nitesh Rathore",
    nameHi: "नितेश राठौर",
    position: "Treasurer",
    positionHi: "कोषाध्यक्ष",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 80068 89036",
    badge: "Key Office Bearer"
  },
  {
    name: "Ashok Singh Negi",
    nameHi: "अशोक सिंह नेगी",
    position: "Organising Secretary",
    positionHi: "संगठन सचिव",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 85100 46888",
    badge: "Office Bearer"
  },
  {
    name: "Dr. Vijay Pal Singh Rawat",
    nameHi: "डॉ. विजय पाल सिंह रावत",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Service (Academician)",
    occupationHi: "सेवा (शिक्षाविद)",
    phone: "+91 88659 49193",
    badge: "Executive Member"
  },
  {
    name: "Shyam Singh Tomar",
    nameHi: "श्याम सिंह तोमर",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 96501 35111",
    badge: "Executive Member"
  },
  {
    name: "Atar Singh Chauhan",
    nameHi: "अतर सिंह चौहान",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 88519 39291",
    badge: "Executive Member"
  },
  {
    name: "Tilak Ram Sharma",
    nameHi: "तिलक राम शर्मा",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 99681 79955",
    badge: "Executive Member"
  },
  {
    name: "Chaman Singh Chauhan",
    nameHi: "चमन सिंह चौहान",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 97188 60640",
    badge: "Executive Member"
  },
  {
    name: "Kripal Singh Chauhan",
    nameHi: "कृपाल सिंह चौहान",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 99688 10085",
    badge: "Executive Member"
  },
  {
    name: "Tara Dutt Joshi",
    nameHi: "तारा दत्त जोशी",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Advocate / Lawyer",
    occupationHi: "अधिवक्ता (वकील)",
    phone: "+91 93138 82220",
    badge: "Executive Member"
  },
  {
    name: "Madan Singh Ray",
    nameHi: "मदन सिंह राय",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 96502 91409",
    badge: "Executive Member"
  },
  {
    name: "Ishwar Singh Chauhan",
    nameHi: "ईश्वर सिंह चौहान",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 92057 53370",
    badge: "Executive Member"
  },
  {
    name: "Suraj Singh Rana",
    nameHi: "सूरज सिंह राणा",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Business",
    occupationHi: "व्यवसाय",
    phone: "+91 97182 67775",
    badge: "Executive Member"
  },
  {
    name: "Naresh Bhatt",
    nameHi: "नरेश भट्ट",
    position: "Executive Body Member",
    positionHi: "कार्यकारिणी सदस्य",
    occupation: "Service",
    occupationHi: "सेवा",
    phone: "+91 84529 48898",
    badge: "Executive Member"
  }
];

const foundingMembers = [
  { sNo: 1, name: "Sh. Hirday Singh Tomar", occupation: "Service" },
  { sNo: 2, name: "Sh. Ramesh Chand Joshi", occupation: "Service" },
  { sNo: 3, name: "Sh. Atar Singh Chauhan", occupation: "Service" },
  { sNo: 4, name: "Sh. Keshar Singh Negi", occupation: "Lawyer" },
  { sNo: 5, name: "Sh. Kishan Nautiyal", occupation: "Lawyer" },
  { sNo: 6, name: "Sh. Sundeep Chauhan", occupation: "Service" },
  { sNo: 7, name: "Sh. Birendera Singh Chauhan", occupation: "Service" },
  { sNo: 8, name: "Sh. Kishan Singh Tomar", occupation: "Service" },
  { sNo: 9, name: "Sh. Sunil Dutt Joshi", occupation: "Service" },
  { sNo: 10, name: "Sh. Nayan Dev Varma", occupation: "Service" },
  { sNo: 11, name: "Sh. Surat Singh Chauhan", occupation: "Service" },
  { sNo: 12, name: "Sh. Kalam Singh Tomar", occupation: "Service" },
  { sNo: 13, name: "Sh. Maya Ram Tomar", occupation: "Service" },
  { sNo: 14, name: "Sh. Yudhvir Singh Chauhan", occupation: "Service" },
  { sNo: 15, name: "Sh. Teeka Ram Sharma", occupation: "Service" },
  { sNo: 16, name: "Sh. Mehar Singh Chauhan", occupation: "Service" },
  { sNo: 17, name: "Sh. Srichand Sharma", occupation: "Service" },
  { sNo: 18, name: "Sh. Uttam Singh Chouhan", occupation: "Service" },
  { sNo: 19, name: "Sh. Swaraj Singh Tomar", occupation: "Service" },
  { sNo: 20, name: "Sh. Khajan Dutt Sharma", occupation: "Service" }
];

export const GoverningBody = () => {
  const { isHindi } = useLanguage();
  const { tab: paramTab } = useParams();
  const [searchParams] = useSearchParams();

  const activeTab = paramTab || searchParams.get('tab') || 'present';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      {/* Header */}
      <SectionHeading
        badge="GOVERNANCE & LEADERSHIP"
        badgeHindi="प्रशासन एवं नेतृत्व"
        title="Governing Body & Office Bearers"
        titleHindi="प्रबंधकारिणी समिति एवं पदाधिकारी"
        subtitle="Entrusted with the stewardship and management of Jaunsar Bawar Tribal Welfare Society under the Societies Registration Act, 1860."
        subtitleHindi="सोसाइटी पंजीकरण अधिनियम, 1860 के तहत जौनसार बावर जनजातीय कल्याण समिति के कुशल प्रबंधन एवं सेवा हेतु समर्पित।"
      />

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 bg-[#FAF7EF] border border-[#DDD8CA] rounded-2xl shadow-xs">
          <Link
            to="/governing-body/present"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs md:text-sm font-mono font-bold tracking-wider transition-all ${
              activeTab === 'present'
                ? 'bg-[#1C3A3A] text-[#FAF7EF] shadow-md'
                : 'text-[#49605C] hover:text-[#1C3A3A] hover:bg-[#DDD8CA]/30'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#BE9A5B]" />
            <span>{isHindi ? 'वर्तमान कार्यकारिणी' : 'Present Governing Body'}</span>
          </Link>
          <Link
            to="/governing-body/past"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs md:text-sm font-mono font-bold tracking-wider transition-all ${
              activeTab === 'past'
                ? 'bg-[#1C3A3A] text-[#FAF7EF] shadow-md'
                : 'text-[#49605C] hover:text-[#1C3A3A] hover:bg-[#DDD8CA]/30'
            }`}
          >
            <History className="w-4 h-4 text-[#BE9A5B]" />
            <span>{isHindi ? 'पूर्व / संस्थापक सदस्य' : 'Past & Founding Leadership'}</span>
          </Link>
        </div>
      </div>

      {/* TAB CONTENT: PRESENT GOVERNING BODY */}
      {activeTab === 'present' && (
        <div className="space-y-8">
          <div className="bg-[#E2F1F8] border border-[#D2E8F0] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#2B5B97] uppercase tracking-wider">
                {isHindi ? 'कार्यकारिणी विवरण' : 'Executive Overview'}
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1C2326]">
                {isHindi ? 'वर्तमान प्रबंधकारिणी समिति (20 सदस्य)' : 'Present Governing Body (20 Members)'}
              </h3>
              <p className="text-xs md:text-sm text-[#394D52]">
                {isHindi
                  ? 'सोसायटी पंजीकरण अधिनियम, 1860 की धारा 2 के तहत प्रबंधकारिणी समिति के सभी अधिकृत पदाधिकारी एवं सदस्य।'
                  : 'Official Office Bearers and Executive Members entrusted with organizational administration as filed with the Registrar of Societies, NCT of Delhi.'}
              </p>
            </div>
            <div className="shrink-0 px-4 py-2 bg-white rounded-xl border border-[#D2E8F0] text-xs font-mono font-semibold text-[#1C3A3A] shadow-xs">
              {isHindi ? 'कार्यकाल: 2 वर्ष' : 'Term: 2 Years (Renewable)'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#DDD8CA] hover:border-[#126A73] transition-all duration-300 rounded-2xl p-6 shadow-xs hover:shadow-md flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FAF7EF] border border-[#DDD8CA] text-[#126A73]">
                      #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-[#BE9A5B] uppercase tracking-wide">
                      {isHindi ? member.positionHi : member.position}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-serif font-bold text-[#1C2326] group-hover:text-[#2B5B97] transition-colors">
                      {isHindi ? member.nameHi : member.name}
                    </h4>
                    <p className="text-xs text-[#66706D] mt-1.5 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#126A73] shrink-0" />
                      <span>{isHindi ? member.occupationHi : member.occupation}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#DDD8CA]/30 flex items-center justify-between text-xs font-mono">
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-[#2B5B97] hover:underline font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{member.phone}</span>
                  </a>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#FAF7EF] text-[#66706D] border border-[#DDD8CA]">
                    {member.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: PAST & FOUNDING LEADERSHIP */}
      {activeTab === 'past' && (
        <div className="space-y-8">
          <div className="bg-[#FAF7EF] border border-[#D2E8F0] rounded-2xl p-6 md:p-8 space-y-2">
            <span className="text-xs font-mono font-bold text-[#BE9A5B] uppercase tracking-wider">
              {isHindi ? 'संस्थापक एवं ऐतिहासिक रिकॉर्ड' : 'Historical & Founding Archive'}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1C2326]">
              {isHindi ? 'संस्थापक हस्ताक्षरकर्ता एवं पूर्व नेतृत्व' : 'Founding Signatories & Historical Leadership'}
            </h3>
            <p className="text-xs md:text-sm text-[#394D52] leading-relaxed">
              {isHindi
                ? 'सोसायटी पंजीकरण अधिनियम, 1860 के अंतर्गत समिति की स्थापना एवं पंजीकरण कराने वाले मूल सदस्य जिन्होंने संगठन की नींव रखी।'
                : 'The foundational members and signatories who came together under the Societies Registration Act, 1860 to establish the Jaunsar Bawar Tribal Welfare Society, Delhi.'}
            </p>
          </div>

          <div className="bg-white border border-[#DDD8CA] rounded-2xl overflow-hidden shadow-xs">
            <div className="px-6 py-4 bg-[#FAF7EF] border-b border-[#DDD8CA] flex items-center justify-between">
              <h4 className="text-sm font-mono font-bold text-[#1C2326] uppercase tracking-wider">
                {isHindi ? 'संस्थापक सदस्यों की सूची' : 'List of Founding Signatories (MoA Schedule)'}
              </h4>
              <span className="text-xs font-mono text-[#66706D]">
                {isHindi ? 'कुल सदस्य: 102+' : 'Total Registered: 102+ Members'}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF7EF]/60 text-[#49605C] font-mono uppercase tracking-wider border-b border-[#DDD8CA]">
                  <tr>
                    <th className="px-6 py-3.5 w-16">#</th>
                    <th className="px-6 py-3.5">{isHindi ? 'नाम' : 'Name'}</th>
                    <th className="px-6 py-3.5">{isHindi ? 'व्यवसाय' : 'Occupation'}</th>
                    <th className="px-6 py-3.5 text-right">{isHindi ? 'स्थिति' : 'Status'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DDD8CA]/60 font-sans">
                  {foundingMembers.map((member) => (
                    <tr key={member.sNo} className="hover:bg-[#FAF7EF]/40 transition-colors">
                      <td className="px-6 py-3.5 font-mono text-[#89A49C]">{member.sNo}</td>
                      <td className="px-6 py-3.5 font-serif font-bold text-[#1C2326]">{member.name}</td>
                      <td className="px-6 py-3.5 font-mono text-[#126A73]">{member.occupation}</td>
                      <td className="px-6 py-3.5 text-right font-mono text-[10px] text-[#BE9A5B] font-bold">
                        {isHindi ? 'हस्ताक्षरित' : 'Signed & Registered'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-[#FAF7EF]/40 border-t border-[#DDD8CA] text-center text-xs text-[#66706D]">
              {isHindi
                ? 'समिति के मूल ज्ञापन के अनुसार कुल 102 संस्थापक सदस्यों के हस्ताक्षर विधिवत पंजीकृत हैं।'
                : 'As per the Memorandum of Association, all 102 foundational signatories are recorded in the official registry.'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
