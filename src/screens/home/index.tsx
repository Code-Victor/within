import { Button, Text } from '@/components/base'
import React from 'react'
import { View, YStack,XStack } from 'tamagui'

const Home = () => {
  return (
    <YStack gap="$2" p="$4">
      <XStack ai="center" gap="$1" >
        <Text type='h4'>Welcome,</Text>
        <Text type='body1'>Oluserti</Text>
      </XStack>
      <XStack f={1} jc="space-between" gap="$2">
        <Button type="outline" f={1}>Join a Space</Button>
        <Button type="primary" f={1}>Create a Space</Button>
      </XStack>
    </YStack>
  )
}

export default Home