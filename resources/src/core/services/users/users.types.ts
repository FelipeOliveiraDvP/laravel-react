export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface UserListQuery {
  name?: string;
  email?: string;
  page?: number;
}

export interface UserListResponse {
  items: User[];
  pagination: {
    current: number;
    total: number;
  };
}

export interface UserRequest {
  id?: number;
  name: string;
  email: string;
}
