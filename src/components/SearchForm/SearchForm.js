// форма поиска, куда пользователь будет вводить запрос.

import React from 'react';
import './SearchForm.css';
import loupe from '../../images/find.png';
import short_films_on from '../../images/short-films-on.png';
import short_films_off from '../../images/short-films-off.png';

function SearchForm() {
  const buttonOn = true;
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form'>
          <input className='search-form__input' type='text' autoFocus placeholder='Фильм' />
          <button type='submit' className='search-form__button'>
            <img src={loupe} alt='loupe icon' className='search-form__icon' />
          </button>
        </form>
        <p className='search-form__text'>Короткометражки</p>
        <button className='search-form__short-films-button'>
          {buttonOn ? (
            <img
              src={short_films_on}
              alt='Short films button on'
              className='search-form__short-films-icon'
            />
          ) : (
            <img
              src={short_films_off}
              alt='Short films button off'
              className='search-form__short-films-icon'
            />
          )}
        </button>
      </div>
      <div className='search-form__line'></div>
    </section>
  );
}

export default SearchForm;
