import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationPopup.css';
import AccountButton from '../../components/AccountButton/AccountButton';
import close_button from '../../images/close-button.png';

function NavigationPopup({ onClose, isOpen }) {
  return (
    <section className={`nav-popup ${isOpen ? '' : 'nav-popup_hidden'}`}>
      <div className='nav-popup__container'>
        <button className='nav-popup__close-button' onClick={onClose}>
          <img className='nav-popup__close-icon' src={close_button} alt='Close navigation button' />
        </button>
        <nav className='nav-popup__nav'>
          <div className='nav-popup__box'>
            <NavLink
              activeClassName='nav-popup__link_active'
              className='nav-popup__link'
              exact
              to='/'
              onClick={onClose}
            >
              Главная
            </NavLink>
            <NavLink
              activeClassName='nav-popup__link_active'
              className='nav-popup__link'
              to='/movies'
              onClick={onClose}
            >
              Фильмы
            </NavLink>
            <NavLink
              activeClassName='nav-popup__link_active'
              className='nav-popup__link'
              to='/saved-movies'
              onClick={onClose}
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <AccountButton onClose={onClose} />
        </nav>
      </div>
    </section>
  );
}

export default NavigationPopup;
