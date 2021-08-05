import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './CardButton.css';
import saved from '../../images/saved.png';
import not_saved from '../../images/not-saved.png';

function CardButton() {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const [path, setPath] = useState(location.pathname);
  console.log(path);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const handleSaveMovie = () => {
    setIsSaved(!isSaved);
  };

  return (
    <>
      {isSaved ? (
        <button type='submit' className='card-button' onClick={handleSaveMovie}>
          <img src={saved} alt='saved movie button' />
        </button>
      ) : (
        <button type='submit' className='card-button' onClick={handleSaveMovie}>
          <img src={not_saved} alt='saved movie button' />
        </button>
      )}
    </>
  );
}

export default CardButton;
