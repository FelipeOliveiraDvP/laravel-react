import { arrayToOptions } from "@/core/utils";

const situationsLabels = [
  "Fase Inicial",
  "Fase de Execução",
  "Contestação",
  "Réplica",
  "Aguardando Audiência",
  "Aguardando Sentença",
  "Recurso",
  "Aguardando Citação",
  "Finalizado",
];

const expertisesLabels = [
  "Consumidor",
  "Cível",
  "Empresarial",
  "Criminal",
  "Eleitoral",
  "Administrativo",
  "Médico",
  "Tributário",
  "Previdenciário",
  "Trabalhista",
  "Sindicato",
  "Negócios Internacionais",
  "Direito Digital",
  "Direito Agrário",
  "Compliance",
  "Direito do Entretenimento",
  "Patente e Marca",
];

export const situationOptions = arrayToOptions(situationsLabels);

export const expertisesOptions = arrayToOptions(situationsLabels);
