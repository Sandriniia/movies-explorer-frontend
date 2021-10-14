import { useState } from 'react';

function useFilterMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  async function filterByName(moviesArr, data) {
    await setIsLoading(true);
    const nameFilter = moviesArr.filter((movie) => {
      return movie?.nameRU.toLowerCase().includes(data.toLowerCase());
    });
    if (nameFilter.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setFilteredMovies(nameFilter);
    }
    setIsLoading(false);
  }

  async function filterByDuration() {
    await setIsLoading(true);
    const timeFilter = filteredMovies.filter((movie) => {
      return movie.duration <= 40;
    });
    if (timeFilter.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setFilteredMovies(timeFilter);
    }
    setIsLoading(false);
  }

  async function filterByNameAndDuration(moviesArr, data) {
    await setIsLoading(true);
    const timeAndNameFilter = moviesArr.filter((movie) => {
      return movie?.nameRU.toLowerCase().includes(data.toLowerCase()) && movie.duration <= 40;
    });
    if (timeAndNameFilter.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setFilteredMovies(timeAndNameFilter);
    }
    setIsLoading(false);
  }

  return {
    filteredMovies,
    filterByName,
    filterByDuration,
    filterByNameAndDuration,
    isEmpty,
    isLoading,
  };
}
export default useFilterMovies;
