import DateTimePicker from '@react-native-community/datetimepicker';
import { StackHeader } from '@/components/inc'
import React from 'react'
import { YStack } from 'tamagui'

const Create = () => {
  return (
    <YStack>
      <StackHeader name="Create a Schedule" backButton={true} />
      <YStack>
        <DateTimePicker mode="time" />
      </YStack>
    </YStack>
  )
}

export default Create