import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import './SearchForm.css';
import search_button from '../../images/find.png';
import FilterShortFilm from '../FilterCheckbox/FilterShortFilm';

function SearchForm({
  onFilterMovies,
  onFilterSavedMovies,
  onChangeSearchData,
  searchData,
  onShortFilmsFilter,
}) {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  function getFilterMovies(event) {
    event.preventDefault();
    if (searchData.length === 0) {
      setErrorMessage('Please enter a keyword');
    } else {
      setErrorMessage('');
      onFilterMovies();
    }
  }

  const getFilterSavedMovies = (event) => {
    event.preventDefault();
    if (searchData.length === 0) {
      setErrorMessage('Please enter a keyword');
    } else {
      setErrorMessage('');
      onFilterSavedMovies();
    }
  };

  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form
          className='search-form__form'
          noValidate
          onSubmit={path === '/movies' ? getFilterMovies : getFilterSavedMovies}
        >
          <input
            className='search-form__input'
            type='text'
            autoFocus
            placeholder='Movie'
            required
            value={searchData}
            onChange={onChangeSearchData}
          />
          <button type='submit' className='search-form__button'>
            <img src={search_button} alt='loupe icon' className='search-form__icon' />
          </button>
        </form>
        <p className='register__error-text'>{errorMessage}</p>
      </div>
      <FilterShortFilm onShortFilmsFilter={onShortFilmsFilter} />
    </section>
  );
}

export default SearchForm;
