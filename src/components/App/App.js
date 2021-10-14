import React, { useState, useCallback, useEffect, createContext } from 'react';
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
import movies_api from '../../utils/MoviesApi';

export const ShortFilmsContext = createContext();

function App() {
  const history = useHistory();
  const width = useCurrentWidth();
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isShortFilmsButtonOn, setIsShortFilmsButtonOn] = useState(false);
  const [error, setError] = useState(null);
  const [initialMovies, setInitialMovies] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  const handleChangeSearchData = (event) => {
    setSearchData(event.target.value);
  };

  const handleShortFilmsButtonClick = () => {
    setIsShortFilmsButtonOn((prevState) => !prevState);
  };

  useEffect(() => {
    movies_api
      .getMovies()
      .then((movies) => {
        setError(null);
        setInitialMovies(movies);
      })
      .catch((error) => setError(error));
  }, []);

  const shortFilmsValue = {
    handleShortFilmsButtonClick,
    isShortFilmsButtonOn,
  };

  function handleNavigationButtonClick() {
    setIsNavigationPopupOpen(true);
  }

  function closePopup() {
    setIsNavigationPopupOpen(false);
  }

  function handleRegister({ password, name }, email) {
    auth
      .register(email, password, name)
      .then((res) => {
        if (res.message) {
          setErrorMessage('Что то пошло не так');
        } else {
          setErrorMessage('');
        }
      })
      .then(() => {
        return auth.login(email, password);
      })
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          setIsLogged(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin({ password }, email) {
    auth
      .login(email, password)
      .then((res) => {
        if (res.message) {
          setErrorMessage(res.message);
        }
        if (res.token) {
          setErrorMessage('');
          localStorage.setItem('token', res.token);
          setIsLogged(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const updateCurrentUserData = (data) => {
    api
      .updateUserData(data)
      .then((res) => {
        if (!res || res.status === 400) {
          setMessage('Что то пошло не так, новые данные не сохранены.');
        } else {
          setMessage('Новые данные успешно сохранены.');
        }
        setTimeout(() => {
          setMessage('');
        }, 3000);
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
        .then((data) => {
          setCurrentUser(data);
          setIsLogged(true);
          setIsCheckingToken(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsCheckingToken(false);
    }
  }, []);

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
        .catch((err) => {
          console.log(err);
        });

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
        <ShortFilmsContext.Provider value={shortFilmsValue}>
          <div className='App'>
            <Switch>
              <Route path='/sign-up'>
                <Register onRegister={handleRegister} errorMessage={errorMessage} />
              </Route>
              <Route path='/sign-in'>
                <Login onLogin={handleLogin} errorMessage={errorMessage} />
              </Route>
              <Route exact path='/'>
                <StudentProfilePage
                  isLogged={isLogged}
                  onAccountButton={handleNavigationButtonClick}
                />
              </Route>
              <ProtectedRoute
                path='/movies'
                isLogged={isLogged}
                isCheckingToken={isCheckingToken}
                onAccountButton={handleNavigationButtonClick}
                component={Movies}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                savedMovies={savedMovies}
                width={width}
                isShortFilmsButtonOn={isShortFilmsButtonOn}
                error={error}
                initialMovies={initialMovies}
                onChangeSearchData={handleChangeSearchData}
                searchData={searchData}
              />
              <ProtectedRoute
                path='/saved-movies'
                isLogged={isLogged}
                isCheckingToken={isCheckingToken}
                onAccountButton={handleNavigationButtonClick}
                component={SavedMovies}
                savedMovies={savedMovies}
                onDeleteMovie={handleDeleteMovie}
                isShortFilmsButtonOn={isShortFilmsButtonOn}
                onChangeSearchData={handleChangeSearchData}
                searchData={searchData}
              />
              <ProtectedRoute
                path='/profile'
                component={Profile}
                isLogged={isLogged}
                isCheckingToken={isCheckingToken}
                onAccountButton={handleNavigationButtonClick}
                onLogout={onLogout}
                onUpdate={updateCurrentUserData}
                message={message}
              />
              <Route path='/not-found'>
                <NotFoundPage />
              </Route>
              <Redirect to='/not-found' />
              <Route>{!isLogged && <Redirect to='/'></Redirect>}</Route>
            </Switch>
            <NavigationPopup isOpen={isNavigationPopupOpen} onClose={closePopup} />
          </div>
        </ShortFilmsContext.Provider>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
