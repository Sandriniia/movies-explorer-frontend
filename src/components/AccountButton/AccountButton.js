import React from 'react';
import { NavLink } from 'react-router-dom';
import './AccountButton.css';
import account_icon from '../../images/account.png';

function AccountButton() {
  return (
    <div className='account-button'>
      <NavLink to='/profile' className='account-button__link account-button__link_logged'>
        Аккаунт
      </NavLink>
      <button className='account-button__button'>
        <img src={account_icon} alt='Account button icon' className='account-button__icon' />
      </button>
    </div>
  );
}

export default AccountButton;
