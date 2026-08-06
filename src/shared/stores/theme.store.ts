import { defineStore } from "pinia";

export interface AuthUser {
  id: number | string;
  name: string;
  email: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false,
  }),

  getters: {
    currentUser: (state) => state.user,
  },

  actions: {
    setUser(user: AuthUser) {
      this.user = user;
      this.isAuthenticated = true;
    },

    clear() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});
