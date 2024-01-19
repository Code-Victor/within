import { Button, Icon, Text } from '@/components/base'
import { XStack, YStack } from 'tamagui'

const Wallet = () => {
  return (
    <YStack px="$4">
      <YStack p="$4" bg="white" gap="$3" borderRadius="$4">
        <Text type="h3">Wallet</Text>
        <XStack ai="center" jc="space-between">
          <YStack>
            <Text type="body2">Available Balance</Text>
            <Text type="h4">$1200</Text>
          </YStack>
          <Button size="$5" circular>
            <Icon name="Withdraw" />
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}

export default Wallet