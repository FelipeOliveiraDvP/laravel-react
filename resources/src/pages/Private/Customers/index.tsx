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
      <CustomersFilters onChange={setParams} />
      <Paper p="md" withBorder>
        <Stack>
          <Flex justify="space-between" align="center">
            <Breadcrumbs>
              <AnchorLink href="/app">Dashboard</AnchorLink>
              <Text fw="bolder">Clientes</Text>
            </Breadcrumbs>
            <Button onClick={() => open()}>Novo Cliente</Button>
          </Flex>

          <CustomersList
            data={{ items: [], pagination: { current: 1, total: 3 } }}
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
