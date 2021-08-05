import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
import nav_button from '../../images/navigation.png';
import account_icon from '../../images/account.png';

function Header() {
  const isLogged = true;

  return (
    <header className={`header ${isLogged ? 'header_logged' : ''}`}>
      <div className='header__container'>
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
              <div className='header__box-logged'>
                <div>
                  <Link to='movies' className='header__link header__link_logged'>
                    Фильмы
                  </Link>
                  <Link to='saved-movies' className='header__link header__link_logged'>
                    Сохраненные фильмы
                  </Link>
                </div>
                <div>
                  <Link to='profile' className='header__link header__link_logged'>
                    Аккаунт
                  </Link>
                  <button className='header__account-button'>
                    <img
                      src={account_icon}
                      alt='Account button icon'
                      className='header__account-icon'
                    />
                  </button>
                </div>
              </div>
              <img src={nav_button} alt='Navigation button' className='header__nav-img' />
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
