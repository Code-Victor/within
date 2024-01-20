import React from "react";
import { View, YStack } from "tamagui";
import { Text } from "../base";
import { router } from "expo-router";
import { Image } from "expo-image";

export type SpaceType = {
  id: string;
  name: string;
  imageUrl: string;
  createdBy: string;
};

export const Space = (props: SpaceType) => {
  const { id, name, imageUrl, createdBy } = props;

  return (
    <View
      onPress={() => {
        router.push({
          pathname: "/(app)/spaces/[id]/",
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
      // borderRadius="$4"
      // bg="$dark.2"
      overflow="hidden"
    >
      <Image
        source={{ uri: imageUrl }}
        style={{
          flex: 1,
          borderRadius: 8,
        }}
      />
      <View position="absolute" bottom="$2" w="100%" px="$2">
        <YStack w="100%" py="$1" px="$3" bg="$primary" mt="$2" borderRadius={6}>
          <Text type="body1" fontWeight="$4" color="white">
            {name}
          </Text>
          <Text mt={-3} type="body2" fontSize="$1" color="$dark.1" whiteSpace="nowrap">
            By {createdBy}
          </Text>
        </YStack>
      </View>
    </View>
  );
};
