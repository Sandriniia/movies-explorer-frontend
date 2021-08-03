import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, Сандра!</h1>
      <div className='profile__box profile__box-name'>
        <h5 className='profile__subtitle'>Имя</h5>
        <input className='profile__input' value='Сандра' type='text' />
      </div>
      <div className='profile__box'>
        <h5 className='profile__subtitle'>E-mail</h5>
        <input className='profile__input' value='pochta@yandex.ru' type='email' />
      </div>
      <button className='profile__button'>Редактировать</button>
      <Link className='profile__link-out' to=''>
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
