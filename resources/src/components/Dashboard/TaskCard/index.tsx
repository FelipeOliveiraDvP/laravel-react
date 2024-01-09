import { getFirstLetter } from "@/core/utils";
import { Avatar, Group, Paper, Stack, Text } from "@mantine/core";
import React from "react";

export function DashboardTaskCard() {
  return (
    <Paper
      withBorder
      p="sm"
      styles={(theme) => ({
        root: {
          borderLeft: `8px solid ${theme.colors.blue[7]}`,
        },
      })}
    >
      <Stack gap="xs">
        <Text fw={600}>Inventário Geral</Text>
        <Group justify="space-between">
          <Group>
            <Avatar c="blue.7">{getFirstLetter("Maria Clara")}</Avatar>
            <div>
              <Text fw={500}>Maria Clara</Text>
              <Text c="dimmed">maria.clara@email.com</Text>
            </div>
          </Group>
          <Stack gap="xs" ta="right">
            <Text c="dimmed">12/01/2023</Text>
            <Text c="dimmed">09:00</Text>
          </Stack>
        </Group>
      </Stack>
    </Paper>
  );
}
