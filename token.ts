import { radius, size, zIndex } from "@tamagui/themes";
import { createTokens } from "tamagui";

export const color = {
  "primary.1": "#e5ddf7",
  "primary.2": "#c2cffe",
  "primary.3": "#a4b8fe",
  "primary.4": "#86a0fd",
  "primary.5": "#6788fd",
  "primary.6": "#4970fc",
  primary: "#4970fc",
  "green.1": "#d3eadd",
  "green.2": "#b5dcc6",
  "green.3": "#90cba9",
  "green.4": "#6bb98c",
  "green.5": "#46a870",
  "green.6": "#219653",
  green: "#219653",
  "dark.1": "#cfd1d4",
  "dark.2": "#afb2b7",
  "dark.3": "#888c94",
  "dark.4": "#606570",
  "dark.5": "#383e4c",
  "dark.6": "#101828",
  dark: "#101828",
};

// 👇use for later upgrades
export const spaceValues = {
  $0: 0,
  "$0.5": 2,
  $1: 4,
  "$1.5": 6,
  $2: 8,
  "$2.5": 10,
  $3: 12,
  "$3.5": 14,
  $4: 16,
  "$4.5": 18,
  $true: 16,
  $5: 20,
  $6: 24,
  $7: 28,
  $8: 32,
  $9: 36,
  $10: 40,
};
type SpaceValueKeys = keyof typeof spaceValues;
type SpaceValues = typeof spaceValues;
const spaces = Object.entries(spaceValues).map(([k, v]) => {
  return [k, v] as const;
});

const spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);

type SizeKeysWithNegatives =
  | Exclude<
      `-${SpaceValueKeys extends `$${infer Key}` ? Key : SpaceValueKeys}`,
      "-0"
    >
  | SpaceValueKeys;

export const space: {
  [Key in SizeKeysWithNegatives]: Key extends keyof SpaceValues
    ? SpaceValues[Key]
    : number;
} = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative),
} as any;

export default createTokens({
  color,
  radius,
  zIndex,
  size,
  space,
});
