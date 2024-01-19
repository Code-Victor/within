import "react-native-gesture-handler";
import "react-native-reanimated";

import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useIsRestoring } from "@tanstack/react-query";

export function Resources({ children }: { children: React.ReactNode }) {
  const [fontsLoaded, fontsError] = useFonts({
    inter: require("@/assets/fonts/Inter-Regular.ttf"),
    interMedium: require("@/assets/fonts/Inter-Medium.ttf"),
    interSemibold: require("@/assets/fonts/Inter-SemiBold.ttf"),
    interBold: require("@/assets/fonts/Inter-Bold.ttf"),
  });
  const restoring = useIsRestoring(); // This is a hook from react-query-persist-client.

  useEffect(() => {
    if ((fontsLoaded || fontsError) && !restoring) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }
  return <>{children}</>;
}
