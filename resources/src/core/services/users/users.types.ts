import { BaseQuery, PaginatedResponse, Timestamps } from "@/core/types";

export interface User extends Timestamps {
  id: number;
  name: string;
  email: string;
}

export type UserListQuery = BaseQuery & {
  name?: string;
  email?: string;
};

export type UserListResponse = PaginatedResponse<User>;

export interface UserRequest {
  id?: number;
  name: string;
  email: string;
}
