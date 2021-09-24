//  компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
//  На странице поиска при отправке формы поиска делается запрос на Beatfilm api
// получаем все данные с сервера и после этого фильтруем и отображаем результат.
// Все полученные данные сохраняются в переменной и обновляются в хранилище
// При нажатии кнопки сохранить отправляется запрос к movies нашего api
// При повторном нажатии этой кнопки, фильм удаляется

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import './MoviesCardList.css';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import useFetchMoviesData from '../../utils/MoviesApi';

function MoviesCardList({ onSaveMovie, onDeleteMovie, savedMovies }) {
  const { data, isLoading, error } = useFetchMoviesData();

  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const getIsLiked = (movieId) => {
    const savedMoviesIds = savedMovies.map((movie) => movie.movieId);
    return savedMoviesIds.includes(movieId);
  };

  return (
    <div className='movies-list'>
      <div className='movies-list__container'>
        {path === '/movies' && (
          <>
            {data?.map((movie) => {
              return (
                <MoviesCard
                  onDeleteMovie={onDeleteMovie}
                  onSaveMovie={onSaveMovie}
                  key={movie.id}
                  buttonId={movie.id}
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
                  key={savedMovie.id}
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
      <button type='submit' className='movies-list__button'>
        Еще
      </button>
    </div>
  );
}

export default MoviesCardList;
