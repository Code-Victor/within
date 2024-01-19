import { Text } from '@/components/base'
import { YStack } from 'tamagui'

const Wallet = () => {
  return (
    <YStack px="$4">
      <YStack p="$4" bg="white" gap="$4" borderRadius="$4">
        <Text type="h3">Wallet</Text>
        <YStack gap="$1">
          <Text type="body2">Available Balance</Text>
          <Text type="h4">$1200</Text>
        </YStack>
      </YStack>
    </YStack>
  )
}

export default Wallet