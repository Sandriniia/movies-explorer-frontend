import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import StudentProfilePage from '../../pages/StudentProfilePage/StudentProfilePage';
import Footer from '../../components/Footer/Footer';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';

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
      </Switch>
    </div>
  );
}

export default App;
