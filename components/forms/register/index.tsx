"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { PasswordInputBox, TextInputBox } from "@/components/ui/input";
import useAuth from "@/lib/hooks/useAuth";
import { Button } from "@/components/ui/button";

export interface FormValues {
  email: string;
  password: string;
  name: string;
  designation: string;
}

export const RegisterForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const { register, registerStatus } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      email === "" ||
      password === "" ||
      firstName == "" ||
      lastName == "" ||
      designation == "" ||
      cPassword != password
    ) {
      return;
    }

    if (!emailValidator(email) || !passwordValidator(password)) {
      return;
    }

    console.log("Name: " + firstName + " " + lastName);
    console.log("Designation: ", designation);
    console.log("Email: ", email);
    console.log("Password: ", password);

    const success = await register({
      email,
      password,
      firstName,
      lastName,
      designation,
    });
    console.log("Register success: ", success);
    if (success) {
      console.log("Redirecting to /");
      router.replace("/");
    }
  };

  const emailValidator = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const passwordValidator = (value: string) => {
    return value.length >= 8;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[600px] h-fit flex flex-col gap-8 pr-24"
    >
      <TextInputBox
        className="w-full"
        placeholder="First Name"
        onChange={setFirstName}
      />
      <TextInputBox
        className="w-full"
        placeholder="Last Name"
        onChange={setLastName}
      />
      <TextInputBox
        className="w-full"
        placeholder="Designation"
        validator={(value: string): boolean => {
          return value.length > 0;
        }}
        onChange={setDesignation}
      />
      <TextInputBox
        className="w-full"
        placeholder="Organization Email"
        validator={emailValidator}
        onChange={setEmail}
      />
      <PasswordInputBox
        className="w-full"
        placeholder="Password"
        validator={passwordValidator}
        onChange={setPassword}
      />
      <PasswordInputBox
        className="w-full"
        placeholder="Confirm Password"
        onChange={setCPassword}
        validator={passwordValidator}
      />
      <div className="flex gap-6">
        <Button
          text="Register"
          type="primary"
          loading={registerStatus.loading}
        />
        <Button text="Login" type="secondary" href="/auth/login" />
      </div>
    </form>
  );
};
