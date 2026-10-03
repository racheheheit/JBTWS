import Gallery from '../models/Gallery.js';

const sampleGallery = [
  {
    _id: 'gal-1',
    title: 'Traditional Wooden Architecture & Mahasu Devta Temple',
    titleHindi: 'पारंपरिक काष्ठ कला एवं महासू देवता मंदिर',
    description: 'Intricate carved wooden pillars and slate roof temples unique to Jaunsar-Bawar.',
    category: 'TEMPLES',
    image: '/images/placeholders/temple-architecture.jpg',
    year: '2023',
    location: 'Hanol, Jaunsar-Bawar'
  },
  {
    _id: 'gal-2',
    title: 'Harul Folk Dance Celebration',
    titleHindi: 'हारुल लोक नृत्य समारोह',
    description: 'Traditional community dance performed in vibrant customary attire.',
    category: 'FESTIVALS',
    image: '/images/placeholders/folk-dance.jpg',
    year: '2023',
    location: 'Jaunsar Region'
  },
  {
    _id: 'gal-3',
    title: '17th Free Medical Camp Consultation',
    titleHindi: '17वां नि:शुल्क स्वास्थ्य परामर्श शिविर',
    description: 'Doctors providing free checkups and health consultations to community members.',
    category: 'HEALTHCARE',
    image: '/images/placeholders/medical-camp-doctors.jpg',
    year: '2023',
    location: 'Delhi'
  },
  {
    _id: 'gal-4',
    title: 'Community Classroom Initiative',
    titleHindi: 'सामुदायिक कक्षा एवं शिक्षा पहल',
    description: 'Youth education and awareness program for children.',
    category: 'EDUCATION',
    image: '/images/placeholders/classroom-children.jpg',
    year: '2023',
    location: 'Delhi'
  },
  {
    _id: 'gal-5',
    title: 'Terraced Himalayan Agriculture & Harvest',
    titleHindi: 'सीढ़ीदार कृषि एवं पारंपरिक फसल',
    description: 'Step farming traditions on the slopes of the Himalayas.',
    category: 'CULTURE',
    image: '/images/placeholders/terraced-farming.jpg',
    year: '2023',
    location: 'Jaunsar Valleys'
  },
  {
    _id: 'gal-6',
    title: 'Intergenerational Community Gathering',
    titleHindi: 'अंतर-पीढ़ीगत सामुदायिक मिलन',
    description: 'Elders and youth uniting to preserve cultural heritage in Delhi.',
    category: 'PEOPLE',
    image: '/images/placeholders/community-gathering.jpg',
    year: '2023',
    location: 'Delhi'
  }
];

export const getGallery = async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    if (!items || items.length === 0) {
      return res.status(200).json({ success: true, data: sampleGallery });
    }
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(200).json({ success: true, data: sampleGallery });
  }
};

export const createGalleryItem = async (req, res) => {
  try {
    const newItem = await Gallery.create(req.body);
    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteGalleryItem = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Gallery item deleted' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
