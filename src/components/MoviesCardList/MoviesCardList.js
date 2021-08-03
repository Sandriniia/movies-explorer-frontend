//  компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством.
//  На странице поиска при отправке формы поиска делается запрос на Beatfilm api
// получаем все данные с сервера и после этого фильтруем и отображаем результат.
// Все полученные данные сохраняются в переменной и обновляются в хранилище
// При нажатии кнопки сохранить отправляется запрос к movies нашего api
// При повторном нажатии этой кнопки, фильм удаляется

import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import data from '../../utils/data.json';

function MoviesCardList() {
  return (
    <div className='movies-list'>
      <div className='movies-list__container'>
        {data?.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              title={movie.title}
              duration={movie.duration}
              image={movie.image}
            />
          );
        })}
      </div>
      <button type='submit' className='movies-list__button'>
        Еще
      </button>
    </div>
  );
}

export default MoviesCardList;
