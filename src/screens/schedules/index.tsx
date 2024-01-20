import { Button, Icon } from "@/components/base";
import { ScheduleCard, StackHeader } from "@/components/inc";
import { Link } from "expo-router";
import { FlatList } from "react-native";
import { View, YStack } from "tamagui";


export default function Schedules() {

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
    <YStack f={1}>
      <StackHeader name="Schedules" backButton={true} />
      <View f={1} py="$4" bg="$primary.1">
        <FlatList
        data={schedules}
        renderItem={({ item }) => <ScheduleCard {...item} />}
        style={{backgroundColor: "white", marginHorizontal:16, borderRadius: 10}}
        ItemSeparatorComponent={() => <View h={10}></View>}
        contentContainerStyle={{padding: 24}}
        showsVerticalScrollIndicator={false}
        />
        <Link href="/spaces/123/schedules/create" asChild>
          <Button
          // onPress={() => console.log("Hello")}
          circular
          size="$6"
          position="absolute"
          right="$5"
          bottom={60}
          borderRadius={99}
          elevation={0.5}
          icon={<Icon name="AddLight" width={35} height={35} />} />
        </Link>
      </View>
    </YStack>
  )
}