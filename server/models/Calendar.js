import mongoose from 'mongoose';

const calendarSchema = new mongoose.Schema(
  {
    year: { type: String, required: true, unique: true },
    months: [
      {
        monthName: String,
        monthNameHindi: String,
        theme: String,
        themeHindi: String,
        description: String,
        descriptionHindi: String,
        image: String
      }
    ],
    document: { type: String, default: '/documents/2023_Jaunsar_Bawar_Calendar.pdf' }
  },
  { timestamps: true }
);

export default mongoose.model('Calendar', calendarSchema);
