import React from "react";
import { Select } from "@mantine/core";

export function UserSelect() {
  return (
    <Select
      label="Responsável"
      placeholder="Selecione um usuário"
      data={[]}
      withAsterisk
    />
  );
}
