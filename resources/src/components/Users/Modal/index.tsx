import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Group,
  Modal,
  ModalProps,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as Yup from "yup";
import { User, UserRequest } from "@/core/services/users";

type Props = ModalProps & {
  user?: User;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Campo Obrigatório"),
  email: Yup.string()
    .required("Campo Obrigatório")
    .email("Informe um e-mail válido"),
});

export function UserModal({ user, ...props }: Props) {
  const form = useForm<UserRequest>({
    validate: yupResolver(schema),
    initialValues: {
      name: "",
      email: "",
    },
  });

  async function handleSave(values: UserRequest) {
    if (user) {
      console.log("Editar: ", values);
    } else {
      console.log("Cadastrar: ", values);
    }
    handleClose();
  }

  function handleClose() {
    form.reset();
    props.onClose();
  }

  useEffect(() => {
    if (user) {
      form.setValues({
        name: user?.name || "",
        email: user?.email || "",
      });
    }
  }, [user]);

  return (
    <Modal
      {...props}
      title={user ? "Editar Usuário" : "Novo usuário"}
      centered
      onClose={handleClose}
    >
      <form onSubmit={form.onSubmit((values) => handleSave(values))}>
        <Stack gap="md">
          <TextInput
            {...form.getInputProps("name")}
            label="Nome"
            placeholder="Adicione o nome do usuário"
            withAsterisk
          />
          <TextInput
            {...form.getInputProps("email")}
            label="E-mail"
            placeholder="Adicione o e-mail"
            withAsterisk
          />
          <Divider />
          <Group gap="sm" justify="flex-end">
            <Button variant="outline" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" loading={false}>
              Salvar Usuário
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
