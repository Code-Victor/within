import { paymentRouter } from "@/api/hooks";
import { Button, ControlledInput, Text } from "@/components/base";
import { StackHeader } from "@/components/inc";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, useLocalSearchParams } from "expo-router";
import { useForm } from "react-hook-form";
import { View, YStack } from "tamagui";
import { z } from "zod";
import { Image } from "expo-image";
const createPaymentSchema = z.object({
  name: z.string(),
  description: z.string(),
  amount: z.string(),
});
type CreatePaymentSchema = z.infer<typeof createPaymentSchema>;
const Create = () => {
  const { id, paymentId } = useLocalSearchParams<{
    id: string;
    paymentId: string;
  }>();
  const { handleSubmit, control } = useForm<CreatePaymentSchema>({
    resolver: zodResolver(createPaymentSchema),
  });
  const { mutate, isPending, isSuccess } = paymentRouter.create.useMutation();
  const onSubmit = (data: CreatePaymentSchema) => {
    console.log({ data });
    mutate({
      spaceId: id,
      ...data,
      amount: Number(data.amount),
    });
  };
  if (isSuccess) {
    return (
      <YStack f={1} ai="center" jc="center" gap="$3">
        <Image
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
        <Button
          onPress={() => {
            router.back();
          }}
        >
          continue
        </Button>
      </YStack>
    );
  }
  return (
    <YStack f={1}>
      <StackHeader name="Create Payment" backButton={true} />
      <View f={1} bg="$primary.1" p="$4" jc="space-between" py="$8">
        <YStack gap="$6">
          <ControlledInput
            control={control}
            name="name"
            label="Name of payment"
          />
          <ControlledInput
            control={control}
            name="description"
            label="Description"
            multiline
            numberOfLines={6}
          />
          <ControlledInput
            control={control}
            name="amount"
            keyboardType="number-pad"
            label="Amount"
          />
        </YStack>
        <Button size="$5" loading={isPending} onPress={handleSubmit(onSubmit)}>
          Create
        </Button>
      </View>
    </YStack>
  );
};

export default Create;
