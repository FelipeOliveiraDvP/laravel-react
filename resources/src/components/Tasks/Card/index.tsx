import React from "react";
import {
  ActionIcon,
  Avatar,
  Flex,
  Group,
  Paper,
  Spoiler,
  Text,
  Title,
} from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { Task } from "@/core/services/tasks";
import { Draggable } from "@hello-pangea/dnd";
import { getFirstLetter } from "@/core/utils";

interface Props {
  task: Task;
  index: number;
  onSelect: (task: Task) => void;
}

export function TaskCard({ task, index, onSelect }: Props) {
  return (
    <Draggable key={task.id} index={index} draggableId={String(task.id)}>
      {(provided) => (
        <Paper
          withBorder
          shadow="md"
          p="sm"
          radius="sm"
          mb="sm"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Flex justify="space-between" mb="md">
            <Title order={5}>{task.title}</Title>
            <Text>Index: {index}</Text>
            <ActionIcon
              variant="light"
              size="sm"
              title="Editar Tarefa"
              onClick={() => onSelect(task)}
            >
              <IconEdit />
            </ActionIcon>
          </Flex>
          <Spoiler
            maxHeight={100}
            showLabel="Mostrar mais"
            hideLabel="Esconder"
          >
            <Text>{task.description}</Text>
          </Spoiler>
          <Group py="sm">
            <Avatar c="blue.7">{getFirstLetter(task.responsible.name)}</Avatar>
            <div>
              <Text fw={500}>{task.responsible.name}</Text>
              <Text c="dimmed">{task.responsible.email}</Text>
            </div>
          </Group>
        </Paper>
      )}
    </Draggable>
  );
}
