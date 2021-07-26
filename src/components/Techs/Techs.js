// компонент с использованными технологиями.

import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__container'>
        <h1 className='techs__main-title'>7 технологий</h1>
        <p className='techs__subtitle'>
          На курсе веб-разработки мы освоили технологии, которые применили
          <br /> в дипломном проекте.
        </p>
        <div className='techs__skill-box'>
          <div className='techs__skill-item'>
            <p className='techs__skill-text'>HTML</p>
          </div>
          <div className='techs__skill-item'>
            <p className='techs__skill-text'>CSS</p>
          </div>
          <div className='techs__skill-item'>
            <p className='techs__skill-text'>JS</p>
          </div>
          <div className='techs__skill-item'>
            <p className='techs__skill-text'>React</p>
          </div>
          <div className='techs__skill-item'>
            <p className='techs__skill-text'>Git</p>
          </div>
          <div className='techs__skill-item'>
            <p className='techs__skill-text'>Express.js</p>
          </div>
          <div className='techs__skill-item'>
            <p className='techs__skill-text'>mongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
