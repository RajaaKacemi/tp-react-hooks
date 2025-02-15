import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeToggle = () => {
  const { isLanguage, setLanguage } = useContext(LanguageContext);
  const [localStorage, setLocalStorage] = useLocalStorage('language', '');
  
  return (
    <button
      onClick={() => {
        const newLanguage = isLanguage === 'FR' ? 'ENG' : 'FR';
        setLanguage(newLanguage);
        setLocalStorage(newLanguage);
      }}

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