import { Resources } from "@/components/inc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";
import config from "tamagui.config";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
//TODO: ADD REMOTE NOTIFICATIONS
const queryClient = new QueryClient();
const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

export function RootLayout() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      <TamaguiProvider config={config}>
        <Resources>
          <StatusBar style="dark" />
          <SafeAreaView
            style={{
              flex: 1,
            }}
          >
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            />
          </SafeAreaView>
        </Resources>
      </TamaguiProvider>
    </PersistQueryClientProvider>
  );
}
