import { api } from "../axios";

export const UserApi = {
  getAll() {
    return api.get("/users");
  },

  getById(id: number | string) {
    return api.get(`/users/${id}`);
  },

  create(data: unknown) {
    return api.post("/users", data);
  },

  update(id: number | string, data: unknown) {
    return api.put(`/users/${id}`, data);
  },

  delete(id: number | string) {
    return api.delete(`/users/${id}`);
  },
};
