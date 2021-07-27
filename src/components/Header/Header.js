//  компонент, который отрисовывает шапку сайта на страницу.

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='header__logo' />
      <nav className='header__nav'>
        <Link className='header__link' to='sign-up'>
          Регистрация
        </Link>
        <div className='header__box'>
          <Link className='header__link header__link-login' to='sign-in'>
            Войти
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
