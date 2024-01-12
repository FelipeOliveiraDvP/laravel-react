import { useMutation, useQuery } from "react-query";
import { UserListQuery, UserListResponse } from ".";
import { AxiosError } from "axios";
import { queryClient } from "@/core/config/react-query";
import usersService from "./users.service";

export function useUsers(query?: UserListQuery) {
  return useQuery<UserListResponse, AxiosError>(
    ["users", { ...query }],
    () => usersService.list({ ...query }),
    {
      onError(error) {},
    }
  );
}

export function useCreateUser() {
  return useMutation(usersService.create, {
    onSuccess(data) {
      queryClient.invalidateQueries(["users"]);
    },
    onError(error) {},
  });
}

export function useUpdateUser() {
  return useMutation(usersService.update, {
    onSuccess(data) {
      queryClient.invalidateQueries(["users"]);
    },
    onError(error) {},
  });
}

export function useRemoveUser() {
  return useMutation(usersService.remove, {
    onSuccess(data) {
      queryClient.invalidateQueries(["users"]);
    },
    onError(error) {},
  });
}
