import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.png';

function Login() {
  return (
    <section className='login'>
      <div className='login__greeting-box'>
        <img src={logo} alt='Logo' className='login__logo' />
        <h1 className='login__title'>Рады видеть!</h1>
      </div>
      <form className='login__form'>
        <p className='login__text'>E-mail</p>
        <input
          id='email'
          type='email'
          name='email'
          value=''
          required
          className='login__input'
        ></input>
        <p className='login__text'>Пароль</p>
        <input
          id='password'
          type='password'
          name='password'
          value=''
          required
          className='login__input'
        ></input>
        <button type='submit' className='login__button'>
          Войти
        </button>
        <div className='login__question-box'>
          <p className='login__question'>Еще не зарегистрированы?</p>
          <Link to='sign-up' className='login__link'>
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
