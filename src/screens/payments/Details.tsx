import { paymentRouter } from "@/api/hooks";
import { Button, Icon, Text } from "@/components/base";
import { StackHeader } from "@/components/inc";
import { router, useLocalSearchParams } from "expo-router";
import { usePathname } from "expo-router/src/hooks";
import React from "react";
import { WebView } from "react-native-webview";
import { View, XStack, YStack } from "tamagui";
import { Image } from "expo-image";

const Details = () => {
  const { id, paymentId, paymentName } = useLocalSearchParams<{
    id: string;
    paymentId: string;
    paymentName: string;
  }>();
  const { mutate, isPending, data } = paymentRouter.makePayment.useMutation();
  const pathname = usePathname();
  const [paymentComplete, setPaymentComplete] = React.useState(false);
  console.log({ pathname });
  console.log({ data });
  if (paymentComplete) {
    return (
      <YStack f={1} ai="center" jc="center" gap="$3">
        <Image
          source={require("@/assets/images/complete.png")}
          style={{
            width: "100%",
            aspectRatio: 1.35,
            marginTop: 20,
            marginBottom: 20,
          }}
        />
        <Text type="h4" ta="center">
          Payment Successful
        </Text>
        <Button
          onPress={() => {
            router.replace("/(app)/");
          }}
        >
          continue
        </Button>
      </YStack>
    );
  }
  if (data) {
    return (
      <WebView
        style={{
          flex: 1,
        }}
        source={{ uri: data.paymentResponse.paymentLink }}
        onNavigationStateChange={(navState) => {
          if (navState.url.includes("useglouse")) {
            setPaymentComplete(true);
          }
        }}
      />
    );
  }
  return (
    <View>
      <StackHeader name="Make Payments" backButton={true} />
      <YStack p="$4" gap="$6">
        <XStack
          jc="space-between"
          ai="center"
          bg="white"
          p="$4"
          borderRadius="$4"
        >
          <XStack gap="$4" ai="center">
            <View bg="$dark.3" p="$2" br={4}>
              <Icon name="Dollar" height={28} width={28} color="#303437" />
            </View>
            <YStack>
              <Text type="body1" fontWeight="$4">
                {paymentName}
              </Text>
            </YStack>
          </XStack>
          <YStack ai="flex-end"></YStack>
        </XStack>
        <Button
          size="$5"
          loading={isPending}
          onPress={() => {
            mutate({
              spaceId: id,
              paymentId,
            });
          }}
        >
          Pay now
        </Button>
      </YStack>
    </View>
  );
};

export default Details;
