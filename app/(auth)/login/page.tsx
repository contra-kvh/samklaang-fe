"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Button } from "@/components/ui/button";
import { PasswordInputBox, TextInputBox } from "@/components/ui/input";
import Spinner from "@/components/ui/spinner";
import useAuth from "@/lib/hooks/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginStatus } = useAuth();
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return;
    }
    console.log("Email: ", email);
    console.log("Password: ", password);

    const success = await login({ email, password });
    console.log("Login success: ", success);
    if (success) {
      console.log("Redirecting to /");
      router.replace("/"); // Redirect to home page after successful login
    }
  };

  const emailValidator = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInputBox
          placeholder="Email"
          onChange={setEmail}
          validator={emailValidator}
        />
        <PasswordInputBox placeholder="Password" onChange={setPassword} />
        {!loginStatus.loading ? (
          <Button text="Login" type="primary" />
        ) : (
          <Spinner />
        )}
        {loginStatus.error && (
          <p className="text-red-500">{loginStatus.error}</p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
