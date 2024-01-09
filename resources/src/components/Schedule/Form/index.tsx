import React from "react";
import {
  Button,
  ColorInput,
  Divider,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { UserSelect } from "@/components/Users";

export function ScheduleForm() {
  return (
    <Stack>
      <Title order={3}>Eventos</Title>
      <Text c="dimmed">Crie eventos para não esquecer de nada importante</Text>
      <TextInput
        label="Título"
        placeholder="Informe o título do evento"
        withAsterisk
      />
      <ColorInput
        label="Cor"
        placeholder="Escolha uma cor para identificar seu evento"
        withAsterisk
      />
      <UserSelect />
      <DateTimePicker
        label="Início do evento"
        placeholder="Selecione data e hora do evento"
        withAsterisk
      />
      <DateTimePicker
        label="Final do evento"
        placeholder="Selecione data e hora do evento"
        withAsterisk
      />
      <Divider />
      <Group gap="sm" justify="flex-end">
        <Button type="submit" loading={false}>
          Novo Evento
        </Button>
      </Group>
    </Stack>
  );
}
