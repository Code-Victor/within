import { createAnimations } from "@tamagui/animations-react-native";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { createFont, createTamagui } from "tamagui";

import tokens from "./token";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});
const fontSizes = {
  1: 12,
  2: 14,
  3: 16,
  true: 16,
  4: 18,
  5: 20,
  6: 24,
  "6.5": 26,
  7: 30,
  "7.5": 32,
  8: 36,
  "8.5": 40,
  9: 48,
  10: 64,
  11: 80,
  12: 96,
};
const chillaxFont = createFont({
  family: "inter",
  size: fontSizes,
  // Simulating lineHeight: 1.6 or 160% in chillax font
  lineHeight: Object.fromEntries(
    Object.entries(fontSizes).map(([k, v]) => [k, +v * 1.6])
  ) as typeof fontSizes,
  weight: {
    1: "300",
    2: "400",
    3: "500",
    4: "600",
    5: "700",
  },

  letterSpacing: {
    4: 0,
    8: -1,
  },
  // for native only, alternate family based on weight/style
  face: {
    400: { normal: "inter" },
    500: { normal: "interMedium" },
    600: { normal: "interSemibold" },
    700: { normal: "interBold" },
  },
});

const config = createTamagui({
  animations,
  defaultTheme: "light",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: chillaxFont,
    body: chillaxFont,
  },
  themes: {
    light: {},
    dark: {},
  },
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
});

export type AppConfig = typeof config;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
