import Volunteer from '../models/Volunteer.js';

let inMemoryVolunteers = [];

export const submitVolunteer = async (req, res) => {
  try {
    const { name, email, phone, city, areaOfInterest, message } = req.body;
    if (!name || !email || !phone || !city || !areaOfInterest) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    try {
      const volunteer = await Volunteer.create({ name, email, phone, city, areaOfInterest, message });
      return res.status(201).json({
        success: true,
        message: 'Volunteer application submitted successfully',
        data: volunteer
      });
    } catch (dbErr) {
      // Fallback if DB is disconnected
      const fallbackVolunteer = { _id: Date.now().toString(), name, email, phone, city, areaOfInterest, message, createdAt: new Date() };
      inMemoryVolunteers.push(fallbackVolunteer);
      return res.status(201).json({
        success: true,
        message: 'Volunteer application submitted successfully (stored)',
        data: fallbackVolunteer
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error while submitting application' });
  }
};

export const getVolunteers = async (req, res) => {
  try {
    const list = await Volunteer.find().sort({ createdAt: -1 });
    if (!list || list.length === 0) {
      return res.status(200).json({ success: true, data: inMemoryVolunteers });
    }
    res.status(200).json({ success: true, data: list });
  } catch (error) {
    res.status(200).json({ success: true, data: inMemoryVolunteers });
  }
};
