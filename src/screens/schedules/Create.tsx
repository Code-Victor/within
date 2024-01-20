import { Button, Icon, Input, Modal, Text } from '@/components/base';
import { StackHeader } from '@/components/inc';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, XStack, YStack } from 'tamagui';
import DatePicker from "react-native-modern-datepicker";

const Create = () => {

  const [activeDay, setActiveDay] = useState<string | null>(null)
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <YStack f={1}>
      <StackHeader name="Create a Schedule" backButton={true} />
      <View f={1} jc="space-between" py="$8" bg="$primary.1">
        <YStack f={1}>
          <View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}>
              <XStack gap="$4">
                { days.map((day) => {
                  return (
                    <Button onPress={() => setActiveDay(day)} type="filled" fontSize="$2" size="$3" w="$7" borderRadius={10} borderColor={activeDay === day ? "$primary" : "$dark.4"}>
                      <Text textTransform='capitalize' type="body2" color={activeDay === day ? "$primary" : "$dark.9"} fontWeight={activeDay === day ? "$5" : "$2"}>{day}</Text>
                    </Button>
                  )
                }) }
              </XStack>
            </ScrollView>
          </View>
          <YStack p="$4" mt="$4" gap="$6">
            <Input label="Title" />
            {/* <Button type="ghost" onPress={() => setModalOpen(true)} asChild> */}
              {/* <Input label="Date" disabled onPress={() => setModalOpen(true)} /> */}
              <YStack gap="$1" onPress={() => setModalOpen(true)}>
                <Text type="body2">Date</Text>
                <View bg="white" h="$5" borderRadius="$4" borderWidth={1} borderColor={"$dark.2"}></View>
              </YStack>
            {/* </Button> */}
            <Input label="Start Time" />
            <Input label="End Time" />
            <Modal open={modalOpen} onOpenChange={closeModal}>
              <Modal.Content f={1} w="100%" jc="center" px="$5" bg={"rgba(0, 0, 0, 0.1)"}>
                <DatePicker />
                <XStack w="100%" pt="$4" jc="center">
                  <Button onPress={closeModal} type="outline" circular size="$5" borderRadius={99} icon={<Icon name="Close" width={30} height={30} />} />
                </XStack>
              </Modal.Content>
            </Modal>
          </YStack>
        </YStack>
        <Button size="$5" mx="$4">Create</Button>
      </View>
    </YStack>
  )
}

export default Create