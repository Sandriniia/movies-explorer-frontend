import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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

function App() {
  const [isNavigationPopupOpen, setIsNavigationPopupOpen] = useState(false);

  function handleNavigationButtonClick() {
    setIsNavigationPopupOpen(true);
  }

  function closePopup() {
    setIsNavigationPopupOpen(false);
  }

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Header onAccountButton={handleNavigationButtonClick} />
          <StudentProfilePage />
          <Footer />
        </Route>
        <Route path='/sign-up'>
          <Register />
        </Route>
        <Route path='/sign-in'>
          <Login />
        </Route>
        <Route path='/movies'>
          <Header onAccountButton={handleNavigationButtonClick} />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header onAccountButton={handleNavigationButtonClick} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header onAccountButton={handleNavigationButtonClick} />
          <Profile />
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
