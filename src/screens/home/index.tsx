import { Button, Icon, Modal, Text } from "@/components/base";
import { DrawerHeader, Schedule, Space } from "@/components/inc";
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { View, XStack, YStack, getTokens } from "tamagui";
import { Create, Join } from "./components";
import { Link } from "expo-router";
import React from "react";
import { authRouter, spaceRouter } from "@/api/hooks";

const Home = () => {
  const [modal, setModal] = useState<null | "join" | "create">(null);
  const { data: user } = authRouter.user.useQuery();
  const { data: spaces } = spaceRouter.getAllSpaces.useQuery();
  const closeModal = () => {
    setModal(null);
  };

  const modals = {
    join: <Join />,
    create: <Create closeModal={closeModal} />,
  };

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

  return (
    <View f={1}>
      <Modal open={!!modal} onOpenChange={() => setModal(null)}>
        <Modal.Content bg="white" f={1} width={"100%"} pt={45}>
          <XStack gap="$5" ai="center" px="$4" h="10%">
            <Button
              type="ghost"
              zIndex={10000}
              size="$4"
              circular
              onPress={closeModal}
              icon={<Icon name="Close" width={28} height={28} />}
            />
            <XStack>
              <Text type="h3" tt="capitalize">
                {modal}
              </Text>
              <Text type="h3"> a Space</Text>
            </XStack>
          </XStack>
          {modal ? modals[modal] : null}
        </Modal.Content>
      </Modal>
      <DrawerHeader />
      <ScrollView>
        <YStack gap="$6" py="$4" bg="$primary.1" f={1}>
          <Link href="/spaces/123/payments" asChild>
            <Button>Temp Payments CTA</Button>
          </Link>
          <XStack px="$4" ai="center" gap="$1">
            <Text type="h4">Welcome,</Text>
            <Text type="body1">{user?.fullName}</Text>
          </XStack>
          <XStack px="$4" jc="space-between" ai="center" gap="$2">
            <Button onPress={() => setModal("join")} type="outline" f={1}>
              Join a Space
            </Button>
            <Button onPress={() => setModal("create")} type="primary" f={1}>
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
              <Link href="/(app)/spaces">
                <Text type="body2" color="$dark.6">
                  See all
                </Text>
              </Link>
            </XStack>
            <XStack>
              <FlatList
                horizontal={true}
                data={spaces?.mySpaces ?? []}
                renderItem={({ item }) => (
                  <Space
                    id={item.id}
                    name={item.name}
                    imageUrl={item.profileImage}
                    createdBy="you"
                  />
                )}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View px="$1"></View>}
                contentContainerStyle={{ paddingLeft: 10 }}
              />
            </XStack>
          </YStack>
          <YStack gap="$2">
            <XStack ai="center" jc="space-between" px="$4">
              <Text type="h4">Joined Spaces</Text>
              <Link href="/(app)/spaces">
                <Text type="body2" color="$dark.6">
                  See all
                </Text>
              </Link>
            </XStack>
            {spaces?.memberSpaces ? (
              <YStack h="$15" ai="center" jc="center" gap="$4">
                <Text>No Joined spaces Yet</Text>
                <Button width={120}>Join</Button>
              </YStack>
            ) : (
              <FlatList
                horizontal={true}
                data={spaces?.memberSpaces}
                renderItem={({ item }) => (
                  <Space
                    id={item.id}
                    name={item.name}
                    imageUrl={item.profileImage}
                    createdBy={item.owner.fullName}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View px="$1"></View>}
                contentContainerStyle={{ paddingLeft: 10 }}
              />
            )}
          </YStack>
        </YStack>
      </ScrollView>
    </View>
  );
};

export default Home;
