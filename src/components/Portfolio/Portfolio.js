//компонент со ссылками на другие проекты.

import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import pointer from '../../images/pointer.png';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h5 className='portfolio__title'>Портфолио</h5>
      <div className='portfolio__container'>
        <Link className='portfolio__link'>Статичный сайт</Link>
        <img src={pointer} alt='Pointer' className='portfolio__icon' />
      </div>
      <div className='portfolio__container'>
        <Link className='portfolio__link'>Адаптивный сайт</Link>
        <img src={pointer} alt='Pointer' className='portfolio__icon' />
      </div>
      <div className='portfolio__container'>
        <Link className='portfolio__link'>Одностраничное приложение</Link>
        <img src={pointer} alt='Pointer' className='portfolio__icon' />
      </div>
    </section>
  );
}

export default Portfolio;
