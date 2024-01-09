import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { ActionIcon, Badge, Group } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Table } from "@/components/__commons";
import {
  Process,
  ProcessResponseType,
  processesExpertiseColor,
  processesExpertises,
  processesSituationColor,
  processesSituations,
} from "@/core/services/processes";

interface Props {
  data?: ProcessResponseType;
  loading?: boolean;
  onSelect: (item: Process) => void;
  onPaginate?: (page: number) => void;
}

export function ProcessesList({ data, loading, onSelect, onPaginate }: Props) {
  const columnHelper = createColumnHelper<Process>();

  const columns = [
    columnHelper.accessor("process_number", {
      id: "process_number",
      header: "Número do Processo",
    }),
    columnHelper.accessor("customer.name", {
      id: "customer.name",
      header: "Cliente",
    }),
    columnHelper.accessor("situation", {
      id: "situation",
      header: "Situação",
      cell: ({ getValue }) => (
        <Badge color={processesSituationColor[getValue()]}>
          {processesSituations[getValue()]}
        </Badge>
      ),
    }),
    columnHelper.accessor("expertise", {
      id: "expertise",
      header: "Área de Atuação",
      cell: ({ getValue }) => (
        <Badge color={processesExpertiseColor[getValue()]}>
          {processesExpertises[getValue()]}
        </Badge>
      ),
    }),
    columnHelper.accessor((row) => row, {
      id: "actions",
      header: "",
      cell: ({ getValue }) => (
        <Group justify="flex-end" gap="xs" align="center">
          <ActionIcon
            variant="transparent"
            size="lg"
            onClick={() => onSelect(getValue())}
          >
            <IconEdit />
          </ActionIcon>
          <ActionIcon
            variant="transparent"
            size="lg"
            onClick={() => console.log("Remover: ", getValue())}
          >
            <IconTrash />
          </ActionIcon>
        </Group>
      ),
    }),
  ];

  return (
    <Table<Process>
      columns={columns}
      data={data?.items || []}
      loading={loading}
      pagination={{
        total: data?.pagination.total || 1,
        onPaginate: (page) => onPaginate && onPaginate(page),
      }}
    />
  );
}
