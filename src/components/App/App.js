import React from 'react';
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

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Header />
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
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header />
          <Profile />
        </Route>
        <Route path='/not-found'>
          <NotFoundPage />
        </Route>
        <Redirect to='/not-found' />
      </Switch>
    </div>
  );
}

export default App;
