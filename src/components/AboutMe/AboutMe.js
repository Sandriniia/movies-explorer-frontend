import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id='about_me' className='about-me'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__line'></div>
        <div className='about-me__info-container'>
          <div className='about-me__text-container'>
            <h1 className='about-me__name'>Сандра</h1>
            <p className='about-me__profession'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__description'>
              Я живу в Швеции, Мальмо. закончила факультет журналистики СГУ. У меня есть муж и дочь.
              Я люблю читать, а ещё увлекаюсь ездой на велосипеде. Во время отпуска по уходу за
              ребенком решила сменить профессию и начала кодить. Прошла курс по веб-разработке в
              Яндексе и программу подготовки веб-разрабочтиков "FooCoding" в Мальмо.
            </p>
            <div className='about-me__links'>
              <a
                target='_blank'
                href='https://www.facebook.com/sandra.denisovna.9'
                className='about-me__link'
                rel='noreferrer'
              >
                Facebook
              </a>
              <a
                target='_blank'
                href='https://github.com/Sandriniia'
                className='about-me__link'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
