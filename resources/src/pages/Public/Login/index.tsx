import React from "react";
import {
  Button,
  Center,
  Container,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { yupResolver } from "mantine-form-yup-resolver";
import { useForm } from "@mantine/form";
import { IconLogin2 } from "@tabler/icons-react";
import * as yup from "yup";
import { LoginRequest, useLogin } from "@/core/services/auth";
import classes from "./styles.module.css";

export const LoginSchema = yup.object().shape({
  email: yup.string().required("Campo Obrigatório").email("E-mail inválido"),
  password: yup.string().min(2, "A senha precisa ter no mínimo 8 caracteres"),
});

export default function LoginPage() {
  const loginMutation = useLogin();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(LoginSchema),
  });

  async function handleSubmit(values: LoginRequest) {
    await loginMutation.mutateAsync(values);
  }

  return (
    <Center h="100%">
      <Paper withBorder w={420} shadow="md" p={30} mt={30} radius="md">
        <Stack>
          <Title ta="center" className={classes.title}>
            Bem Vindo!
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Informe seu usuário e senha para acessar a plataforma.
          </Text>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="E-mail"
              placeholder="email@exemplo.com"
              withAsterisk
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Senha"
              placeholder="********"
              withAsterisk
              mt="md"
              {...form.getInputProps("password")}
            />
            <Button
              type="submit"
              fullWidth
              mt="xl"
              rightSection={<IconLogin2 />}
              loading={loginMutation.isLoading}
            >
              Entrar
            </Button>
          </form>
        </Stack>
      </Paper>
    </Center>
  );
}
