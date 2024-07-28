import React from "react"

import { Button } from "@/components/ui/button"
import { PasswordInputBox, TextInputBox } from "@/components/ui/input"

export interface FormValues {
	email: string
	password: string
	name: string
}

interface RegisterFormProps {
	onSubmit?: (values: FormValues) => void
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
	return (
		<div className="w-full px-16 flex flex-col gap-8">
			<h2 className="text-lg">
				Welcome! We're excited to get you started.
			</h2>
			<TextInputBox
				placeholder="Name"
				onChange={(newval: string) => console.log(`name: ${newval}`)}
			/>
			<TextInputBox
				placeholder="Username"
				validator={(value: string): boolean => {
					return value.length > 6
				}}
				onChange={(newval: string) =>
					console.log(`username: ${newval}`)
				}
			/>
			<TextInputBox
				placeholder="Organization Email"
				validator={(value: string): boolean => {
					const emailRegex =
						/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
					return emailRegex.test(value)
				}}
				onChange={(newval: string) => console.log(`email: ${newval}`)}
			/>
			<PasswordInputBox
				placeholder="Password"
				onChange={(newval: string) =>
					console.log(`password: ${newval}`)
				}
			/>
			<PasswordInputBox
				placeholder="Confirm Password"
				onChange={(newval: string) =>
					console.log(`confirm password: ${newval}`)
				}
			/>
		</div>
	)
}
