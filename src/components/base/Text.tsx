import { styled, Text as TMText } from "tamagui";

export const Text = styled(TMText, {
  color: "$dark",
  fontSize: "$3",
  fontFamily: "$body",
  variants: {
    type: {
      h1: {
        fontSize: "$7.5",
        fontWeight: "700",
      },
      h2: {
        fontSize: "$6",
        fontWeight: "700",
      },
      h3: {
        fontSize: "$5",
        fontWeight: "700",
      },
      h4: {
        fontSize: "$4",
        fontWeight: "700",
      },
      body1: {
        fontWeight: "500",
        fontSize: "$3",
      },
      body2: {
        fontWeight: "400",
        fontSize: "$2",
      },
      button1: {
        fontWeight: "500",
        fontSize: "$3",
      },
      button2: {
        fontWeight: "500",
        fontSize: "$2",
      },
      caption: {
        fontWeight: "400",
        fontSize: "$1",
      },
    },
  } as const,
});

/**
 * USAGE:
 *
 * () => {
 *  return <Text typetypography="">Hello World</Text>;
 * };
 *
 */
