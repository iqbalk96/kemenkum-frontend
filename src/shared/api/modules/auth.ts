import { api } from "../axios";

export interface LoginPayload {
    username: string;
    password: string;
}

export const AuthApi = {
    login(payload: LoginPayload) {
        return api.post("/auth/login", payload, {
            skipAuth: true,
        });
    },

    profile() {
        return api.get("/auth/profile");
    },

    logout() {
        return api.post("/auth/logout");
    },
};