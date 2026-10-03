import React, { useState } from 'react';
import { Mail, MapPin, Globe, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteContent } from '../data/contentData';
import { SectionHeading } from '../components/common/SectionHeading';
import { api } from '../services/api';

export const Contact = () => {
  const { isHindi } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, msg: '' });

    const res = await api.submitContact(formData);
    if (res.success) {
      setStatus({ loading: false, success: true, msg: res.message || 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatus({ loading: false, success: false, msg: res.message || 'Failed to send.' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      <SectionHeading
        badge="GET IN TOUCH"
        badgeHindi="संपर्क करें"
        title="Contact Us"
        titleHindi="समिति से संपर्क करें"
        subtitle="Reach out for community inquiries, healthcare camp details, cultural participation, or organizational support."
        subtitleHindi="सामुदायिक पूछताछ, स्वास्थ्य शिविरों, सांस्कृतिक भागीदारी या सहयोग के लिए संपर्क करें।"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Details Card */}
        <div className="lg:col-span-5 bg-[#173F3A] text-[#F7F3E8] rounded-3xl p-8 border border-[#DDD8CA]/30 space-y-6 shadow-xl">
          <h3 className={`h3-title text-[#D5A33A] border-b border-[#DDD8CA]/20 pb-4 ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
            {isHindi ? 'कार्यालय संपर्क जानकारी' : 'Official Contact Information'}
          </h3>

          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D5A33A] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#DDD8CA]/70 block font-semibold">Location / Headquarters:</span>
                <p className="text-[#F7F3E8]">{siteContent.org.contactLocation}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#D5A33A] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#DDD8CA]/70 block font-semibold">Official Email:</span>
                <p className="text-[#F7F3E8]">{siteContent.org.contactEmail}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-[#D5A33A] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#DDD8CA]/70 block font-semibold">Native Region Connection:</span>
                <p className="text-[#F7F3E8]">{siteContent.org.nativeRegion}</p>
              </div>
            </div>
          </div>

          {/* Interactive Map Placeholder Container */}
          <div className="pt-4">
            <div className="w-full h-44 bg-[#173F3A] border border-[#DDD8CA]/20 rounded-2xl flex flex-col items-center justify-center text-center p-4">
              <MapPin className="w-8 h-8 text-[#D5A33A] mb-2" />
              <span className="text-xs font-mono text-[#D5A33A]">[MAP LOCATION PLACEHOLDER]</span>
              <span className="text-[10px] text-[#DDD8CA]/60 mt-1">Delhi & Jaunsar-Bawar Network</span>
            </div>
          </div>
        </div>

        {/* Contact Message Form */}
        <div className="lg:col-span-7 bg-white border border-[#DDD8CA] rounded-3xl p-8 shadow-sm">
          <h3 className={`h3-title text-[#173F3A] mb-6 ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
            {isHindi ? 'संदेश भेजें' : 'Send a Direct Message'}
          </h3>

          {status.success && (
            <div className="mb-6 p-4 bg-[#F7F3E8] border border-[#DDD8CA] rounded-xl text-[#173F3A] text-xs flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#126A73] shrink-0" />
              <span>{status.msg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-[#202625] mb-1">
                {isHindi ? 'पूरा नाम *' : 'Your Name *'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F7F3E8]/50 border border-[#DDD8CA] rounded-xl focus:bg-white focus:outline-none focus:border-[#126A73]"
                placeholder="Enter full name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-[#202625] mb-1">
                  {isHindi ? 'ईमेल *' : 'Email Address *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F3E8]/50 border border-[#DDD8CA] rounded-xl focus:bg-white focus:outline-none focus:border-[#126A73]"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#202625] mb-1">
                  {isHindi ? 'फोन नंबर' : 'Phone Number'}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F7F3E8]/50 border border-[#DDD8CA] rounded-xl focus:bg-white focus:outline-none focus:border-[#126A73]"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#202625] mb-1">
                {isHindi ? 'संदेश *' : 'Your Message *'}
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F7F3E8]/50 border border-[#DDD8CA] rounded-xl focus:bg-white focus:outline-none focus:border-[#126A73]"
                placeholder="Write your inquiry or message here..."
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-3 px-6 text-xs font-bold text-white bg-[#126A73] hover:bg-[#126A73]/90 rounded-xl transition-all flex items-center justify-center gap-2 shadow"
            >
              <Send className="w-4 h-4" />
              <span>{status.loading ? 'Sending...' : (isHindi ? 'संदेश भेजें' : 'Send Message')}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
