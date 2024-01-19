import EyeLineIcon from "@/assets/icons/eye-line.svg";
import EyeOffLineIcon from "@/assets/icons/eye-off-line.svg";
import SolidSortDown from "@/assets/icons/solid-sort-down.svg";
import { Image } from "expo-image";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SizeTokens, Input as TMInput, View, XStack, getTokens } from "tamagui";
import { Button, Text } from ".";
import { Control, Path, PathValue, useController } from "react-hook-form";

interface InputProps extends React.ComponentProps<typeof TMInput> {
  icon?: React.ReactNode;
  label?: string;
  error?: string;
}
const Input = ({ icon, label, error, ...props }: InputProps) => {
  const [focused, setFocused] = React.useState(false);

  const hasError = !!error;
  return (
    <View ai="flex-start" width="100%">
      <XStack
        fd="row"
        bg={"transparent"}
        br="$4"
        px="$5"
        py={"$4"}
        borderWidth={1}
        borderColor={hasError ? "#FF5555" : focused ? "$primary" : "$dark"}
      >
        {icon ? icon : null}
        <TMInput
          unstyled
          placeholderTextColor={"#FFFFFF80"}
          color="white"
          fontFamily="$body"
          flex={1}
          h="$2"
          px={0}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          borderColor="transparent"
          bg="transparent"
          {...props}
        />
      </XStack>
      {hasError && (
        <Text
          fontSize="$2"
          fontWeight="500"
          textTransform="capitalize"
          color="#FF5555"
        >
          {error}
        </Text>
      )}
    </View>
  );
};

interface ControlledInputProps<T extends object> extends InputProps {
  name: Path<T>;
  defaultValue?: PathValue<T, Path<T>>;
  control: Control<T, any>;
}

export const ControlledInput = <T extends object>({
  name,
  defaultValue,
  control,
  ...props
}: ControlledInputProps<T>) => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
  });
  const error = fieldState.error?.message;
  return (
    <Input
      value={field.value}
      onChangeText={field.onChange as (text: string) => void}
      error={error}
      {...props}
    />
  );
};

export const PasswordInput = ({ icon, label, error, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  const hasError = !!error;
  const size: SizeTokens = "$3";
  return (
    <View ai="flex-start" width="100%">
      <View
        borderWidth={2}
        borderColor={hasError ? "#FF5555" : "$primary"}
        bg={hasError ? "#FFAAAA" : focused ? "$primary.3" : "$primary.4"}
        br="$10"
        px="$2.5"
        py="$1"
        mb="$-2"
        ml="$4"
        zIndex={4}
      >
        <Text
          fontSize={10}
          color={hasError ? "#FF0000" : "white"}
          fontWeight="600"
        >
          {label}
        </Text>
      </View>
      <XStack
        fd="row"
        bg={focused ? "$primary.4" : "$primary.5"}
        br="$4"
        px="$4"
        py="$2.5"
        borderWidth={hasError ? 1 : 0}
        borderColor={"#FF5555"}
      >
        {icon ? icon : null}
        <TMInput
          unstyled
          placeholder="********"
          placeholderTextColor={"#FFFFFF80"}
          color="white"
          flex={1}
          fontFamily="$body"
          h={size}
          px={0}
          secureTextEntry={!showPassword}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          borderColor="transparent"
          bg="transparent"
          {...props}
        />
        <Button
          icon={
            showPassword ? (
              <EyeOffLineIcon width={24} height={24} />
            ) : (
              <EyeLineIcon width={24} height={24} />
            )
          }
          circular
          br="$4"
          size={size}
          bg="transparent"
          onPress={() => setShowPassword(!showPassword)}
          pressStyle={{
            bg: "#ffffff15",
          }}
        />
      </XStack>
      {hasError && (
        <Text fontSize="$2" fontWeight="500" color="#FF5555">
          {error}
        </Text>
      )}
    </View>
  );
};

export const ControlledPasswordInput = <T extends object>({
  name,
  defaultValue,
  control,
  ...props
}: ControlledInputProps<T>) => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
  });
  const error = fieldState.error?.message;
  return (
    <PasswordInput
      value={field.value}
      onChangeText={field.onChange as (text: string) => void}
      error={error}
      {...props}
    />
  );
};
export default Input;
