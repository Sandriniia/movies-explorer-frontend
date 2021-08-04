import React from 'react';
import './Promo.css';
import profile_logo from '../../images/profile-logo.png';

function Promo() {
  return (
    <section className='promo'>
      <img src={profile_logo} alt='Profile logo' className='promo__image' />
      <h1 className='promo__text'>Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  );
}

export default Promo;
