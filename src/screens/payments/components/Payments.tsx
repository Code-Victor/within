import { paymentRouter } from "@/api/hooks";
import { Button, Icon, Text } from "@/components/base";
import PaymentCard from "@/components/inc/PaymentCard";
import { monify, timeSince } from "@/utils";
import { Link, router, useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import { View, XStack, YStack } from "tamagui";

const Payments = ({ isAdmin }: { isAdmin: boolean }) => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: payments } = paymentRouter.get.useQuery({
    variables: {
      spaceId: id,
    },
  });

  return (
    <View f={1} pb="$4">
      <FlatList
        data={payments}
        renderItem={({ item }) => (
          <XStack
            jc="space-between"
            ai="center"
            bg="white"
            p="$4"
            borderRadius="$4"
            onPress={() => router.push("/spaces/1212/payments/1234")}
          >
            <XStack gap="$2" ai="center">
              <Icon name="Dollar" height={28} width={28} color="#303437" />
              <YStack>
                <Text type="body1" fontWeight="$4">
                  {item.name}
                </Text>
                <Text type="body2">{timeSince(new Date(item.createdAt))}</Text>
              </YStack>
            </XStack>
            <YStack ai="flex-end">
              <Text type="body1">{monify(item.amount)}</Text>
            </YStack>
          </XStack>
        )}
        style={{
          backgroundColor: "white",
          marginHorizontal: 16,
          borderRadius: 10,
        }}
        ItemSeparatorComponent={() => (
          <View px="$4">
            <View w="100%" h={1} bg="$dark.3"></View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      {isAdmin && (
        <Link href={`/spaces/${id}/payments/create`} asChild>
          <Button
            // onPress={() => console.log("Hello")}
            circular
            size="$6"
            position="absolute"
            right="$5"
            bottom={60}
            borderRadius={99}
            elevation={0.5}
            icon={<Icon name="AddLight" width={35} height={35} />}
          />
        </Link>
      )}
    </View>
  );
};

export default Payments;
