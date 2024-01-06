import React, { useState } from "react";
import {
  Breadcrumbs,
  Button,
  Flex,
  Paper,
  Portal,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import { UsersFilters, UsersList } from "@/components/Users";
import { User, UserListQuery } from "@/core/services/users";
import { AnchorLink } from "@/components/__commons";
import { IconHome } from "@tabler/icons-react";
import { UserModal } from "@/components/Users/Modal";

const mockData: User[] = [
  {
    id: 1,
    name: "Usuário 1",
    email: "usuario1@email.com",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: 2,
    name: "Usuário 2",
    email: "usuario1@email.com",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
  {
    id: 3,
    name: "Usuário 3",
    email: "usuario1@email.com",
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
  },
];

export default function UsersPage() {
  const [params, setParams] = useState<UserListQuery>();
  const [debounced] = useDebouncedValue(params, 200);
  const [selected, setSelected] = useState<User>();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack>
      <UsersFilters onChange={setParams} />
      <Paper p="md" withBorder>
        <Stack>
          <Flex justify="space-between" align="center">
            <Breadcrumbs>
              <AnchorLink href="/app">Dashboard</AnchorLink>
              <Text fw="bolder">Usuários</Text>
            </Breadcrumbs>
            <Button onClick={() => open()}>Novo Usuário</Button>
          </Flex>

          <UsersList
            data={{ items: mockData, pagination: { current: 1, total: 3 } }}
            loading={false}
            onPaginate={(page) => setParams((params) => ({ ...params, page }))}
            onSelectUser={(user) => {
              setSelected(user);
              open();
            }}
          />
        </Stack>
      </Paper>
      <Portal>
        <UserModal
          user={selected}
          opened={opened}
          onClose={() => {
            setSelected(undefined);
            close();
          }}
        />
      </Portal>
    </Stack>
  );
}
