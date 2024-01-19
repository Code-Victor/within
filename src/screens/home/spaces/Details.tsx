import { Button, Text, Icon } from "@/components/base";
import { StackHeader, Schedule, Space, Annoucement } from "@/components/inc";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";
import { ListItem, ScrollView, View, XStack, YStack, getTokens } from "tamagui";

export default function Details() {
  const { id, name } = useLocalSearchParams<{
    id: string;
    name: string;
  }>();
  const isAdmin = true;
  console.log({ id });
  return (
    <YStack f={1}>
      <StackHeader name={name} backButton />
      <ScrollView bg="$primary.2">
        <YStack f={1} px="$4" pt="$4.5">
          <YStack gap="$6">
            <Image
              contentFit="cover"
              style={{
                aspectRatio: 3.24,
                borderRadius: 10,
                width: "100%",
              }}
              source={{
                uri: "https://images.unsplash.com/photo-1692076442412-98dd90bb468d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
            <YStack gap="$3">
              <XStack jc="space-between" ai="center">
                <Text type="h3">{name}</Text>
                <Button
                  size="$3"
                  icon={<Icon name="Settings" />}
                  type="ghost"
                />
              </XStack>
              <XStack gap="$2" ai="center">
                <ListItem
                  size={"$2"}
                  f={1}
                  ai="flex-end"
                  icon={<Icon name="User" />}
                  title="Crust Manner"
                />
                <ListItem
                  size={"$2"}
                  f={1}
                  icon={<Icon name="Users" />}
                  title="200 members"
                />
              </XStack>
            </YStack>
            <Annoucement />
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  );
}
