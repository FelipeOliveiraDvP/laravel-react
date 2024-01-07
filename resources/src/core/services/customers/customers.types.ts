import { BaseQuery, PaginatedResponse, Timestamps } from "@/core/types";

export interface Customer extends Timestamps {
  id: number;
  name: string;
  phone: string;
  document: string;
  birth_date: string;
  zip: string;
  street: string;
  number: string;
  city: string;
  state: string;
  complement?: string;
  indication?: {
    name: string;
    email: string;
    phone: string;
  };
}

export type CustomerListQuery = BaseQuery & {
  name?: string;
  document?: string;
};

export type CustomerListResponse = PaginatedResponse<Customer>;

export type CustomerRequest = Omit<
  Customer,
  "id" | "created_at" | "updated_at"
> & {
  id?: number;
};
