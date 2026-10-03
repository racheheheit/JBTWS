import React, { useState } from 'react';
import { UserPlus, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { api } from '../services/api';

export const GetInvolved = () => {
  const { isHindi } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    areaOfInterest: 'Healthcare',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, msg: '' });

    const res = await api.submitVolunteer(formData);
    if (res.success) {
      setStatus({ loading: false, success: true, msg: res.message || 'Application submitted successfully!' });
      setFormData({ name: '', email: '', phone: '', city: '', areaOfInterest: 'Healthcare', message: '' });
    } else {
      setStatus({ loading: false, success: false, msg: res.message || 'Failed to submit.' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      <SectionHeading
        badge="VOLUNTEER & PARTICIPATE"
        badgeHindi="जुड़ें एवं योगदान दें"
        title="Get Involved with Our Cause"
        titleHindi="सामुदायिक सेवा में भागीदारी करें"
        subtitle="Join our community initiatives in medical camps, education guidance, cultural preservation, and environmental drives."
        subtitleHindi="स्वास्थ्य शिविरों, शिक्षा अभियानों, सांस्कृतिक संरक्षण और पर्यावरण गतिविधियों में अपना योगदान दें।"
      />

      <div className="max-w-3xl mx-auto bg-white border border-[#DDD8CA] rounded-3xl p-8 md:p-12 shadow-sm">
        <h3 className={`h3-title text-[#173F3A] mb-6 flex items-center gap-2 ${isHindi ? 'font-display-hi' : 'font-display-en'}`}>
          <UserPlus className="w-5 h-5 text-[#126A73]" />
          <span>{isHindi ? 'स्वयंसेवक पंजीकरण फॉर्म' : 'Volunteer Registration Form'}</span>
        </h3>

        {status.success && (
          <div className="mb-6 p-4 bg-[#F7F3E8] border border-[#DDD8CA] rounded-xl text-[#173F3A] text-xs flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#126A73] shrink-0" />
            <span>{status.msg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#202625] mb-1">
                {isHindi ? 'पूरा नाम *' : 'Full Name *'}
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-[#202625] mb-1">
                {isHindi ? 'फोन नंबर *' : 'Phone Number *'}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F7F3E8]/50 border border-[#DDD8CA] rounded-xl focus:bg-white focus:outline-none focus:border-[#126A73]"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#202625] mb-1">
                {isHindi ? 'शहर / राज्य *' : 'City / Residence *'}
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={e => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#F7F3E8]/50 border border-[#DDD8CA] rounded-xl focus:bg-white focus:outline-none focus:border-[#126A73]"
                placeholder="Delhi / Dehradun"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#202625] mb-1">
              {isHindi ? 'योगदान का मुख्य क्षेत्र *' : 'Area of Interest *'}
            </label>
            <select
              value={formData.areaOfInterest}
              onChange={e => setFormData({ ...formData, areaOfInterest: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#F7F3E8]/50 border border-[#DDD8CA] rounded-xl focus:bg-white focus:outline-none focus:border-[#126A73]"
            >
              <option value="Healthcare">Healthcare & Free Medical Camps</option>
              <option value="Education">Education & Mentorship Programs</option>
              <option value="Cultural activities">Cultural Heritage & Festival Organizing</option>
              <option value="Community programs">Community Welfare & Social Unity</option>
              <option value="Environment">Environment & Cleanliness Drives</option>
              <option value="Other">Other Community Service</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-[#202625] mb-1">
              {isHindi ? 'संदेश / अतिरिक्त जानकारी' : 'Message / Additional Details'}
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#F7F3E8]/50 border border-[#DDD8CA] rounded-xl focus:bg-white focus:outline-none focus:border-[#126A73]"
              placeholder="Tell us about your background or how you wish to help..."
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-3 px-6 text-xs font-bold text-white bg-[#126A73] hover:bg-[#126A73]/90 rounded-xl transition-all flex items-center justify-center gap-2 shadow"
          >
            <Send className="w-4 h-4" />
            <span>{status.loading ? 'Submitting...' : (isHindi ? 'आवेदन भेजें' : 'Submit Application')}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
