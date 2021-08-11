import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <HashLink to='#about_project'>
          <li className='nav__item'>О проекте</li>
        </HashLink>
        <HashLink to='#techs'>
          <li className='nav__item'>Тенологии</li>
        </HashLink>
        <HashLink to='#about_me'>
          <li className='nav__item'>Студент</li>
        </HashLink>
      </ul>
    </nav>
  );
}

export default NavTab;
