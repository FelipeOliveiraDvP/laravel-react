import React, { useState } from "react";
import {
  Breadcrumbs,
  Button,
  Flex,
  Paper,
  Portal,
  Stack,
  Text,
} from "@mantine/core";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import { Customer, CustomerListQuery } from "@/core/services/customers";
import {
  CustomerModal,
  CustomersFilters,
  CustomersList,
} from "@/components/Customers";
import { AnchorLink } from "@/components/__commons";

export default function CustomersPage() {
  const [params, setParams] = useState<CustomerListQuery>();
  const [debounced] = useDebouncedValue(params, 200);
  const [selected, setSelected] = useState<Customer>();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack>
      <Flex justify="space-between">
        <Breadcrumbs>
          <AnchorLink href="/app">Dashboard</AnchorLink>
          <Text fw="bolder">Clientes</Text>
        </Breadcrumbs>
        <CustomersFilters onChange={setParams} />
      </Flex>

      <Paper p="md" withBorder>
        <Stack>
          <Flex justify="flex-end" align="center">
            <Button onClick={() => open()}>Novo Cliente</Button>
          </Flex>

          <CustomersList
            data={{ items: mockData, pagination: { current: 1, total: 3 } }}
            loading={false}
            onPaginate={(page) => setParams((params) => ({ ...params, page }))}
            onSelect={(value) => {
              setSelected(value);
              open();
            }}
          />
        </Stack>
      </Paper>
      <Portal>
        <CustomerModal
          customer={selected}
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

export const mockData: Customer[] = [
  {
    id: 1,
    name: "Pedro Silveira",
    document: "1111111",
    email: "pedro.silveira@email.com",
    birth_date: "1989-03-10",
    phone: "111111",
    address: {
      zip: "00000",
      street: "Rua D'avila",
      number: "000",
      city: "São Paulo",
      state: "SP",
    },
    indication: {
      name: "Paulo Rocha",
      email: "paulo.rocha@email.com",
      phone: "22222222",
    },
    created_at: "2024-01-09",
    updated_at: "2024-01-09",
  },
  {
    id: 2,
    name: "Joaquin Alves de Souza",
    document: "4545451",
    email: "joaquin.alves@email.com",
    birth_date: "1992-11-31",
    phone: "45454",
    address: {
      zip: "00000",
      street: "Rua D'avila",
      number: "000",
      city: "São Paulo",
      state: "SP",
    },
    created_at: "2024-01-09",
    updated_at: "2024-01-09",
  },
];
