import { Button, Icon, Input, Text } from "@/components/base"
import { Image } from "expo-image"
import { Link, useNavigation, useRouter } from "expo-router"
import { useState } from "react"
import { View, YStack } from "tamagui"

type CreateType = {
  closeModal: any
}

const Create = (props:CreateType) => {
  const [success, setSuccessful] = useState(false)

  if (success) {
    return <Successful closeModal={props.closeModal} />
  }
  return (
    <YStack p="$4" pb="$8" h="90%" bg="$primary.1" jc="space-between">
      <View gap="$8" ai="center">
        <YStack w="100%">
          <Text type="h3">Fill in details</Text>
          <Text type="body2">Please enter your details to sign in</Text>
        </YStack>
        <View borderRadius={99} w="$9" h="$9" borderColor="$dark.3" borderWidth="$0.5" jc="center" ai="center">
          <Icon name="Camera" width={28} height={28} />
        </View>
        <Input label="Name of space" />
        <Input label="Name of space" multiline numberOfLines={6} textAlignVertical="top" />
      </View>
      <Button w="100%" size="$5" onPress={() => setSuccessful(true)}>Create</Button>
    </YStack>
  )
}

const Successful = (props:CreateType) => {

  const router = useRouter()

  const goToSpace = () => {
    router.push("/spaces/1234567")
    props.closeModal()
  }

  return (
    <YStack p="$4" pb="$8" h="90%" bg="$primary.1" jc="space-between">
      <YStack pt="$5">
        <YStack>
          <Text type="h2" color="$primary" textAlign="center">Space Created!</Text>
          <Text type="body2" textAlign="center" px="$6">You can now share your unique code with intended members</Text>
        </YStack>
        <Image source={require("../../../assets/images/complete.png")} style={{width: "100%", aspectRatio: 1.35, marginTop: 20, marginBottom: 20}} />
        <YStack gap="$2" bg="white" borderColor="$dark.2" borderWidth={1} p="$4" borderRadius="$4">
          <Text type="body1">Here's your space code</Text>
          <Input value={"121212"} />
          <Button type="outline" size="$5" mt="$2">Copy space code</Button>
        </YStack>
      </YStack>
      <Button size="$5" onPress={() => goToSpace()}>Proceed to Space</Button>
    </YStack>
  )
}

export default Create