import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    attractions: 'Attractions',
    itineraries: 'Itineraries',
    events: 'Events & Festivals',
    blog: 'Blog',
    travelInfo: 'Travel Info',
    exploreNamsai: 'Explore Namsai',
    planVisit: 'Plan Your Visit',
    welcome: 'Welcome to Namsai',
    tagline: 'Discover the hidden gem of Northeast India',
  },
  hi: {
    home: 'मुख्य पृष्ठ',
    about: 'हमारे बारे में',
    attractions: 'आकर्षण',
    itineraries: 'यात्रा योजनाएं',
    events: 'कार्यक्रम और त्यौहार',
    blog: 'ब्लॉग',
    travelInfo: 'यात्रा जानकारी',
    exploreNamsai: 'नामसाई का अन्वेषण करें',
    planVisit: 'अपनी यात्रा की योजना बनाएं',
    welcome: 'नामसाई में आपका स्वागत है',
    tagline: 'उत्तर पूर्व भारत के छिपे हुए रत्न की खोज करें',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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