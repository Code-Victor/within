import { Resources } from "@/components/inc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SplashScreen, Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";
import config from "tamagui.config";
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

const queryClient = new QueryClient();

export function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={config}>
        <Resources>
          <Stack />
        </Resources>
      </TamaguiProvider>
    </QueryClientProvider>
  );
}
