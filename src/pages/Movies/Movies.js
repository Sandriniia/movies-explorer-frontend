import React, { useState } from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import movies_api from '../../utils/MoviesApi';

function Movies({ onAccountButton, isLogged, onSaveMovie, onDeleteMovie, savedMovies }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  function handleGetMovies(filterData) {
    movies_api
      .getMovies()
      .then((movies) => {
        setIsLoading(true);
        setError(null);
        return movies;
      })
      .then((movies) => {
        return movies.filter((movie) => {
          return movie?.nameRU.toLowerCase().includes(filterData.toLowerCase());
        });
      })
      .then((filteredMov) => {
        if (filteredMov.length === 0) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
        setMovies(filteredMov);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }

  return (
    <div className='movies'>
      <Header onAccountButton={onAccountButton} isLogged={isLogged} />
      <SearchForm onGetMovies={handleGetMovies} />
      <MoviesCardList
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
        movies={movies}
        isLoading={isLoading}
        error={error}
        isEmpty={isEmpty}
      />
      <Footer />
    </div>
  );
}

export default Movies;
