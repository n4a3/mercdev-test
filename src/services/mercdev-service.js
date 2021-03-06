class MercdevService {
  _apiBase = "https://us-central1-mercdev-academy.cloudfunctions.net";

  userLogin = (email, password) => {
    const url = `${this._apiBase}/login`;

    const headers = new Headers({
      "Content-Type": "application/json"
    });

    const body = {
      email,
      password
    };

    return fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });
  };
}

const mercdevService = new MercdevService();

export default mercdevService;
