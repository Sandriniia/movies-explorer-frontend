class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }

  getCurrentUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(this._getResponseData);
  }

  updateUserData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._getResponseData);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(this._getResponseData);
  }

  saveMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this._getResponseData);
  }

  deleteMovie(_id) {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(this._getResponseData);
  }
}

const api = new Api('https://api.movies.sandra.nomoredomains.club');

export default api;
