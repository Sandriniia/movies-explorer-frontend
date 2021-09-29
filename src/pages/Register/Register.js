import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import logo from '../../images/logo.png';

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    onRegister(values);
    resetForm();
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
          value={values.email || ''}
          type='email'
          name='email'
          required
          className='register__input'
          onChange={handleChange}
        />
        <p className='register__error-text'>{errors.email}</p>
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
        <button
          className={`register__button ${!isValid ? 'register__button_disabled' : ''}`}
          type='submit'
          disabled={!isValid}
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
