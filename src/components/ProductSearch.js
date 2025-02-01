import React, { useContext } from 'react';
import { SeachContext, ThemeContext } from '../App';
import useDebounce from '../hooks/useDebounce';

const ProductSearch = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const { searchTerm, setSearchTerm } = useContext(SeachContext);
  const { isDarkTheme } = useContext(ThemeContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  const debouncedSearchValue = useDebounce(searchTerm, 1000)

  console.log(debouncedSearchValue)
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher un produit..."
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;