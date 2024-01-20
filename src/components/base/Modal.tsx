import React from "react";
import {
  Adapt,
  Dialog,
  DialogContentProps,
  DialogProps,
  DialogTriggerProps,
  Sheet,
  Unspaced,
} from "tamagui";
import { Button } from "./Button";
import { Icon } from "./Icon";

import { BackHandler } from "react-native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export function Modal({ children, ...dialogProps }: DialogProps) {
  React.useEffect(() => {
    if (!dialogProps.open) return;
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        dialogProps.onOpenChange?.(false);
        return true;
      }
    );
    return () => backHandler.remove();
  }, [dialogProps.open]);
  return (
    <Dialog modal {...dialogProps}>
      {children}
    </Dialog>
  );
}
function Trigger(props: DialogTriggerProps) {
  return <Dialog.Trigger {...props} />;
}
function Content({
  overlay,
  children,
  ...contentProps
}: DialogContentProps & { overlay?: boolean }) {
  return (
    <Dialog.Portal>
      {overlay && (
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          bg={"#00000050"}
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
      )}
      <Dialog.Content
        unstyled
        key="content"
        animateOnly={["transform", "opacity"]}
        zIndex={200000}
        animation={[
          "quick",
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
        enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
        exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
        {...contentProps}
      >
        <SafeAreaView>
          <StatusBar style="dark" />
          {children}
        </SafeAreaView>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Title = Dialog.Title;
Modal.Description = Dialog.Description;
Modal.CancelButton = () => {
  return (
    <Unspaced>
      <Dialog.Close asChild>
        <Button
          position="absolute"
          top="$3"
          zIndex={10000}
          left={"$3"}
          size="$4"
          bg="$primary.3"
          circular
          icon={<Icon name="Close" width={24} height={24} />}
        />
      </Dialog.Close>
    </Unspaced>
  );
};
