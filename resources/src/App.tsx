import React from "react";
import { QueryClientProvider } from "react-query";

import { Router } from "./core/routes";
import { queryClient } from "./core/config/react-query";
import { AuthProvider } from "./core/providers";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}
