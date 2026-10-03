import React from 'react';
import { Building2, QrCode, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';

export const Donate = () => {
  const { isHindi } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      <SectionHeading
        badge="SUPPORT OUR CAUSE"
        badgeHindi="सहयोग एवं दान"
        title="Support Community Welfare & Culture"
        titleHindi="सामुदायिक कल्याण एवं सांस्कृतिक संरक्षण हेतु सहयोग"
        subtitle="Your contributions empower free medical camps, student educational support, cleanliness drives, and cultural heritage preservation."
        subtitleHindi="आपका सहयोग निःशुल्क स्वास्थ्य शिविरों, छात्र सहायता और सांस्कृतिक विरासत के संरक्षण को बल देता है।"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Bank Transfer Card */}
        <div className="lg:col-span-6 bg-white border border-[#DDD8CA] rounded-3xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#DDD8CA]/40 pb-4">
            <div className="p-3 bg-[#F7F3E8] text-[#8C2635] rounded-xl border border-[#DDD8CA]">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`h3-title text-[#173F3A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
                {isHindi ? 'बैंक ट्रांसफर विवरण' : 'Direct Bank Transfer'}
              </h3>
              <p className="text-xs text-[#66706D]">Official Organizational Bank Account</p>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-4 bg-[#F7F3E8] border border-[#DDD8CA] rounded-xl space-y-2 font-mono text-[#202625]">
              <div className="flex justify-between">
                <span className="text-[#66706D]">Account Name:</span>
                <span className="font-bold text-[#173F3A]">Jaunsar Bawar Janjatiya Kalyan Samiti</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#66706D]">Bank Name:</span>
                <span className="font-bold text-[#173F3A]">[Bank Name to be configured]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#66706D]">Account No:</span>
                <span className="font-bold text-[#173F3A]">[Account No to be configured]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#66706D]">IFSC Code:</span>
                <span className="font-bold text-[#173F3A]">[IFSC to be configured]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#66706D]">Branch:</span>
                <span className="font-bold text-[#173F3A]">Delhi</span>
              </div>
            </div>

            <p className="text-[11px] text-[#66706D] italic">
              {isHindi
                ? "* आधिकारिक बैंक विवरण स्रोत दस्तावेज़ सत्यापन के पश्चात अद्यतन किए जाएंगे।"
                : "* Official account numbers will be populated upon confirmation with committee treasurers."}
            </p>
          </div>
        </div>

        {/* UPI Card */}
        <div className="lg:col-span-6 bg-[#173F3A] text-[#F7F3E8] rounded-3xl p-8 border border-[#DDD8CA]/30 space-y-6 shadow-xl">
          <div className="flex items-center gap-3 border-b border-[#DDD8CA]/20 pb-4">
            <div className="p-3 bg-[#126A73]/40 border border-[#D5A33A]/30 text-[#D5A33A] rounded-xl">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`h3-title text-[#D5A33A] ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
                {isHindi ? 'UPI एवं क्यूआर कोड भुगतान' : 'UPI & Instant Gateway'}
              </h3>
              <p className="text-xs text-[#DDD8CA]">Digital UPI Transfer Config</p>
            </div>
          </div>

          <div className="p-6 bg-[#173F3A] border border-[#DDD8CA]/20 rounded-2xl text-center space-y-3">
            <div className="w-24 h-24 bg-[#126A73]/20 border-2 border-dashed border-[#D5A33A]/50 rounded-xl mx-auto flex items-center justify-center text-[#D5A33A] text-xs font-mono">
              [UPI QR CODE]
            </div>
            <p className="text-xs font-mono text-[#D5A33A]">
              UPI ID: [organization-vpa@upi]
            </p>
            <p className="text-[11px] text-[#DDD8CA]">
              Supports Google Pay, PhonePe, Paytm, and BHIM UPI
            </p>
          </div>

          <div className="pt-2 flex items-center gap-2 text-xs text-[#D5A33A]">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>100% transparent organizational welfare fund routing.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
