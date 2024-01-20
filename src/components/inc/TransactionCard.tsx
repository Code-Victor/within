import { View, XStack, YStack } from "tamagui";
import { Text } from "../base";
import { useRouter } from "expo-router";
import { monify } from "@/utils";

export type PaymentCardType = {
  name: string;
  amount: number;
};

export const TransactionCard = (props: PaymentCardType) => {
  const router = useRouter();

  const { name, amount } = props;

  return (
    <XStack
      jc="space-between"
      bg="white"
      p="$4"
      borderRadius="$4"
      onPress={() => router.push("/spaces/1212/payments/1234")}
    >
      <YStack>
        <Text type="body1" fontWeight="$4">
          {name}
        </Text>
        <Text type="body2">CHM207 manual</Text>
      </YStack>
      <YStack ai="flex-end">
        <Text type="body1">{monify(amount)}</Text>
        <Text type="body2" color="green">
          Success
        </Text>
      </YStack>
    </XStack>
  );
};
