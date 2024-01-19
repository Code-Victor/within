import axios from "axios";
import { AuthResponse, User } from "./types";
const BASE_URL = "https://within-server-1d2c312a65a1.herokuapp.com/";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

type SignupData = {
  email: string;
  fullName: string;
  regNo: string;
  dateOfBirth: Date;
  department: string;
  level: string;
  password: string;
  expoToken: string;
};

export async function signup(data: SignupData) {
  const response = await api.post<AuthResponse>("/user/auth/signup", data);
  return response.data;
}

type LoginData = {
  email: string;
  password: string;
};

export async function login(data: LoginData) {
  const response = await api.post<AuthResponse>("/user/auth/login", data);
  return response.data;
}

export async function getUser() {
  const response = await api.get<User>("/user");
  return response.data;
}
