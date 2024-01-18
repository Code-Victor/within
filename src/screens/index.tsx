import { SafeAreaView } from "react-native-safe-area-context";
import { Text, YStack } from "tamagui";
import { Button } from "@/components/base";
import { Link, router } from "expo-router";


export default function Sample() {
  return (
    <SafeAreaView>
      <YStack gap="$2" px="$4">
        <Button>Tab The</Button>
        <Button type="outline">Tab The</Button>
        <Button type="ghost"> Tab The</Button>
        <Link href="/payment" asChild>
          <Button type="filled"  bg="green">
            Go to payment
          </Button>
        </Link>
      </YStack>
      <Text>Tab Two</Text>
    </SafeAreaView>
  );
}
