import React from "react";
import { Stack } from "expo-router";

const DefaultStack = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default DefaultStack;
