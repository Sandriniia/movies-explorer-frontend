import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useFilterMovies from '../../hooks/useFilterMovies';

function Movies({
  onAccountButton,
  isLogged,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  width,
  isShortFilmsButtonOn,
  error,
  initialMovies,
  onChangeSearchData,
  searchData,
}) {
  const [movies, setMovies] = useState([]);
  const [moviesNumber, setMoviesNumber] = useState(null);
  const [indexMovie, setIndexMovie] = useState(null);
  const [limitMovies, setLimitMovies] = useState([]);

  const {
    filteredMovies,
    filterByNameAndDuration,
    filterByName,
    filterByDuration,
    isEmpty,
    isLoading,
  } = useFilterMovies();

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

  function handleFilterMovies() {
    if (isShortFilmsButtonOn) {
      filterByNameAndDuration(initialMovies, searchData);
    } else {
      filterByName(initialMovies, searchData);
    }
  }

  const shortFilmsFilter = () => {
    if (filteredMovies.length !== 0 && !isShortFilmsButtonOn) {
      filterByDuration();
    } else if (filteredMovies.length !== 0 && isShortFilmsButtonOn) {
      filterByName(initialMovies, searchData);
    }
  };

  // useEffect(() => {
  //   if (movies.length !== 0) {
  //     if (filteredMovies.length !== 0 && isShortFilmsButtonOn) {
  //       filterByDuration();
  //     } else if (filteredMovies.length !== 0 && !isShortFilmsButtonOn) {
  //       filterByName(initialMovies, searchData);
  //     }
  //   }
  // }, [
  //   movies,
  //   isShortFilmsButtonOn,
  //   filteredMovies.length,
  //   filterByDuration,
  //   filterByName,
  //   initialMovies,
  //   searchData,
  // ]);

  useEffect(() => {
    if (filteredMovies.length <= moviesNumber) {
      setLimitMovies([]);
      setMovies(filteredMovies);
    } else if (filteredMovies.length > moviesNumber) {
      let limit = [];
      setMovies(
        filteredMovies.filter((m, i) => {
          if (i <= moviesNumber - 1) {
            return m;
          } else if (i > moviesNumber - 1) {
            limit.push(m);
            setLimitMovies(limit);
          }
        }),
      );
    }
  }, [filteredMovies, moviesNumber]);

  return (
    <div className='movies'>
      <Header onAccountButton={onAccountButton} isLogged={isLogged} />
      <SearchForm
        onFilterMovies={handleFilterMovies}
        onChangeSearchData={onChangeSearchData}
        searchData={searchData}
        onShortFilmsFilter={shortFilmsFilter}
      />
      <MoviesCardList
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
        movies={movies}
        error={error}
        isEmpty={isEmpty}
        isLoading={isLoading}
        limitMovies={limitMovies}
        onRemoveMovies={addAndRemoveMovies}
      />
      <Footer />
    </div>
  );
}

export default Movies;
