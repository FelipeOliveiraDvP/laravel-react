import { useMutation, useQuery } from "react-query";
import { UserListQuery, UserListResponse } from ".";
import { AxiosError } from "axios";
import { queryClient } from "@/core/config/react-query";
import usersService from "./users.service";
import { getErrorMessage, showError, showSuccess } from "@/core/utils";

export function useUsers(query?: UserListQuery) {
  return useQuery<UserListResponse, AxiosError>(
    ["users", { ...query }],
    () => usersService.list({ ...query }),
    {
      onError(error) {
        showError(getErrorMessage(error as AxiosError));
      },
    }
  );
}

export function useCreateUser() {
  return useMutation(usersService.create, {
    onSuccess(data) {
      queryClient.invalidateQueries(["users"]);
      showSuccess(data.message);
    },
    onError(error) {
      showError(getErrorMessage(error as AxiosError));
    },
  });
}

export function useUpdateUser() {
  return useMutation(usersService.update, {
    onSuccess(data) {
      queryClient.invalidateQueries(["users"]);
      showSuccess(data.message);
    },
    onError(error) {
      showError(getErrorMessage(error as AxiosError));
    },
  });
}

export function useRemoveUser() {
  return useMutation(usersService.remove, {
    onSuccess(data) {
      queryClient.invalidateQueries(["users"]);
      showSuccess(data.message);
    },
    onError(error) {
      showError(getErrorMessage(error as AxiosError));
    },
  });
}
