import { paymentRouter } from "@/api/hooks";
import { Button, Icon, Text } from "@/components/base";
import { TransactionCard } from "@/components/inc";
import { Link, useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";
import { ScrollView, View, XStack, YStack } from "tamagui";

const Wallet = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: wallet } = paymentRouter.wallet.useQuery({
    variables: {
      spaceId: id,
    },
  });

  console.log({ wallet });
  const transactions = [
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: "jj",
    },
  ];

  return (
    <View f={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack px="$4" gap="$10" mb="$4">
          <YStack p="$4" bg="white" gap="$2" borderRadius="$4">
            <Text type="h3">Wallet</Text>
            <XStack ai="center" jc="space-between">
              <YStack>
                <Text type="body2">Available Balance</Text>
                <Text type="h4">$1200</Text>
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
              contentContainerStyle={{}}
              renderItem={({ item }) => <TransactionCard {...item} />}
              scrollEnabled={false}
            />
          </YStack>
        </YStack>
      </ScrollView>
    </View>
  );
};

export default Wallet;
