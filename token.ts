import { radius, size, zIndex } from "@tamagui/themes";
import { createTokens } from "tamagui";

export const color = {
  "primary.1": "#F7F8FC",
  "primary.2": "#ECEFF9",
  "primary.3": "#E4E8F6",
  "primary.4": "#708FFF",
  primary: "#708FFF",
  "dark.1": "#F7F9FA",
  "dark.2": "#F2F4F5",
  "dark.3": "#E3E5E5",
  "dark.4": "#CDCFD0",
  "dark.5": "#979C9E",
  "dark.6": "#72777A",
  "dark.7": "#4A4D4F",
  "dark.8": "#303437",
  "dark.9": "#181A1B",
  "dark.10": "#090A0A",
  dark: "#090A0A",
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
