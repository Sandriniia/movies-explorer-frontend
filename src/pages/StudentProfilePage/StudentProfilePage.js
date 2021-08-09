import React from 'react';
import './StudentProfilePage.css';
import Promo from '../../components/Promo/Promo';
import NavTab from '../../components/NavTab/NavTab';
import AboutProject from '../../components/AboutProject/AboutProject';
import Techs from '../../components/Techs/Techs';
import AboutMe from '../../components/AboutMe/AboutMe';
import Portfolio from '../../components/Portfolio/Portfolio';

function StudentProfilePage() {
  return (
    <div className='student-profile'>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default StudentProfilePage;
