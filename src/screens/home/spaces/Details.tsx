import {
  authRouter,
  paymentRouter,
  scheduleRouter,
  spaceRouter,
} from "@/api/hooks";
import { Button, Text, Icon } from "@/components/base";
import {
  StackHeader,
  Space,
  Annoucement,
  MemberCard,
  ScheduleCard,
} from "@/components/inc";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Animated, FlatList, ToastAndroid } from "react-native";
import {
  ListItem,
  ListItemTitle,
  ScrollView,
  View,
  XStack,
  YStack,
  getTokens,
} from "tamagui";
import * as Clipboard from "expo-clipboard";
import { Link } from "expo-router";
import { monify, timeSince } from "@/utils";
import { isLoading } from "expo-font";

export default function Details() {
  const { id, name } = useLocalSearchParams<{
    id: string;
    name: string;
  }>();
  const { data: user } = authRouter.user.useQuery();
  const { data: space, isLoading } = spaceRouter.get.useQuery({
    variables: {
      spaceId: id,
    },
  });
  const isAdmin = user?.id === space?.owner?.id;
  return (
    <YStack f={1}>
      <StackHeader name={name} backButton />
      {isLoading ? null : (
        <ScrollView bg="$primary.2">
          <YStack f={1} pt="$4.5" gap="$4">
            <View px="$4">
              <Image
                contentFit="cover"
                style={{
                  aspectRatio: 3.24,
                  borderRadius: 5,
                  width: "100%",
                }}
                source={{
                  uri: space?.profileImage,
                }}
              />
            </View>
            <YStack gap="$0" px="$4">
              <XStack jc="space-between" ai="center">
                <Text type="h3">{name}</Text>
                <Button
                  size="$3"
                  icon={<Icon name="Copy" height={24} width={24} />}
                  type="ghost"
                  onPress={async () => {
                    await Clipboard.setStringAsync(space?.spaceCode ?? "");
                    ToastAndroid.show(
                      "Space Code copied to clipboard",
                      ToastAndroid.SHORT
                    );
                  }}
                />
              </XStack>
              {/* <Text fontSize="$2">{space?.description}</Text> */}
              <XStack gap="$0" ai="center">
                <Text type="body2" color="$dark.6">
                  {space?.owner.fullName},
                </Text>
                <Text type="body2" color="$dark.6">
                  {`${space?.members?.length} ${
                    (space?.members?.length ?? 0) !== 1 ? "members" : "member"
                  }`}
                </Text>

                {/* <ListItem
                  size={"$1"}
                  gap={-2}
                  // f={1}
                  width={200}
                  ai="center"
                  icon={<Icon name="User" height={16} width={16} />}
                  title={space?.owner.fullName}
                />
                <ListItem
                  size={"$1"}
                  gap={-2}
                  // f={1}
                  width={200}
                  ai="center"
                  jc="flex-end"
                  icon={<Icon name="Users" height={24} width={24} />}
                  title={`${space?.members?.length} ${
                    (space?.members?.length ?? 0) > 1 ? "members" : "member"
                  }`}
                /> */}
              </XStack>
            </YStack>
            <Annoucement isAdmin={isAdmin} spaceId={id} />
            <Tabs isAdmin={isAdmin} spaceId={id} />
          </YStack>
        </ScrollView>
      )}
    </YStack>
  );
}

const dataTabs = ["Schedules", "Payment", "Members"];
type DataTab = (typeof dataTabs)[number];

