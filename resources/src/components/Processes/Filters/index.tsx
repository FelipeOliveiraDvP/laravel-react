import React from "react";
import { Button, Group, Input, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";
import {
  ProcessExpertiseType,
  ProcessListQuery,
  ProcessSituationType,
  processesExpertises,
  processesSituations,
} from "@/core/services/processes";
import { getOptions } from "@/core/utils";

interface Props {
  onChange: (values: ProcessListQuery) => void;
}

const initialValues: ProcessListQuery = {
  process_number: "",
  expertise: null,
  situation: null,
  page: 1,
};

export function ProcessesFilters({ onChange }: Props) {
  const form = useForm<ProcessListQuery>({
    initialValues: initialValues,
  });

  function handleChange(values?: ProcessListQuery) {
    form.setValues({ ...values });
    onChange({ ...values });
  }

  function handleReset() {
    form.reset();
    onChange(initialValues);
  }

  return (
    <form onReset={handleReset}>
      <Group justify="flex-end" gap="sm">
        <Input
          {...form.getInputProps("process_number")}
          placeholder="Número do processo"
          rightSection={<IconSearch />}
          onChange={(e) =>
            handleChange({
              ...form.values,
              process_number: e.target.value,
            })
          }
        />
        <Select
          {...form.getInputProps("situation")}
          placeholder="Situação do processo"
          data={getOptions(processesSituations)}
          onChange={(value) =>
            handleChange({
              ...form.values,
              situation: value as ProcessSituationType,
            })
          }
        />
        <Select
          {...form.getInputProps("expertise")}
          placeholder="Área de atuação"
          data={getOptions(processesExpertises)}
          onChange={(value) =>
            handleChange({
              ...form.values,
              expertise: value as ProcessExpertiseType,
            })
          }
        />
        <Button variant="outline" type="reset" onClick={handleReset}>
          Limpar filtros
        </Button>
      </Group>
    </form>
  );
}
