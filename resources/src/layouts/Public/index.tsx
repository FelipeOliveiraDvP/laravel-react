import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/core/providers";
import { PageLoader } from "@/components/__commons";
import classes from "./styles.module.css";

export function PublicLayout() {
  const [loading, setLoading] = useState<boolean>(true);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated()
      .then(() => navigate("/app"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <PageLoader />;

  return (
    <div className={classes.wrapper}>
      <Outlet />
    </div>
  );
}
