export interface RegisterRequest {
	firstName: string
	lastName: string
	email: string
	designation: string
	password: string
}

export interface LoginRequest {
	email: string
	password: string
}
