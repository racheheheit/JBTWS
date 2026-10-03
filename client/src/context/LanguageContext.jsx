import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('jbtws_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('jbtws_lang', lang);
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const isHindi = lang === 'hi';

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, isHindi }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
