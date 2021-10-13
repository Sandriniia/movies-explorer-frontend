import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import logo from '../../images/logo.png';

function Register({ onRegister, errorMessage }) {
  const { values, handleChange, errors, isValid, isEmailValid, checkEmailValidation, emailValue } =
    useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid && !isEmailValid) {
      return;
    }
    onRegister(values, emailValue);
  }

  return (
    <section className='register'>
      <div className='register__greeting-box'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='register__logo' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
      </div>
      <form className='register__form' onSubmit={handleSubmit}>
        <p className='register__text'>Имя</p>
        <input
          id='name'
          value={values.name || ''}
          type='text'
          name='name'
          required
          minLength='2'
          className='register__input'
          onChange={handleChange}
        ></input>
        <p className='register__error-text'>{errors.name}</p>
        <p className='register__text'>E-mail</p>
        <input
          id='email'
          value={emailValue || ''}
          type='email'
          name='email'
          required
          className='register__input'
          onChange={checkEmailValidation}
        />
        <p className='register__error-text'>
          {!isEmailValid ? 'Email введен в неверном формате.' : ''}
        </p>
        <p className='register__text'>Пароль</p>
        <input
          id='password'
          value={values.password || ''}
          type='password'
          name='password'
          required
          minLength='8'
          className='register__input'
          onChange={handleChange}
        ></input>
        <p className='register__error-text'>{errors.password}</p>
        <p className='register__error-text'>{errorMessage}</p>
        <button
          className={`register__button ${
            !isValid || !isEmailValid ? 'register__button_disabled' : ''
          }`}
          type='submit'
          disabled={!isValid || !isEmailValid}
        >
          Зарегистрироваться
        </button>
        <div className='register__question-box'>
          <p className='register__question'>Уже зарегистрированы?</p>
          <Link to='/sign-in' className='register__link'>
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
