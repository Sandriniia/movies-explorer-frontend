import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>Training project Yandex.Practicum х BeatFilm.</p>
        <div className='footer__line'></div>
        <div className='footer__info-box'>
          <p className='footer__data'>© 2020</p>
          <div className='footer__links'>
            <a
              href='https://praktikum.yandex.ru'
              target='_blank'
              className='footer__link'
              rel='noreferrer'
            >
              Yandex.Practicum
            </a>
            <a
              href='https://github.com/Sandriniia'
              target='_blank'
              rel='noreferrer'
              className='footer__link'
            >
              Github
            </a>
            <a
              href='https://www.facebook.com/sandra.denisovna.9'
              target='_blank'
              rel='noreferrer'
              className='footer__link'
            >
              Facebook
            </a>
            <a
              href='https://www.linkedin.com/in/sandra-grebentcova-634074224/'
              target='_blank'
              rel='noreferrer'
              className='footer__link footer__link-facebook'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
