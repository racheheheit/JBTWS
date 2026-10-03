import Event from '../models/Event.js';

// Seed initial events if DB is empty or disconnected
const sampleEvents = [
  {
    _id: 'evt-1',
    title: '17th Free Medical Camp',
    titleHindi: '17वां नि:शुल्क चिकित्सा शिविर',
    description: 'Specialist medical checkups, health consultation, and free medicine distribution for community members.',
    descriptionHindi: 'विशेषज्ञ चिकित्सा जांच, स्वास्थ्य परामर्श और समुदाय के लिए मुफ्त दवा वितरण।',
    category: 'Healthcare',
    date: '2023',
    location: 'Delhi / Jaunsar-Bawar',
    image: '/images/placeholders/medical-camp.jpg',
    status: 'published'
  },
  {
    _id: 'evt-2',
    title: 'Education Awareness & Infrastructure Drive',
    titleHindi: 'शिक्षा जागरूकता और अवसंरचना अभियान',
    description: 'Providing educational guidance, classroom support, and awareness initiatives for youth.',
    descriptionHindi: 'युवाओं के लिए शैक्षणिक मार्गदर्शन, कक्षा सहायता और जागरूकता पहल प्रदान करना।',
    category: 'Education',
    date: '2023',
    location: 'Delhi & Jaunsar-Bawar Region',
    image: '/images/placeholders/education-program.jpg',
    status: 'published'
  },
  {
    _id: 'evt-3',
    title: 'Jaunsar-Bawar Cultural Heritage Meet',
    titleHindi: 'जौनसार बावर सांस्कृतिक विरासत सम्मेलन',
    description: 'Annual traditional folk dance, music, and community gathering celebrating Pahari heritage.',
    descriptionHindi: 'पहाड़ी विरासत का जश्न मनाने वाला वार्षिक पारंपरिक लोक नृत्य, संगीत और सामुदायिक सभा।',
    category: 'Culture',
    date: '2023',
    location: 'Garhwal Bhawan, Delhi',
    image: '/images/placeholders/cultural-meet.jpg',
    status: 'published'
  },
  {
    _id: 'evt-4',
    title: 'Cleanliness & Environmental Awareness Drive',
    titleHindi: 'स्वच्छता एवं पर्यावरण जागरूकता अभियान',
    description: 'Community-led cleanliness campaign promoting sustainable living and environmental care.',
    descriptionHindi: 'सतत जीवन और पर्यावरण देखभाल को बढ़ावा देने वाला समुदाय संचालित स्वच्छता अभियान।',
    category: 'Environment',
    date: '2023',
    location: 'Jaunsar-Bawar Villages',
    image: '/images/placeholders/cleanliness-drive.jpg',
    status: 'published'
  }
];

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    if (!events || events.length === 0) {
      return res.status(200).json({ success: true, data: sampleEvents });
    }
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    res.status(200).json({ success: true, data: sampleEvents });
  }
};

export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      const sample = sampleEvents.find(e => e._id === req.params.id);
      return res.status(200).json({ success: true, data: sample || sampleEvents[0] });
    }
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    const sample = sampleEvents.find(e => e._id === req.params.id);
    res.status(200).json({ success: true, data: sample || sampleEvents[0] });
  }
};

export const createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json({ success: true, data: newEvent });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Event deleted' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
