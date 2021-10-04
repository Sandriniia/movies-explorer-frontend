import React, { useState } from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import movies_api from '../../utils/MoviesApi';

function Movies({ onAccountButton, isLogged, onSaveMovie, onDeleteMovie, savedMovies }) {
  const [movies, setMovies] = useState([]);
  const [limitMovies, setLimitMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  const removeMovies = () => {
    let l = [];
    limitMovies.filter((m, i) => {
      if (i <= 3) {
        l.push(m);
        setMovies([...movies, ...l]);
      }
    });
    limitMovies.splice(0, 4);
    setLimitMovies(limitMovies);
  };

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
        } else if (filteredMov.length <= 16) {
          setIsEmpty(false);
          setLimitMovies([]);
          setMovies(filteredMov);
        } else if (filteredMov.length > 16) {
          setIsEmpty(false);
          let limit = [];
          setMovies(
            filteredMov.filter((m, i) => {
              if (i <= 15) {
                return m;
              } else if (i > 15) {
                limit.push(m);
                setLimitMovies(limit);
              }
            }),
          );
        } else {
          setIsEmpty(false);
        }
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
        limitMovies={limitMovies}
        onRemoveMovies={removeMovies}
      />
      <Footer />
    </div>
  );
}

export default Movies;
