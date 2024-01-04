import React, { ReactNode, createContext, useContext, useState } from "react";
import { AuthContextType } from "./types";
import { User } from "@/core/services/users";
import authService from "@/core/services/auth/auth.service";

const initialValues: AuthContextType = {
  user: null,
  isAuthenticated: () => Promise.resolve(),
  onLogin: () => {},
  onLogout: () => {},
};

const AuthContext = createContext<AuthContextType>(initialValues);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  async function handleLogin(callback: VoidFunction) {
    const currentUser = await authService.profile();

    setUser(currentUser);
    callback();
  }

  function handleLogout(callback: VoidFunction) {
    setUser(null);
    callback();
  }

  async function isAuthenticated() {
    try {
      const currentUser = await authService.profile();
      setUser(currentUser);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  return useContext<AuthContextType>(AuthContext);
}

export * from "./types";
