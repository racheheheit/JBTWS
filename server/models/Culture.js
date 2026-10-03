import mongoose from 'mongoose';

const cultureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleHindi: { type: String, required: true },
    description: { type: String, required: true },
    descriptionHindi: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['Architecture', 'Folk Dance', 'Traditional Dress', 'Festivals', 'Food', 'Agriculture', 'Rituals', 'Community Life']
    },
    image: { type: String, default: '/images/placeholders/culture-default.jpg' },
    date: { type: String, default: '' },
    location: { type: String, default: 'Jaunsar-Bawar Region' }
  },
  { timestamps: true }
);

export default mongoose.model('CulturalActivity', cultureSchema);
