import { useEffect, useState } from 'react';

const useFetchMoviesData = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.nomoreparties.co/beatfilm-movies')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchMoviesData;
