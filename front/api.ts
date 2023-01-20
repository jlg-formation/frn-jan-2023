import {User} from './interfaces/User';

const url = 'http://localhost:3000';

class API {
  async connect(email: string, password: string) {
    console.log('email: ', email);
    console.log('password: ', password);
    const response = await fetch(url + '/api/auth/connect', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status !== 200) {
      return undefined;
    }
    const user: User = await response.json();
    return user;
  }

  async disconnect() {}
}

export const api = new API();
