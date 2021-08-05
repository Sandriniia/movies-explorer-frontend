import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.png';

function Register() {
  return (
    <section className='register'>
      <div className='register__greeting-box'>
        <img src={logo} alt='Logo' className='register__logo' />
        <h1 className='register__title'>Добро пожаловать!</h1>
      </div>
      <form className='register__form'>
        <p className='register__text'>Имя</p>
        <input
          id='name'
          type='text'
          name='name'
          value=''
          required
          className='register__input'
        ></input>
        <p className='register__text'>E-mail</p>
        <input id='email' type='email' name='email' value='' required className='register__input' />
        <p className='register__text'>Пароль</p>
        <input
          id='password'
          type='password'
          name='password'
          value=''
          required
          className='register__input'
        ></input>
        <button type='submit' className='register__button'>
          Зарегистрироваться
        </button>
        <div className='register__question-box'>
          <p className='register__question'>Уже зарегистрированы?</p>
          <Link to='sign-in' className='register__link'>
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
