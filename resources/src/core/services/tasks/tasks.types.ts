export interface Task {
  id: number;
  index: number;
  title: string;
  description: string;
  final_date: string;
  status: TaskStatusType;
  responsible: {
    id: number;
    name: string;
    email: string;
  };
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}

export type TaskStatusType =
  | "todo"
  | "doing"
  | "awaiting"
  | "approve"
  | "finished";

export interface TaskRequest {
  id?: number;
  title: string;
  description: string;
  final_date: string;
  status: TaskStatusType;
  responsible_id: number | null;
}

export type TaskState = Record<TaskStatusType, Task[]>;
