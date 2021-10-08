import { useState } from 'react';

function useFilterMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const filterByName = (moviesArr, data) => {
    setIsLoading(true);
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
  };

  const filterByDuration = () => {
    setIsLoading(true);
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
  };

  const filterByNameAndDuration = (moviesArr, data) => {
    setIsLoading(true);
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
  };

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
