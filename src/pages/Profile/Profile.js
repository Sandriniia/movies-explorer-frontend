import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onLogout, onAccountButton, isLogged, onUpdate, message }) {
  const userContext = useContext(CurrentUserContext);
  const [userData, setUserData] = useState(userContext);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest('form').checkValidity());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    onUpdate(userData);
    setIsValid(false);
  };

  return (
    <>
      <Header onAccountButton={onAccountButton} isLogged={isLogged} />
      <form className='profile' onSubmit={handleSubmit}>
        <h1 className='profile__title'>Привет, {userData.name}!</h1>
        <div className='profile__box profile__box-name'>
          <h5 className='profile__subtitle'>Имя</h5>
          <input
            className='profile__input'
            value={userData.name || ''}
            type='text'
            name='name'
            minLength='2'
            onChange={handleChange}
          />
        </div>
        <p className='register__error-text'>{errors.name}</p>
        <div className='profile__box'>
          <h5 className='profile__subtitle'>E-mail</h5>
          <input
            className='profile__input'
            value={userData.email || ''}
            type='email'
            name='email'
            onChange={handleChange}
          />
        </div>
        <p className='register__error-text'>{errors.email}</p>
        <p className='register__error-text'>{message}</p>
        <button
          type='submit'
          disabled={!isValid}
          className={`profile__button ${!isValid ? 'register__button_disabled' : ''}`}
        >
          Редактировать
        </button>
        <Link className='profile__link-out' to='' onClick={onLogout}>
          Выйти из аккаунта
        </Link>
      </form>
      <Footer />
    </>
  );
}

export default Profile;
