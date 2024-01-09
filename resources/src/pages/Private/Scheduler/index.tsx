import React from "react";
import { Breadcrumbs, Flex, Grid, Paper, Stack, Text } from "@mantine/core";
import { Calendar, ScheduleForm } from "@/components/Schedule";

import { AnchorLink } from "@/components/__commons";

export default function SchedulerPage() {
  return (
    <Stack>
      <Flex>
        <Breadcrumbs>
          <AnchorLink href="/app">Dashboard</AnchorLink>
          <Text fw="bolder">Agenda</Text>
        </Breadcrumbs>
      </Flex>
      <Grid>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Paper withBorder shadow="md" p="sm" radius="sm">
            <ScheduleForm />
          </Paper>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Paper withBorder shadow="md" p="sm" radius="sm">
            <Calendar />
          </Paper>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
