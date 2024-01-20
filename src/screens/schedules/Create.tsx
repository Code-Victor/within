import { Button, Icon, Input, Modal, Text } from "@/components/base";
import { StackHeader } from "@/components/inc";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, XStack, YStack } from "tamagui";
// import DatePicker from "react-native-modern-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { scheduleRouter } from "@/api/hooks";
import { router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";

const Create = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [activeDay, setActiveDay] = useState<string | null>(null);
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const { mutate, isPending, isSuccess } = scheduleRouter.create.useMutation();
  const [modalOpen, setModalOpen] = useState<"start" | "end" | null>(null);
  const [selectedDate, setSelectedDate] = useState<{
    start: Date;
    end: Date;
  }>({
    start: new Date(),
    end: new Date(),
  });
  const [title, setTitle] = useState("");

  function handleSubmit() {
    mutate({
      spaceId: id,
      title,
      startDate: selectedDate.start.toISOString(),
      endDate: selectedDate.end.toISOString(),
    });
  }
  console.log(selectedDate);
  const closeModal = () => {
    setModalOpen(null);
  };

  return (
    <YStack f={1}>
      <StackHeader name="Create a Schedule" backButton={true} />
      {isSuccess ? (
        <YStack f={1} ai="center" jc="center">
          <Image
            source={require("@/assets/images/complete.png")}
            style={{
              width: "100%",
              aspectRatio: 1.35,
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <Text type="h4" ta="center">
            Successful
          </Text>
          <Button
            onPress={() => {
              router.replace("/(app)");
            }}
          >
            continue
          </Button>
        </YStack>
      ) : (
        <View f={1} jc="space-between" py="$8" bg="$primary.1">
          <YStack f={1}>
            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20 }}
              >
                <XStack gap="$4">
                  {days.map((day) => {
                    return (
                      <Button
                        onPress={() => setActiveDay(day)}
                        type="filled"
                        fontSize="$2"
                        size="$3"
                        w="$7"
                        borderRadius={10}
                        borderColor={activeDay === day ? "$primary" : "$dark.4"}
                      >
                        <Text
                          textTransform="capitalize"
                          type="body2"
                          color={activeDay === day ? "$primary" : "$dark.9"}
                          fontWeight={activeDay === day ? "$5" : "$2"}
                        >
                          {day}
                        </Text>
                      </Button>
                    );
                  })}
                </XStack>
              </ScrollView>
            </View>
            <YStack p="$4" mt="$4" gap="$8">
              <Input value={title} onChangeText={setTitle} label="Title" />
              <YStack gap="$1" onPress={() => setModalOpen("start")}>
                <Text type="body2">Start Date</Text>
                <View
                  bg="white"
                  h="$5"
                  px="$2"
                  py="$3"
                  borderRadius="$4"
                  borderWidth={1}
                  borderColor={"$dark.2"}
                >
                  <Text>
                    {selectedDate.start.toLocaleDateString("en-Us", {
                      hour: "numeric",
                      minute: "numeric",
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </Text>
                </View>
              </YStack>
              <YStack gap="$1" onPress={() => setModalOpen("end")}>
                <Text type="body2">End Date</Text>
                <View
                  bg="white"
                  h="$5"
                  px="$2"
                  py="$3"
                  borderRadius="$4"
                  borderWidth={1}
                  borderColor={"$dark.2"}
                >
                  <Text>
                    {selectedDate.end.toLocaleDateString("en-Us", {
                      hour: "numeric",
                      minute: "numeric",
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </Text>
                </View>
              </YStack>
              <Modal open={!!modalOpen} onOpenChange={closeModal}>
                <Modal.Content
                  f={1}
                  w="100%"
                  jc="center"
                  px="$5"
                  bg={"rgba(0, 0, 0, 0.1)"}
                >
                  <DateTimePicker
                    mode="date"
                    value={
                      modalOpen === "start"
                        ? selectedDate.start
                        : selectedDate.end
                    }
                    minimumDate={new Date()}
                    onChange={(e, date) => {
                      if (modalOpen === "start") {
                        setSelectedDate((s) => ({
                          ...s,
                          start: date!,
                        }));
                      } else {
                        setSelectedDate((s) => ({
                          ...s,
                          end: date!,
                        }));
                      }
                      setModalOpen(null);
                    }}
                  />
                  <XStack w="100%" pt="$4" jc="center">
                    <Button
                      onPress={closeModal}
                      type="outline"
                      circular
                      size="$5"
                      borderRadius={99}
                      icon={<Icon name="Close" width={30} height={30} />}
                    />
                  </XStack>
                </Modal.Content>
              </Modal>
            </YStack>
          </YStack>
          <Button loading={isPending} onPress={handleSubmit} size="$5" mx="$4">
            Create
          </Button>
        </View>
      )}
    </YStack>
  );
};

export default Create;
