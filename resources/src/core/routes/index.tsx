import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrivateLayout, PublicLayout } from "@/layouts";

const LoginPage = lazy(() => import("@/pages/Public/Login"));

const AdminDashboardPage = lazy(
  () => import("@/pages/Private/Dashboard/Admin")
);
const UserDashboardPage = lazy(() => import("@/pages/Private/Dashboard/User"));
const CustomersPage = lazy(() => import("@/pages/Private/Customers"));
const SchedulerPage = lazy(() => import("@/pages/Private/Scheduler"));
const TasksPage = lazy(() => import("@/pages/Private/Tasks"));
const ProcessesPage = lazy(() => import("@/pages/Private/Processes"));
const UsersPage = lazy(() => import("@/pages/Private/Users"));
const GroupsPage = lazy(() => import("@/pages/Private/Users/Groups"));
const ProfilePage = lazy(() => import("@/pages/Private/Profile"));

const NotFoundPage = lazy(() => import("@/pages/Error/NotFound"));

export function Router() {
  const isAdmin = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/app" element={<PrivateLayout />}>
          <Route
            index
            element={isAdmin ? <AdminDashboardPage /> : <UserDashboardPage />}
          />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="scheduler" element={<SchedulerPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="processes" element={<ProcessesPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/groups" element={<GroupsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
