import { Button, Input } from "@/components/base"
import { StackHeader } from "@/components/inc"
import { View, YStack } from "tamagui"

const Create = () => {
  return (
    <YStack f={1}>
      <StackHeader name="Create Payment" backButton={true} />
      <View f={1} bg="$primary.1" p="$4" jc="space-between" py="$8">
        <YStack gap="$6">
          <Input label="Name of payment" />
          <Input label="Description" multiline numberOfLines={6} />
          <Input label="Amount" />
        </YStack>
        <Button size="$5">Create</Button>
      </View>
    </YStack>
  )
}

export default Create