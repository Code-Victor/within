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
import { Button, Icon } from ".";

export function Modal({ children, ...dialogProps }: DialogProps) {
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
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Title = Dialog.Title;
Modal.Description = Dialog.Description;
Modal.CancelButton = () => {
  <Unspaced>
    <Dialog.Close asChild>
      <Button
        position="absolute"
        top="$3"
        right="$3"
        size="$2"
        circular
        bg="$neutral.gray3"
        icon={<Icon name="Close" width={24} height={24} />}
      />
    </Dialog.Close>
  </Unspaced>;
};
