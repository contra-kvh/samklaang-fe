"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

import { PasswordInputBox, TextInputBox } from "@/components/ui/input"
import useAuth from "@/lib/hooks/useAuth"
import { Button } from "@/components/ui/button"
import Spinner from "@/components/ui/spinner"

export interface FormValues {
	email: string
	password: string
	name: string
}

interface RegisterFormProps {
	// onSubmit?: (values: FormValues) => void
}

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [cPassword, setCPassword] = useState("")
	const { register, registerStatus } = useAuth()
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (
			email === "" ||
			password === "" ||
			name == "" ||
			username == "" ||
			cPassword != password
		) {
			return
		}
		console.log("Name: ", name)
		console.log("Username: ", username)
		console.log("Email: ", email)
		console.log("Password: ", password)

		const success = await register({ email, password, name })
		console.log("Register success: ", success)
		if (success) {
			console.log("Redirecting to /")
			router.replace("/")
		}
	}

	const emailValidator = (value: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(value)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full max-w-[600px] h-fit flex flex-col gap-8 pr-24"
		>
			<TextInputBox
				className="w-full"
				placeholder="Name"
				onChange={setName}
			/>
			<TextInputBox
				className="w-full"
				placeholder="Username"
				validator={(value: string): boolean => {
					return value.length >= 6
				}}
				onChange={setUsername}
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
				onChange={setPassword}
			/>
			<PasswordInputBox
				className="w-full"
				placeholder="Confirm Password"
				onChange={setCPassword}
			/>
			<div className="flex gap-6">
				<Button
					text="Register"
					type="primary"
					loading={registerStatus.loading}
				/>
				<Button text="Login" type="secondary" href="/auth/login" />
			</div>
			{registerStatus.error && (
				<p className="text-red-500">{registerStatus.error}</p>
			)}
		</form>
	)
}
