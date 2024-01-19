import { Text, Button, Icon, Input, PasswordInput } from "@/components/base";
import { StackHeader } from "@/components/inc";
import { View, YStack, XStack, ScrollView } from "tamagui";
import React from "react";

const SignIn = () => {
  return (
    <YStack f={1} bg="white">
      <StackHeader name="" backButton />
      <ScrollView f={1}>
        <YStack px="$4" gap="$6">
          <Icon name="Logo" />
          <YStack gap="$3">
            <Text type="h2">Register</Text>
            <Text>Please enter your details to sign up</Text>
          </YStack>
          <YStack gap="$6">
            <Input label="Name" placeholder="Full Name" />
            <PasswordInput label="Password" />
            <Input label="Matric/Reg no" placeholder="MEE/2000/0000" />
            <Input label="Department" placeholder="Mech Engine" />
            <Input label="Level" placeholder="200" />
          </YStack>
        </YStack>
        <XStack py="$6" px="$4">
          <Button full>Next</Button>
        </XStack>
      </ScrollView>
    </YStack>
  );
};

export default SignIn;
