import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/core/providers";

export function PublicLayout() {
  const [loading, setLoading] = useState<boolean>(true);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated()
      .then(() => navigate("/app"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Layout Público</h1>
      <Outlet />
    </div>
  );
}
