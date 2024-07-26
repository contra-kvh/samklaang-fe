import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  setAuthState: (authState: Partial<AuthState>) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  setAuthState: (authState) => {
    localStorage.setItem("authState", JSON.stringify(authState));
    set((state) => ({ ...state, ...authState }));
  },
  logout: () => {
    localStorage.removeItem("authState");
    set({ isAuthenticated: false, user: null });
  },
}));

export default useAuthStore;

const loadAuthState = () => {
  const authState = localStorage.getItem("authState");
  if (authState) {
    useAuthStore.getState().setAuthState(JSON.parse(authState));
  }
};

if (typeof window !== "undefined") {
  loadAuthState();
}
