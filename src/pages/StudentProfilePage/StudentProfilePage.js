import React from 'react';
import './StudentProfilePage.css';
import Promo from '../../components/Promo/Promo';
import NavTab from '../../components/NavTab/NavTab';
import AboutProject from '../../components/AboutProject/AboutProject';
import Techs from '../../components/Techs/Techs';
import AboutMe from '../../components/AboutMe/AboutMe';
import Portfolio from '../../components/Portfolio/Portfolio';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function StudentProfilePage({ onAccountButton, isLogged }) {
  return (
    <div className='student-profile'>
      <Header onAccountButton={onAccountButton} isLogged={isLogged} />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default StudentProfilePage;
