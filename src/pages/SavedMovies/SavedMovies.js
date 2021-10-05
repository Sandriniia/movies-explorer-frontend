import React, { createContext, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export const SavedMoviesContext = createContext();

function SavedMovies({
  onAccountButton,
  isLogged,
  onDeleteMovie,
  savedMovies,
  isShortFilmsButtonOn,
}) {
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isFilteredSavedMoviesEmpty, setIsFilteredSavedMoviesEmpty] = useState(false);

  const filterSavedMovies = (filterData) => {
    const filter = savedMovies.filter((savedMovie) => {
      if (isShortFilmsButtonOn) {
        return (
          savedMovie?.nameRU.toLowerCase().includes(filterData.toLowerCase()) &&
          savedMovie.duration <= 40
        );
      }
      return savedMovie?.nameRU.toLowerCase().includes(filterData.toLowerCase());
    });
    if (filter.length === 0) {
      setIsFilteredSavedMoviesEmpty(true);
    } else {
      setIsFilteredSavedMoviesEmpty(false);
      setFilteredSavedMovies(filter);
    }
  };
  return (
    <>
      <Header onAccountButton={onAccountButton} isLogged={isLogged} />
      <SearchForm onFilterSavedMovies={filterSavedMovies} />
      <MoviesCardList
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
        filteredSavedMovies={filteredSavedMovies}
        isFilteredSavedMoviesEmpty={isFilteredSavedMoviesEmpty}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
