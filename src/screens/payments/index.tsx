import { authRouter, spaceRouter } from "@/api/hooks";
import { Button } from "@/components/base";
import { StackHeader } from "@/components/inc";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { XStack, YStack } from "tamagui";
import Payments from "./components/Payments";
import Wallet from "./components/Wallet";

const Payment = () => {
  const { id, name } = useLocalSearchParams<{
    id: string;
    name: string;
  }>();
  const { data: user } = authRouter.user.useQuery();
  const { data: space, isLoading } = spaceRouter.get.useQuery({
    variables: {
      spaceId: id,
    },
  });
  const isAdmin = user?.id === space?.owner?.id;
  const [tab, setTab] = useState<"wallet" | "payments">(
    isAdmin ? "wallet" : "payments"
  );

  return (
    <YStack f={1} bg="$primary.1">
      <StackHeader name="Payments" backButton={true} />
      {isAdmin && (
        <XStack gap="$2" p="$4">
          <Button
            onPress={() => setTab("wallet")}
            type="filled"
            color={tab === "wallet" ? "white" : "$dark.7"}
            bg={tab === "wallet" ? "$dark" : "transparent"}
          >
            Wallet
          </Button>
          <Button
            onPress={() => setTab("payments")}
            type="filled"
            color={tab === "payments" ? "white" : "$dark.7"}
            bg={tab === "payments" ? "$dark" : "transparent"}
          >
            Payments
          </Button>
        </XStack>
      )}
      {tab === "payments" ? <Payments {...{ isAdmin }} /> : <Wallet />}
    </YStack>
  );
};

export default Payment;
