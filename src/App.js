import React, { createContext, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';

// TODO: Exercice 2.1 - Créer le LanguageContext

export const ThemeContext = createContext();
export const SeachContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSearchTerm, setSearchTerm ] = useState();
  // TODO: Exercice 2.2 - Ajouter l'état pour la langue
  const [isLanguage, setLanguage] = useState("FR");

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <LanguageContext.Provider value={{ isLanguage, setLanguage}}>
      {/* TODO: Exercice 2.1 - Wrapper avec LanguageContext.Provider */}
      <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
        <header className="my-4">
          <h1 className="text-center">Catalogue de Produits</h1>
          <div className="d-flex justify-content-end gap-2">
            <ThemeToggle />
            {/* TODO: Exercice 2.2 - Ajouter le sélecteur de langue */}
            <LanguageToggle />
          </div>
        </header>
        <main>
        <SeachContext.Provider value={{ isSearchTerm, setSearchTerm }}>
          <ProductSearch />
          <ProductList />
        </SeachContext.Provider>
        </main>
      </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App
