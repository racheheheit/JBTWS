import mongoose from 'mongoose';

const healthcareSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleHindi: { type: String, required: true },
    description: { type: String, required: true },
    descriptionHindi: { type: String, required: true },
    image: { type: String, default: '/images/placeholders/healthcare-default.jpg' },
    date: { type: String, default: '' },
    location: { type: String, default: 'Delhi / Jaunsar-Bawar' },
    documents: [{ name: String, url: String }]
  },
  { timestamps: true }
);

export default mongoose.model('HealthcareProgram', healthcareSchema);
