import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleHindi: { type: String, required: true },
    description: { type: String, required: true },
    descriptionHindi: { type: String, required: true },
    image: { type: String, default: '/images/placeholders/education-default.jpg' },
    date: { type: String, default: '' },
    location: { type: String, default: 'Delhi / Jaunsar-Bawar' }
  },
  { timestamps: true }
);

export default mongoose.model('EducationProgram', educationSchema);
