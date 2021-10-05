import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import './SearchForm.css';
import search_button from '../../images/find.png';
import FilterShortFilm from '../FilterCheckbox/FilterShortFilm';

function SearchForm({ onGetMovies, onFilterSavedMovies }) {
  const location = useLocation();

  const [filterData, setFilterData] = useState('');
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const handleChange = (event) => {
    setFilterData(event.target.value);
  };

  const getFilterMovies = (event) => {
    event.preventDefault();
    onGetMovies(filterData);
  };

  const getFilterSavedMovies = (event) => {
    event.preventDefault();
    onFilterSavedMovies(filterData);
  };

  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form
          className='search-form__form'
          onSubmit={path === '/movies' ? getFilterMovies : getFilterSavedMovies}
        >
          <input
            className='search-form__input'
            type='text'
            autoFocus
            placeholder='Фильм'
            required
            value={filterData}
            onChange={handleChange}
          />
          <button type='submit' className='search-form__button'>
            <img src={search_button} alt='loupe icon' className='search-form__icon' />
          </button>
        </form>
      </div>
      <FilterShortFilm />
    </section>
  );
}

export default SearchForm;
