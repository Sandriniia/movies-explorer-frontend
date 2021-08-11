import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import StudentProfilePage from '../../pages/StudentProfilePage/StudentProfilePage';
import Footer from '../../components/Footer/Footer';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import NavigationPopup from '../../components/NavigationPopup/NavigationPopup';
import * as auth from '../../utils/auth';

function App() {
  const history = useHistory();
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  function handleNavigationButtonClick() {
    setIsNavigationPopupOpen(true);
  }

  function closePopup() {
    setIsNavigationPopupOpen(false);
  }

  function handleRegister({ email, password, name }) {
    return auth
      .register(email, password, name)
      .then(() => {
        setIsSuccess(true);
        history.push('/movies');
        setIsLogged(true);
      })
      .catch(() => {
        setIsSuccess(false);
      });
  }

  function handleLogin({ email, password }) {
    return auth
      .login(email, password)
      .then((res) => {
        if (!res || res.status === 400) {
          return 'Что то пошло не так';
        }
        if (res.token) {
          localStorage.setItem('token', res.token);
          history.push('/movies');
          setIsLogged(true);
        }
      })
      .catch((err) => console.log(err));
  }

  function onLogout() {
    localStorage.removeItem('token');
    setIsLogged(false);
    history.push('/');
  }

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Header onAccountButton={handleNavigationButtonClick} isLogged={isLogged} />
          <StudentProfilePage />
          <Footer />
        </Route>
        <Route path='/sign-up'>
          <Register onRegister={handleRegister} />
        </Route>
        <Route path='/sign-in'>
          <Login onLogin={handleLogin} />
        </Route>
        <Route path='/movies'>
          <Header onAccountButton={handleNavigationButtonClick} isLogged={isLogged} />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header onAccountButton={handleNavigationButtonClick} isLogged={isLogged} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header onAccountButton={handleNavigationButtonClick} isLogged={isLogged} />
          <Profile onLogout={onLogout} />
        </Route>
        <Route path='/not-found'>
          <NotFoundPage />
        </Route>
        <Redirect to='/not-found' />
      </Switch>
      <NavigationPopup isOpen={isNavigationPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default App;
