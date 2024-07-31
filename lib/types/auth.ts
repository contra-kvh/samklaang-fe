export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  designation: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
