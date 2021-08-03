// компонент одной карточки фильма.

import React, { useState } from 'react';
import './MoviesCard.css';
import CardButton from '../../components/CardButton/CardButton';

function MoviesCard({ title, duration, image }) {
  return (
    <div className='movie'>
      <div className='movie__text-container'>
        <h1 className='movie__title'>{title}</h1>
        <p className='movie__duration'>{duration}</p>
      </div>
      <img src={image} alt='Movie poster' className='movie__image' />
      <CardButton />
    </div>
  );
}

export default MoviesCard;
