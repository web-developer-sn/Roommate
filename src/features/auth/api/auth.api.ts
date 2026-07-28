import api from "@/lib/axios";

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface VerifyEmailPayload {
  email: string;
  otp: string;
}

// Register
export const registerUser = async (
  data: RegisterPayload
) => {
  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;
};

// Verify Email
export const verifyEmail = async (
  data: VerifyEmailPayload
) => {
  const response = await api.post(
    "/auth/verify-email",
    data
  );

  return response.data;
};

// Login
export const loginUser = async (
  data: LoginPayload
) => {
  const response = await api.post(
    "/auth/login",
    data,
    {
      withCredentials: true,
    }
  );

  return response.data;
};