//  презентационный компонент, который отрисовывает подвал.

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__line'></div>
        <div className='footer__info-box'>
          <p className='footer__data'>© 2020</p>
          <div className='footer__links'>
            <Link className='footer__link'>Яндекс.Практикум</Link>
            <Link className='footer__link'>Github</Link>
            <Link className='footer__link'>Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
