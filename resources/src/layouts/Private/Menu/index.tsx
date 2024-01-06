import React from "react";
import { Group, ScrollArea, rem } from "@mantine/core";
import {
  IconGauge,
  IconUserDollar,
  IconCalendarMonth,
  IconLayoutKanban,
  IconGavel,
  IconUsers,
} from "@tabler/icons-react";
import { Logo } from "../Logo";
import { MenuItem } from "../Item";
import { UserInfo } from "../UserInfo";
import classes from "./styles.module.css";

const menuItems = [
  { label: "Dashboard", link: "/app", icon: IconGauge },
  {
    label: "Clientes",
    link: "/app/customers",
    icon: IconUserDollar,
  },
  {
    label: "Agenda",
    link: "/app/scheduler",
    icon: IconCalendarMonth,
  },
  { label: "Tarefas", link: "/app/tasks", icon: IconLayoutKanban },
  { label: "Processos", link: "/app/processes", icon: IconGavel },
  {
    label: "Usuários",
    link: "/app/users",
    icon: IconUsers,
    links: [
      { label: "Todos", link: "/app/users" },
      { label: "Grupos", link: "/app/users/groups" },
    ],
  },
];

export function Menu() {
  const links = menuItems.map((item) => (
    <MenuItem {...item} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: rem(120) }} />
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserInfo />
      </div>
    </nav>
  );
}
