import axios from "axios";
import {
  AuthResponse,
  GetAllSpacesResponse as GetAllSpacesResponse,
  GetSpaceResponse,
  GetUserResponse,
  Space,
  User,
} from "./types";
import { getAccessToken } from "@/utils";
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
  regNo?: string;
  dateOfBirth?: Date;
  department?: string;
  level?: string;
  password: string;
  expoToken?: string;
};

// Error logger
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const url = error.response?.config.url as string;
    const method = error.response?.config.method as string;
    const status = error.response?.status as number;
    const message = error.response?.data?.message as string;
    console.log(`API Error -> ${url}(${status})[${method}]: ${message}`);
    return Promise.reject(error);
  }
);
function tokenInterceptor() {
  const interceptor = api.interceptors.request.use(
    async (config) => {
      const token = await getAccessToken();
      if (token) {
        config.headers["x-auth-token"] = token;
      }
      console.log(`using token (access)} : `, token);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return () => {
    api.interceptors.request.eject(interceptor);
  };
}

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
  const eject = tokenInterceptor();
  const response = await api.get<GetUserResponse>("/user/me");
  eject();
  return response.data.userDetails;
}

type CreateSpaceData = {
  name: string;
  profileImage: string;
  description?: string;
};
export async function createSpace(data: CreateSpaceData) {
  const eject = tokenInterceptor();
  const response = await api.post("/spaces/space/", data);
  eject();
  return response.data;
}

export async function getAllSpaces() {
  const eject = tokenInterceptor();
  const response = await api.get<GetAllSpacesResponse>("/spaces");
  eject();
  return response.data.spaces;
}

export async function joinSpace(data: { spaceId: string }) {
  const eject = tokenInterceptor();
  const response = await api.post("/spaces/space/join", data);
  eject();
  return response.data;
}

export async function leaveSpaces(data: { spaceId: string }) {
  const eject = tokenInterceptor();
  const response = await api.post(`/spaces/space/${data.spaceId}/leave`);
  eject();
  return response.data;
}

export async function getSpace({ spaceId }: { spaceId: string }) {
  const eject = tokenInterceptor();
  const response = await api.get<GetSpaceResponse>(`/spaces/space/${spaceId}`);
  eject();
  return response.data.space;
}

export async function createAnnoucement({
  spaceId,
  ...data
}: {
  spaceId: string;
  title: string;
  description?: string;
}) {
  const eject = tokenInterceptor();
  const response = await api.post(
    `/spaces/space/${spaceId}/announcements`,
    data
  );
  eject();
  return response.data;
}
export async function getAnnouncements({ spaceId }: { spaceId: string }) {
  const eject = tokenInterceptor();
  const response = await api.get(`/spaces/space/${spaceId}/announcements`);
  eject();
  return response.data;
}
