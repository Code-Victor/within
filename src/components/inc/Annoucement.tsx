import React from "react";
import { View, XStack, YStack } from "tamagui";
import { Text } from "../base";
import { Link, router } from "expo-router";

export function Annoucement() {
  return (
    <YStack gap="$4">
      <XStack jc="space-between" ai="baseline">
        <Text type="h4">Annoucements</Text>
        <Link href="/">
          <Text color="$dark.5">View more</Text>
        </Link>
      </XStack>
      <YStack
        br={10}
        borderWidth={1}
        bg="white"
        borderColor="#F3F2F3"
        px="$3"
        separator={<View h={0.5} bg="$dark.4" />}
      >
        <AnnoucementTile
          name="Oluserti"
          message="Your space program has been created"
        />
        <AnnoucementTile
          name="Oluserti"
          message="Your space program has been created"
        />
        <AnnoucementTile
          name="Oluserti"
          message="Your space program has been created"
        />
      </YStack>
    </YStack>
  );
}

export function AnnoucementTile({
  id,
  name,
  date,
  message,
}: {
  id: string;
  name: string;
  date: Date;
  message: string;
}) {
  return (
    <YStack py="$3" gap="$2">
      <Text type="body2">{message}</Text>
      <XStack gap="$2" ai="baseline">
        <Text type="body1" color="$primary">
          {name}
        </Text>
        <Text fontSize={12}>2 mins ago</Text>
      </XStack>
    </YStack>
  );
}
