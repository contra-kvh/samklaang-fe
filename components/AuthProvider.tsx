"use client";

import { useEffect, ReactNode, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAuth from "@/lib/hooks/useAuth";
import Spinner from "./ui/spinner";
import useAuthStore from "@/store/authStore";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  const publicRoutes = ["/login", "/register"];

  useEffect(() => {
    setIsLoading(false);
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !publicRoutes.includes(pathname)) {
      router.replace("/login");
    }
  }, [isLoading, isAuthenticated, pathname, router]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated && !publicRoutes.includes(pathname)) {
    return null;
  }

  return <>{children}</>;
};

export default AuthProvider;
