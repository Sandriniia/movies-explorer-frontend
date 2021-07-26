import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import StudentProfilePage from '../../pages/StudentProfilePage/StudentProfilePage';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <StudentProfilePage />
      <Footer />
    </div>
  );
}

export default App;
