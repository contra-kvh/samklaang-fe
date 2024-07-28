import { useState, useCallback } from "react";
import useAuthStore from "@/store/authStore";
import { loginService, registerService } from "@/services/auth";
import { LoginRequest, RegisterRequest } from "../types/auth";

const useAuth = () => {
  const { isAuthenticated, user, setAuthState, logout } = useAuthStore();

  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [registerError, setRegisterError] = useState<string | null>(null);

  const login = useCallback(
    async ({ email, password }: LoginRequest) => {
      setLoginLoading(true);
      setLoginError(null);
      try {
        const data = await loginService({ email, password });
        setAuthState({ isAuthenticated: true, user: data.user });
      } catch (error) {
        setLoginError("Login failed. Please try again.");
        console.log("Login error: ", error);
      } finally {
        setLoginLoading(false);
      }
    },
    [setAuthState]
  );

  const register = useCallback(
    async ({ name, email, password }: RegisterRequest) => {
      setRegisterLoading(true);
      setRegisterError(null);
      try {
        const data = await registerService({ name, email, password });
        setAuthState({ isAuthenticated: true, user: data.user });
      } catch (error) {
        setRegisterError("Registration failed. Please try again.");
        console.log("Register error: ", error);
      } finally {
        setRegisterLoading(false);
      }
    },
    [setAuthState]
  );

  return {
    isAuthenticated,
    user,
    login,
    register,
    logout,
    loginLoading,
    registerLoading,
    loginError,
    registerError,
  };
};

export default useAuth;
