export interface Task {
  id: number;
  index: number;
  title: string;
  description: string;
  status: TaskStatusType;
  responsible: {
    id: number;
    name: string;
    email: string;
  };
  created_at: string;
  updated_at: string;
}

export type TaskStatusType = "todo" | "doing" | "approve" | "finished";

export interface TaskRequest {
  id?: number;
  title: string;
  description: string;
  status: TaskStatusType;
  responsible_id: number | null;
}

export type TaskState = Record<TaskStatusType, Task[]>;
