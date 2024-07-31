import { useState, useCallback } from "react";
import useAuthStore from "@/store/authStore";
import { loginService, registerService } from "@/services/auth";
import { LoginRequest, RegisterRequest } from "../types/auth";
import { useRouter } from "next/navigation";

type AuthStatus = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

const initialStatus: AuthStatus = {
  loading: false,
  error: null,
  success: false,
};

const useAuth = () => {
  const { isAuthenticated, setAuthState, clearAuthState } = useAuthStore();

  const router = useRouter();
  const [loginStatus, setLoginStatus] = useState<AuthStatus>(initialStatus);
  const [registerStatus, setRegisterStatus] =
    useState<AuthStatus>(initialStatus);

  const login = useCallback(
    async ({ email, password }: LoginRequest) => {
      setLoginStatus({ ...initialStatus, loading: true });
      try {
        const data = await loginService({ email, password });
        console.log("Login Response data: ", data);
        setAuthState({
          isAuthenticated: true,
          authToken: data.token,
        });

        setLoginStatus({ ...initialStatus, success: true });
        return true;
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Login failed. Please try again.";
        setLoginStatus({ ...initialStatus, error: errorMessage });
        console.error("Login error:", error);
        return false;
      }
    },
    [setAuthState]
  );

  const register = useCallback(
    async ({ name, email, password, designation }: RegisterRequest) => {
      setRegisterStatus({ ...initialStatus, loading: true });
      try {
        const data = await registerService({
          name,
          email,
          password,
          designation,
        });
        console.log("Register Response data: ", data);
        setAuthState({ isAuthenticated: true, authToken: data.token });
        setRegisterStatus({ ...initialStatus, success: true });
        return true;
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Registration failed. Please try again.";
        setRegisterStatus({ ...initialStatus, error: errorMessage });
        console.error("Register error:", error);
        return false;
      }
    },
    [setAuthState]
  );

  const logout = useCallback(() => {
    clearAuthState();

    router.replace("/login");
  }, [clearAuthState]);

  return {
    isAuthenticated,
    login,
    register,
    logout,
    loginStatus,
    registerStatus,
  };
};

export default useAuth;
