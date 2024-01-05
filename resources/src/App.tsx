import React from "react";
import { QueryClientProvider } from "react-query";
import { MantineProvider } from "@mantine/core";

import { AuthProvider } from "./core/providers";
import { queryClient } from "./core/config/react-query";
import { Router } from "./core/routes";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider>
          <Router />
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
