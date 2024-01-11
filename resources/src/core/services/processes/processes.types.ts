import { BaseQuery, PaginatedResponse } from "@/core/types";

export interface Process {
  id: number;
  process_number: string;
  tribunal: string;
  amount: number;
  description: string;
  deadline_date?: string | null;
  situation: ProcessSituationEnum;
  expertise: ProcessExpertiseEnum;
  customer: {
    id: number;
    name: string;
    phone: string;
  };
  responsible: {
    id: number;
    name: string;
    email: string;
  };
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}

export interface ProcessRequest {
  id?: number;
  process_number: string;
  tribunal: string;
  amount: number;
  has_deadline: boolean;
  deadline_date?: string;
  customer_id: number | null;
  responsible_id: number | null;
  situation: ProcessSituationEnum | null;
  expertise: ProcessExpertiseEnum | null;
}

export type ProcessListQuery = BaseQuery & {
  process_number?: string;
  expertise?: ProcessExpertiseEnum | null;
  situation?: ProcessSituationEnum | null;
};

export type ProcessResponseType = PaginatedResponse<Process>;

export enum ProcessExpertiseEnum {
  Consumer,
  Civil,
  Business,
  Criminal,
  Electoral,
  Administrative,
  Medical,
  Tax,
  SocialSecurity,
  Labor,
  Union,
  InternationalBusiness,
  DigitalLaw,
  AgriculturalLaw,
  Compliance,
  EntertainmentLaw,
  PatentTrademark,
}

export enum ProcessSituationEnum {
  InitialStage,
  ExecutionStage,
  Answer,
  Reply,
  AwaitingHearing,
  AwaitingSentence,
  Appeal,
  AwaitingService,
}
