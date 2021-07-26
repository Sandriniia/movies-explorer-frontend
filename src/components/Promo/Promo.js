// компонент с вёрсткой баннера страницы «О проекте».

import React from 'react';
import './Promo.css';
import profile_logo from '../../images/profile-logo.png';

function Promo() {
  return (
    <div className='promo'>
      <h1 className='promo__text'>
        Учебный проект студента
        <br /> факультета
        <br /> Веб-разработки.
      </h1>
      <img src={profile_logo} alt='' className='promo__image' />
    </div>
  );
}

export default Promo;
