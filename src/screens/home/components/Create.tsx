import { spaceRouter } from "@/api/hooks";
import { Button, ControlledInput, Icon, Input, Text } from "@/components/base";
import { dataTagSymbol, useQueryClient } from "@tanstack/react-query";
import { Image } from "expo-image";
import { Link, useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { View, XStack, YStack } from "tamagui";
import { z } from "zod";
import { ToastAndroid } from "react-native";
import * as Clipboard from "expo-clipboard";

type CreateType = {
  closeModal: () => void;
  spaceId: string;
  spaceCode: string;
  name: string;
};

const createSpaceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});
type CreateSpaceSchema = z.infer<typeof createSpaceSchema>;

const Create = (props: CreateType) => {
  const { control, handleSubmit } = useForm<CreateSpaceSchema>();
  const { mutateAsync, isSuccess, isPending, data } =
    spaceRouter.create.useMutation();
  const queryClient = useQueryClient();
  const onSubmit = (data: CreateSpaceSchema) => {
    mutateAsync({
      ...data,
      profileImage:
        "https://images.unsplash.com/photo-1523147801542-3f09578ab2bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfE8zd0JjNTl6emY4fHxlbnwwfHx8fHw%3D",
    }).then(() => {
      queryClient.invalidateQueries(spaceRouter.getAllSpaces.getOptions());
    });
  };
  if (isSuccess) {
    return <Successful {...data} closeModal={props.closeModal} />;
  }
  return (
    <YStack p="$4" pb="$8" h="90%" bg="$primary.1" jc="space-between">
      <View gap="$8" ai="center">
        <YStack w="100%">
          <Text type="h3">Fill in details</Text>
          <Text type="body2">Please enter your details to sign in</Text>
        </YStack>
        {/* <View borderRadius={99} w="$9" h="$9" borderColor="$dark.3" borderWidth="$0.5" jc="center" ai="center">
          <Icon name="Camera" width={28} height={28} />
        </View> */}
        <ControlledInput control={control} name="name" label="Name of space" />
        <ControlledInput
          name="description"
          control={control}
          label="Description of space"
          multiline
          numberOfLines={6}
          textAlignVertical="top"
        />
      </View>
      <Button
        loading={isPending}
        w="100%"
        size="$5"
        onPress={handleSubmit(onSubmit)}
      >
        Create
      </Button>
    </YStack>
  );
};

const Successful = (props: CreateType) => {
  const router = useRouter();

  const goToSpace = () => {
    router.push({
      pathname: "/(app)/spaces/[id]/",
      params: {
        id: props.spaceId,
        name: props.name,
      },
    });
    props.closeModal();
  };

  return (
    <YStack p="$4" pb="$8" h="90%" bg="$primary.1" jc="space-between">
      <YStack pt="$5">
        <YStack>
          <Text type="h2" color="$primary" textAlign="center">
            Space Created!
          </Text>
          <Text type="body2" textAlign="center" px="$6">
            You can now share your unique code with intended members
          </Text>
        </YStack>
        <Image
          source={require("@/assets/images/complete.png")}
          style={{
            width: "100%",
            aspectRatio: 1.35,
            marginTop: 20,
            marginBottom: 20,
          }}
        />
        <YStack
          gap="$2"
          bg="white"
          borderColor="$dark.2"
          borderWidth={1}
          p="$4"
          borderRadius="$4"
        >
          <Text type="body1">Here's your space code</Text>
          <XStack
            py="$3"
            px="$2"
            jc="space-between"
            ai="center"
            borderWidth={1}
            borderColor="$dark.3"
            br={10}
          >
            <Text>{props.spaceCode}</Text>
            <Button
              size="$3"
              icon={<Icon name="Copy" height={24} width={24} />}
              type="ghost"
              onPress={async () => {
                await Clipboard.setStringAsync(props.spaceCode);
                ToastAndroid.show(
                  "Space Code copied to clipboard",
                  ToastAndroid.SHORT
                );
              }}
            />
          </XStack>
        </YStack>
      </YStack>
      <Button size="$5" onPress={() => goToSpace()}>
        Proceed to Space
      </Button>
    </YStack>
  );
};

export default Create;
