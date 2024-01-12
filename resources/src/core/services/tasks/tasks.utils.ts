import { Task, TaskState, TaskStatusType } from "@/core/services/tasks";
import { objectToOptions } from "@/core/utils";

export const initialTaskState: TaskState = {
  todo: [],
  doing: [],
  awaiting: [],
  approve: [],
  finished: [],
};

export const taskStatus: Record<TaskStatusType, string> = {
  todo: "A fazer",
  doing: "Em andamento",
  awaiting: "Aguardando",
  approve: "Aprovado",
  finished: "Finalizado",
};

export const taskStatusOptions = objectToOptions(taskStatus);

export const mockData: Task[] = [
  {
    id: 1,
    status: "todo",
    index: 0,
    title: "Emitir nota",
    description: "Emitir a nota dos produtos enviados.",
    responsible: {
      id: 1,
      name: "Ana Julia",
      email: "ana.julia@email.com",
    },
    created_at: "2024-01-07",
    updated_at: "2024-01-07",
  },
  {
    id: 2,
    status: "todo",
    index: 1,
    title: "Ir ao cartório",
    description: "Registrar os documentos do cliente no cartório.",
    responsible: {
      id: 1,
      name: "Pedro Augusto",
      email: "pedro.augusto@email.com",
    },
    created_at: "2024-01-07",
    updated_at: "2024-01-07",
  },
  {
    id: 3,
    status: "todo",
    index: 2,
    title: "Revisar processos",
    description: "Revisar todos os processos antes de enviar para o fórum.",
    responsible: {
      id: 1,
      name: "Maria Clara",
      email: "maria.clara@email.com",
    },
    created_at: "2024-01-07",
    updated_at: "2024-01-07",
  },
  {
    id: 4,
    status: "doing",
    index: 0,
    title: "Inventário Geral",
    description: "Realizar o inventário de todos os items do escritório.",
    responsible: {
      id: 1,
      name: "Maria Clara",
      email: "maria.clara@email.com",
    },
    created_at: "2024-01-07",
    updated_at: "2024-01-07",
  },
  {
    id: 5,
    status: "doing",
    index: 1,
    title: "Prospecção de novos clientes",
    description:
      "Buscar o primeiro contato e fechar contratos com novos clientes.",
    responsible: {
      id: 1,
      name: "Maria Clara",
      email: "maria.clara@email.com",
    },
    created_at: "2024-01-07",
    updated_at: "2024-01-07",
  },
];
