import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import './CardButton.css';
import saved from '../../images/saved.png';
import not_saved from '../../images/not-saved.png';
import delete_button from '../../images/delete-button.png';
import { SavedMoviesContext } from '../../pages/SavedMovies/SavedMovies';
import { MoviesContext } from '../../utils/MoviesApi';
import MoviesCard from '../MoviesCard/MoviesCard';

function CardButton({
  buttonId,
  onSaveMovie,
  onDeleteMovie,
  movie,
  savedMovie,
  buttonSaveId,
  isLiked,
}) {
  const savedMovContext = useContext(SavedMoviesContext);
  const MovContext = useContext(MoviesContext);

  const saveMovieArr = savedMovContext.map((movie) => {
    return movie;
  });

  const movieIdArr = MovContext.map((movie) => {
    return movie.id;
  });

  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const [isLike, setIsLiked] = useState(false);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const handleSaveButtonClick = () => {
    setIsLiked((prevState) => {
      return !prevState;
    });
    // console.log(buttonId);
    // const like = MovContext.some((m) => m.id === buttonId);
    // console.log(like);
    // console.log(movie);

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
