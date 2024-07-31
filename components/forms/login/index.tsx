"use client";

import { PasswordInputBox } from "@/components/ui/input/PasswordInputBox";
import { TextInputBox } from "@/components/ui/input/TextInputBox";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Button } from "@/components/ui/button";
import useAuth from "@/lib/hooks/useAuth";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginStatus } = useAuth();
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "" || !emailValidator(email)) {
      return;
    }

    console.log("Email: ", email);
    console.log("Password: ", password);

    const success = await login({ email, password });
    console.log("Login success: ", success);
    if (success) {
      console.log("Redirecting to /dashboard");
      router.replace("/dashboard");
    }
  };

  const emailValidator = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[600px] h-fit flex flex-col gap-8 pr-24"
    >
      <TextInputBox
        placeholder="Organization Email"
        onChange={setEmail}
        validator={emailValidator}
        className="w-full"
      />
      <PasswordInputBox
        placeholder="Password"
        onChange={setPassword}
        className="w-full"
      />
      <div className="flex gap-6">
        <Button text="Login" type="primary" loading={loginStatus.loading} />
        <Button text="Register" type="secondary" href="/auth/register" />
      </div>
      {loginStatus.error && <p className="text-red-500">{loginStatus.error}</p>}
    </form>
  );
};
