import React, { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../App';
import data from "../data/data.json";

const ProductSearch = ({ setSearchTerm }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  const { isLanguage } = useContext(LanguageContext)
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce

  return (
    <div className="mb-4">
      <input
        type="text"
        // value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={data[isLanguage].searchPlaceholder}
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;