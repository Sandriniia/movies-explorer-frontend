class MoviesApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }

  getMovies() {
    return fetch(`${this._baseUrl}`).then(this._getResponseData);
  }
}

const movies_api = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default movies_api;
