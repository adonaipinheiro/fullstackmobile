import api from './apiConnection';

class Api {
  async login(email, password) {
    const data = {
      email,
      password,
    };
    return await api.post(`/sessions`, data);
  }

  async signUp(data) {
    return await api.post(`/users`, data);
  }
}

export default new Api();
