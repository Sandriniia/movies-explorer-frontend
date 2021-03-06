import React, { useContext } from 'react';
import './FilterShortFilm.css';
import short_films_on from '../../images/short-films-on.png';
import short_films_off from '../../images/short-films-off.png';
import { ShortFilmsContext } from '../App/App';

function FilterShortFilm({ onShortFilmsFilter }) {
  const shortFilmsCtx = useContext(ShortFilmsContext);
  const onShortFilmsButtonClick = shortFilmsCtx.handleShortFilmsButtonClick;
  const isButtonOn = shortFilmsCtx.isShortFilmsButtonOn;

  const handleShortFilmsButtonClick = () => {
    onShortFilmsButtonClick();
    onShortFilmsFilter();
  };

  return (
    <div className='short-films'>
      <button className='short-films__button' onClick={handleShortFilmsButtonClick}>
        {isButtonOn ? (
          <img src={short_films_on} alt='Short films button on' className='short-films__icon' />
        ) : (
          <img src={short_films_off} alt='Short films button off' className='short-films__icon' />
        )}
      </button>
      <p className='short-films__text'>shorts</p>
    </div>
  );
}

export default FilterShortFilm;
