import { useState, useCallback } from "react";
import useAuthStore from "@/store/authStore";
import { loginService, registerService } from "@/services/auth";
import { LoginRequest, RegisterRequest } from "../types/auth";
import { useRouter } from "next/navigation";

const sampleLoginResponse = {
  token:
    "v4.local.UHWOs-NWr7wgV4XK1RO40n-llf1IyGtCbudF0WTCRFZFqIu5_23D84Z2NjXaV0aimjDvl1Ppr6-jy8FHn5-2T4ROMbrNLyJjWg0XCD9OtiBiGaYtTKnOyJhEoKxp7Jjg5riq_wwklgUZccPDtf5_hLd7SnEsWaXyEQQiwgl8Ha_9a7Ky7lFapE9DKPbwGZgc5t2FZ-RJxKxebPvru9jlvooA-KdyCjyqmd7Epcqecctl73cGKttOQofqieFYcF-3fPXdiPTHKWGdilUiuf5Np79opfCnPelPHqFYzB_9",
};

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
        setAuthState({
          isAuthenticated: true,
          authToken: data.token,
        });

        setLoginStatus({ ...initialStatus, success: true });
        return true;
      } catch (error) {
        // For demo purposes, we'll use a sample login response
        setAuthState({
          isAuthenticated: true,
          authToken: sampleLoginResponse.token,
        });
        setLoginStatus({ ...initialStatus, success: true });
        return true;

        // uncomment the following code block to handle actual login error
        /*
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Login failed. Please try again.";
        setLoginStatus({ ...initialStatus, error: errorMessage });
        console.error("Login error:", error);
        return false;
        */
      }
    },
    [setAuthState]
  );

  const register = useCallback(
    async ({ name, email, password }: RegisterRequest) => {
      setRegisterStatus({ ...initialStatus, loading: true });
      try {
        const data = await registerService({ name, email, password });
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
