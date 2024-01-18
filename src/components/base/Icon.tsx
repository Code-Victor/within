import * as icons from "@/assets/icons";
import { SvgProps } from "react-native-svg";

export type IconName = keyof typeof icons;

export interface IconProps extends SvgProps {
  name: IconName;
}

export default function Icon({ name, ...rest }: IconProps) {
  const Icon = icons[name];
  return <Icon {...rest} />;
}
