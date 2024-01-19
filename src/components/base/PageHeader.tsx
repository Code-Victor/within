import React from "react";
import { Href, useRouter } from "expo-router";
import { View, XStack } from "tamagui";
import { Button, Text, Icon } from "@/components/base";
import { useWindowDimensions } from "react-native";
export function PageHeader<T>({
  name,
  backButton = false,
  bare = false,
  headerRight,
  backUrl,
}: {
  name: string;
  backButton?: boolean;
  bare?: boolean;
  headerRight?: React.ReactNode;
  backUrl?: Href<T>;
}) {
  const router = useRouter();
  const { width } = useWindowDimensions();
  return (
    <XStack
      px={bare ? 0 : "$4"}
      py={20}
      position="relative"
      ai="center"
      jc="center"
      bg="white"
    >
      <View
        position="absolute"
        left={0}
        top={0}
        bottom={0}
        ai="center"
        jc="center"
        ml={bare ? 0 : "$4"}
      >
        {backButton && (
          <Button
            size={"$4"}
            zIndex={1}
            type="ghost"
            circular
            icon={<Icon name="Back" height={24} width={24} />}
            onPress={() => {
              backUrl ? router.replace(backUrl) : router.back();
            }}
          />
        )}
      </View>
      <View width={width * 0.65}>
        <Text fontWeight="700" fontSize="$6.5" ta="center" numberOfLines={1}>
          {name}
        </Text>
      </View>
      <View
        position="absolute"
        right={0}
        top={0}
        bottom={0}
        ai="center"
        jc="center"
        mr={bare ? 0 : "$4"}
      >
        {headerRight}
      </View>
    </XStack>
  );
}
