import { Calendar } from "@mantine/dates";
import React from "react";

export function DashboardCalendar() {
  return (
    <Calendar
      styles={(theme) => ({
        calendarHeader: {
          maxWidth: "100%",
        },
        weekdaysRow: {
          background: theme.colors.gray[2],
        },
        weekday: {
          border: `1px solid ${theme.colors.gray[4]}`,
        },
        month: {
          width: "100%",
        },
        monthCell: {
          textAlign: "center",
          border: `1px solid ${theme.colors.gray[4]}`,
          // padding: theme.spacing.xs,
        },
        day: {
          width: "100%",
          height: "100%",
          padding: theme.spacing.md,
        },
      })}
    />
  );
}
