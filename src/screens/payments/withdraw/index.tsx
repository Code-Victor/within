import { Button, Input, Text } from "@/components/base"
import { StackHeader } from "@/components/inc"
import { View, YStack } from "tamagui"
import { SelectBank } from "./components/SelectBank"
import { Link } from "expo-router"

const Withdraw = () => {

  return (
    <View>
      <StackHeader name="Withdraw" backButton={true} />
      <YStack p="$4" gap="$4">
        <Input label="Account Number" />
        <SelectBank label="Bank Name" />
        <View>
          <Text type="body2">Account Name:</Text>
          <Text type="h4" color="$primary">Apkantaku Dunsimi</Text>
        </View>
        <Link href="/spaces/123/withdraw/confirm" asChild>
          <Button size="$5" mt="$3">Continue</Button>
        </Link>
      </YStack>
    </View>
  )
}

export default Withdraw