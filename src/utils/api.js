class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json;
    }
    return Promise.reject(new Error(`Ошибка ${res.status}`));
  }
}

const api = new Api('https://api.mesto.sandra.nomoredomains.icu');

export default api;
