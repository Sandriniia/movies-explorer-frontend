import React, { useState, useCallback, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import StudentProfilePage from '../../pages/StudentProfilePage/StudentProfilePage';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import NavigationPopup from '../../components/NavigationPopup/NavigationPopup';
import * as auth from '../../utils/auth';
import ProtectedRoute from '../../components/ProtectedRoute';
import api from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../../pages/SavedMovies/SavedMovies';
import useCurrentWidth from '../../hooks/useCurrentWidth';

function App() {
  const history = useHistory();
  const width = useCurrentWidth();
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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
        history.push('/movies');
        setIsLogged(true);
      })
      .catch((err) => {
        console.log(err);
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

  const updateCurrentUserData = (data) => {
    api
      .updateUserData(data)
      .then((res) => {
        if (!res || res.status === 400) {
          return 'Что то пошло не так';
        }
      })
      .catch((err) => console.log(err));
    api
      .getCurrentUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  };

  const checkToken = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api
        .getCurrentUserData(token)
        .then((res) => {
          if (res) {
            setIsLogged(true);
            history.push('/movies');
          }
        })
        .catch(() => {
          history.push('/');
        });
    }
  }, [history]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  useEffect(() => {
    if (isLogged) {
      api
        .getCurrentUserData()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => console.log(err));

      api
        .getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => console.log(err));
    }
  }, [isLogged]);

  function onLogout() {
    localStorage.removeItem('token');
    setIsLogged(false);
    history.push('/');
  }

  const handleSaveMovie = (movie) => {
    api
      .saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (movie) => {
    api
      .deleteMovie(movie._id)
      .then(() => {
        const newMovies = savedMovies.filter((m) => m._id !== movie._id);
        setSavedMovies(newMovies);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={savedMovies}>
        <div className='App'>
          <Switch>
            <Route
              exact
              path='/'
              onAccountButton={handleNavigationButtonClick}
              isLogged={isLogged}
              component={StudentProfilePage}
            />
            <Route path='/sign-up'>
              <Register onRegister={handleRegister} />
            </Route>
            <Route path='/sign-in'>
              <Login onLogin={handleLogin} />
            </Route>
            <ProtectedRoute
              path='/movies'
              isLogged={isLogged}
              onAccountButton={handleNavigationButtonClick}
              component={Movies}
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
              savedMovies={savedMovies}
              width={width}
            />
            <ProtectedRoute
              path='/saved-movies'
              isLogged={isLogged}
              onAccountButton={handleNavigationButtonClick}
              component={SavedMovies}
              savedMovies={savedMovies}
              onDeleteMovie={handleDeleteMovie}
            />
            <ProtectedRoute
              path='/profile'
              component={Profile}
              isLogged={isLogged}
              onAccountButton={handleNavigationButtonClick}
              onLogout={onLogout}
              onUpdate={updateCurrentUserData}
            />
            <Route path='/not-found'>
              <NotFoundPage />
            </Route>
            <Redirect to='/not-found' />
            <Route>
              {isLogged ? <Redirect to='/movies'></Redirect> : <Redirect to='/'></Redirect>}
            </Route>
          </Switch>
          <NavigationPopup isOpen={isNavigationPopupOpen} onClose={closePopup} />
        </div>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
