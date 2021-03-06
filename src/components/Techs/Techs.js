import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section id='techs' className='techs'>
      <div className='techs__container'>
        <h2 className='techs__title'>Instruments</h2>
        <div className='techs__line'></div>
        <div className='techs__box'>
          <h1 className='techs__main-title'>7 technologies</h1>
          <p className='techs__subtitle'>
            On the Web Development course I mastered technologies that were applied in the diploma
            project.
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
      </div>
    </section>
  );
}

export default Techs;
