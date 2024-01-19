import { XStack, YStack } from 'tamagui'
import { Text } from '../base'

export type ScheduleType = {
  title: string;
  date: string;
  time: string;
  timeout: string;
}

const Schedule = (props:ScheduleType) => {

  const {
    title,
    date,
    time,
    timeout
  } = props;

  return (
    <YStack gap="$2" bg="white" px="$4" py="$5" w="$15" borderColor="$dark.2" borderWidth="$0.5" borderRadius="$6">
      <Text type="h4">{title}</Text>
      <Text type="body2">{date}</Text>
      <XStack jc="space-between" mt="$5">
        <Text type="body2">{time}</Text>
        <Text type="body2" color="$dark.5">{timeout}</Text>
      </XStack>
    </YStack>
  )
}

export default Schedule