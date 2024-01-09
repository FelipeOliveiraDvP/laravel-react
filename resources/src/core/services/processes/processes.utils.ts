import { MantineColor } from "@mantine/core";
import { ProcessExpertiseType, ProcessSituationType } from ".";

export const processesSituations: Record<ProcessSituationType, string> = {
  pending: "Pendente",
  approved: "Aprovado",
  cancelled: "Cancelado",
};

export const processesExpertises: Record<ProcessExpertiseType, string> = {
  criminal: "Criminal",
  family: "Família",
};

export const processesSituationColor: Record<
  ProcessSituationType,
  MantineColor
> = {
  pending: "gray",
  approved: "lime",
  cancelled: "red",
};

export const processesExpertiseColor: Record<
  ProcessExpertiseType,
  MantineColor
> = {
  criminal: "grape",
  family: "cyan",
};
