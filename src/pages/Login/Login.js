import React from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Login.css';
import logo from '../../images/logo.png';

function Login({ onLogin, errorMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    onLogin(values);
  }

  return (
    <section className='login'>
      <div className='login__greeting-box'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='login__logo' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
      </div>
      <form className='login__form' onSubmit={handleSubmit}>
        <p className='login__text'>E-mail</p>
        <input
          id='email'
          value={values.email || ''}
          type='email'
          name='email'
          required
          className='login__input'
          onChange={handleChange}
        ></input>
        <p className='register__error-text'>{errors.email}</p>
        <p className='login__text'>Пароль</p>
        <input
          id='password'
          value={values.password || ''}
          type='password'
          name='password'
          required
          className='login__input'
          onChange={handleChange}
        ></input>
        <p className='register__error-text'>{errors.password}</p>
        <p className='register__error-text'>{errorMessage}</p>
        <button
          type='submit'
          className={`login__button ${!isValid ? 'register__button_disabled' : ''}`}
          disabled={!isValid}
        >
          Войти
        </button>
        <div className='login__question-box'>
          <p className='login__question'>Еще не зарегистрированы?</p>
          <Link to='/sign-up' className='login__link'>
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
