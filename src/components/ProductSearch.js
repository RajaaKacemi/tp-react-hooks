import React, { useContext } from 'react';
import { LanguageContext, SeachContext, ThemeContext } from '../App';
import useDebounce from '../hooks/useDebounce';
import data from "../data/data.json";

const ProductSearch = () => {
  const { searchTerm, setSearchTerm } = useContext(SeachContext);
  const { isDarkTheme } = useContext(ThemeContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  const { isLanguage } = useContext(LanguageContext)
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  const debouncedSearchValue = useDebounce(searchTerm, 1000)

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={data[isLanguage].searchPlaceholder}
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;