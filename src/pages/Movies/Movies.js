// компонент страницы с поиском по фильмам

import React from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <div className='movies'>
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}

export default Movies;
