import React from "react";
import logo from "@/public/logo.svg";
import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full">
      <main className="h-full w-full justify-between flex flex-col">
        <div className="header flex justify-start items-center gap-4">
          <Image src={logo} alt="samklaang_logo" height="50" width="50" />
          <span className="text-xl">Authenticate </span>
        </div>
        {children}
        <footer className="text-sm text-muted">Copyright © 2024, All India Council for Technical Education</footer>
      </main>
      <div className="h-full w-full">
        svg bg
      </div>
    </div>
  );
};

export default AuthLayout;
