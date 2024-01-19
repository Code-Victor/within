import {
  Text,
  Button,
  PageHeader,
  Icon,
  Input,
  PasswordInput,
} from "@/components/base";
import { View, YStack, XStack, ScrollView } from "tamagui";
import React from "react";

const SignIn = () => {
  return (
    <YStack f={1} bg="white">
      <PageHeader name="" backButton />
      <ScrollView f={1}>
        <YStack px="$4" gap="$6">
          <Icon name="Logo" />
          <YStack gap="$3">
            <Text type="h2">Welcome!</Text>
            <Text>Please enter your details to sign in</Text>
          </YStack>
          <YStack gap="$6">
            <Input label="Name" placeholder="Full Name" />
            <PasswordInput label="Password" />
          </YStack>
        </YStack>
      </ScrollView>
      <XStack py="$6" px="$4">
        <Button full>Next</Button>
      </XStack>
    </YStack>
  );
};

export default SignIn;
