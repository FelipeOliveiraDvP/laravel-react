import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLogout } from "@/core/services/auth";
import { useAuth } from "@/core/providers";
import { PageLoader } from "@/components/__commons";

export function PrivateLayout() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const logoutMutation = useLogout();

  async function handleLogout() {
    await logoutMutation.mutateAsync();
  }

  useEffect(() => {
    isAuthenticated().catch(() => navigate("/"));
  }, []);

  if (user === null) return <PageLoader />;

  return (
    <div>
      <h1>Layout Privado</h1>
      <nav>
        <button
          onClick={() => handleLogout()}
          disabled={logoutMutation.isLoading}
        >
          Sair
        </button>
      </nav>
      <Outlet />
    </div>
  );
}
