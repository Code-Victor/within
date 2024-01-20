import { authRouter } from "@/api/hooks"
import { Button, Input, Text } from "@/components/base"
import { StackHeader } from "@/components/inc"
import { Spinner, YStack } from "tamagui"

const Confirm = () => {

  const { data:user } = authRouter.user.useQuery()

  if (user) {
    return (
      <YStack f={1}>
        <StackHeader name="Withdraw" backButton={true} />
        <YStack f={1} p="$4" bg="$primary.1" gap="$5">
          <Text type="h4">Confirm Identity</Text>
          <Text type="body2">
            An OTP has been sent to you at {user.email}. Please input below to confirm your identity
          </Text>
          <Input label="OTP" />
          <Input label="Amount to Withdraw" />
          <Button size="$5" mt="$4">Confirm</Button>
        </YStack>
      </YStack>
    )
  } else {
    return <Spinner />
  }
}

export default Confirm