import api from "@/core/config/axios";
import { LoginRequest, LoginResponse } from "./auth.types";
import { User } from "@/core/services/users";

export default {
  async login(data: LoginRequest): Promise<LoginResponse> {
    return api.post("/api/auth/login", data);
  },

  async logout(): Promise<any> {
    return api.post("/api/auth/logout");
  },

  async profile(): Promise<User> {
    return api.get("/api/auth/me");
  },
};
