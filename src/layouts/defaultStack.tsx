import React from "react";
import { Stack } from "expo-router";

const DefaultStack = () => {
  return (
    <Stack
      // initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default DefaultStack;
