import React from 'react';
import './StudentProfilePage.css';
import Promo from '../../components/Promo/Promo';
import NavTab from '../../components/NavTab/NavTab';
import AboutProject from '../../components/AboutProject/AboutProject';

function StudentProfilePage() {
  return (
    <div className='student-profile'>
      <Promo />
      <NavTab />
      <AboutProject />
    </div>
  );
}

export default StudentProfilePage;
