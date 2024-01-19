import { Button, Text } from "@/components/base"
import { View, YStack } from "tamagui"
import PaymentCard from "@/components/inc/PaymentCard"
import { StackHeader } from "@/components/inc"

const Details = () => {
  return (
    <View>
      <StackHeader name="Make Payments" backButton={true} />
      <YStack p="$4" gap="$6">
        <PaymentCard name="Manual Money" />
        <Button size="$5">Pay now</Button>
      </YStack>
    </View>
  )
}

export default Details