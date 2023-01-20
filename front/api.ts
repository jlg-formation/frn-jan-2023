class API {
  async connect(email: string, password: string) {
    console.log('email: ', email);
    console.log('password: ', password);
    return true;
  }
}

export const api = new API();
