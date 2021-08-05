import React, { useState } from 'react';
import './MoviesCard.css';
import CardButton from '../../components/CardButton/CardButton';

function MoviesCard({ title, duration, image }) {
  return (
    <div className='movie'>
      <img src={image} alt='Movie poster' className='movie__image' />
      <div className='movie__text-container'>
        <div className='movie__box'>
          <h1 className='movie__title'>{title}</h1>
          <CardButton />
        </div>
        <div className='movie__line'></div>
        <p className='movie__duration'>{duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
