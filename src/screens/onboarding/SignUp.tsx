import {
  Text,
  Button,
  Icon,
  Input,
  PasswordInput,
  ControlledInput,
  ControlledPasswordInput,
} from "@/components/base";
import { StackHeader } from "@/components/inc";
import { View, YStack, XStack, ScrollView } from "tamagui";
import React from "react";
import { authRouter } from "@/api/hooks";
import { z } from "zod";
import { passwordSchema, setAccessToken } from "@/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";

const signupSchema = z.object({
  fullName: z.string().min(1, { message: "Name is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  password: passwordSchema,
  matricNo: z.string().optional(),
  department: z.string().optional(),
  level: z.string().optional(),
});
type SignUpForm = z.infer<typeof signupSchema>;
const SignUp = () => {
  const { mutateAsync, isPending } = authRouter.signup.useMutation();
  const { control, handleSubmit } = useForm<SignUpForm>({
    resolver: zodResolver(signupSchema),
  });
  const queryClient = useQueryClient();
  function onSubmit(data: SignUpForm) {
    mutateAsync(data).then((res) => {
      queryClient.setQueryData(authRouter.user.getKey(), res.user);
      setAccessToken(res.token);
      router.push("/(onboarding)/signin");
    });
  }
  return (
    <YStack f={1} bg="white">
      <StackHeader name="" backButton backUrl="/(onboarding)/signin" />
      <ScrollView f={1}>
        <YStack px="$4" gap="$6">
          <Icon name="Logo" />
          <YStack gap="$3">
            <Text type="h2">Register</Text>
            <Text>Please enter your details to sign up</Text>
          </YStack>
          <YStack gap="$6">
            <ControlledInput
              control={control}
              name="fullName"
              label="Name"
              placeholder="Full Name"
            />
            <ControlledInput
              control={control}
              name="email"
              label="Email"
              keyboardType="email-address"
              placeholder="Email Address"
            />
            <ControlledPasswordInput
              control={control}
              name="password"
              label="Password"
            />
            <ControlledInput
              control={control}
              name="matricNo"
              label="Matric/Reg no"
              placeholder="MEE/2000/0000"
            />
            <ControlledInput
              control={control}
              name="department"
              label="Department"
              placeholder="Mech Engine"
            />
            <ControlledInput
              control={control}
              name="level"
              label="Level"
              placeholder="200"
            />
          </YStack>
        </YStack>
        <XStack py="$6" px="$4">
          <Button loading={isPending} onPress={handleSubmit(onSubmit)} full>
            Next
          </Button>
        </XStack>
      </ScrollView>
    </YStack>
  );
};

export default SignUp;
