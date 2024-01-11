import api from "@/core/config/axios";
import { LoginRequest } from "./auth.types";
import { User } from "@/core/services/users";
import { csrfProtection } from "@/core/utils";

export default {
  async login(data: LoginRequest): Promise<any> {
    return csrfProtection().then(() => api.post("/api/auth/login", data));
  },

  async logout(): Promise<any> {
    return api.post("/api/auth/logout");
  },

  async profile(): Promise<User> {
    return api.get("/api/auth/users/me");
  },
};