function Tabs({ isAdmin, spaceId }: { isAdmin: boolean; spaceId: string }) {
  const [currentTab, setCurrentTab] = React.useState<DataTab>("Schedules");
  const tabContent: Record<DataTab, React.ReactNode> = {
    Schedules: <ScheduleTab {...{ isAdmin, spaceId }} />,
    Payment: <PaymentTab {...{ isAdmin, spaceId }} />,
    Members: <MembersTab {...{ isAdmin, spaceId }} />,
  };
  return (
    <YStack gap="$2">
      <XStack bg="$dark.8" mx="$4" br={10} overflow="hidden" pt="$2">
        {(isAdmin ? dataTabs : dataTabs.slice(0, 2)).map((t) => {
          const isActive = currentTab === t;
          return (
            <YStack f={1} ai="center">
              <Button
                key={t}
                type="ghost"
                f={1}
                br={4}
                onPress={() => setCurrentTab(t)}
                color={isActive ? "white" : "$dark.4"}
              >
                {t}
              </Button>
              <View h={2} w={20} margin="auto" bg={isActive ? "$primary.1" : "transparent"} />
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
function ScheduleTab({
  isAdmin,
  spaceId,
}: {
  isAdmin: boolean;
  spaceId: string;
}) {
  const { data: schedules, isLoading } = scheduleRouter.get.useQuery({
    variables: {
      spaceId,
    },
  });
  console.log({ isAdmin, spaceId });
  if (isLoading) {
    return (
      <YStack ai="center" jc="center" py="$4">
        <Text type="h4">Loading...</Text>
      </YStack>
    );
  }
  return (
    <YStack gap="$2" pb="$4">
      <XStack mx="$4" bg="white" p="$3" ai="center" jc="space-between" br={10}>
        <Text type="body1">Actions</Text>
        <XStack>
          {isAdmin && (
            <Button type="ghost" size="$2" icon={<Icon name="Add" />} />
          )}
          <Link
            href={{
              pathname: "/(app)/spaces/[id]/schedules/",
              params: {
                id: spaceId,
              },
            }}
            asChild
          >
            <Button type="outline" fontSize={"$2"} size="$2">
              View All
            </Button>
          </Link>
        </XStack>
      </XStack>
      <FlatList
        horizontal={true}
        data={schedules?.slice(0, 5) ?? []}
        renderItem={({ item }) => (
          <ScheduleCard title={item.title} date={item.startDate} />
        )}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View h="$0.5"></View>}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      />
    </YStack>
  );
}

function PaymentTab({
  isAdmin,
  spaceId,
}: {
  isAdmin: boolean;
  spaceId: string;
}) {
  const { data: payments, isLoading } = paymentRouter.get.useQuery({
    variables: {
      spaceId,
    },
  });
  if (isLoading) {
    return (
      <YStack h="$10" ai="center" jc="center">
        <Text type="h4">Loading...</Text>
      </YStack>
    );
  }

  return (
    <YStack mx="$4" gap="$2" pb="$6">
      <XStack jc="space-between" ai="center">
        {/* {isAdmin && (
          <Link href="payments/create" asChild>
            <Button type="ghost" circular size="$2" icon={<Icon name="Add" />} />
          </Link>
        )} */}
        <Link
          href={{
            pathname: "/(app)/spaces/[id]/payments/",
            params: {
              id: spaceId,
            },
          }}
          asChild
        >
          <Text type="body2">View all payments</Text>
        </Link>
      </XStack>
      <YStack
        bg="white"
        br={10}
        borderColor={"$dark.4"}
        borderWidth={1}
        separator={<View h={0.5} bg="$dark.4" />}
      >
        {payments?.slice(0, 5).map((p) => {
          return (
            <XStack
              key={p.id}
              jc="space-between"
              ai="center"
              bg="white"
              p="$4"
              borderRadius="$4"
              onPress={() =>
                router.push({
                  pathname: "/(app)/spaces/[id]/payments/[paymentId]",
                  params: {
                    id: spaceId,
                    paymentId: p.id,
                    paymentName: p.name,
                  },
                })
              }
            >
              <XStack gap="$4" ai="center">
                <View bg="$dark.3" p="$2" br={4}>
                  <Icon name="Dollar" height={28} width={28} color="#303437" />
                </View>
                <YStack>
                  <Text type="body1" fontWeight="$4">
                    {p.name}
                  </Text>
                  <Text type="body2">{timeSince(new Date(p.createdAt))}</Text>
                </YStack>
              </XStack>
              <YStack ai="flex-end">
                <Text type="body1">{monify(p.amount)}</Text>
              </YStack>
            </XStack>
          );
        })}
        {payments?.length === 0 && (
          <YStack h="$10" ai="center" jc="center">
            <Text type="h4">No Payments yet...</Text>
          </YStack>
        )}
      </YStack>
    </YStack>
  );
}
function MembersTab({
  isAdmin,
  spaceId,
}: {
  isAdmin: boolean;
  spaceId: string;
}) {
  const { data: space, isLoading } = spaceRouter.get.useQuery({
    variables: {
      spaceId,
    },
  });
  return (
    <YStack mx="$4" gap="$2" pb="$6">
      <XStack jc="space-between" ai="center">
        {/* {isAdmin && (
          <Link href="payments/create" asChild>
            <Button type="ghost" circular size="$2" icon={<Icon name="Add" />} />
          </Link>
        )} */}
        {/* <Link
          href={{
            pathname: "/(app)/spaces/[id]/payments/",
            params: {
              id: spaceId,
            },
          }}
          asChild
        >
          <Text type="body2">View all members</Text>
        </Link> */}
      </XStack>
      <YStack
        bg="white"
        br={10}
        borderColor={"$dark.4"}
        borderWidth={1}
        separator={<View h={0.5} bg="$dark.4" />}
      >
        {space?.members?.slice(0, 5).map((m) => {
          return <MemberCard key={m.fullName} name={m.fullName} />;
        })}
        {space?.members.length === 0 && (
          <YStack h="$10" ai="center" jc="center">
            <Text type="h4">No space members yet...</Text>
          </YStack>
        )}
      </YStack>
    </YStack>
  );
}
