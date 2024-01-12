import React from "react";
import { QueryClientProvider } from "react-query";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

import { AuthProvider } from "./core/providers";
import { queryClient } from "./core/config/react-query";
import { Router } from "./core/routes";
import { DatesProvider } from "@mantine/dates";

import "dayjs/locale/pt-br";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider>
          <DatesProvider
            settings={{ locale: "pt-br", timezone: "America/Sao_Paulo" }}
          >
            <ModalsProvider>
              <Router />
            </ModalsProvider>
          </DatesProvider>
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
