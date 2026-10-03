import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    titleHindi: { type: String, required: true },
    description: { type: String, required: true },
    descriptionHindi: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['Healthcare', 'Education', 'Culture', 'Community', 'Environment']
    },
    date: { type: String, default: 'TBD' },
    location: { type: String, default: 'Delhi / Jaunsar-Bawar' },
    image: { type: String, default: '/images/placeholders/event-default.jpg' },
    status: { type: String, enum: ['published', 'draft'], default: 'published' }
  },
  { timestamps: true }
);

export default mongoose.model('Event', eventSchema);
