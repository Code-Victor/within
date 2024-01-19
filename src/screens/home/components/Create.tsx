import { Button, Icon, Input, Text } from "@/components/base"
import { View, YStack } from "tamagui"

const Create = () => {

  // request

  const success = true

  if (success) {
    return <Successful />
  }
  return (
    <YStack p="$4" pb="$8" h="90%" bg="$primary.1" jc="space-between">
      <View gap="$8" ai="center">
        <YStack w="100%">
          <Text type="h3">Fill in details</Text>
          <Text type="body2">Please enter your details to sign in</Text>
        </YStack>
        <View borderRadius={99} w="$9" h="$9" borderColor="$dark.3" borderWidth="$0.5" jc="center" ai="center">
          <Icon name="Camera" width={28} height={28} />
        </View>
        <Input label="Name of space" />
        <Input label="Name of space" multiline numberOfLines={6} textAlignVertical="top" />
      </View>
      <Button w="100%" size="$5">Create</Button>
    </YStack>
  )
}

const Successful = () => {
  return (
    <YStack p="$4" pb="$8" h="90%" bg="$primary.1" jc="space-between">
      <YStack pt="$5">
        <YStack>
          <Text type="h2" color="$primary" textAlign="center">Space Created!</Text>
          <Text type="body2" textAlign="center" px="$6">You can now share your unique code with intended members</Text>
        </YStack>
        <YStack gap="$4">
          <Input label="Your space code" value={"121212"} />
          <Button type="outline" size="$5">Copy space code</Button>
        </YStack>
      </YStack>
      <Button size="$5">Proceed to Space</Button>
    </YStack>
  )
}

export default Create