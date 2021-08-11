import React, { useState } from 'react';
import './SearchForm.css';
import search_button from '../../images/find.png';
import short_films_on from '../../images/short-films-on.png';
import short_films_off from '../../images/short-films-off.png';

function SearchForm() {
  const [isButtonOn, setIsButtonOn] = useState(false);

  const handleShortFilmsButtonClick = () => {
    setIsButtonOn(!isButtonOn);
  };
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__form'>
          <input
            className='search-form__input'
            type='text'
            autoFocus
            placeholder='Фильм'
            required
          />
          <button type='submit' className='search-form__button'>
            <img src={search_button} alt='loupe icon' className='search-form__icon' />
          </button>
        </form>
      </div>
      <div className='search-form__short-films-box'>
        <button className='search-form__short-films-button' onClick={handleShortFilmsButtonClick}>
          {isButtonOn ? (
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
        <p className='search-form__text'>Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
