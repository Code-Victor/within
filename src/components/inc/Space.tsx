import React from "react";
import { View, YStack } from "tamagui";
import { Text } from "../base";
import { router } from "expo-router";

export type SpaceType = {
  id: string;
  name: string;
  imageUrl: string;
  createdBy: string;
};

const Space = (props: SpaceType) => {
  const { id, name, imageUrl, createdBy } = props;

  return (
    <View
      onPress={() => {
        router.push({
          pathname: "/(app)/spaces/[id]",
          params: {
            id,
            name,
          },
        });
      }}
      width="$15"
      height="$15"
      f={1}
      jc="flex-start"
      borderRadius="$4"
      bg="$dark.2"
      overflow="hidden"
    >
      <YStack
        position="absolute"
        bottom="$0"
        f={1}
        bg="$primary"
        w="100%"
        p="$2"
      >
        <Text type="h4" color="white">
          {name}
        </Text>
        <Text type="body2" color="whitesmoke" whiteSpace="nowrap">
          By {createdBy}
        </Text>
      </YStack>
    </View>
  );
};

export default Space;
