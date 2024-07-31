import { LoginRequest, RegisterRequest } from "@/lib/types/auth";
import client from "./client";

export const loginService = async (data: LoginRequest) => {
  const response = await client.post("/api/auth/login", data);
  return response.data;
};

export const registerService = async (data: RegisterRequest) => {
  const response = await client.post("/api/auth/register", data);
  return response.data;
};
