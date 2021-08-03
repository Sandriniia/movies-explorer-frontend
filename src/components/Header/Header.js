//  компонент, который отрисовывает шапку сайта на страницу.

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
import account_icon from '../../images/account.png';

function Header() {
  const isLogged = true;

  return (
    <header className={`header ${isLogged ? 'header_logged' : ''}`}>
      <img src={logo} alt='Logo' className='header__logo' />
      <nav className='header__nav'>
        {!isLogged ? (
          <>
            <Link className='header__link' to='sign-up'>
              Регистрация
            </Link>
            <div className='header__box'>
              <Link className='header__link header__link-login' to='sign-in'>
                Войти
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link to='movies' className='header__link header__link_logged'>
              Фильмы
            </Link>
            <Link to='saved-movies' className='header__link header__link_logged'>
              Сохраненные фильмы
            </Link>
            <Link to='profile' className='header__link header__link_logged'>
              <button className='header__account-button'>
                <img
                  src={account_icon}
                  alt='Account button icon'
                  className='header__account-icon'
                />
                Аккаунт
              </button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
