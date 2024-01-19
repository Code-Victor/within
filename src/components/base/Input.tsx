import { Image } from "expo-image";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SizeTokens, Input as TMInput, View, XStack, getTokens } from "tamagui";
import { Button, Icon, Text } from ".";
import { Control, Path, PathValue, useController } from "react-hook-form";

interface InputProps extends React.ComponentProps<typeof TMInput> {
  icon?: React.ReactNode;
  label?: string;
  error?: string;
}
export const Input = ({ icon, label, error, ...props }: InputProps) => {
  const [focused, setFocused] = React.useState(false);

  const hasError = !!error;
  return (
    <View ai="flex-start" width="100%">
      <Text
        fontSize="$2"
        lineHeight="$2"
        color={hasError ? "#FF5555" : focused ? "$primary" : "$dark.7"}
        fontWeight="500"
        mb={5}
      >
        {label}
      </Text>
      <XStack
        fd="row"
        bg={"transparent"}
        br="$4"
        borderWidth={1}
        borderColor={hasError ? "#FF5555" : focused ? "$primary" : "$dark.2"}
      >
        {icon ? icon : null}
        <TMInput
          unstyled
          placeholderTextColor={"#FFFFFF80"}
          color="white"
          fontFamily="$body"
          flex={1}
          lineHeight={21}
          p="$3"
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
      <Text
        fontSize="$2"
        lineHeight="$2"
        color={hasError ? "#FF5555" : focused ? "$primary" : "$dark.7"}
        fontWeight="500"
        mb={5}
      >
        {label}
      </Text>
      <XStack
        fd="row"
        bg={"transparent"}
        br="$4"
        ai="center"
        borderWidth={1}
        borderColor={hasError ? "#FF5555" : focused ? "$primary" : "$dark.2"}
      >
        {icon ? icon : null}
        <TMInput
          unstyled
          placeholder="********"
          placeholderTextColor={"#FFFFFF80"}
          color="$dark"
          flex={1}
          fontFamily="$body"
          lineHeight={21}
          p="$3"
          secureTextEntry={!showPassword}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          borderColor="transparent"
          bg="transparent"
          {...props}
        />
        <Button
          h={"100%"}
          icon={
            showPassword ? (
              <Icon color="#CDCFD0" name="EyeSlash" width={24} height={24} />
            ) : (
              <Icon color="#CDCFD0" name="Eye" width={24} height={24} />
            )
          }
          circular
          br="$4"
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
