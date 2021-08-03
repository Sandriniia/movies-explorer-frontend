import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './CardButton.css';
import saved_icon from '../../images/saved.png';

function CardButton() {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const [path, setPath] = useState(location.pathname);
  console.log(path);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const handleSaveMovie = () => {
    setIsSaved(true);
  };

  return (
    <>
      {path === '/saved-movies' && (
        <button type='submit' className='card-button'>
          Удалить
        </button>
      )}
      {path === '/movies' && isSaved ? (
        <button className='card-button card-button_saved'>
          <img src={saved_icon} alt='saved movie button icon' />
        </button>
      ) : (
        <button type='submit' className='card-button' onClick={handleSaveMovie}>
          Сохранить
        </button>
      )}
    </>
  );
}

export default CardButton;
