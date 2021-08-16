import React from 'react';
import './Movies.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Movies({ onAccountButton, isLogged }) {
  return (
    <div className='movies'>
      <Header onAccountButton={onAccountButton} isLogged={isLogged} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;
