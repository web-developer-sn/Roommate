import { useMutation } from "@tanstack/react-query";

import {
  loginUser,
  LoginPayload,
} from "../api/auth.api";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginPayload) =>
      loginUser(data),
  });
}