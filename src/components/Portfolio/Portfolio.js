import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import pointer from '../../images/pointer.png';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h5 className='portfolio__title'>Портфолио</h5>
        <div className='portfolio__link-box'>
          <a
            href='https://sandriniia.github.io/how-to-learn/'
            target='_blank'
            className='portfolio__link'
            rel='noreferrer'
          >
            Статичный сайт
          </a>
          <img src={pointer} alt='Pointer' className='portfolio__icon' />
        </div>
        <div className='portfolio__link-box'>
          <a
            href='https://sandriniia.github.io/russian-travel/'
            target='_blank'
            className='portfolio__link'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
          <img src={pointer} alt='Pointer' className='portfolio__icon' />
        </div>
        <div className='portfolio__link-box'>
          <a
            href='https://mesto.sandra.nomoredomains.icu/'
            target='_blank'
            className='portfolio__link'
            rel='noreferrer'
          >
            Одностраничное приложение
          </a>
          <img src={pointer} alt='Pointer' className='portfolio__icon' />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
