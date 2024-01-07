import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Grid,
  Group,
  Modal,
  ModalProps,
  Stack,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm, yupResolver } from "@mantine/form";
import * as Yup from "yup";
import { Customer, CustomerRequest } from "@/core/services/customers";

type Props = ModalProps & {
  customer?: Customer;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Campo Obrigatório"),
  document: Yup.string().required("Campo Obrigatório"),
  phone: Yup.string().required("Campo Obrigatório"),
  birth_date: Yup.string().required("Campo Obrigatório"),
  zip: Yup.string().required("Campo Obrigatório"),
  street: Yup.string().required("Campo Obrigatório"),
  number: Yup.string().required("Campo Obrigatório"),
  city: Yup.string().required("Campo Obrigatório"),
  state: Yup.string().required("Campo Obrigatório"),
});

export function CustomerModal({ customer, ...props }: Props) {
  const form = useForm<CustomerRequest>({
    validate: yupResolver(schema),
    initialValues: {
      name: "",
      phone: "",
      document: "",
      birth_date: "",
      zip: "",
      street: "",
      number: "",
      city: "",
      state: "",
      complement: "",
    },
  });

  async function handleSave(values: CustomerRequest) {
    if (customer) {
      console.log("Editar: ", values);
    } else {
    }
    handleClose();
  }

  function handleClose() {
    form.reset();
    props.onClose();
  }

  useEffect(() => {
    if (customer) {
      form.setValues({ ...customer });
    }
  }, [customer]);

  return (
    <Modal
      {...props}
      title={customer ? "Editar Cliente" : "Novo Cliente"}
      centered
      size="xl"
      onClose={handleClose}
    >
      <form onSubmit={form.onSubmit((values) => handleSave(values))}>
        <Stack gap="md">
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                {...form.getInputProps("name")}
                label="Nome"
                placeholder="Nome do cliente"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                {...form.getInputProps("document")}
                label="CPF"
                placeholder="EX: 000.000.000-00"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                {...form.getInputProps("phone")}
                label="Telefone"
                placeholder="EX: (00) 0000 0000"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <DateInput
                {...form.getInputProps("birth_date")}
                label="Data de Nascimento"
                placeholder="00/00/0000"
                valueFormat="DD/MM/YYYY"
                withAsterisk
                clearable
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                {...form.getInputProps("zip")}
                label="CEP"
                placeholder="EX: 00000-000"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <TextInput
                {...form.getInputProps("street")}
                label="Endereço"
                placeholder="EX: Av. Paulista"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                {...form.getInputProps("number")}
                label="Número"
                placeholder="EX: 000"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                {...form.getInputProps("city")}
                label="Cidade"
                placeholder="EX: São Paulo"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                {...form.getInputProps("state")}
                label="Estado"
                placeholder="EX: SP"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <TextInput
                {...form.getInputProps("complement")}
                label="Complemento"
                placeholder="EX: Sala 54"
              />
            </Grid.Col>
          </Grid>

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
