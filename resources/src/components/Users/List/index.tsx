import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { ActionIcon, Group } from "@mantine/core";
import { Table } from "@/components/__commons";
import { User, UserListResponse } from "@/core/services/users";
import { IconEdit, IconTrash } from "@tabler/icons-react";

interface Props {
  data?: UserListResponse;
  loading?: boolean;
  onSelectUser: (user: User) => void;
  onPaginate?: (page: number) => void;
}

export function UsersList({ data, loading, onSelectUser, onPaginate }: Props) {
  const columnHelper = createColumnHelper<User>();

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: "Nome",
    }),
    columnHelper.accessor("email", {
      id: "email",
      header: "E-mail",
    }),
    columnHelper.accessor((row) => row, {
      id: "actions",
      header: "",
      cell: ({ getValue }) => (
        <Group justify="flex-end" gap="xs" align="center">
          <ActionIcon
            variant="transparent"
            size="lg"
            onClick={() => onSelectUser(getValue())}
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
    <Table<User>
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
