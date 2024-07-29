import { LoginRequest, RegisterRequest } from "@/lib/types/auth";
import client from "./client";

export const loginService = async (data: LoginRequest) => {
  const { email, password } = data;
  const response = await client.post("/api/login", { email, password });
  return response.data;
};

export const registerService = async (data: RegisterRequest) => {
  const { name, email, password } = data;
  const response = await client.post("/api/register", { name, email, password });
  return response.data;
};
