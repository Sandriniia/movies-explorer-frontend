import React from 'react';
import './MoviesCard.css';
import CardButton from '../../components/CardButton/CardButton';

function MoviesCard({
  title,
  duration,
  image,
  onSaveMovie,
  onDeleteMovie,
  movie,
  savedMovie,
  isLiked,
  trailer,
}) {
  return (
    <div className='movie'>
      <a href={trailer} target='_blank' rel='noreferrer'>
        <img src={image} alt='Movie poster' className='movie__image' />
      </a>
      <div className='movie__text-container'>
        <div className='movie__box'>
          <h1 className='movie__title'>{title}</h1>
          <CardButton
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            movie={movie}
            savedMovie={savedMovie}
            isLiked={isLiked}
          />
        </div>
        <div className='movie__line'></div>
        <p className='movie__duration'>{duration} min.</p>
      </div>
    </div>
  );
}

export default MoviesCard;
