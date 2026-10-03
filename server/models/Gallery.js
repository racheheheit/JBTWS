import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleHindi: { type: String, required: true },
    description: { type: String, default: '' },
    category: {
      type: String,
      required: true,
      enum: ['CULTURE', 'TEMPLES', 'FESTIVALS', 'HEALTHCARE', 'EDUCATION', 'COMMUNITY', 'ENVIRONMENT', 'PEOPLE']
    },
    image: { type: String, required: true },
    year: { type: String, default: '2023' },
    location: { type: String, default: 'Jaunsar-Bawar / Delhi' }
  },
  { timestamps: true }
);

export default mongoose.model('Gallery', gallerySchema);
