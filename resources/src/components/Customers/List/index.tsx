import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { ActionIcon, Group } from "@mantine/core";
import { Table } from "@/components/__commons";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Customer, CustomerListResponse } from "@/core/services/customers";

interface Props {
  data?: CustomerListResponse;
  loading?: boolean;
  onSelect: (item: Customer) => void;
  onPaginate?: (page: number) => void;
}

export function CustomersList({ data, loading, onSelect, onPaginate }: Props) {
  const columnHelper = createColumnHelper<Customer>();

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: "Nome",
    }),
    columnHelper.accessor("document", {
      id: "document",
      header: "CPF",
    }),
    columnHelper.accessor("phone", {
      id: "phone",
      header: "Telefone",
    }),
    columnHelper.accessor("indication", {
      id: "indication",
      header: "Indicação",
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
    <Table<Customer>
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
