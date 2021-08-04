import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <Link to=''>
          <li className='nav__item'>О проекте</li>
        </Link>
        <Link to=''>
          <li className='nav__item'>Тенологии</li>
        </Link>
        <Link to=''>
          <li className='nav__item'>Студент</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavTab;
