"use client";

import { Button } from "@/components/ui/button";
import { PasswordInputBox, TextInputBox } from "@/components/ui/input";
import Spinner from "@/components/ui/spinner";
import useAuth from "@/lib/hooks/useAuth";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginLoading: isLoading, loginError: isError } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return;
    }
    console.log("Email: ", email);
    console.log("Password: ", password);

    await login({ email, password });
  };

  // Dummy UI for now
  return (
    <div className="h-full w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInputBox placeholder="Email" value={email} setValue={setEmail} />
        <PasswordInputBox
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        {!isLoading ? <Button text="Login" type="primary" /> : <Spinner />}
        {isError && <p className="text-red-500">{isError}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
