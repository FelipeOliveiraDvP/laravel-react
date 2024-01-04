import React from "react";
import { Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <div>
      <h1>Layout Público</h1>
      <Outlet />
    </div>
  );
}
