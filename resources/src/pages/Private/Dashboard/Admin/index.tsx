import { useAuth } from "@/core/providers";
import React from "react";

export default function AdminDashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Bem vindo {user?.name}!</h2>
    </div>
  );
}
