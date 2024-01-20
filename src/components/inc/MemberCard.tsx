import { Avatar, XStack, YStack } from "tamagui";
import React from "react";
import { Text } from "../base";
import { getAvatar } from "@/utils";

interface MemberCardProps {
  name: string;
}

export function MemberCard({ name }: MemberCardProps) {
  return (
    <XStack ai="center" gap="$2" p="$2">
      <Avatar size="$4" circular>
        <Avatar.Image src={getAvatar(name)} />
        <Avatar.Fallback bg="$primary" />
      </Avatar>
      <YStack f={1} gap="$1">
        <Text type="body1">{name}</Text>
      </YStack>
    </XStack>
  );
}
