import { Button, Input, Text } from "@/components/base"
import { View, YStack } from "tamagui"

const Join = () => {
  return (
    <YStack p="$4" h="90%" bg="white" jc="center">
      <View borderColor="$dark.3" borderWidth={0.5} p="$6" borderRadius="$4" gap="$2" mb={100}>
        <Text type="body1">Join with code</Text>
        <Input placeholder="Type code here" />
        <Button size="$5" mt="$4">Proceed</Button>
      </View>
    </YStack>
  )
}

export default Join