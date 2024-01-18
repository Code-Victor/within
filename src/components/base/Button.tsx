import { ComponentProps, ElementRef, forwardRef } from "react";
import { Button as TMButton, Spinner, styled } from "tamagui";
const BaseButton = styled(TMButton, {
  fontFamily: "$body",
  fontSize: "$3",
  fontWeight: "$5",
  variants: {
    type: {
      primary: {
        bg: "$primary",
        borderColor: "transparent",
        color: "white",
        opacity: 1,
        pressStyle: {
          opacity: 0.8,
        },
      },
      outline: {
        bg: "transparent",
        borderColor: "$primary",
        color: "$primary",
        opacity: 1,
        pressStyle: {
          bg: "#708FFF11",
        },
      },
      filled: {
        borderColor: "transparent",
        color: "white",
        opacity: 1,
        pressStyle: {
          opacity: 0.8,
        },
      },
      ghost: {
        bg: "transparent",
        borderColor: "transparent",
        color: "white",
        opacity: 1,
        pressStyle: {
          bg: "#00000020",
        },
      },
      "dark-ghost": {
        bg: "transparent",
        borderColor: "transparent",
        color: "white",
        opacity: 1,
        pressStyle: {
          bg: "#00000011",
        },
      },
    },
    full: {
      true: {
        width: "100%",
      },
    },

    rounded: {
      sm: {
        br: "$3",
      },
      md: {
        br: "$4",
      },
      lg: {
        br: "$8",
      },
      pill: { br: "$12" },
    },
    disabled: {
      true: {
        opacity: 0.8,
      },
    },
  } as const,
  defaultVariants: {
    type: "primary",
    rounded: "lg",
  },
});

type ButtonProps = Omit<ComponentProps<typeof BaseButton>, "loading">;

export const Button = forwardRef<
  ElementRef<typeof BaseButton>,
  ButtonProps & { loading?: boolean }
>(function Button({ loading, icon, ...props }, ref) {
  return (
    <BaseButton
      {...props}
      ref={ref}
      icon={
        loading ? (
          <Spinner
            color={props.type === "filled" ? "white" : "$primary"}
            size="small"
          />
        ) : (
          icon
        )
      }
      {...(loading ? { disabled: true } : {})}
    />
  );
});
