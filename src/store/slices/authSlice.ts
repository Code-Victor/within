import { User } from "@/api/types";
import { StateCreator } from "..";

export interface AuthSlice {
  user?: User;
  setUser: (user?: User) => void;
  onboardingComplete: boolean;
  setOnboardingComplete: (onboardingComplete: boolean) => void;
}

const createPhoneIdSlice: StateCreator<AuthSlice> = (set) => ({
  setUser: (user) => set({ user }),
  onboardingComplete: false,
  setOnboardingComplete: (onboardingComplete) => set({ onboardingComplete }),
});

export default createPhoneIdSlice;
