import React from 'react'
import { View, YStack } from 'tamagui'
import { Text } from '../base';


export type SpaceType = {
  name: string;
  imageUrl: string;
  createdBy: string;
}

const Space = (props:SpaceType) => {

  const { 
    name,
    imageUrl,
    createdBy
   } = props;

  return (
    <View width="$15" height="$15" f={1} jc="flex-start" borderRadius="$4" bg="$dark.2" overflow="hidden">
      <YStack position="absolute" bottom="$0" f={1} bg="$primary" w="100%" p="$2">
        <Text type="h4" color="white">{name}</Text>
        <Text type="body2" color="whitesmoke" whiteSpace="nowrap">By {createdBy}</Text>
      </YStack>
    </View>
  )
}

export default Space