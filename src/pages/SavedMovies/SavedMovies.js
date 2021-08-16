import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function SavedMovies({ onAccountButton, isLogged }) {
  return (
    <>
      <Header onAccountButton={onAccountButton} isLogged={isLogged} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default SavedMovies;
