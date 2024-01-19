import { View, XStack, YStack } from "tamagui"
import { Text } from "../base"
import { useRouter } from "expo-router"

export type PaymentCardType = {
  name: string
}

const PaymentCard = (props:PaymentCardType) => {

  const router = useRouter()

  const {
    name
  } = props

  return (
    <XStack jc="space-between" bg="white" p="$4" borderRadius="$4" onPress={() => router.push("/spaces/1212/payments/1234")}>
      <XStack gap="$2">
        <View w="$5" h="$5" bg="$dark.2" borderRadius="$4"></View>
        <YStack>
          <Text type="body1" fontWeight="$4">{name}</Text>
          <Text type="body2">2d ago</Text>
        </YStack>
      </XStack>
      <YStack ai="flex-end">
        <Text type="body1">$1200</Text>
        <Text type="body2" color="green">Paid</Text>
      </YStack>
    </XStack>
  )
}

export default PaymentCard