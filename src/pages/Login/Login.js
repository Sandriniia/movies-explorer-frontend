import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Login.css';
import logo from '../../images/logo.png';

function Login({ onLogin, errorMessage }) {
  const { values, handleChange, errors, isValid, isEmailValid, checkEmailValidation, emailValue } =
    useFormWithValidation();

  const [isDisabled, setIsDisabled] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsDisabled(true);
    if (!isValid && !isEmailValid) {
      return;
    }
    onLogin(values, emailValue);
    setIsDisabled(false);
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
          value={emailValue || ''}
          type='email'
          name='email'
          required
          className='login__input'
          onChange={checkEmailValidation}
          disabled={isDisabled}
        ></input>
        <p className='register__error-text'>
          {!isEmailValid ? 'Email введен в неверном формате.' : ''}
        </p>
        <p className='login__text'>Пароль</p>
        <input
          id='password'
          value={values.password || ''}
          type='password'
          name='password'
          required
          className='login__input'
          onChange={handleChange}
          disabled={isDisabled}
        ></input>
        <p className='register__error-text'>{errors.password}</p>
        <p className='register__error-text'>{errorMessage}</p>
        <button
          type='submit'
          className={`login__button ${
            isDisabled || !isValid || !isEmailValid ? 'register__button_disabled' : ''
          }`}
          disabled={isDisabled || !isValid || !isEmailValid}
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
