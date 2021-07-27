import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import StudentProfilePage from '../../pages/StudentProfilePage/StudentProfilePage';
import Footer from '../../components/Footer/Footer';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';

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
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
