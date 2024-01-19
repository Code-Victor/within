import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { YStack, Image } from "tamagui";
import { Button, Icon, Text } from "@/components/base";
import { Link, router } from "expo-router";
import useStore from "@/store";

export default function Sample() {
  const setOnboardingComplete = useStore(
    (state) => state.setOnboardingComplete
  );
  function completeOnboarding() {
    setOnboardingComplete(true);
  }
  return (
    <YStack bg="white" f={1} pb="$6">
      <YStack f={3} ai="center" jc="center">
        <Image
          source={require("@/assets/images/onboarding.png")}
          f={1}
          resizeMode="contain"
          style={{
            height: "80%",
            width: "80%",
          }}
        />
        <Image
          source={require("@/assets/images/bg-blur.png")}
          f={1}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: -1,
          }}
        />
      </YStack>
      <YStack f={1.5} gap="$8">
        <YStack gap="$4" ai="center">
          <Icon name="Logo" width={80} />
          <Text ta="center" maxWidth={315} lineHeight="$3">
            Within is a class-rep assistant to help digitise the the bulk of
            work been done by class reps in school.
          </Text>
        </YStack>
        <YStack gap="$3" px="$4">
          <Link href="/(onboarding)/signup" asChild>
            <Button onPress={completeOnboarding}>Let's start</Button>
          </Link>
          <Link href="/(onboarding)/signin" asChild>
            <Button type="ghost" onPress={completeOnboarding}>
              Already have an account? SIGN IN
            </Button>
          </Link>
        </YStack>
      </YStack>
    </YStack>
  );
}
