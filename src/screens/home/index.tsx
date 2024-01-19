import { Button, Icon, Text } from "@/components/base";
import { Schedule, Space } from "@/components/inc";
import { useNavigation } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import { View, YStack, XStack, ScrollView, getTokens } from "tamagui";

const Home = () => {
  const schedules = [
    {
      title: "Match Against Geology",
      date: "Jan. 11th 2023",
      time: "9:00 AM",
      timeout: "30 mins",
    },
    {
      title: "Match Against Geology",
      date: "Jan. 11th 2023",
      time: "9:00 AM",
      timeout: "30 mins",
    },
    {
      title: "Match Against Geology",
      date: "Jan. 11th 2023",
      time: "9:00 AM",
      timeout: "30 mins",
    },
  ];

  const mySpaces = [
    {
      imageUrl: "",
      name: "Minervas",
      createdBy: "you",
    },
    {
      imageUrl: "",
      name: "NAMS OAU",
      createdBy: "you",
    },
    {
      imageUrl: "",
      name: "Aquilas",
      createdBy: "you",
    },
  ];

  return (
    <View f={1}>
      <HomeHeader />
      <FlatList
        ListHeaderComponent={() => {
          return (
            <YStack gap="$6" py="$4" bg="$primary.1" f={1}>
              <XStack px="$4" ai="center" gap="$1">
                <Text type="h4">Welcome,</Text>
                <Text type="body1">Oluserti</Text>
              </XStack>
              <XStack px="$4" jc="space-between" ai="center" gap="$2">
                <Button type="outline" f={1}>
                  Join a Space
                </Button>
                <Button type="primary" f={1}>
                  Create a Space
                </Button>
              </XStack>
              <YStack gap="$2">
                <Text type="h4" px="$4">
                  Today Schedule
                </Text>
                <XStack>
                  <FlatList
                    horizontal={true}
                    data={schedules}
                    renderItem={({ item }) => <Schedule {...item} />}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View px="$1"></View>}
                    contentContainerStyle={{ paddingLeft: 10 }}
                  />
                </XStack>
              </YStack>
              <YStack gap="$2">
                <XStack ai="center" jc="space-between" px="$4">
                  <Text type="h4">Created Spaces</Text>
                  <Text type="body2" color="$dark.6">
                    See all your spaces
                  </Text>
                </XStack>
                <XStack>
                  <FlatList
                    horizontal={true}
                    data={mySpaces}
                    renderItem={({ item }) => <Space {...item} />}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View px="$1"></View>}
                    contentContainerStyle={{ paddingLeft: 10 }}
                  />
                </XStack>
              </YStack>
              <YStack gap="$2">
                <XStack ai="center" jc="space-between" px="$4">
                  <Text type="h4">Joined Spaces</Text>
                  <Text type="body2" color="$dark.6">
                    See all your spaces
                  </Text>
                </XStack>
              </YStack>
            </YStack>
          );
        }}
        data={mySpaces}
        renderItem={({ item }) => <Space {...item} />}
        showsHorizontalScrollIndicator={false}
        // ItemSeparatorComponent={() => <View h="$1" bg={getTokens().color["$primary.1"].val}></View>}
        numColumns={2}
        columnWrapperStyle={{
          gap: 10,
          paddingHorizontal: 16,
          paddingBottom: 16,
          backgroundColor: getTokens().color["$primary.1"].val,
        }}
      />
    </View>
  );
};

function HomeHeader() {
  const navigation = useNavigation();
  return (
    <XStack
      px={"$4"}
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
        ml={"$4"}
      >
        <Button
          size={"$4"}
          zIndex={1}
          type="ghost"
          circular
          icon={<Icon name="Menu" height={24} width={24} />}
          onPress={() => {
            //@ts-ignore
            navigation.openDrawer();
          }}
        />
      </View>
      <Icon name="Logo" aria-label="Within Logo" />
      <View
        position="absolute"
        right={0}
        top={0}
        bottom={0}
        ai="center"
        jc="center"
        mr={"$4"}
      >
        <Button
          size={"$4"}
          zIndex={1}
          type="ghost"
          circular
          icon={<Icon name="Notification" height={24} width={24} />}
        />
      </View>
    </XStack>
  );
}
export default Home;
