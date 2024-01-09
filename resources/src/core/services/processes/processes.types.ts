import { BaseQuery, PaginatedResponse } from "@/core/types";

export interface Process {
  id: number;
  customer: {
    id: number;
    name: string;
    phone: string;
  };
  process_number: string;
  situation: ProcessSituationType;
  tribunal: string;
  amount: number;
  expertise: ProcessExpertiseType;
  created_at: string;
  updated_at: string;
}

export interface ProcessRequest {
  id?: number;
  customer_id: number;
  process_number: string;
  situation: ProcessSituationType;
  tribunal: string;
  amount: number;
  expertise: ProcessExpertiseType;
}

export type ProcessListQuery = BaseQuery & {
  process_number?: string;
  expertise?: ProcessExpertiseType | null;
  situation?: ProcessSituationType | null;
};

export type ProcessResponseType = PaginatedResponse<Process>;

export type ProcessSituationType = "pending" | "approved" | "cancelled";

export type ProcessExpertiseType = "criminal" | "family";
