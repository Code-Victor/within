import { paymentRouter } from "@/api/hooks";
import { Button, Icon, Text } from "@/components/base";
import { TransactionCard } from "@/components/inc";
import { monify } from "@/utils";
import { Link, useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";
import { ScrollView, View, XStack, YStack } from "tamagui";

const Wallet = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: wallet, isLoading: isWalletLoading } =
    paymentRouter.wallet.useQuery({
      variables: {
        spaceId: id,
      },
    });
  const { data: transactions } = paymentRouter.walletTransactions.useQuery({
    variables: {
      spaceId: id,
    },
  });

  console.log(JSON.stringify({ transactions }, null, 2));

  return (
    <View f={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack px="$4" gap="$10" mb="$4">
          <YStack p="$4" bg="white" gap="$2" borderRadius="$4">
            <Text type="h3">Wallet</Text>
            <XStack ai="center" jc="space-between">
              <YStack>
                <Text type="body2">Available Balance</Text>
                <Text type="h4">
                  {isWalletLoading
                    ? "XX.XX"
                    : monify(wallet?.available_balance ?? 0)}
                </Text>
              </YStack>
              <Link href="/spaces/123/withdraw" asChild>
                <Button type="primary" circular size="$5" borderRadius={99}>
                  <Icon name="Withdraw" color="white" />
                </Button>
              </Link>
            </XStack>
          </YStack>
          <YStack gap="$4">
            <Text type="h4">Transaction History</Text>
            <FlatList
              data={transactions}
              ItemSeparatorComponent={() => <View h="$0.5"></View>}
              contentContainerStyle={{
                flexGrow: 1,
              }}
              renderItem={({ item }) => (
                <TransactionCard name={item.reason} amount={item.amount} />
              )}
              scrollEnabled={false}
            />
          </YStack>
        </YStack>
      </ScrollView>
    </View>
  );
};

export default Wallet;
