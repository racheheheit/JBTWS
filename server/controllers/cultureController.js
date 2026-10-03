import CulturalActivity from '../models/Culture.js';

const sampleCulture = [
  {
    _id: 'cul-1',
    title: 'Himalayan Architecture & Temples',
    titleHindi: 'हिमालयी वास्तुकला एवं मंदिर',
    description: 'Ancient wooden temple architecture characterized by Kath-Kuni style and intricate carvings.',
    descriptionHindi: 'काठ-कूनी शैली और जटिल नक्काशी की विशेषता वाली प्राचीन काष्ठ मंदिर वास्तुकला।',
    category: 'Architecture',
    image: '/images/placeholders/culture-architecture.jpg',
    location: 'Hanol & Chakrata'
  },
  {
    _id: 'cul-2',
    title: 'Harul & Thandya Folk Dances',
    titleHindi: 'हारुल और थांड्या लोक नृत्य',
    description: 'Vibrant ritual and community folk dances performed in traditional brass jewelry and woolen attire.',
    descriptionHindi: 'पारंपरिक पीतल के आभूषणों और ऊनी कपड़ों में किए जाने वाले जीवंत सांस्कृतिक लोक नृत्य।',
    category: 'Folk Dance',
    image: '/images/placeholders/culture-dance.jpg',
    location: 'Jaunsar-Bawar Region'
  },
  {
    _id: 'cul-3',
    title: 'Traditional Attire & Jewelry',
    titleHindi: 'पारंपरिक पोशाक एवं आभूषण',
    description: 'Handwoven woolen coats, caps (topi), and silver/brass ornaments worn during festivities.',
    descriptionHindi: 'उत्सवों के दौरान पहने जाने वाले हस्तनिर्मित ऊनी कोट, टोपी और चांदी/पीतल के आभूषण।',
    category: 'Traditional Dress',
    image: '/images/placeholders/culture-dress.jpg',
    location: 'Jaunsar-Bawar Region'
  },
  {
    _id: 'cul-4',
    title: 'Bissu & Magh Festivals',
    titleHindi: 'बिस्सू एवं माघ पर्व',
    description: 'Spring and winter community festivals marked by traditional feasts and sacred gatherings.',
    descriptionHindi: 'पारंपरिक दावतों और पवित्र समारोहों द्वारा मनाए जाने वाले वसंत और शीतकालीन उत्सव।',
    category: 'Festivals',
    image: '/images/placeholders/culture-festivals.jpg',
    location: 'Jaunsar-Bawar Region'
  }
];

export const getCultureActivities = async (req, res) => {
  try {
    const items = await CulturalActivity.find().sort({ createdAt: -1 });
    if (!items || items.length === 0) {
      return res.status(200).json({ success: true, data: sampleCulture });
    }
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(200).json({ success: true, data: sampleCulture });
  }
};
