export interface AuthResponse {
  user: User;
  token: Token;
}

export interface Token {
  token: string;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  regNo: string;
  dateOfBirth: string;
  department: string;
  level: string;
}
