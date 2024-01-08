import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Group,
  Modal,
  ModalProps,
  Select,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as Yup from "yup";
import {
  Task,
  TaskRequest,
  TaskStatusType,
  taskStatusOptions,
} from "@/core/services/tasks";

type Props = ModalProps & {
  task?: Task;
  status?: TaskStatusType;
};

const schema = Yup.object().shape({
  title: Yup.string().required("Campo Obrigatório"),
  description: Yup.string().required("Campo Obrigatório"),
  status: Yup.string().required("Campo Obrigatório"),
  responsible_id: Yup.string().required("Campo Obrigatório"),
});

const responsibles = [
  {
    id: 1,
    name: "Ana Carla",
    email: "ana.carla@email.com",
  },
  {
    id: 2,
    name: "Pedro Augusto",
    email: "pedro.augusto@email.com",
  },
  {
    id: 3,
    name: "José da Silva",
    email: "jose.silva@email.com",
  },
];

export function TaskModal({ task, status, ...props }: Props) {
  const form = useForm<TaskRequest>({
    validate: yupResolver(schema),
    initialValues: {
      title: "",
      description: "",
      status: "todo",
      responsible_id: null,
    },
  });

  async function handleSave(values: TaskRequest) {
    console.log("Editar: ", values);

    handleClose();
  }

  function handleClose() {
    form.reset();
    props.onClose();
  }

  useEffect(() => {
    if (task) {
      form.setValues({ ...task, responsible_id: task.responsible.id });
    }

    if (status) {
      form.setFieldValue("status", status);
    }
  }, [task, status]);

  return (
    <Modal
      {...props}
      title={task ? "Editar Tarefa" : "Nova Tarefa"}
      centered
      size="md"
      onClose={handleClose}
    >
      <form onSubmit={form.onSubmit((values) => handleSave(values))}>
        <Stack gap="md">
          <TextInput
            {...form.getInputProps("title")}
            label="Título"
            placeholder="Informe o título da tarefa"
            withAsterisk
          />
          <Textarea
            {...form.getInputProps("description")}
            label="Descrição"
            placeholder="Informe com detalhes o será executado na tarefa"
            rows={6}
            withAsterisk
          />
          <Select
            {...form.getInputProps("status")}
            label="Status da tarefa"
            withAsterisk
            data={taskStatusOptions}
          />
          <Select
            {...form.getInputProps("responsible_id")}
            label="Responsável"
            placeholder="Selecione o responsável da tarefa"
            withAsterisk
            data={responsibles.map((item) => ({
              value: String(item.id),
              label: item.name,
            }))}
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
