import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id='about_me' className='about-me'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>Student</h2>
        <div className='about-me__line'></div>
        <div className='about-me__info-container'>
          <div className='about-me__text-container'>
            <h1 className='about-me__name'>Sandra</h1>
            <p className='about-me__profession'>Full-Stack Web-Developer</p>
            <p className='about-me__description'>
              I live in Malmö, Sweden. Fell in love with programming about four years ago. I've
              started study Web Development during my maternity leave. I've finished Web Development
              course by Yandex and web developer training program in Malmö - FooCoding by FooCafé.
              My passion also incudes the worlds of the Strugatsky brothers and beauty of nature.
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
              <a
                target='_blank'
                href='https://www.linkedin.com/in/sandra-grebentcova-634074224/'
                className='about-me__link'
                rel='noreferrer'
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
