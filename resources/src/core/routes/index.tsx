import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrivateLayout, PublicLayout } from "@/layouts";

import LoginPage from "@/pages/Public/Login";
import AdminDashboardPage from "@/pages/Private/Dashboard/Admin";
import UserDashboardPage from "@/pages/Private/Dashboard/User";
import NotFoundPage from "@/pages/Error/NotFound";

export function Router() {
  const isAdmin = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="/app" element={<PrivateLayout />}>
          <Route
            index
            element={isAdmin ? <AdminDashboardPage /> : <UserDashboardPage />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
