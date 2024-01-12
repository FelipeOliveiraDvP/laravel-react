import { objectToOptions } from "@/core/utils";
import { UserRolesType } from ".";

const roles = {
  admin: "Administrador",
  user: "Usuário",
};

export const roleOptions = objectToOptions(roles);

export const getUserRole = (role: UserRolesType) => roles[role];
