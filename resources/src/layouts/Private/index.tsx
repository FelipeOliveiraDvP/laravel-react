import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppShell } from "@mantine/core";

import { Menu } from "./Menu";
import { PageLoader } from "@/components/__commons";
import { useAuth } from "@/core/providers";
import { useLogout } from "@/core/services/auth";

export function PrivateLayout() {
  const { user, isAuthenticated } = useAuth();
  const logoutMutation = useLogout();
  const navigate = useNavigate();

  async function handleLogout() {
    await logoutMutation.mutateAsync();
  }

  useEffect(() => {
    isAuthenticated().catch(() => navigate("/"));
  }, []);

  if (user === null) return <PageLoader />;

  return (
    <AppShell
      layout="alt"
      padding="md"
      header={{ height: 58 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
    >
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Navbar>
        <Menu />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
