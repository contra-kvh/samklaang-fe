import { LoginRequest, RegisterRequest } from "@/lib/types/auth"
import client from "./client"

export const loginService = async (data: LoginRequest) => {
	const { email, password } = data
	const response = await client.post("/api/auth/login", { email, password })
	return response.data
}

export const registerService = async (data: RegisterRequest) => {
	const { firstName, lastName, email, password, designation } = data
	const response = await client.post("/api/auth/register", {
		firstName,
		lastName,
		email,
		password,
		designation,
	})
	return response.data
}
