import api from "../config/axios";

export async function csrfProtection(): Promise<any> {
  return api.get("/sanctum/csrf-cookie");
}
