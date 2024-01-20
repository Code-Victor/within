import { View, XStack, YStack } from "tamagui";
import { Text } from "../base";
import { useRouter } from "expo-router";
import { monify } from "@/utils";

export type PaymentCardType = {
  name: string;
  amount: number;
  clerkType: "CREDIT" | "DEBIT"; //TODO: NAME OF THE PAYMENT
};

export const TransactionCard = (props: PaymentCardType) => {
  const router = useRouter();

  const { name, amount } = props;

  return (
    <XStack jc="space-between" bg="white" p="$4" borderRadius="$4" gap="$2">
      <YStack f={1}>
        <Text type="body1" fontWeight="$4" numberOfLines={1}>
          {name}
        </Text>
        <Text type="body2">CHM207 manual</Text>
      </YStack>
      <YStack ai="flex-end">
        <Text type="body1">{monify(amount)}</Text>
        {props.clerkType === "CREDIT" ? (
          <Text type="body2" color="green">
            credit
          </Text>
        ) : (
          <Text type="body2" color="red">
            debit
          </Text>
        )}
      </YStack>
    </XStack>
  );
};
