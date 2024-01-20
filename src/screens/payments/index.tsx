import { Button, Icon, Text } from "@/components/base"
import { StackHeader } from "@/components/inc"
import PaymentCard from "@/components/inc/PaymentCard"
import { Link } from "expo-router"
import { useState } from "react"
import { FlatList } from "react-native"
import { ScrollView, View, XStack, YStack } from "tamagui"
import Payments from "./components/Payments"
import Wallet from "./components/Wallet"

const Payment = () => {

  const admin = false;
  const [tab, setTab] = useState<"wallet" | "payments">(admin ? "wallet" : "payments")

  return (
    <YStack f={1} bg="$primary.1">
      <StackHeader name="Payments" backButton={true} />
      { admin && <XStack gap="$2" p="$4">
        <Button onPress={() => setTab("wallet")} type="filled" color={tab === "wallet" ? "white" : "$dark.7"} bg={tab === "wallet" ? "$dark" : "transparent"}>Wallet</Button>
        <Button onPress={() => setTab("payments")} type="filled" color={tab === "payments" ? "white" : "$dark.7"} bg={tab === "payments" ? "$dark" : "transparent"}>Payments</Button>
      </XStack> }
      { tab === "payments" ? <Payments /> : <Wallet />}
    </YStack>
  )
}

export default Payment