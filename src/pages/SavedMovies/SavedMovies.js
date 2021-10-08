import React, { createContext, useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useFilterMovies from '../../hooks/useFilterMovies';

export const SavedMoviesContext = createContext();

function SavedMovies({
  onAccountButton,
  isLogged,
  onDeleteMovie,
  savedMovies,
  isShortFilmsButtonOn,
  isLoading,
  onChangeSearchData,
  searchData,
}) {
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  const { filteredMovies, filterByNameAndDuration, filterByName, filterByDuration, isEmpty } =
    useFilterMovies();

  const filterSavedMovies = () => {
    if (isShortFilmsButtonOn) {
      filterByNameAndDuration(savedMovies, searchData);
    } else {
      filterByName(savedMovies, searchData);
    }
  };

  const shortFilmsFilter = () => {
    if (filteredMovies.length !== 0 && !isShortFilmsButtonOn) {
      filterByDuration();
    } else if (filteredMovies.length !== 0 && isShortFilmsButtonOn) {
      filterByName(savedMovies, searchData);
    }
  };

  useEffect(() => {
    setFilteredSavedMovies(filteredMovies);
  }, [filteredMovies]);

  return (
    <>
      <Header onAccountButton={onAccountButton} isLogged={isLogged} />
      <SearchForm
        onFilterSavedMovies={filterSavedMovies}
        searchData={searchData}
        onChangeSearchData={onChangeSearchData}
        onShortFilmsFilter={shortFilmsFilter}
      />
      <MoviesCardList
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
        filteredSavedMovies={filteredSavedMovies}
        isEmpty={isEmpty}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
