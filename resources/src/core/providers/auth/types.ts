import { User } from "@/core/services/users";

export type AuthContextType = {
  user: User | null;
  isAuthenticated: () => Promise<void>;
  onLogin: (callback: VoidFunction) => void;
  onLogout: (callback: VoidFunction) => void;
};
