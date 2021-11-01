import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section id='about_project' className='about-project'>
      <div className='about-project__container'>
        <h2 className='about-project__main-title'>About</h2>
        <div className='about-project__line'></div>
        <div className='about-project__first-container'>
          <div className='about-project__text-box'>
            <h3 className='about-project__title'>Project consisted of 5 stages</h3>
            <p className='about-project__subtitle'>
              Make a plan, backend work, page layout, add functionality and final improvements.
            </p>
          </div>
          <div className='about-project__text-box'>
            <h3 className='about-project__title'>It took 5 weeks to complete the project.</h3>
            <p className='about-project__subtitle'>
              Each step had soft and hard deadlines, which had to be followed in order to
              successfully defend the diploma.
            </p>
          </div>
        </div>
        <div className='about-project__second-container'>
          <div className='about-project__weeks-box'>
            <div className='about-project__week-1'>
              <div className='about-project__box-one'>
                <p className='about-project__subtitle'>1 week</p>
              </div>
              <p className='about-project__text'>Back-end</p>
            </div>
            <div className='about-project__week-2'>
              <div className='about-project__box-two'>
                <p className='about-project__subtitle'>4 weeks</p>
              </div>
              <p className='about-project__text'>Front-end</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
