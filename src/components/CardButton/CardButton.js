import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import './CardButton.css';
import saved from '../../images/saved.png';
import not_saved from '../../images/not-saved.png';
import delete_button from '../../images/delete-button.png';
import { SavedMoviesContext } from '../../pages/SavedMovies/SavedMovies';

function CardButton({ onSaveMovie, onDeleteMovie, movie, savedMovie, isLiked }) {
  const savedMovContext = useContext(SavedMoviesContext);

  const saveMovieArr = savedMovContext.map((movie) => {
    return movie;
  });

  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const handleSaveButtonClick = () => {
    !isLiked ? onSaveMovie(movie) : onDeleteMovie(saveMovieArr.find((m) => m.movieId === movie.id));
  };

  const deleteButtonClick = () => {
    onDeleteMovie(savedMovie);
  };

  return (
    <>
      {path === '/movies' && (
        <>
          {isLiked ? (
            <button type='submit' className='card-button' onClick={handleSaveButtonClick}>
              <img src={saved} alt='saved movie button' />
            </button>
          ) : (
            <button type='submit' className='card-button' onClick={handleSaveButtonClick}>
              <img src={not_saved} alt='saved movie button' />
            </button>
          )}
        </>
      )}
      {path === '/saved-movies' && (
        <button className='card-button' onClick={deleteButtonClick}>
          <img src={delete_button} alt='delete movie button' />
        </button>
      )}
    </>
  );
}

export default CardButton;
