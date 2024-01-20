import { authRouter, spaceRouter } from "@/api/hooks";
import { Button, ControlledInput, Input, Text } from "@/components/base";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { View, YStack } from "tamagui";
import { z } from "zod";
import { Image } from "expo-image";

const joinSchema = z.object({
  code: z
    .string()
    .min(1, "Space code is required")
    .max(6, "Space code is maximum of 6 characters"),
});
type JoinSchema = z.infer<typeof joinSchema>;

const Join = ({ closeModal }: { closeModal: () => void }) => {
  const { mutate, isSuccess, isPending } = spaceRouter.join.useMutation();
  const { control, handleSubmit } = useForm<JoinSchema>({
    resolver: zodResolver(joinSchema),
  });
  function onSubmit(data: JoinSchema) {
    mutate({ spaceCodeInput: data.code });
  }
  if (isSuccess) {
    return (
      <YStack p="$4" gap="$4" h="90%" bg="white" jc="center">
        <Image
          alt="success modal"
          source={require("@/assets/images/complete.png")}
          style={{
            width: "100%",
            aspectRatio: 1.35,
            marginTop: 20,
            marginBottom: 20,
          }}
        />
        <Text type="h4" ta="center">
          Successful
        </Text>
        <Button onPress={closeModal}>continue</Button>
      </YStack>
    );
  }
  return (
    <YStack p="$4" h="90%" bg="white" jc="center">
      <View
        borderColor="$dark.3"
        borderWidth={0.5}
        p="$6"
        borderRadius="$4"
        gap="$2"
        mb={100}
      >
        <ControlledInput
          control={control}
          name="code"
          label="Join with code"
          placeholder="Type code here"
          maxLength={6}
        />
        <Button
          size="$5"
          loading={isPending}
          onPress={handleSubmit(onSubmit)}
          mt="$4"
        >
          Proceed
        </Button>
      </View>
    </YStack>
  );
};

export default Join;
