import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import './MoviesCardList.css';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import Loading from '../../components/Loading/Loading';

function MoviesCardList({
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
  movies,
  isLoading,
  error,
  isEmpty,
  limitMovies,
  onRemoveMovies,
  filteredSavedMovies,
  isFilteredSavedMoviesEmpty,
}) {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const getIsLiked = (movieId) => {
    const savedMoviesIds = savedMovies.map((movie) => movie.movieId);
    return savedMoviesIds.includes(movieId);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isEmpty) {
    return <p className='movies-list__text'>Nothing found.</p>;
  }

  if (error) {
    return (
      <p className='movies-list__text'>
        Something went wrong. There may be a connection problem or the server is unavailable. Please
        wait a bit and try again.
      </p>
    );
  }

  if (isFilteredSavedMoviesEmpty) {
    return <p>No matches.</p>;
  }

  return (
    <div className='movies-list'>
      <div className='movies-list__container'>
        {path === '/movies' && (
          <>
            {movies?.map((movie) => {
              return (
                <MoviesCard
                  onDeleteMovie={onDeleteMovie}
                  onSaveMovie={onSaveMovie}
                  key={movie.id}
                  title={movie.nameEN}
                  duration={movie.duration}
                  movie={movie}
                  isLiked={getIsLiked(movie.id)}
                  trailer={movie.trailerLink}
                  image={`https://api.nomoreparties.co${movie.image.url}`}
                />
              );
            })}
          </>
        )}
        {path === '/saved-movies' &&
        filteredSavedMovies.length === 0 &&
        !isFilteredSavedMoviesEmpty ? (
          <>
            {savedMovies?.map((savedMovie) => {
              return (
                <MoviesCard
                  onDeleteMovie={onDeleteMovie}
                  key={savedMovie.movieId}
                  title={savedMovie.nameEN}
                  duration={savedMovie.duration}
                  savedMovie={savedMovie}
                  image={savedMovie.thumbnail}
                  trailer={savedMovie.trailer}
                />
              );
            })}
          </>
        ) : (
          <>
            {filteredSavedMovies?.map((savedMovie) => {
              return (
                <MoviesCard
                  onDeleteMovie={onDeleteMovie}
                  key={savedMovie.movieId}
                  title={savedMovie.nameEN}
                  duration={savedMovie.duration}
                  savedMovie={savedMovie}
                  image={savedMovie.thumbnail}
                />
              );
            })}
          </>
        )}
      </div>
      {path === '/movies' && limitMovies.length > 0 && (
        <button onClick={onRemoveMovies} type='submit' className='movies-list__button'>
          Next
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
