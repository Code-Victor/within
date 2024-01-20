import { XStack, YStack } from 'tamagui'
import { Text } from '../base'

export type ScheduleCardType = {
  title: string;
  date: string;
  time: string;
  timeout: string;
}

export const ScheduleCard = (props:ScheduleCardType) => {

  const {
    title,
    date,
    time,
    timeout
  } = props;

  return (
    <YStack gap="$2" bg="white" px="$4" py="$5" w="100%" f={1} borderColor="$dark.2" borderWidth={1} borderRadius="$4">
      <Text type="h4">{title}</Text>
      <Text type="body2">{date}</Text>
      <XStack jc="space-between" mt="$5">
        <Text type="body2">{time}</Text>
        <Text type="body2" color="$dark.5">{timeout}</Text>
      </XStack>
    </YStack>
  )
}