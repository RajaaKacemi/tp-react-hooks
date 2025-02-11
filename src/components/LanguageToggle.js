import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const ThemeToggle = () => {
  const { isLanguage, setLanguage } = useContext(LanguageContext);
  
  return (
    <button
      onClick={() => setLanguage((isLanguage) =>
        isLanguage === 'FR' ? 'ENG' : 'FR'
    )}
      className={`px-5 py-2 rounded ${
        isLanguage 
          ? 'bg-dark text-light border border-light' 
          : 'bg-light text-dark border border-dark'
      }`}
    >
      {isLanguage === 'FR' ? 'ENG' : 'FR'}
    </button>
  );
};

export default ThemeToggle;