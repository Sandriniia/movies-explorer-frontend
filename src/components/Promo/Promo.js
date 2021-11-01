import React from 'react';
import './Promo.css';
import profile_logo from '../../images/profile-logo.png';

function Promo() {
  return (
    <section className='promo'>
      <img src={profile_logo} alt='Profile logo' className='promo__image' />
      <h1 className='promo__text'>Student's diploma project of the Faculty of Web Development.</h1>
    </section>
  );
}

export default Promo;
