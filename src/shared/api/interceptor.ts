import axios from "axios";
import { api } from "./axios";
import { authStorage } from "@/shared/lib/auth-storage";

api.interceptors.request.use(
  (config) => {
    const token = authStorage.getAccessToken();

    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!axios.isAxiosError(error)) {
      return Promise.reject(error);
    }

    switch (error.response?.status) {
      case 401:
        // nanti refresh token
        break;

      case 403:
        console.warn("Forbidden");
        break;

      case 404:
        console.warn("Not Found");
        break;

      case 500:
        console.error("Internal Server Error");
        break;
    }

    return Promise.reject(error);
  },
);
