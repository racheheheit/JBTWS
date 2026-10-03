import EducationProgram from '../models/Education.js';

const sampleEducation = [
  {
    _id: 'edu-1',
    title: 'Classroom & Infrastructure Welfare Drive',
    titleHindi: 'कक्षा एवं अवसंरचना कल्याण अभियान',
    description: 'Supporting village school infrastructure and distributing essential learning tools for students.',
    descriptionHindi: 'ग्रामीण स्कूल अवसंरचना का समर्थन और छात्रों के लिए आवश्यक शिक्षण सामग्री का वितरण।',
    image: '/images/placeholders/classroom-support.jpg',
    date: '2023',
    location: 'Delhi & Jaunsar Region'
  },
  {
    _id: 'edu-2',
    title: 'Student Guidance & Mentorship Forum',
    titleHindi: 'छात्र मार्गदर्शन एवं मेंटरशिप मंच',
    description: 'Mentorship programs guiding youth towards higher education and competitive examinations.',
    descriptionHindi: 'युवाओं को उच्च शिक्षा और प्रतियोगी परीक्षाओं के लिए मार्गदर्शन देने वाले मेंटरशिप कार्यक्रम।',
    image: '/images/placeholders/student-guidance.jpg',
    date: '2023',
    location: 'Delhi'
  }
];

export const getEducationPrograms = async (req, res) => {
  try {
    const items = await EducationProgram.find().sort({ createdAt: -1 });
    if (!items || items.length === 0) {
      return res.status(200).json({ success: true, data: sampleEducation });
    }
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(200).json({ success: true, data: sampleEducation });
  }
};
