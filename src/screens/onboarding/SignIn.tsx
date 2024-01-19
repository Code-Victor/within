import {
  Text,
  Button,
  Icon,
  ControlledPasswordInput,
  ControlledInput,
} from "@/components/base";
import { StackHeader } from "@/components/inc";
import { View, YStack, XStack, ScrollView } from "tamagui";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authRouter } from "@/api/hooks";
import { setAccessToken } from "@/utils";
import { router } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";

const signinSchema = z.object({
  email: z.string(),
  password: z.string(),
});
type SigninForm = z.infer<typeof signinSchema>;

const SignIn = () => {
  const { mutateAsync, isPending } = authRouter.login.useMutation();
  const { control, handleSubmit } = useForm<SigninForm>({
    resolver: zodResolver(signinSchema),
  });
  const queryClient = useQueryClient();
  function onSubmit(data: SigninForm) {
    mutateAsync(data).then((res) => {
      console.log(JSON.stringify(res, null, 2));
      queryClient.setQueryData(authRouter.user.getKey(), res.authResponse.user);
      setAccessToken(res.authResponse.token);
      router.push("/(app)/");
    });
  }
  return (
    <YStack f={1} bg="white">
      <StackHeader name="" backButton backUrl="/(onboarding)/signup" />
      <ScrollView f={1}>
        <YStack px="$4" gap="$6">
          <Icon name="Logo" />
          <YStack gap="$3">
            <Text type="h2">Welcome!</Text>
            <Text>Please enter your details to sign in</Text>
          </YStack>
          <YStack gap="$6">
            <ControlledInput
              control={control}
              name="email"
              label="Email"
              keyboardType="email-address"
              placeholder="john@doe.com"
            />
            <ControlledPasswordInput
              control={control}
              name="password"
              label="Password"
            />
          </YStack>
        </YStack>
      </ScrollView>
      <XStack py="$6" px="$4">
        <Button full loading={isPending} onPress={handleSubmit(onSubmit)}>
          Login
        </Button>
      </XStack>
    </YStack>
  );
};

export default SignIn;
