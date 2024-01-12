import { arrayToOptions } from "@/core/utils";
import { ProcessLegalEnum, ProcessSituationEnum } from ".";

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

const legalLabels = [
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

export const legalOptions = arrayToOptions(legalLabels);

export const getSituationLabel = (item: ProcessSituationEnum) =>
  situationsLabels[item];

export const getLegalLabel = (item: ProcessLegalEnum) => legalLabels[item];
