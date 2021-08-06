import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavigationPopup from '../../components/NavigationPopup/NavigationPopup';
import AccountButton from '../../components/AccountButton/AccountButton';
import logo from '../../images/logo.png';
import nav_button from '../../images/navigation.png';

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
                <AccountButton />
              </div>
              <img src={nav_button} alt='Navigation button' className='header__nav-img' />
            </>
          )}
        </nav>
        {/* <NavigationPopup /> */}
      </div>
    </header>
  );
}

export default Header;
