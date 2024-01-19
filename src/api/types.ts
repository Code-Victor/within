export interface AuthResponse {
  authResponse: { user: User; token: string };
}

export interface GetUserResponse {
  userDetails: User;
}
export interface User {
  id: string;
  email: string;
  fullName: string;
  regNo?: string;
  dateOfBirth?: string;
  department?: string;
  level?: string;
}
export interface GetSpacesResponse {
  mySpaces: Space[];
  memberSpaces: Space[];
}

export interface Space {
  id: string;
  name: string;
  profileImage: string;
  description: string;
  spaceCode: string;
  owner: User;
  members: User[];
}
