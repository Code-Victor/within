import { Input } from "@/components/base"
import { StackHeader } from "@/components/inc"
import { View, YStack } from "tamagui"
import { SelectBank } from "./components/SelectBank"

const Withdraw = () => {

  const banks = ["Ke", "ag"]

  return (
    <View>
      <StackHeader name="Withdraw" backButton={true} />
      <YStack p="$4" gap="$6">
        <Input label="Account Number" />
        <SelectBank label="Bank Name" data={banks} />
      </YStack>
    </View>
  )
}

export default Withdraw