import { Button, Text } from "@/components/base"
import { StackHeader } from "@/components/inc"
import { Link } from "expo-router"
import { FlatList } from "react-native"
import { YStack } from "tamagui"

const Payment = () => {

  const payments = [
    {
      name: "Pay manual"
    },
    {
      name: "Pay material"
    },
  ]
  
  return (
    <YStack>
      <StackHeader name="Payments" backButton={true} />
      <FlatList
      data={payments}
      renderItem={({item}) => <Payment />}
      />
    </YStack>
  )
}

export default Payment