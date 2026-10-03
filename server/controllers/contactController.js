import ContactMessage from '../models/Contact.js';

let inMemoryMessages = [];

export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required' });
    }

    try {
      const contactMsg = await ContactMessage.create({ name, email, phone, message });
      return res.status(201).json({
        success: true,
        message: 'Your message has been sent successfully',
        data: contactMsg
      });
    } catch (dbErr) {
      const fallbackMsg = { _id: Date.now().toString(), name, email, phone, message, createdAt: new Date() };
      inMemoryMessages.push(fallbackMsg);
      return res.status(201).json({
        success: true,
        message: 'Your message has been sent successfully',
        data: fallbackMsg
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error while sending message' });
  }
};

export const getContactMessages = async (req, res) => {
  try {
    const list = await ContactMessage.find().sort({ createdAt: -1 });
    if (!list || list.length === 0) {
      return res.status(200).json({ success: true, data: inMemoryMessages });
    }
    res.status(200).json({ success: true, data: list });
  } catch (error) {
    res.status(200).json({ success: true, data: inMemoryMessages });
  }
};
