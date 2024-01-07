export interface BaseQuery {
  page?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    current: number;
    total: number;
  };
}
