import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    areaOfInterest: {
      type: String,
      required: true,
      enum: ['Healthcare', 'Education', 'Cultural activities', 'Community programs', 'Environment', 'Other']
    },
    message: { type: String, default: '' }
  },
  { timestamps: true }
);

export default mongoose.model('Volunteer', volunteerSchema);
