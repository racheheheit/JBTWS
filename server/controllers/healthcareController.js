import HealthcareProgram from '../models/Healthcare.js';

const sampleHealthcare = [
  {
    _id: 'hc-1',
    title: '17th Free Medical Camp',
    titleHindi: '17वां नि:शुल्क चिकित्सा शिविर',
    description: 'Annual medical initiative providing free consultations, blood pressure checkups, eye tests, and essential medicine distribution.',
    descriptionHindi: 'वार्षिक चिकित्सा पहल जिसके तहत मुफ्त परामर्श, रक्तचाप जांच, नेत्र परीक्षण और आवश्यक दवा वितरण किया जाता है।',
    image: '/images/placeholders/medical-camp-poster.jpg',
    date: '2023',
    location: 'Delhi',
    documents: [
      { name: '17th Free Medical Camp Poster', url: '/documents/17th_Medical_Camp_Poster.pdf' }
    ]
  },
  {
    _id: 'hc-2',
    title: 'Community Health Awareness & Consultation',
    titleHindi: 'सामुदायिक स्वास्थ्य जागरूकता एवं परामर्श',
    description: 'Preventative healthcare awareness workshops with visiting doctors and medical professionals.',
    descriptionHindi: 'निवारक स्वास्थ्य देखभाल जागरूकता कार्यशालाएं जिनमें विशेषज्ञ चिकित्सक मार्गदर्शन प्रदान करते हैं।',
    image: '/images/placeholders/health-awareness.jpg',
    date: '2023',
    location: 'Delhi / Jaunsar Region',
    documents: []
  }
];

export const getHealthcarePrograms = async (req, res) => {
  try {
    const items = await HealthcareProgram.find().sort({ createdAt: -1 });
    if (!items || items.length === 0) {
      return res.status(200).json({ success: true, data: sampleHealthcare });
    }
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(200).json({ success: true, data: sampleHealthcare });
  }
};
