import React, { useState } from "react";
import { Select, SelectProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useUsers } from "@/core/services/users";

export function UserSelect({ ...props }: SelectProps) {
  const [params, setParams] = useState<{ name: string }>();
  const [debounced] = useDebouncedValue(params, 200);
  const { data } = useUsers(debounced);

  return (
    <Select
      {...props}
      label="Usuário"
      placeholder="Selecione um usuário"
      data={
        data
          ? data.items.map((item) => ({
              value: String(item.id),
              label: item.name,
            }))
          : []
      }
      onSearchChange={(value) => setParams({ name: value })}
    />
  );
}
