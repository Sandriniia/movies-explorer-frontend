import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import movies_api from '../../utils/MoviesApi';

function Movies({ onAccountButton, isLogged, onSaveMovie, onDeleteMovie, savedMovies, width }) {
  const [movies, setMovies] = useState([]);
  const [moviesNumber, setMoviesNumber] = useState(null);
  const [indexMovie, setIndexMovie] = useState(null);
  const [limitMovies, setLimitMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (width >= 1215) {
      setMoviesNumber(16);
      setIndexMovie(3);
    } else if (width >= 925) {
      setMoviesNumber(12);
      setIndexMovie(2);
    } else if (width >= 625) {
      setMoviesNumber(8);
      setIndexMovie(1);
    } else if (width < 625) {
      setMoviesNumber(5);
      setIndexMovie(0);
    }
  }, [width]);

  const addAndRemoveMovies = () => {
    let l = [];
    limitMovies.filter((m, i) => {
      if (i <= indexMovie) {
        l.push(m);
        setMovies([...movies, ...l]);
      }
    });
    limitMovies.splice(0, indexMovie + 1);
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
        } else if (filteredMov.length <= moviesNumber) {
          setIsEmpty(false);
          setLimitMovies([]);
          setMovies(filteredMov);
        } else if (filteredMov.length > moviesNumber) {
          setIsEmpty(false);
          let limit = [];
          setMovies(
            filteredMov.filter((m, i) => {
              if (i <= moviesNumber - 1) {
                return m;
              } else if (i > moviesNumber - 1) {
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
        onRemoveMovies={addAndRemoveMovies}
      />
      <Footer />
    </div>
  );
}

export default Movies;
