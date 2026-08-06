export const authStorage = {
  getAccessToken() {
    return localStorage.getItem("access_token");
  },

  setAccessToken(token: string) {
    localStorage.setItem("access_token", token);
  },

  clear() {
    localStorage.removeItem("access_token");
  },
};
