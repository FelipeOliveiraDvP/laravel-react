import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import authService from "./auth.service";
import { useAuth } from "@/core/providers";

export function useLogin() {
  const { onLogin } = useAuth();
  const navigate = useNavigate();

  return useMutation(authService.login, {
    onSuccess() {
      onLogin(() => navigate("/app"));
    },
    onError(error) {
      console.log(error);
      // showNotification({
      //   variant: 'error',
      //   errors: error as AxiosError,
      // });
    },
  });
}

export function useLogout() {
  const { onLogout } = useAuth();
  const navigate = useNavigate();

  return useMutation(authService.logout, {
    onSuccess() {
      onLogout(() => navigate("/"));
    },
    onError(error) {
      console.log(error);
      // showNotification({
      //   variant: 'error',
      //   errors: error as AxiosError,
      // });
    },
  });
}
