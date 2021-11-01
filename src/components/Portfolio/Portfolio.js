import React from 'react';
import './Portfolio.css';
import pointer from '../../images/pointer.png';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h5 className='portfolio__title'>Portfolio</h5>
        <div className='portfolio__link-box'>
          <a
            href='https://sandriniia.github.io/how-to-learn/'
            target='_blank'
            className='portfolio__link'
            rel='noreferrer'
          >
            Static website
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
            Responsive website
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
            Single page application
          </a>
          <img src={pointer} alt='Pointer' className='portfolio__icon' />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
