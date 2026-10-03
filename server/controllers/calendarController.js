import Calendar from '../models/Calendar.js';

const sampleCalendar2023 = {
  year: '2023',
  document: '/documents/2023_Jaunsar_Bawar_Calendar.pdf',
  months: [
    {
      monthName: 'January - February',
      monthNameHindi: 'जनवरी - फरवरी',
      theme: 'Temples, Traditional Dance & Community Life',
      themeHindi: 'मंदिर, पारंपरिक नृत्य एवं सामुदायिक जीवन',
      description: 'Highlighting sacred Pahari temple rituals, Mahasu Devta reverence, and winter community folk dances.',
      descriptionHindi: 'पवित्र पहाड़ी मंदिर अनुष्ठानों, महासू देवता की भक्ति और शीतकालीन लोक नृत्यों का चित्रण।',
      image: '/images/placeholders/calendar-jan-feb.jpg'
    },
    {
      monthName: 'March - April',
      monthNameHindi: 'मार्च - अप्रैल',
      theme: 'Agricultural Traditions & Spring Festivals (Bissu)',
      themeHindi: 'कृषि परंपराएं एवं बिस्सू पर्व',
      description: 'Celebrating terrace agriculture, sowing traditions, and spring folk festivities.',
      descriptionHindi: 'सीढ़ीदार कृषि, बुवाई की परंपराओं और वसंत लोक उत्सवों का उत्सव।',
      image: '/images/placeholders/calendar-mar-apr.jpg'
    },
    {
      monthName: 'May - June',
      monthNameHindi: 'मई - जून',
      theme: 'Community Initiatives & Healthcare Activities',
      themeHindi: 'सामुदायिक पहल एवं स्वास्थ्य सेवाएं',
      description: 'Documenting free health checkup camps, social gatherings, and youth activities.',
      descriptionHindi: 'निःशुल्क स्वास्थ्य जांच शिविरों, सामाजिक समारोहों और युवा गतिविधियों का विवरण।',
      image: '/images/placeholders/calendar-may-jun.jpg'
    },
    {
      monthName: 'July - August',
      monthNameHindi: 'जुलाई - अगस्त',
      theme: 'Himalayan Landscapes & Traditional Architecture',
      themeHindi: 'हिमालयी परिदृश्य एवं पारंपरिक वास्तुकला',
      description: 'Monsoon Himalayan mountain vistas, slate roofs, and wooden carving heritage.',
      descriptionHindi: 'मानसून के दौरान हिमालयी पर्वत के दृश्य, स्लेट की छतें और काष्ठ नक्काशी की धरोहर।',
      image: '/images/placeholders/calendar-jul-aug.jpg'
    },
    {
      monthName: 'September - October',
      monthNameHindi: 'सितंबर - अक्टूबर',
      theme: 'Religious Gatherings & Cultural Heritage',
      themeHindi: 'धार्मिक आयोजन एवं सांस्कृतिक विरासत',
      description: 'Autumn pilgrimages, community feasts, and traditional music performances.',
      descriptionHindi: 'शरद कालीन तीर्थयात्राएं, सामुदायिक भोज और पारंपरिक संगीत प्रदर्शन।',
      image: '/images/placeholders/calendar-sep-oct.jpg'
    },
    {
      monthName: 'November - December',
      monthNameHindi: 'नवंबर - दिसंबर',
      theme: 'Traditional Occupations & Youth Empowerment',
      themeHindi: 'पारंपरिक व्यवसाय एवं युवा सशक्तिकरण',
      description: 'Wool spinning, traditional craftsmanship, and intergenerational education programs.',
      descriptionHindi: 'ऊन कताई, पारंपरिक शिल्प कौशल और अंतर-पीढ़ीगत शिक्षा कार्यक्रम।',
      image: '/images/placeholders/calendar-nov-dec.jpg'
    }
  ]
};

export const getCalendarByYear = async (req, res) => {
  try {
    const year = req.params.year || '2023';
    const item = await Calendar.findOne({ year });
    if (!item) {
      return res.status(200).json({ success: true, data: sampleCalendar2023 });
    }
    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(200).json({ success: true, data: sampleCalendar2023 });
  }
};
