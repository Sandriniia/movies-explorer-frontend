import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.png';

function Register({ onRegister }) {
  const registerData = {
    email: '',
    password: '',
    name: '',
  };

  const [data, setData] = useState(registerData);

  function handleChange(event) {
    const { name, value } = event.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!data.email || !data.password || !data.name) {
      return;
    }
    onRegister(data);
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
          value={data.name || ''}
          type='text'
          name='name'
          required
          className='register__input'
          onChange={handleChange}
        ></input>
        <p className='register__text'>E-mail</p>
        <input
          id='email'
          value={data.email || ''}
          type='email'
          name='email'
          required
          className='register__input'
          onChange={handleChange}
        />
        <p className='register__text'>Пароль</p>
        <input
          id='password'
          value={data.password || ''}
          type='password'
          name='password'
          required
          className='register__input'
          onChange={handleChange}
        ></input>
        <button type='submit' className='register__button'>
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
