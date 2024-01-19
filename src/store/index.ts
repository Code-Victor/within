import AsyncStorage from "@react-native-async-storage/async-storage";
import { StateCreator as ZStateCreator } from "zustand";
import {
  createJSONStorage,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

import createAuthSlice, { type AuthSlice } from "./slices/authSlice";

type Slices = AuthSlice;
export type StateCreator<T> = ZStateCreator<Slices, [], [], T>;

const useStore = createWithEqualityFn<Slices>()(
  subscribeWithSelector(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
      }),
      {
        name: "nurovant-store",
        storage: createJSONStorage(() => AsyncStorage),
        partialize: ({ onboardingComplete }) => ({
          onboardingComplete,
        }),
      }
    )
  ),
  shallow
);

export default useStore;
