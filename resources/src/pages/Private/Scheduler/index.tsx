import React from "react";
import {
  ColorInput,
  ColorPicker,
  Divider,
  Grid,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Calendar, ScheduleForm } from "@/components/Schedule";
import { UserSelect } from "@/components/Users";
import { DateInput, DateTimePicker } from "@mantine/dates";

export default function SchedulerPage() {
  return (
    <Stack>
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
