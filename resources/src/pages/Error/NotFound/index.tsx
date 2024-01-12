import React from "react";
import { Link } from "react-router-dom";
import { Button, Center, Stack, Text, rem } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { useAuth } from "@/core/providers";

export default function NotFoundPage() {
  const { authenticated } = useAuth();

  return (
    <Center h="100%">
      <Stack>
        <Text size={rem(96)} ta="center">
          404
        </Text>
        <Text c="dimmed">
          Oops! A página que você está tentando acessar não existe.
        </Text>
        <Button
          component={Link}
          to={authenticated ? "/app" : "/"}
          size="xl"
          variant="primary"
          leftSection={<IconHome />}
        >
          Voltar para a Home
        </Button>
      </Stack>
    </Center>
  );
}
