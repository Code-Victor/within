import { scheduleRouter } from "@/api/hooks";
import { Button, Icon, Text } from "@/components/base";
import { ScheduleCard, StackHeader } from "@/components/inc";
import { Link, useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";
import { View, YStack } from "tamagui";

export default function Schedules() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data: schedules, isLoading } = scheduleRouter.get.useQuery({
    variables: {
      spaceId: id,
    },
  });

  return (
    <YStack f={1}>
      <StackHeader name="Schedules" backButton={true} />
      <View f={1} py="$4" bg="$primary.1">
        {isLoading ? (
          <YStack mx="$4" bg="white" br={10} ai="center" jc="center">
            <Text type="h4">Loading...</Text>
          </YStack>
        ) : (
          <FlatList
            data={schedules ?? []}
            renderItem={({ item }) => (
              <ScheduleCard title={item.title} date={item.startDate} />
            )}
            style={{
              backgroundColor: "white",
              marginHorizontal: 16,
              borderRadius: 10,
            }}
            ItemSeparatorComponent={() => <View h={10}></View>}
            contentContainerStyle={{ padding: 24 }}
            showsVerticalScrollIndicator={false}
          />
        )}
        <Link href="/spaces/123/schedules/create" asChild>
          <Button
            circular
            size="$6"
            position="absolute"
            right="$5"
            bottom={60}
            borderRadius={99}
            elevation={0.5}
            icon={<Icon name="AddLight" width={35} height={35} />}
          />
        </Link>
      </View>
    </YStack>
  );
}
