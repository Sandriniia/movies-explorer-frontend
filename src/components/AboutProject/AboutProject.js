// компонент с описанием дипломного проекта.

import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__main-title'>О проекте</h2>
      <div className='about-project__first-container'>
        <div className='about-project__text-box'>
          <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div div className='about-project__text-box'>
          <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__second-container'>
        <div className='about-project__weeks-box'>
          <div className='about-project__box-one'>
            <p className='about-project__subtitle'>1 неделя</p>
          </div>
          <p className='about-project__text'>Back-end</p>
        </div>
        <div>
          <div className='about-project__box-two'>
            <p className='about-project__subtitle'>4 недели</p>
          </div>
          <p className='about-project__text'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
