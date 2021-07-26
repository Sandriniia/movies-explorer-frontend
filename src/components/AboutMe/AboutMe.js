// компонент с информацией о студенте.

import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../images/photo.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info-container'>
        <div className='about-me__text-container'>
          <h1 className='about-me__name'>Sandra</h1>
          <p className='about-me__profession'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className='about-me__links'>
            <Link className='about-me__link'>Facebook</Link>
            <Link className='about-me__link'>Github</Link>
          </div>
        </div>
        <img src={photo} alt='' className="about-me__image"/>
      </div>
    </section>
  );
}

export default AboutMe;
