import React from "react";
import { Link } from "react-router-dom";
import { UnstyledButton, Group, Avatar, Text, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./styles.module.css";
import { useAuth } from "@/core/providers";
import { getFirstLetter } from "@/core/utils";

export function UserInfo() {
  const { user } = useAuth();

  return (
    <UnstyledButton className={classes.user} component={Link} to="/app/profile">
      <Group>
        <Avatar radius="xl" color="blue.7">
          {getFirstLetter(user?.name || "A")}
        </Avatar>

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {user?.name || "Usuário"}
          </Text>

          <Text c="dimmed" size="xs">
            {user?.email || "usuario@email.com"}
          </Text>
        </div>

        <IconChevronRight
          style={{ width: rem(14), height: rem(14) }}
          stroke={1.5}
        />
      </Group>
    </UnstyledButton>
  );
}
