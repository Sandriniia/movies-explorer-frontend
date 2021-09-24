import React, { createContext } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export const SavedMoviesContext = createContext();

function SavedMovies({ onAccountButton, isLogged, onDeleteMovie, savedMovies }) {
  return (
    <>
      <Header onAccountButton={onAccountButton} isLogged={isLogged} />
      <SearchForm />
      <MoviesCardList onDeleteMovie={onDeleteMovie} savedMovies={savedMovies} />
      <Footer />
    </>
  );
}

export default SavedMovies;
