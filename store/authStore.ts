import { create } from "zustand";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

interface AuthState {
  isAuthenticated: boolean;
  authToken?: string;

  setAuthState: (state: Partial<AuthState>) => void;
  clearAuthState: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  authToken: undefined,

  setAuthState: (state: Partial<AuthState>) => {
    console.log("Setting auth state: ", state);
    if (state.authToken) {
      setCookie("authToken", state.authToken, {
        path: "/",
      });
      set({ isAuthenticated: true, authToken: state.authToken });
    }
  },
  clearAuthState: () => {
    deleteCookie("authToken", {
      path: "/",
    });
    console.log("Cleared auth state", document.cookie);
    set({ isAuthenticated: false, authToken: undefined });
  },
}));

export default useAuthStore;

const loadAuthState = () => {
  const token = getCookie("authToken");
  console.log("Loaded auth token: ", token);
  if (token) {
    useAuthStore.getState().setAuthState({
      authToken: String(token),
    });
  }
};

if (typeof window !== "undefined") loadAuthState();
