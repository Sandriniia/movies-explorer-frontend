import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import AccountButton from '../../components/AccountButton/AccountButton';
import logo from '../../images/logo.png';
import nav_button from '../../images/navigation.png';

function Header({ onAccountButton, isLogged }) {
  return (
    <header className={`header ${isLogged ? 'header_logged' : ''}`}>
      <div className='header__container'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='header__logo' />
        </Link>
        <nav className='header__nav'>
          {!isLogged ? (
            <>
              <NavLink className='header__link header__link-register' to='sign-up'>
                Регистрация
              </NavLink>
              <div className='header__box'>
                <NavLink className='header__link header__link-login' to='sign-in'>
                  Войти
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div className='header__box-logged'>
                <div>
                  <NavLink
                    to='movies'
                    activeClassName='header__link_active'
                    className='header__link header__link_logged'
                  >
                    Фильмы
                  </NavLink>
                  <NavLink
                    activeClassName='header__link_active'
                    to='saved-movies'
                    className='header__link header__link_logged'
                  >
                    Сохраненные фильмы
                  </NavLink>
                </div>
                <AccountButton />
              </div>
              <button className='header__nav-account-button' onClick={onAccountButton}>
                <img src={nav_button} alt='Navigation button' className='header__nav-img' />
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
