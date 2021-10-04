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
    return <p>Ничего не найдено.</p>;
  }

  if (error) {
    return (
      <p>
        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз
      </p>
    );
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
                  title={movie.nameRU}
                  duration={movie.duration}
                  movie={movie}
                  isLiked={getIsLiked(movie.id)}
                  image={`https://api.nomoreparties.co${movie.image.url}`}
                />
              );
            })}
          </>
        )}
        {path === '/saved-movies' && (
          <>
            {savedMovies?.map((savedMovie) => {
              return (
                <MoviesCard
                  onDeleteMovie={onDeleteMovie}
                  key={savedMovie.movieId}
                  title={savedMovie.nameRU}
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
          Еще
        </button>
      )}
    </div>
  );
}

export default MoviesCardList;
