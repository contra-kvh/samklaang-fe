"use client";

import { LoginForm } from "@/components/forms/login";
import React from "react";

const LoginPage = () => {

  return (
    <div className="h-fit w-full flex flex-col gap-[3.5rem] justify-start px-24">
      <p className="text-xl"> Welcome! We're glad to have you back.</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
