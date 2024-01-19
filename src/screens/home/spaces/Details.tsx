import { Button, Text, Icon } from "@/components/base";
import {
  StackHeader,
  Schedule,
  Space,
  Annoucement,
  MemberCard,
} from "@/components/inc";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Animated, FlatList } from "react-native";
import {
  ListItem,
  ListItemTitle,
  ScrollView,
  View,
  XStack,
  YStack,
  getTokens,
} from "tamagui";

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
        <YStack f={1} pt="$4.5" gap="$6">
          <View px="$4">
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
          </View>
          <YStack gap="$2" px="$4">
            <XStack jc="space-between" ai="center">
              <Text type="h3">{name}</Text>
              <Button size="$3" icon={<Icon name="Settings" />} type="ghost" />
            </XStack>
            <Text>{"Description will be typed here"}</Text>
            <XStack gap="$2" ai="center">
              <ListItem
                size={"$2"}
                f={1}
                ai="flex-end"
                icon={<Icon name="User" height={20} width={20} />}
                title="Crust Manner"
              />
              <ListItem
                size={"$2"}
                f={1}
                icon={<Icon name="Users" height={24} width={24} />}
                title="200 members"
              />
            </XStack>
          </YStack>
          <Annoucement />
          <Tabs />
        </YStack>
      </ScrollView>
    </YStack>
  );
}

const dataTabs = ["Schedules", "Payment", "Members"];
type DataTab = (typeof dataTabs)[number];

const tabContent: Record<DataTab, React.ReactNode> = {
  Schedules: <ScheduleTab />,
  Payment: <PaymentTab />,
  Members: <MembersTab />,
};
function Tabs() {
  const [currentTab, setCurrentTab] = React.useState<DataTab>("Schedules");
  return (
    <YStack gap="$2">
      <XStack bg="white" mx="$4" br={10} overflow="hidden">
        {dataTabs.map((t) => {
          const isActive = currentTab === t;
          return (
            <YStack f={1}>
              <Button
                key={t}
                type="ghost"
                f={1}
                br={4}
                onPress={() => setCurrentTab(t)}
              >
                {t}
              </Button>
              <View h={2} bg={isActive ? "$primary" : "transparent"} />
            </YStack>
          );
        })}
      </XStack>
      {
        //@ts-ignore
        tabContent[currentTab]
      }
    </YStack>
  );
}

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
function ScheduleTab() {
  return (
    <YStack gap="$2" pb="$4">
      <XStack mx="$4" bg="white" p="$3" ai="center" jc="space-between" br={10}>
        <Text type="body1">Actions</Text>
        <XStack>
          <Button type="ghost" size="$2" icon={<Icon name="Add" />} />
          <Button type="outline" fontSize={"$2"} size="$2">
            View All
          </Button>
        </XStack>
      </XStack>
      <FlatList
        horizontal={true}
        data={schedules}
        renderItem={({ item }) => <Schedule {...item} />}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View px="$1"></View>}
        contentContainerStyle={{ paddingLeft: 10 }}
      />
    </YStack>
  );
}

function PaymentTab() {
  return (
    <YStack mx="$4" gap="$2" pb="$6">
      <XStack bg="white" p="$3" ai="center" jc="space-between" br={10}>
        <Text type="body1">Actions</Text>
        <XStack>
          <Button type="ghost" size="$2" icon={<Icon name="Add" />} />
          <Button type="outline" fontSize={"$2"} size="$2">
            View All
          </Button>
        </XStack>
      </XStack>
      <YStack
        bg="white"
        br={10}
        borderColor={"$dark.4"}
        borderWidth={1}
        separator={<View h={0.5} bg="$dark.4" />}
      >
        <ListItem
          icon={
            <Icon
              name="Dollar"
              color={getTokens().color["$dark.5"].val}
              height={20}
              width={20}
            />
          }
          p="$3"
          ai="center"
          jc="space-between"
        >
          <XStack f={1}>
            <ListItemTitle>Payment</ListItemTitle>
            <XStack ai="baseline" gap="$2">
              <Text fontSize="$3" fontWeight="500">
                $120
              </Text>
              <Text fontSize="$2">Status</Text>
            </XStack>
          </XStack>
        </ListItem>
        <ListItem
          icon={
            <Icon
              name="Dollar"
              color={getTokens().color["$dark.5"].val}
              height={20}
              width={20}
            />
          }
          p="$3"
          ai="center"
          jc="space-between"
        >
          <XStack f={1}>
            <ListItemTitle>Payment</ListItemTitle>
            <XStack ai="baseline" gap="$2">
              <Text fontSize="$3" fontWeight="500">
                $120
              </Text>
              <Text fontSize="$2">Status</Text>
            </XStack>
          </XStack>
        </ListItem>
        <ListItem
          icon={
            <Icon
              name="Dollar"
              color={getTokens().color["$dark.5"].val}
              height={20}
              width={20}
            />
          }
          p="$3"
          ai="center"
          jc="space-between"
        >
          <XStack f={1}>
            <ListItemTitle>Payment</ListItemTitle>
            <XStack ai="baseline" gap="$2">
              <Text fontSize="$3" fontWeight="500">
                $120
              </Text>
              <Text fontSize="$2">Status</Text>
            </XStack>
          </XStack>
        </ListItem>
      </YStack>
    </YStack>
  );
}
function MembersTab() {
  return (
    <YStack mx="$4" gap="$2" pb="$6">
      <XStack bg="white" p="$3" ai="center" jc="space-between" br={10}>
        <Text type="body1">Actions</Text>
        <XStack>
          <Button type="ghost" size="$2" icon={<Icon name="Add" />} />
          <Button type="outline" fontSize={"$2"} size="$2">
            View All
          </Button>
        </XStack>
      </XStack>
      <YStack
        bg="white"
        br={10}
        borderColor={"$dark.4"}
        borderWidth={1}
        separator={<View h={0.5} bg="$dark.4" />}
      >
        <MemberCard name="Johanna Cruff" />
        <MemberCard name="Victor Hamzat" />
        <MemberCard name="Dunsimi Ola-ola-dehinde" />
        <MemberCard name="Lens" />
      </YStack>
    </YStack>
  );
}
